import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Divider, Typography, Card } from "@mui/material";

export default function DetailedView() {
  const router = useRouter();

  const [pageItem, setItem] = useState();

  useEffect(() => {
    (async () => {
      if (!router.isReady) return;
      let dishData = await fetch("/api/getDishes");
      dishData = await dishData.json();
      setItem(dishData[router.query.dish]);
    })();
  }, [router.isReady, router.query]);

  if (!pageItem) return;

  const wasCooked = (() => {
    if (pageItem.cooked === "true") {
      return "cooked.";
    } else {
      return "not cooked.";
    }
  })();

  return (
    <Box
      className="App"
      sx={{
        gap: "2rem",
        background: "linear-gradient(#8ecae6, white)",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
      }}
    >
      <Card
        elevation="7"
        sx={{
          justifySelf: "center",
          alignSelf: "start",
          padding: "2rem",
          mt: "2rem",
          borderRadius: "0",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "400px",
            width: "400px",
            objectFit: "cover",
          }}
          alt={pageItem.name}
          src={`https://fmdb-images.s3.us-west-1.amazonaws.com/${pageItem.id}/${pageItem.id}a.jpg`}
        ></Box>
        <Box
          sx={{
            height: "3.5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "2.5rem",
            }}
          >
            {pageItem.name}
          </Typography>
        </Box>
      </Card>
      <Box
        sx={{
          textAlign: "left",
          mt: "2rem",
        }}
      >
        <Typography variant="h2" sx={{ pt: "1rem" }}>
          {pageItem.name}
        </Typography>
        <Typography variant="subtitle1">{pageItem.date}</Typography>
        <br />
        <Typography variant="body1">
          Location: {pageItem.location} ({pageItem.city})
        </Typography>
        <Typography variant="body1">Mealtime: {pageItem.meal}</Typography>
        <Typography variant="body1">Type of Dish: {pageItem.type}</Typography>
        <Typography variant="body1">This dish was {wasCooked}</Typography>
      </Box>
    </Box>
  );
}

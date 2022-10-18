import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Divider, Typography, Card } from "@mui/material";

export default function DetailedView() {
  const router = useRouter();

  const [pageItem, setItem] = useState();

  useEffect(() => {
    if (router.query.name) {
      setItem(router.query);
    } else {
      (async () => {
        if (!router.isReady) return;
        let dishData = await fetch("/api/getDishes");
        dishData = await dishData.json();
        console.log(dishData);
        const fetchId = router.query.id - 1;
        setItem(dishData[fetchId]);
      })();
    }
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
        background: "linear-gradient(#8ecae6, white)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        p: "4rem",
        gap: "2rem",
      }}
    >
      <Card
        className="polaroid"
        elevation="7"
        sx={{
          justifySelf: "center",
          alignSelf: "start",
          width: "200px + 20vw",
          padding: "1.5rem",
          borderRadius: "0",
          flex: "0 0 auto",
          mt: "2rem",
        }}
      >
        <Box
          component="img"
          sx={{
            aspectRatio: "1/1",
            width: "calc(200px + 20vw - 1.5rem)",
            objectFit: "cover",
          }}
          alt={pageItem.name}
          src={`https://fmdb-images.s3.us-west-1.amazonaws.com/${pageItem.id}/${pageItem.id}a.jpg`}
        ></Box>
        <Box
          sx={{
            height: "6rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px + 20vw",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "2.25rem",
            }}
          >
            {pageItem.name}
          </Typography>
        </Box>
      </Card>

      <Card
        className="memory-details"
        sx={{
          textAlign: "left",
          p: "2rem",
          alignSelf: "flex-start",
          flex: "1 1 50vw",
          mt: "2rem",
        }}
      >
        <Typography variant="h2">{pageItem.name}</Typography>
        <Typography variant="subtitle1">{pageItem.date}</Typography>
        <br />
        <Typography variant="body1">
          Location: {pageItem.location} ({pageItem.city})
        </Typography>
        <Typography variant="body1">Mealtime: {pageItem.meal}</Typography>
        <Typography variant="body1">Type of Dish: {pageItem.type}</Typography>
        <Typography variant="body1">This dish was {wasCooked}</Typography>
        <br />
        <Typography variant="body1">Description:</Typography>
        <Typography variant="body1">{pageItem.desc}</Typography>
      </Card>
    </Box>
  );
}

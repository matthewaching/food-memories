import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

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
      }}
    >
      <Typography variant="h2" sx={{ pt: "1rem" }}>
        {pageItem.name}
      </Typography>
      <Box
        component="img"
        sx={{
          height: "300px",
          width: "300px",
        }}
        alt={pageItem.name}
        src={`https://fmdb-images.s3.us-west-1.amazonaws.com/${pageItem.id}/${pageItem.id}a.jpg`}
      ></Box>
      <Typography variant="subtitle1">
        Experienced on: {pageItem.date}
      </Typography>
      <Divider sx={{ alignSelf: "stretch" }} />
      <Typography variant="body1">Location: {pageItem.location}</Typography>
      <Typography variant="body1">City: {pageItem.city}</Typography>
      <Typography variant="body1">Mealtime: {pageItem.meal}</Typography>
      <Typography variant="body1">Type of Dish: {pageItem.type}</Typography>
      <Typography variant="body1">This dish was {wasCooked}</Typography>
    </Box>
  );
}
``;

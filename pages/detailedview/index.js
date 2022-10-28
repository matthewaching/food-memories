import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Card,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { parseISO, format } from "date-fns";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.3rem",
  },
};

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

  const convertedDate = format(parseISO(pageItem.date), "MMMM do, yyyy");

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "start",
          width: "calc(200px + 20vw)",
          padding: "1.5rem",
          borderRadius: "0",
          flex: "0 0 auto",
          mt: "2rem",
          gap: "1rem",
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
            width: "calc(200px + 20vw)",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Permanent Marker', cursive",
              }}
            >
              {pageItem.name}
            </Typography>
          </ThemeProvider>
        </Box>
      </Card>

      <Card
        className="memory-details"
        sx={{
          textAlign: "left",
          p: "2rem",
          alignSelf: "flex-start",
          flex: "1 1 45vw",
          mt: "2rem",
        }}
      >
        <Typography variant="h2">{pageItem.name}</Typography>
        <Typography variant="subtitle1">{convertedDate}</Typography>
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

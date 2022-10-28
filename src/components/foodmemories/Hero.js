import { Box, Typography } from "@mui/material";
import DialogButton from "./DialogButton";

export default function Hero({ currentItem, setCurrentItem, currentDb }) {
  return (
    <Box
      className="hero-box"
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        pt: "6rem",
        mb: "3rem",
      }}
    >
      <Box
        className="background-box"
        sx={{
          transform: "skewY(-8deg)",
          position: "absolute",
          background: "linear-gradient(-90deg, #8ecae6 40%, white 95%)",
          height: "100%",
          width: "100%",
          zIndex: "-1",
          mt: "-5rem",
          pb: "14rem",
        }}
      ></Box>
      <Box
        className="hero-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "50vw",
        }}
      >
        <Box
          className="hero-main"
          sx={{
            display: "flex",
            alignSelf: "stretch",
            zIndex: "1",
          }}
        >
          <Box
            className="text-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "50vw",
              textAlign: "left",
              mr: "auto",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
                fontFamily: "'Playfair Display', sans-serif",
              }}
            >
              Matt&apos;s
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
                fontFamily: "'Playfair Display', sans-serif",
              }}
            >
              Food
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
                fontFamily: "'Playfair Display', sans-serif",
              }}
            >
              Memories
            </Typography>
          </Box>
          <DialogButton
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            currentDb={currentDb}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          A record of tasty or otherwise memorable dishes I have experienced in
          my culinary journey.
        </Typography>
      </Box>
    </Box>
  );
}

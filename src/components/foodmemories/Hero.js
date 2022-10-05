import { Box, Typography } from "@mui/material";
import DialogButton from "./DialogButton";

export default function Hero({ currentItem, setCurrentItem, currentDb }) {
  return (
    <Box
      className="hero-box"
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        background: "linear-gradient(-90deg, #8ecae6 40%, white 95%)",
        pt: "8rem",
        transform: "skewY(-4deg)",
        pb: "9rem",
        zIndex: "-1",
        mt: "-2rem",
      }}
    >
      <Box
        className="hero-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "50vw",
          transform: "skewY(4deg)",
        }}
      >
        <Box
          className="hero-main"
          sx={{
            display: "flex",
            alignSelf: "stretch",
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
              }}
            >
              Matt&apos;s
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
              }}
            >
              Food
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
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
          }}
        >
          A digital record of tasty or otherwise memorable dishes I have
          experienced in my culinary journey.
        </Typography>
      </Box>
    </Box>
  );
}

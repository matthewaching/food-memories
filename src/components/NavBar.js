import Link from "next/link";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { GitHub, VpnKey } from "@mui/icons-material";

function NavBar() {
  return (
    <AppBar
      className="appbar"
      position="fixed"
      sx={{
        backgroundColor: "white",
        height: "4rem",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        justifyContent: "center",
      }}
    >
      <Toolbar
        className="toolbar"
        sx={{
          alignItems: "center",
        }}
      >
        <Box
          className="links"
          sx={{
            display: "flex",
            gap: "2.5rem",
          }}
        >
          <a
            href="https://recipe-generator-matthewaching.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="recipe-link"
          >
            <Button
              variant="text"
              sx={{
                color: "#023047",
                fontWeight: "bold",
              }}
            >
              Random Recipe Generator App
            </Button>
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: "auto",
          }}
        >
          <Button href="https://github.com/matthewaching/food-memories">
            <GitHub htmlColor="#023047" sx={{ fontSize: "54px" }} />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: "-1rem",
          }}
        >
          <Button href="/login">
            <VpnKey
              htmlColor="#023047"
              sx={{ fontSize: "59px", alignSelf: "center", mt: "0px" }}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

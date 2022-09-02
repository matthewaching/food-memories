import PropTypes from "prop-types";
import { Button, Typography, Box } from "@mui/material";
import { Restaurant } from "@mui/icons-material";
import React, { useState } from "react";
import ItemDialog from "./ItemDialog";

export default function InputFields({ currentItem, setCurrentItem }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
        sx={{
          alignSelf: "center",
          fontWeight: "strong",
          borderRadius: "100%",
          aspectRatio: "1/1",
          display: "flex",
          flexDirection: "column",
          height: "20vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Restaurant />
          <Typography>Add</Typography>
        </Box>
        <Typography>Memory</Typography>
      </Button>
      <ItemDialog
        open={open}
        setOpen={setOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        buttonFunction="post"
      />
    </React.Fragment>
  );
}

InputFields.propTypes = {
  currentItem: PropTypes.object,
  setCurrentItem: PropTypes.func,
};

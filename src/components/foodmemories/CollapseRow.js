import {
  Collapse,
  Box,
  Typography,
  TableRow,
  TableCell,
  Button,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import DialogPopup from "./DialogPopup";
import { Edit, ExpandMore, ExpandLess } from "@mui/icons-material";

export default function CollapseRow({ item, currentItem, setCurrentItem }) {
  const { id, name, date, location, city, type, meal, cooked } = item;
  const [rowOpen, setRowOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [savedId, setSavedId] = useState();

  function EditItem() {
    setSavedId(currentItem.id);
    setCurrentItem({
      ...item,
    });
    setDialogOpen(true);
  }

  const handleOpen = () => {
    setRowOpen((rowOpen) => !rowOpen);
  };

  function ToggleOpen() {
    if (rowOpen)
      return (
        <IconButton onClick={() => setRowOpen((rowOpen) => !rowOpen)}>
          <ExpandLess />
        </IconButton>
      );
    return (
      <IconButton onClick={() => setRowOpen((rowOpen) => !rowOpen)}>
        <ExpandMore />
      </IconButton>
    );
  }

  function GenerateDescription() {
    if (type)
      return (
        <Typography variant="body2">
          This dish was a {meal.toLowerCase()} {type.toLowerCase()}.
        </Typography>
      );
    return (
      <Typography variant="body2">
        No additional information to present.
      </Typography>
    );
  }
  return (
    <>
      <TableRow className="itemTable" key={id}>
        <TableCell>
          <Link
            href={{
              pathname: "/detailedview",
              query: { dish: `${id - 1}` },
            }}
          >
            <a>{name}</a>
          </Link>
        </TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {location} ({city})
            <Button
              onClick={EditItem}
              sx={{
                minWidth: "32px",
                ml: "auto",
              }}
            >
              <Edit fontSize="small" />
            </Button>
            <ToggleOpen />
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ pt: 0, pb: 0 }} colSpan={4}>
          <Collapse in={rowOpen}>
            <Box sx={{ pt: "1rem", pb: "1rem" }}>
              <GenerateDescription />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <DialogPopup
        open={dialogOpen}
        setOpen={setDialogOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        item={item}
        buttonFunction="edit"
        savedId={savedId}
      />
    </>
  );
}

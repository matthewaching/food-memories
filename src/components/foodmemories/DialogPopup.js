import { Dialog, Button, Typography, Box } from "@mui/material";
import { postDish, editDish } from "./dbDish";
import { Restaurant } from "@mui/icons-material";
import DialogField from "./DialogField";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DialogPopup({
  open,
  setOpen,
  currentItem,
  setCurrentItem,
  buttonFunction,
  savedId,
}) {
  const { data: session } = useSession();

  function handleClose() {
    if (savedId) {
      setCurrentItem({
        dishid: savedId,
      });
    }
    setOpen(false);
  }

  if (!session) {
    return (
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            Please <Link href="/login">login</Link> to add a memory.
          </Typography>
        </Box>
      </Dialog>
    );
  }

  const searchInput = (e) => {
    setCurrentItem({
      ...currentItem,
      [e.target.id]: e.target.value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (buttonFunction === "post") postDish(currentItem);
    if (buttonFunction === "edit") editDish(currentItem);
    setCurrentItem({
      dishid: currentItem.dishid + 1,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form className="searchbar" onSubmit={addItem}>
        <input type="hidden" value="placeholder" />
        <div className="input-container">
          <DialogField
            currentItem={currentItem}
            searchInput={searchInput}
            field="name"
            label="Name:"
          />
          <DialogField
            currentItem={currentItem}
            searchInput={searchInput}
            field="date"
            label="Date:"
          />
          <DialogField
            currentItem={currentItem}
            searchInput={searchInput}
            field="location"
            label="Location:"
          />
          <DialogField
            currentItem={currentItem}
            searchInput={searchInput}
            field="city"
            label="City:"
          />
          <DialogField
            currentItem={currentItem}
            searchInput={searchInput}
            field="type"
            label="Type of Dish:"
          />
          <DialogField
            currentItem={currentItem}
            searchInput={searchInput}
            field="meal"
            label="Mealtime:"
          />
          <DialogField
            currentItem={currentItem}
            searchInput={searchInput}
            field="cooked"
            label="Cooked?"
          />
        </div>
        <Button
          variant="contained"
          startIcon={<Restaurant />}
          type="submit"
          sx={{
            alignSelf: "center",
            fontWeight: "strong",
            borderRadius: "20px",
          }}
        >
          Save Memory
        </Button>
      </form>
    </Dialog>
  );
}

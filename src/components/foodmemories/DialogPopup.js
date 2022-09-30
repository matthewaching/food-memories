import { Dialog, Button, Typography, Box } from "@mui/material";
import { Restaurant } from "@mui/icons-material";
import DialogField from "./DialogField";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { TriggerContext } from "../../../pages";

export default function DialogPopup({
  open,
  setOpen,
  currentItem,
  setCurrentItem,
  buttonFunction,
  savedId,
}) {
  const { data: session } = useSession();

  const { renderTrigger, setTrigger } = useContext(TriggerContext);

  function handleClose() {
    if (savedId) {
      setCurrentItem({
        id: savedId,
        cooked: false,
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
            Please <Button onClick={signIn}>login</Button> to add a memory.
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

  const checkboxInput = (e) => {
    const checkboxValue = e.target.value === "true" ? true : false;
    console.log(checkboxValue);
    setCurrentItem({
      ...currentItem,
      cooked: checkboxValue,
    });
  };

  const addItem = async (e) => {
    e.preventDefault();
    let res;

    if (buttonFunction === "post") {
      res = await fetch("/api/postDish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentItem),
      });
    }

    if (buttonFunction === "put") {
      res = await fetch("/api/putDish", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentItem),
      });
    }

    const data = await res.json();
    console.log(data);

    setCurrentItem({
      id: currentItem.id + 1,
    });

    setOpen(false);

    setTrigger((renderTrigger) => !renderTrigger);
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
          <div className="dialog-field">
            This dish was:
            <label htmlFor="cooked-true">cooked</label>
            <input
              type="radio"
              name="cooked"
              id="cooked-true"
              onChange={checkboxInput}
              value="true"
            ></input>
            <label htmlFor="cooked-false">not cooked</label>
            <input
              type="radio"
              name="cooked"
              id="cooked-false"
              onChange={checkboxInput}
              value="false"
            ></input>
          </div>
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

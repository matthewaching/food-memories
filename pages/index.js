import MemoryTable from "../src/components/foodmemories/MemoryTable";
import Hero from "../src/components/foodmemories/Hero";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../src/firebase-config";
import { Box } from "@mui/material";

export default function FoodMemories() {
  const [currentDb, setDb] = useState();

  const [currentItem, setCurrentItem] = useState({});

  // useEffect(() => {
  //   return onValue(ref(db), (querySnapShot) => {
  //     let data = querySnapShot.val() || {};
  //     setDb(data);
  //   });
  // }, []);

  useEffect(() => {
    (async () => {
      let dishData = await fetch("/api/getDishes");
      dishData = await dishData.json();
      console.log(dishData);
      setDb(dishData);
      const maxData = await fetch("/api/getMaxId");
      const maxId = 12;
      console.log(maxId);
      setCurrentItem({
        id: maxId,
      });
    })();
  }, []);

  return (
    <Box
      className="food-mem"
      sx={{
        height: "100%",
        backgroundColor: "#8ecae6",
      }}
    >
      <Hero
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
      />
      <MemoryTable
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
      />
    </Box>
  );
}

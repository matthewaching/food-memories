import MemoryTable from "../src/components/foodmemories/MemoryTable";
import Hero from "../src/components/foodmemories/Hero";
import { useState, useEffect, createContext } from "react";
import { Box } from "@mui/material";

export const TriggerContext = createContext(null);

export default function FoodMemories() {
  const [currentDb, setDb] = useState();

  const [currentItem, setCurrentItem] = useState({});

  const [renderTrigger, setTrigger] = useState(true);

  useEffect(() => {
    (async () => {
      let dishData = await fetch("/api/getDishes");
      dishData = await dishData.json();
      setDb(dishData);
      let maxData = await fetch("/api/getMaxId");
      maxData = await maxData.json();
      const maxId = maxData[0].max + 1;
      setCurrentItem({
        id: maxId,
      });
    })();
  }, [renderTrigger]);

  return (
    <TriggerContext.Provider
      value={{
        renderTrigger,
        setTrigger,
      }}
    >
      <Box
        className="food-mem"
        sx={{
          height: "100%",
          background: "linear-gradient(#8ecae6, white)",
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
    </TriggerContext.Provider>
  );
}

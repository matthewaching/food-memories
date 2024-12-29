'use client';

import MemoryTable from '../components/foodmemories/MemoryTable';
import Hero from '../components/foodmemories/Hero';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export default function FoodMemories() {
    const [currentDb, setDb] = useState();

    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        (async () => {
            let dishData = await fetch('/api/getDishes');
            dishData = await dishData.json();
            setDb(dishData);
            let maxData = await fetch('/api/getMaxId');
            maxData = await maxData.json();
            const maxId = maxData[0].max + 1;
            setCurrentItem({
                id: maxId
            });
        })();
    }, []);

    return (
        <Box
            className="food-mem"
            sx={{
                height: '100%'
            }}>
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

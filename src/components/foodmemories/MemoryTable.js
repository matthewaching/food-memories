import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Pagination,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Card,
  Typography,
  CircularProgress,
} from "@mui/material";

import CollapseRow from "./CollapseRow";
import { ResetTvRounded } from "@mui/icons-material";

export default function MemoryTable({
  currentItem,
  setCurrentItem,
  currentDb,
}) {
  if (!currentDb)
    return (
      <Box
        sx={{
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          pt: "3rem",

          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50vw",
            p: "24px",
            gap: "8px",
            mb: "4rem",
          }}
        >
          <CircularProgress />
          <Typography>Retrieving Memories...</Typography>
        </Card>
      </Box>
    );

  const [currentPage, setPage] = useState(1);

  const pageObjects = currentDb.slice((currentPage - 1) * 5, currentPage * 5);

  const changePage = (e, pageNum) => {
    setPage(pageNum);
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        pt: "3rem",

        display: "flex",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50vw",
          p: "24px",
          gap: "8px",
          mb: "4rem",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name of Dish:</TableCell>
              <TableCell>Date:</TableCell>
              <TableCell>Location:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageObjects.map((item) => {
              return (
                <CollapseRow
                  item={item}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                  key={item.id}
                />
              );
            })}
          </TableBody>
        </Table>
        <Pagination
          count={10}
          variant="outlined"
          page={currentPage}
          onChange={changePage}
        />
      </Card>
    </Box>
  );
}

MemoryTable.propTypes = {
  currentDb: PropTypes.object,
  idArray: PropTypes.array,
};

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const rows = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Producto ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  stock: Math.floor(Math.random() * 100),
}));

export default function ScrollableTable() {
  return (
    <TableContainer
      component={Paper}
      style={{
        maxHeight: 400, // Altura máxima de la tabla
        overflowY: "auto", // Scroll vertical
      }}
    >
      <Table stickyHeader> {/* Hacer que el encabezado sea fijo */}
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

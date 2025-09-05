// Función para formatear montos
const FormatoMoneda = (value, currency) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency,
    minimumFractionDigits: 2, // siempre muestra 2 decimales
  }).format(value);

export { FormatoMoneda };
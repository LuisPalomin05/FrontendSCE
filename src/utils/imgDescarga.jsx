import { toPng } from "html-to-image";


export const downloadToimg = async (area) => {
  const node = document.getElementById(area);
  if (node) {
    try {
      const dataUrl = await toPng(node);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "captura.png";
      link.click();
    } catch (error) {
      console.error("Error al capturar la imagen:", error);
    }
  }
};


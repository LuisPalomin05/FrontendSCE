import html2canvas from "html2canvas";
import ReactDOM from "react-dom";
import CotizadorCrear from "../components/COTIZADOR/cc";

const ImgDescarga = ({ datos }) => {
  const handleDescargar = async () => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = "-9999px"; // Oculto
    document.body.appendChild(container);

    ReactDOM.render(<CotizadorCrear {...datos} />, container);

    // Espera un poco para que el render se complete
    await new Promise((res) => setTimeout(res, 500));

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true
    });

    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "cotizacion.png";
    link.href = imgData;
    link.click();

    document.body.removeChild(container);
  };

  return (
    <button onClick={handleDescargar}>
      Descargar Cotización
    </button>
  );
};

export default ImgDescarga;

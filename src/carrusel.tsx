import { useState } from "react";
import "./carrusel.css";

interface CarruselProps {
  imagenes: string[];
}

export default function Carrusel({ imagenes }: CarruselProps) {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) =>
      prev === imagenes.length - 1 ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setIndice((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  return (
    <div className="carrusel">
      <button
        className="flecha izquierda"
        onClick={anterior}
      >
        ❮
      </button>

      <div
        className="slides"
        style={{
          transform: `translateX(-${indice * 100}%)`,
        }}
      >
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`slide-${index}`}
          />
        ))}
      </div>

      <button
        className="flecha derecha"
        onClick={siguiente}
      >
        ❯
      </button>

      <div className="indicadores">
        {imagenes.map((_, index) => (
          <span
            key={index}
            className={
              indice === index
                ? "indicador activo"
                : "indicador"
            }
            onClick={() => setIndice(index)}
          />
        ))}
      </div>
    </div>
  );
}
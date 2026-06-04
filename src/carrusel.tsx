import './carrusel.css'
import img3 from '../public/img3.webp'
import img4 from '../public/img4.webp'
import img5 from '../public/img5.webp'



export default function Carrusel() {

  const imagenes = [
        img3,
        img4,
        img5
    ]
    
  return (
    <div>
      {imagenes.map((imagen, index) => (
        <img
          key={index}
          src={imagen}
        />
      ))}
    </div>
  );
}
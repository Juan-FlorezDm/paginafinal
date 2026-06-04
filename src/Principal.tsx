import './principal.css'
import img1 from '../public/img1.jpg'
import img2 from '../public/img1.webp'
import Carrusel from './carrusel'



export default function Principal(){

    
    return (
    <div className="principal">
            <div 
                className="uno"
                style={{backgroundImage: `url(${img1})`}}
                >
                <form method="post">
                    <h1>Tu empresa</h1>
                    <h1>con nosotros</h1>
                    <p>¿Quieres hacer negocios con la agencia más creativa y efectiva del país? <b>Contáctanos ahora</b> <a href="marcelo.giraldo@ddbcol.com.co">marcelo.giraldo@ddbcol.com.co</a></p>
                    <div className='inputs'>
                        <span className='content-input'>
                            <input type="text" placeholder='Nombres'/>
                        </span>
                        
                        <span className='content-input'>
                            <input type="text" placeholder='Correo'/>
                        </span>

                        <span className='content-input'>
                            <input type="text" placeholder='Asunto'/>
                        </span>    

                        <div className='footer-form'>
                            <input type="checkbox" id='check' /><label htmlFor="check"></label> 
                            <h3>He leído y acepto los términos y condiciones y la política de privacidad</h3>
                            <button>Enviar</button>
                        </div>                
                    </div>
                </form>
            </div>

            <div 
                className="dos"
                style={{backgroundImage: `url(${img2})`}}
                >
                <div className='Datos'>
                    <h1>Postulate en linkedin</h1>
                    <p>¡Únete a DDB y haz parte de la creatividad que transforma marcas! Buscamos talento apasionado e innovador para seguir creando ideas que marcan la diferencia. Explora nuestras vacantes y postúlate. ¡Tu próxima gran oportunidad comienza ahora! 🚀✨</p>
                    <button>Conoce más</button>
                </div>
            </div>

            <div 
                className="tres">
                    tress
            </div>
    </div>
    )
}
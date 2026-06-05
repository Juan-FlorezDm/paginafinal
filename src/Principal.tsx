import './principal.css'
import img1 from '../public/img1.jpg'
import img2 from '../public/img1.webp'

import img3 from '../public/img3.webp'
import img4 from '../public/img4.webp'
import img5 from '../public/img5.webp'
import Carrusel from './carrusel.tsx';
import React, { useState, useRef} from 'react'
import {supabase} from './Datos/cliente.ts'
import emailjs from '@emailjs/browser'


type Contacto = {
  Nombre: string
  correo: string
  asunto: string
  numero: string
}

const TEMPLAT_ID = import.meta.env.VITE_TEMPLAT_ID as string
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string
const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY as string

export default function Principal(){
  
    const [form, setForm] = useState<Contacto>({
        Nombre: "",
        correo: "",
        asunto: "",
        numero: ""
    })

    const enviar = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from("Datos")
      .insert([form])

    if (error) {
      console.log("Error:", error)
    } else {
      console.log("datos guardados", data)
    }

    setForm({
      Nombre: "",
      correo: "",
      asunto: "",
      numero: ""
    })
  }


  
    const form_email = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();


    if(form_email.current){
      emailjs
          .sendForm(SERVICE_ID, TEMPLAT_ID, form_email.current , {
            publicKey: YOUR_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('datos robados');
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
    }
    };

    return (
    <div className="principal">
            <div 
                className="uno"
                style={{backgroundImage: `url(${img1})`}}
                >
                <form method="post" onSubmit={(e)=>{enviar(e); sendEmail(e)}} ref={form_email}>
                    <h1>Tu empresa</h1>
                    <h1>con nosotros</h1>
                    <p>¿Quieres hacer negocios con la agencia más creativa y efectiva del país? <b>Contáctanos ahora</b> <a href="marcelo.giraldo@ddbcol.com.co">marcelo.giraldo@ddbcol.com.co</a></p>
                    <div className='inputs'>
                        <span className='content-input'>
                            <input 
                                type="text" 
                                placeholder='Nombres' 
                                name='user_name'
                                value={form.Nombre}
                                onChange={(e) => setForm({ ...form, Nombre: e.target.value })}
                                />
                        </span>
                        
                        <span className='content-input'>
                            <input 
                                type="text" 
                                placeholder='Correo'
                                name='user_email' 
                                value={form.correo}
                                onChange={(e) => setForm({ ...form, correo: e.target.value })}/>
                        </span>

                        

                        <span className='content-input'>
                            <input 
                                type="text" 
                                placeholder='Empresa' 
                                value={form.asunto}
                                onChange={(e) => setForm({ ...form, asunto: e.target.value })}/>
                        </span>    

                        <span className='content-input'>
                            <input 
                                type="text" 
                                placeholder='Numero' 
                                value={form.numero}
                                onChange={(e) => setForm({ ...form, numero: e.target.value })}/>
                        </span>  
                        <div className='footer-form'>
                            <input type="checkbox" id='check' /><label htmlFor="check"></label> 
                            <h3>He leído y acepto los términos y condiciones y la política de privacidad</h3>
                            <button type='submit'>Enviar</button>
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

            <div className="tres">
  <div className="carrusel-wrapper">
    <Carrusel
      imagenes={[
        img3,
        img4,
        img5
      ]}
    />

    <div className="overlay-texto">
      <div className="texto-contenido">

        <h1 className="titulo-rrss">
          Conoce nuestras RRSS
        </h1>

        <p>
          Descubre todo lo que compartimos en Instagram y LinkedIn.
          <br />
          <span className="texto-destacado">
            Contágiate de nuestro Power To Move!
          </span>
        </p>

        <button >
          Síguenos
        </button>

      </div>
    </div>
  </div>
</div>
    </div>
    )
}

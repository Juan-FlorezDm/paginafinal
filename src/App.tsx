import './App.css'
import Loader from './Loader'
import Principal from './Principal'
function App() {
  return (

    
    <>
      <div className='container-logo'>
        <img 
          src="https://ddbcol.com.co/wp-content/themes/ddb/img/logo.svg" 
          alt="logo" 
          className='logo'/>
      </div> 

      <div className='container-loader' >
         <Loader />
      </div>

      <div className='container-app'>
          <Principal />
      </div>


      <div className='container-footer'>
        <div className='footer'>
          <a 
            href='https://ddbcol.com.co/javascript'
            target='_blank'
            >Politica de tratamiento de datos</a>
          <a href='https://ddbcol.com.co/wp-content/themes/ddb/pdf/programa_de_transparencia_y_etica_empresarial.pdf' target='_blank'>Política de transparencia y ética empresarial</a>
          <a href='https://ddbcol.com.co/wp-content/themes/ddb/pdf/politica_del_sistema_integrado_de_gestion.pdf' target='_blank'>Política de calidad</a>
          <a href='https://ddbcol.com.co/wp-content/themes/ddb/pdf/habeas_data_ddb.pdf' target='_blank'>Línea de ética</a>
          <a href='mailto:ocsagrilaft@ddbcol.com.co' target='_blank'>PQRS</a>
        </div>
      </div>
      
    </>
  )
}

export default App

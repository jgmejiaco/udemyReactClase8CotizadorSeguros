import React, {useState} from 'react';
import Header from './components/Header/header';
// import styled, { css } from 'styled-components';
import styled from 'styled-components';
import Formulario from './components/Formulario/formulario';
import Resumen from './components/Resumen/resumen';
import Resultado from './components/Resultado/resultado';
import Spinner from './components/Spinner/spinner';


const Contenedor = styled.section `
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] =  useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //  Carga del Spinner
  const [cargando, guardarCargando] = useState(false);

  // Extraer datos (desestructuración)
  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner/> : null}
        

        {/* {datos ? (<Resumen />) : null} Es una forma de llamar los datos cuando NO sean Null */}
        <Resumen datos={datos} />

        { !cargando
        ? <Resultado cotizacion={cotizacion} />
        : null }

        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

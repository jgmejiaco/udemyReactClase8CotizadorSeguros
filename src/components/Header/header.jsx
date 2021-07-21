import React from 'react';
// import styled from '@emotion/styled';
// import styled from '@emotion/react';
// import style, {Global, css } from '@emotion/react';
// import styled, { css } from 'styled-components'
import styled from 'styled-components'
import PropTypes from 'prop-types';

//Librería "emotion", permite mezclar código CSS con JavaScript
const ContenedorHeader = styled.header `
    background-color: #80eaf8;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1 `
    font-size: 2rem;
    margin: 0; 
    font-family: 'Slabo 27px';
    text-align: center;
`;


const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired,
}
export default Header;
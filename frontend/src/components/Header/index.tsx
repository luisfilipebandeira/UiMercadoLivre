import React from "react";

import Logo from '../../assets/logo.png'

import {
  Container,
  Wrapper,
  InputContent,
  IconMoney,
  SearchIcon,
  CreditoContent } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <img src={Logo} alt="Mercado Livre Logo"/>

          <InputContent>
            <input type="text" placeholder="Busca de produtos, marcas e muito mais..."/>
            <button><SearchIcon /></button>
          </InputContent>
          <CreditoContent>
            <IconMoney />
            <p>Mercado Crédito: ative agora!</p>
          </CreditoContent>
        </Wrapper>
      </Container>
    </>
  )
};

export default Header;

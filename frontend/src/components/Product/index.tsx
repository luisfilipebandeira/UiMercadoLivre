import React from 'react';

import tshirtImage from '../../assets/tshirt.png'
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'

import { Container,
         Row,
         Panel,
         Column,
         Gallery,
         Section,
         Description } from './styles';

const Product: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <a href="#">Compartilhar</a>
          <a href="#">Vender um igual</a>
        </Row>

        <Panel>
          <Column>
            <Gallery>
              <img src={tshirtImage} alt="T-shirt"/>
            </Gallery>

            <Info />
          </Column>

          <Column>
            <ProductAction />
            <SellerInfo />

            <WarrantySection />
            <WarrantySection />
            <WarrantySection />
          </Column>
        </Panel>
      </Container>
    </>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com Mercado Pago</p>
        <p className="description">Receba o produto ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.

    <br/>
    <br/>
    Itens Inclusos: <br/>
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    <br />

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.

    </p>
  </Description>
)

export default Product;

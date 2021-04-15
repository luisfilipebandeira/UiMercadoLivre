import styled from "styled-components";
import { HiCurrencyDollar, HiOutlineSearch } from 'react-icons/hi'

export const Container = styled.div`
  height: 88px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);
`;

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: row;

  > img{
    display: flex;
    width: 190px;
    height: 90px;
  }
`
export const InputContent = styled.div`
  margin: auto 0;
  background: var(--color-white);
  box-shadow: var(--panel-shadow);
  margin-left: 30px;
  display: flex;
  align-items: center;

  >input {
    font-size: 20px;
    height: 60px;
    width: 620px;
    margin-left: 5px;
    border-radius: 2px;
    outline: none;
    border-right: 1px solid var(--color-border);

  }

  >button{
    padding: 20px;
    outline: none;
    cursor: pointer;
  }
`

export const SearchIcon = styled(HiOutlineSearch)`
  width: 28px;
  height: 28px;
`

export const IconMoney = styled(HiCurrencyDollar)`
  height: 70px;
  width: 70px;
`

export const CreditoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`



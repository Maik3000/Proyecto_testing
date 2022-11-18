import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#6C63FF')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#6C63FF' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  background: red;
  align-items: stretch;
`;

const selectedColor = "rgb(30,190,230)";
const defaultColor = "transparent";

export const TabItem = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 4px solid ${(props) => (
    props.selected ? selectedColor : defaultColor
  )};
`;

export default GlobalStyle;

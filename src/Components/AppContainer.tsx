import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 75vw 25vw;
  min-height: 100vh;
  align-items: flex-start;
  justify-content: center;
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem 0.5rem;
`;
const FavCityContainer = styled.div`
  width: 100%;
`;
const AppStyles = { MainContainer, AppContainer, FavCityContainer };
export default AppStyles;

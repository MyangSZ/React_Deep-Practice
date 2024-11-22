import { contents } from "./assets/data/contents";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import styled, { createGlobalStyle } from "styled-components";
import { flexMixin, gap_padding_radius } from "./styled/styled";


const Container = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 40px 1fr;
  width: 100vw;
  height: 100vh;
`
const StyledMain = styled.main`
  width: 100%;
  padding: ${gap_padding_radius};
  ${flexMixin({align:'flex-start', wrap: 'wrap'})}
  /* @include flex($align:flex-start, $wrap: wrap); */

  // display: flex;
  // flex-wrap: wrap;
  // align-items: flex-start;
    
    section {
      width: 50%;
      height: auto;
      padding: 10px;
      
        & > img {
          width: 100%;
          border-radius: 10px;
        }
        & > div {
          ${flexMixin({direction: 'row', gap: '10px'})}
          /* @include flex(row, $gap: 10px); */
          // display: flex;
          // flex-direction: row;
          // gap: 10px;
          padding-top: 10px;
        }
      
      div {
        img {
          width: 30px;
          border-radius: 100%;
        }
        p:first-child {
          font-weight: 600;
        }
        p:last-child {
          font-size: 0.9rem;
          color: gray;
        }
      }
    }
`

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
  display: none;

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
`


function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Nav />
      <Tab />
      <StyledMain>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledMain>
    </Container>
  );
}

export default App;

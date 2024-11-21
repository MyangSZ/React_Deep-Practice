import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`
const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
`
const BigBlueButton = styled(BlueButton)`
  width: 300px;
  padding: 30px;
`
const BigTextBigBlueButton = styled(BigBlueButton)`
  font-size: 50px;
  font-weight: 800;

`


function App() {
  return (
    <>
      <Container>
      <div>hello</div>
      <BlueButton>파란색버튼</BlueButton>
      <BigBlueButton>커다란 바란 버튼</BigBlueButton>
      <BigTextBigBlueButton>큰 글자</BigTextBigBlueButton>
      </Container>
    </>
  )
}

export default App

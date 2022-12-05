import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/">{/* <Route path="" element={} /> */}</Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

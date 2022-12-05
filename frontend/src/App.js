import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/">
            <Route path="" element={<Login />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

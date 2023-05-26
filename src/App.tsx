import { AppBar, Container, Grid } from "@mui/material"
import ButtonAppBar from "./components/ButtonAppBar"
import CardBox from "./components/CardBox"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div>
      <header>
        <ButtonAppBar />
      </header>
      <main>
        <Container>
          <HomePage />
        </Container>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

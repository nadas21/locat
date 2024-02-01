import { All } from "./components/All"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Portifolio } from "./components/Porrtifolio"
import { Services } from "./components/Services"
import { And } from "./components/and"
import { For } from "./components/for"
import { Requt } from "./components/recut"

function App() {


  return (
    <>
     <Header/>
     <main>
      <Portifolio/>
      <Services/>
      <Hero/>
      <Requt/>
      <And/>
      <For/>
      <All/>
     </main>
    </>
  )
}

export default App

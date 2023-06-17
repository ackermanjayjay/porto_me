import Content from "./components/Content"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <div className="container">
    <Content></Content>
    </div>
     </>
  )
}

export default App

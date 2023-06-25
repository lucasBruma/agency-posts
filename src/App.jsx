import Gallery from "./components/Gallery"
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Gallery/>} />
      </Routes>
    </>
  )
}

export default App

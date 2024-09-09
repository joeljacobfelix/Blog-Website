import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./pages/About.jsx"
import Signin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx"
import Projects from "./pages/projects";
import Home from "./pages/Home.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

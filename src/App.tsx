import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


const App = () => {


  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contactme" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
     </Routes>
    </>
  )
}

export default App

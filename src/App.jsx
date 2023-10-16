import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import News from "./pages/News"
import Contact from "./pages/Contact"

// import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App

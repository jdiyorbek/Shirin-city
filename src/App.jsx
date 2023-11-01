import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import News from "./pages/News"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

// import Header from "./layouts/Header"
// import Footer from "./layouts/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App

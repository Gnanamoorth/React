import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './components/routes/Homepage/Home.jsx'
import About from './components/routes/Aboutpage/About.jsx'
import Service from './components/routes/servicepage/Service.jsx'
import Contact from './components/routes/contactPage/contact.jsx'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      <div>
      </div>
    </div>
  );
}
export default App;
import { useEffect, useRef, useState } from "react";
import { AboutMe } from "./components/sections/AboutMe";
import { ContactMe } from "./components/sections/ContactMe";
import Footer from "./components/sections/Footer";
import { Nav } from "./components/sections/Nav";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Widget from "./components/sections/Widget";

function App() {
  const [offset, setOffset] = useState(0);
  const [sectionsOffset, setSectionsOffset] = useState({})

// Set the general TopOffset of the page

  useEffect(() => {
    const handleScroll = event => {
      setOffset(window.scrollY)
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

// Set the offset to verify in which position the user is

  function checkTopOffset (element, section){
    setSectionsOffset(prev => {
      return {...prev,[section]: element.current.offsetTop - (element.current.getBoundingClientRect().height)/3}})
  }

  return (
    <div className="container">
      <Nav pageOffset={offset} sectionsOffset={sectionsOffset}/>
      <AboutMe checkTopOffset={checkTopOffset}/>
      <Skills checkTopOffset={checkTopOffset}/>
      <Projects checkTopOffset={checkTopOffset}/>
      <Widget checkTopOffset={checkTopOffset}/>
      <ContactMe checkTopOffset={checkTopOffset}/>
      <Footer />
    </div>
  );
}

export default App;

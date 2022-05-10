import { useState, useLayoutEffect } from 'react'
import { Navbar } from './Components/Navbar';
import {About } from  './Components/About';
import SetDisplayElements from './Components/SetDisplayElements';



function App() {
  function useWindowWidth() {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return width;
  }  

  return (
    <div className="App">
      <SetDisplayElements width={useWindowWidth()}> 
         <Navbar />
      </SetDisplayElements>
      <About />
    </div>
  );
}

export default App;

import React, {useRef} from 'react'
import Hero from '../../components/hero/Hero'
import DisplayFood from '../../components/displayFood/DisplayFood'
import Menu from '../Menu/Menu'

function Home() {
  // Step 1: Create a ref for the Menu component
  const menuRef = useRef(null);

  // Step 2: Create the scrollToMenu function
  const scrollToMenu = () => {
    // Step 3: Use scrollIntoView to scroll to the Menu section
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Hero scrollToMenu={scrollToMenu}/>
    <div ref={menuRef}>
        <Menu />
      </div>
    <DisplayFood />
    </>
    
  )
}

export default Home
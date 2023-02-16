
import './App.css';

import {Routers} from './pages';
import MenuManager from './components/Navbar/MenuManager/index';
import {MenuContext} from './components/Navbar/MenuManager/index';
import {useContext, useState, useEffect} from 'react';
import Cursor from './components/CustomCursor/index';
import Loader from './components/Loader/index';

import ComingSoon from './components/ComingSoon/index';

import CursorManager from './components/CustomCursor/CursorManager';

function App() {
  const {open, setOpen} = useContext(MenuContext)
  const [isLoading, setIsLoading] = useState(true);
  const [isWebsiteOff, setIsWebsiteOff] = useState(true);

const handleLoading = () => {
setIsLoading(false);
}

useEffect(()=>{
window.addEventListener("load",handleLoading);
return () => window.removeEventListener("load",handleLoading);
},[])

  

  return (
    
<>
{!isWebsiteOff ? (
    <div className='App'>

<CursorManager>
        <Cursor />
       <MenuManager>
      <Routers />
    </MenuManager>
</CursorManager>
    </div>
) : (<ComingSoon/>)}
  </>
  )
}

export default App;


import './App.css';

import {Routers} from './pages';
import MenuManager from './components/Navbar/MenuManager/index';
import {MenuContext} from './components/Navbar/MenuManager/index';
import {useContext} from 'react';
import Cursor from './components/CustomCursor/index';

import CursorManager from './components/CustomCursor/CursorManager';

function App() {
  const {open, setOpen} = useContext(MenuContext)

  

  return (

    <div className='App'>

<CursorManager>
        <Cursor />
       <MenuManager>
      <Routers />
    </MenuManager>
</CursorManager>
    </div>

  );
}

export default App;

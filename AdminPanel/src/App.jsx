import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AddPlace from './components/SidebarRender/AddPlace.jsx';
import DeleteUser from './components/SidebarRender/DeleteUser.jsx';

function App() {

  return   (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/addtrip' element={<AddPlace/>}/>
      <Route path='/deleteuser' element={<DeleteUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

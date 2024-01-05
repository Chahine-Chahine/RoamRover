import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AddPlace from './components/SidebarRender/AddPlace.jsx';
import DeleteUser from './components/SidebarRender/DeleteUser.jsx';
import SignIn from './pages/signin';

function App() {

  return   (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path="/Home" element={<Home />}/>
      <Route path='/addtrip' element={<AddPlace/>}/>
      <Route path='/deleteuser' element={<DeleteUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

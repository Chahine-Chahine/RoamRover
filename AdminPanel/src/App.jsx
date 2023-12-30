import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AddPlace from './components/SidebarRender/addPlace';

function App() {

  return   (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/addtrip' element={<AddPlace/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

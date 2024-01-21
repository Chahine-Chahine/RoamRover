import {BrowserRouter , Routes , Route} from 'react-router-dom';
import LoginPage from './pages/SignIn/LoginPage';
import SignupPage from './pages/SignUp/SignupPage';

function App() {

  return   (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

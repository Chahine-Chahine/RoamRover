import {BrowserRouter , Routes , Route} from 'react-router-dom';
import LoginPage from './pages/SignIn/LoginPage';
import SignupPage from './pages/SignUp/SignupPage';
import DashboardPage from './pages/Dashboard/DashboardPage';

function App() {

  return   (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

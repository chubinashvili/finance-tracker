import { BrowserRouter , Routes, Route } from 'react-router-dom'; 

// components
import Navigation from './pages/navigation/Navigation';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

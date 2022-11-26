import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'; 
import { useAuthContext } from './hooks/UseAuthContext';

// components
import Navigation from './pages/navigation/Navigation';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={user ? <Home /> : <Navigate to="login" replace />} />
              <Route path='login' element={!user ? <Login /> : <Navigate to='/' replace />} />
              <Route path='signup' element={!user ? <Signup /> : <Navigate to='/' replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

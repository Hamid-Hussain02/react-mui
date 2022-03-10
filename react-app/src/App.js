import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import {Route, Routes, Redirect} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'/signup'} element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

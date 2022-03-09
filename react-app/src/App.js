import logo from './logo.svg';
import './App.css';
import One from './components/one'
import Two from './components/two'
import {Route, Routes, Redirect} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/one'} element={<One/>}></Route>
        <Route path={'/two'} element={<Two/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

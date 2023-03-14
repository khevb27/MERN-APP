import HomePage from './components/pages/Homepage';
import Login from './components/pages/login';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <header>
        <Nav/>
      </header>
      <div className='m-3'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </>
    );
}
export default App;

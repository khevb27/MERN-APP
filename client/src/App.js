import HomePage from './components/pages/Homepage';

import { Route , Routes } from 'react-router-dom';
function App() {
  return (
      <div className='m-3'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </div>
    );
}
export default App;

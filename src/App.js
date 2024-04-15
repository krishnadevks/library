import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';

import AddBook from './componets/AddBook';
import { Route, Routes } from 'react-router-dom';
import ViewBook from './componets/ViewBook';

function App() {
  return (
    <div className="App">
      <Navbar/>
         <Routes>
           <Route path='/'element={<ViewBook/>}/>
           <Route path='/add' element={<AddBook/>} />
         </Routes>
    </div>
  );
}

export default App;

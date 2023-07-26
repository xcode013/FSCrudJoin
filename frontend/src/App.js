import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateEmsi from './components/CreateEmsi';
import UpdateEmsi from './components/UpdateEmsi';
import AddWaifus from './components/AddWaifus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/add' element={<CreateEmsi/>} />
        <Route path='/update/:id' element={<UpdateEmsi/>} />
        <Route path='/addwaifu/:id' element={<AddWaifus/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
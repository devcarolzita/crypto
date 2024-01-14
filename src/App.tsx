
import './App.css'
import Header from './Components/Header'
import { Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import PageCoin from './Components/PageCoin';

function App() {

  return (
    
      <Routes>
        <Route path="/"  index element={<Home />} />
        <Route path="/" element={<Layout />} >
          <Route path="/details/:id" element={<PageCoin />} />
        </Route>
      </Routes>
    
  )
}

export default App


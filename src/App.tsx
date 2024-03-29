
import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import PageCoin from './Components/PageCoin';
import NotFound from './Components/NotFound';

function App() {

  return (
      <Routes>
        <Route path="/"  index element={<Home />} />
        <Route path="/" element={<Layout />} >
          <Route path="/details/:id" element={<PageCoin />} />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>

    
  )
}

export default App


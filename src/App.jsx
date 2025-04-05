import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import AcercaDe from './pages/AcercaDe/AcercaDe'
import AdminProduct from './pages/AdminProduct/AdminProduct'
import Contacto from './pages/Contacto/Contacto'
import Registro from './pages/Registro/Registro'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Order from './pages/Order/Order'
import OrderModal from './context/OrderModal'

const URL = `https://67cb831e3395520e6af58918.mockapi.io/`

function App() {  
  return (
    <>
      <main className="main-container">
        <Header/>
        <OrderModal/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AcercaDe" element={<AcercaDe/>}/>
          <Route path="/AdminProduct" element={<AdminProduct/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/Registro" element={<Registro/>}/>
          <Route path="/Order" element={<Order/>}/>
        </Routes>
        <Footer/>
      </main>
    </>
  )
}

export default App
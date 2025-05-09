import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import AcercaDe from './pages/AcercaDe/AcercaDe'
import AdminProduct from './pages/AdminProduct/AdminProduct'
import Contacto from './pages/Contacto/Contacto'
import Registro from './pages/Registro/Registro'
import Footer from './components/Footer/Footer'
import Order from './pages/Order/Order'
import OrderModal from './context/OrderModal'
import DetalleProduct from './pages/DetalleProduct/DetalleProduct'
import Login from './pages/Login/Login'
import AdminGuard from './services/guard/AdminGuard'


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
          <Route path="/Registro" element={<AdminGuard><Registro/></AdminGuard>}/>
          <Route path="/AdminProduct" element={<AdminGuard><AdminProduct/></AdminGuard>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/DetalleProduct/:id" element={<DetalleProduct />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
        <Footer/>
      </main>
    </>
  )
}

export default App
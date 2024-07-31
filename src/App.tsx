import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import ProductPage from './components/Product/ProductPage'

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mb-4">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products/:category/:idproduct" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router >
  )
}

export default App

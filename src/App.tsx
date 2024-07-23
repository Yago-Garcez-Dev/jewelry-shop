import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import ProductPage from './components/Product/ProductPage'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* <main className="flex-grow mb-4">
          <Home />
        </main> */}

        <ProductPage />

        <Footer />
      </div>
    </>
  )
}

export default App

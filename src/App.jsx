import { HashRouter as Router, Routes, Route } from "react-router"
import { Navbar, FloatingButtons, FooterSection } from './components'
import { HomePage, ProductDetail, CatalogPage, Gracias, ContactPage, Lookbook } from './pages'

function App() {

  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>     
        <Routes>
          {/*Enlaces de navegacion*/}
          <Route path="/" element={<HomePage />}/>
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/contacto" element={<ContactPage />} />

          {/*Otros enlaces*/}
          <Route path={`/producto/:name/:id`} element={<ProductDetail />} />
          <Route path={`/gracias`} element={<Gracias />} />
        </Routes>
      </main>

      <footer>
        <FooterSection />
      </footer>

      {/*Botones flotantes*/}
      <FloatingButtons />
    </Router>
  )
}

export default App

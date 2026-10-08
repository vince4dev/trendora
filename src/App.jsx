import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import About from './Components/Pages/About'
import Blog from './Components/Pages/Blog'
import BlogDetail from './Components/Pages/BlogDetail'
import Contact from './Components/Pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogDetail />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

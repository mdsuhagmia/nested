import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import RootLayout from './components/root/RootLayout'

let routing = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Route>
))

function App() {

  return (
    <>
     <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App

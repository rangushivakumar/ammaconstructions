import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Services from './Services/Services.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<App/>} ></Route>
    <Route path='/services' element={<Services showSlider={true}/>} ></Route>
    <Route path='/aboutus' element={<About showSlider={true}/>} ></Route>
    <Route path='/contactus' element={<Contact showSlider={true} showMap={true}/>}></Route>
  </Route>
  
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

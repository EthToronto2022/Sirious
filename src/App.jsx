import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import 'aos/dist/aos.css'
import './css/style.css'

import AOS from 'aos'
import Sticky from 'sticky-js'

import Home from './pages/Home'
import Products from './pages/Products'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'
import Providers from './pages/Providers';
import ProvidersRegistrations from './pages/ProvidersRegistrations';

function getLibrary(provider) {
  return new Web3Provider(provider)
}

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]')
  })

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]) // triggered on route change

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers-registration" element={<ProvidersRegistrations />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Web3ReactProvider>
  )
}

export default App
import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'
const Footer = lazy(() => import('../components/footer'))


const layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Suspense fallback={<div className='h-20 animate-pulse bg-gray-500' />}>
        <Footer />
      </Suspense>

    </>
  )
}

export default layout
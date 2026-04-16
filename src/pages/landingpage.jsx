import { Suspense } from 'react'
import { lazy } from 'react'
import HeroSection from '../components/heroSection'
const Features = lazy(() => import('../components/features'))
const Projects = lazy(() => import('../components/projects'))

const Landingpage = () => {
  return (
    <div className='scroll-smooth'>
      <HeroSection />
      <Suspense fallback={<div className='h-20 animate-pulse bg-gray-500' />}>
        <Features />
        <Projects />
      </Suspense>
    </div>
  )
}

export default Landingpage
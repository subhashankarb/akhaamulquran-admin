// src/sections/landing/components/LandingLayout.tsx
import { Outlet } from 'react-router-dom'
import TopNav from './components/TopNav'
import Footer from './components/Footer'

export default function LandingLayout() {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  )
}

import React from 'react'
import MainLayout from '../components/MainLayout'

const ErrorPage = () => {
  return (
    <MainLayout>
      <section className="w-full text-gray-400 h-full py-6 px-6 container mx-auto gap-1 ">
        <h1 className="text-lg font-bold text-center">404</h1>
        <p className="text-center text-sm">Page not found</p>
      </section>
    </MainLayout>
  )
}

export default ErrorPage
import React from 'react'
import WidgetTabs from './components/WidgetTabs'
import Gallery from './components/Gallery'

export default function App() {
  return (
    <div className='min-h-screen flex items-center justify-center p-6'>
      <div className='container-grid w-full max-w-[1200px]'>
        <div className='hidden md:block'></div>
        <div className='space-y-6'>
          <WidgetTabs />
          <Gallery />
        </div>
      </div>
    </div>
  )
}
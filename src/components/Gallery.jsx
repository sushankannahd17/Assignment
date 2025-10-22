import React, { useState } from 'react'

const sampleImages = [
  "src/assets/Rectangle 5160.png",
  "src/assets/Rectangle 5160.png",
  "src/assets/Rectangle 5160.png"
]

export default function Gallery() {
  const [images, setImages] = useState(sampleImages)

  function addImage() {
    const id = Math.floor(Math.random() * 1000)
    setImages(prev => [...prev, sampleImages[id % sampleImages.length]])
  }
  function prev() {
    setImages(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)])
  }
  function next() {
    setImages(prev => [...prev.slice(1), prev[0]])
  }

  return (
    <div className='card-neu rounded-xl-2 p-5 md:p-6 relative'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          <div className='h-8 w-8 rounded-full badge flex items-center justify-center text-sm text-muted select-none'>?</div>
          <div className='px-4 py-2 rounded-full text-sm font-medium tab-pill'>Gallery</div>
        </div>
        <div className='flex items-center gap-3'>
          <button onClick={addImage} className='px-4 py-2 rounded-full bg-white/6 text-sm font-medium'>+ ADD IMAGE</button>
          <div className='flex gap-2'>
            <button onClick={prev} className='h-10 w-10 rounded-full badge flex items-center justify-center'>◀</button>
            <button onClick={next} className='h-10 w-10 rounded-full badge flex items-center justify-center'>▶</button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {images.map((src, i) => (
          <div key={i} className='img-thumb overflow-hidden h-36 md:h-44'>
            <img src={src} alt={`img-${i}`} className='w-full h-full object-cover'/>
          </div>
        ))}
      </div>
    </div>
  )
}
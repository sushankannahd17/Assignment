import React, { useState } from 'react'

const tabs = ['About Me', 'Experiences', 'Recommended']

export default function WidgetTabs() {
  const [active, setActive] = useState(0)

  return (
    <div className='card-neu rounded-xl-2 p-5 md:p-6 relative'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex gap-3'>
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${active === i ? 'tab-pill text-white' : 'text-muted'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className='h-8 w-8 rounded-full badge flex items-center justify-center text-sm text-muted select-none'>?</div>
      </div>
      <div className='h-48 overflow-auto scrollbar-thin pr-2'>
        {active === 0 && <div className='text-sm leading-7 text-gray-200'><p>Hello! I'm Dave, your sales rep here from Salesforce.</p></div>}
        {active === 1 && <div className='text-sm leading-7 text-gray-200'><p>Experience details go here.</p></div>}
        {active === 2 && <div className='text-sm leading-7 text-gray-200'><p>Recommended section content.</p></div>}
      </div>
    </div>
  )
}
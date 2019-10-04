import React from 'react'
import useScrolled from './hooks/useScrolled'

export default function Header() {
  const scrolled = useScrolled()

  return (
    <nav
      id="header"
      style={{ boxShadow: scrolled ? '0 3px 3px rgba(0,0,0,0.1)' : 'none' }}
    >
      <div className="navLogo" style={{display: 'flex', flexFlow: 'column'}}>
        <img style={{width: '8%', paddingTop: '20px'}} src='https://landen.imgix.net/92clds4bviei/assets/41e7ytvs.png?w=400' />
        <span style={{lineHeight: '35px'}}>Transaction Queue Dashboard</span>
      </div>
    </nav>
  )
}

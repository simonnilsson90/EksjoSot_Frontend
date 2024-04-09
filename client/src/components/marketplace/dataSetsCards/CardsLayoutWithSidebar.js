import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Carousel from './carousel/Carousel'

function CardsLayoutWithSidebar({ chidren }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div style={{ flex: 1, minWidth: '25%' }}>
            <Sidebar />
        </div>
        <div style={{ flex: 2 ,minWidth: '75%' }}>
            <Carousel />
        </div>
        
        
    </div>
  )
}

export default CardsLayoutWithSidebar
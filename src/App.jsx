import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestion from './Suggestion'
function App() {
  return (
    <div className='d-flex vh-atuo bg-black'>
    
      <div style={{
          width: "250px",
          borderRight: "1px solid #262626",
          height: "100vh",
          position: "fixed", // Sidebar fixed
          left: 0,
          top: 0,
          padding: "20px",
          backgroundColor: "black",
        }}>
        <Sidebar />
      </div>
      <div style={{
          marginLeft: "250px", // to avoid overlap
          flex: 1,
          padding: "20px",
        }}>
        <Feed/>
      </div>
      <div style={{ width: '30%' }}>
        <Suggestion/>
      </div>
    </div>
  )
}

export default App

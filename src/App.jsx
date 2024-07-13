import { useState } from 'react'
import './App.css'

function App() {

  const config = {
    title: 'xy0',
  }

  return (
    <div style={{ padding: '8px' }}>
      <h1 style={{ margin: 0, fontFamily: 'monospace', fontWeight: 100, fontSize: 12 }}>{config.title}</h1>
    </div>
  )
}

export default App

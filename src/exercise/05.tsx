// TypeScript with React
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'

// 🐨 add type definitions for the subject and greeting props
function Message({subject, greeting}) {
  return (
    <div className="message">
      {greeting}, {subject}
    </div>
  )
}

function App() {
  return (
    <>
      <Message subject="World" greeting="Hello" />
      <Message subject="World" greeting="Goodbye" />
    </>
  )
}

export default App

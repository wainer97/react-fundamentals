import * as React from 'react'

function Message({subject, greeting}: {subject: string; greeting: string}) {
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

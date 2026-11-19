import { useState, useEffect } from 'react'
import LiveClock from './LiveClock'
export default function App() {
  const [showClock, setShowClock] = useState(true)
  const [note, setNote] = useState(() => {
    return localStorage.getItem('my-note') || ''
  })

  useEffect(() => {
    localStorage.setItem('my-note', note)
  }, [note])

  return (
    <div>
      <h1>Saved Note</h1>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />

      <p>Your note is saved automatically.</p>
      <button onClick={() => setShowClock(!showClock)}>
  {showClock ? 'Hide Clock' : 'Show Clock'}
</button>
      {showClock && <LiveClock />}
    </div>
  )
}
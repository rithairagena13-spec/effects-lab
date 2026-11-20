
import { useState, useEffect } from 'react'
import LiveClock from './LiveClock'

export default function App() {
  const [showClock, setShowClock] = useState(true)
  const [title, setTitle] = useState('')
  const [note, setNote] = useState(() => {
    return localStorage.getItem('my-note') || ''
  })

  useEffect(() => {
    document.title = title || 'Title Mirror'
  }, [title])

  useEffect(() => {
    localStorage.setItem('my-note', note)
  }, [note])

  return (
    <div>
      <h1>Title Mirror</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type to change browser title..."
      />

      <p>Current Title: {title || 'Title Mirror'}</p>

      <h1>Saved Note</h1>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />

      <p>Your note is saved automatically.</p>

      <h1>Live Clock</h1>

      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>

      {showClock && <LiveClock />}
    </div>
  )
}

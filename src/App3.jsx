
import { useEffect, useRef } from 'react'
import Video from './cpns/Video'

function App() {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef)
  })

  const handlerPause = () => {
    videoRef.current.pause()
  }

  const handlerPlay = () => {
    videoRef.current.play()
  }

  return (
    <div>
      <Video ref={videoRef} />
      <button
        className="rounded bg-gray-300 py-2 px-4 mr-5 hover:opacity-60"
        onClick={handlerPlay}
      >Play</button>
      <button
        className="rounded bg-gray-300 py-2 px-4 mr-5 hover:opacity-60"
        onClick={handlerPause}
      >Pause</button>
    </div>
  )
}

export default App

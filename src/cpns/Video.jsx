import { forwardRef, useEffect } from 'react'
import { useRef } from 'react'
import { useImperativeHandle } from 'react'
import video1 from './download.mp4'

function Video(props, ref) {
  const videoRef = useRef()

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))

  return (
    <video
      ref={videoRef}
      src={video1}
      width={300} />
  )
}

export default forwardRef(Video)

import React, { useRef } from 'react'
import './Video.css'
import VideoPlay from '../../assets/video.mp4'

const Video = ({play,setPlay}) => {

  const player=useRef(null);

  const closePlayer=(e)=>{
    if(e.target === player.current){
      setPlay(false);
    }
  }


  return (
    <div className={`video ${play ? '':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={VideoPlay} autoPlay muted controls></video>
    </div>
  )
}

export default Video

import { FaPauseCircle, FaPlayCircle } from "react-icons/fa"

const PlayPause = ({ isplaying, activeSong, song, handlePause, handlePlay }) =>
  isplaying && activeSong?.title === song.title ? (
    <FaPauseCircle onClick={handlePause} size={35} className='text-grey-300' />
  ) : (
    <FaPlayCircle onClick={handlePlay} size={35} className='text-grey-300' />
  )

export default PlayPause

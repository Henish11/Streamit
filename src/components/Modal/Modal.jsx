import React from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import './Modal.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Modal = ({video,setOpenModal}) => {

    // YT Video Key
    const Videokeys = video.filter((ele) => ele?.type === 'Trailer').map((ele) => ele?.key)
    const YTkey = Videokeys[Videokeys.length - 1]

    return (
        <div className='modalWrap'>
            <div className="modalContainer">
                <h3>Watch Video </h3>
                <AiOutlineCloseCircle className='close-btn' onClick={()=>{setOpenModal(false)}}/>
                <VideoPlayer YTkey={YTkey} />
            </div>
        </div>
    )
}

export default Modal
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/allAPI';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Videocard({ videoData, setDeleteVideoStatus }) {
    console.log(("1"));
    console.log("videoData", videoData);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        //3 data need to be inserted 1)caption 2)link 3)timestamp
        const { caption, embededLink } = videoData;
        const today = new Date;
        console.log("====today====", today);
        const timestamp = new Intl.DateTimeFormat('en-us', {
            year: 'numeric',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(today)
        console.log(timestamp);
        let videoDetails = {
            caption: caption,
            embededLink: embededLink,
            timestamp: timestamp
        }
        await addToHistory(videoDetails)
    }
    const removeVideo = async (id) => {
        const response = await deleteVideo(id)
        setDeleteVideoStatus(true)
    }

    return (
        <>
            <Card style={{ width: "18rem", height: "300px" }} onClick={handleShow} >
                <Card.Img variant="top" height="200px" width="100%" src={videoData?.url} />
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-evenly'>
                        <h6>{videoData?.caption} </h6>
                        <Button variant="danger" className='ms-5'
                            onClick={() => removeVideo(videoData?.id)}>
                            <i class="fa-solid fa-trash"></i>
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{videoData?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="480" src={`${videoData.embededLink}?autoplay=1`}
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Videocard
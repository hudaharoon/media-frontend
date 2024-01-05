import React, { useState } from 'react'
import Add from '../Components/Add'
import Category from '../Components/Category'
import View from '../Components/View'
import Videocard from '../Components/Videocard'
import { useNavigate } from 'react-router-dom'


function Home() {
    //useNavigate():it is used to navigate from one page to another
    const navigateByUrl = useNavigate()
    //create a state for state lifting
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
    return (
        <>
            <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
                <div className='add_videos'>
                    <Add setUploadVideoStatus={setUploadVideoStatus} />
                </div>
                <div >
                    <h3 style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => navigateByUrl('/Watchhistory')} >
                        watch history
                    </h3>
                </div>
            </div>
            <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
                <div className='col-md-4 mt-5  '>
                    <h4>All Video</h4>
                    <View uploadVideoStatus={uploadVideoStatus} />
                </div>
                <div>
                    <Category />
                </div>
            </div>
        </>
    )
}

export default Home
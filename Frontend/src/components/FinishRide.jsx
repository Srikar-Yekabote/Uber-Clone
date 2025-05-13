import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {

  return (
     <div>
        <h5
          className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{
            props.setFinishRidePanel(false)
          }}>
          <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i>
        </h5>
        <h3 className='text-2xl font-semibold mt-5'>Finish this Ride</h3>
        <div className='flex items-center justify-between p-3 border-2 border-yellow-300 rounded-lg mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                <h2 className='text-lg font-medium'>Sharmas</h2>
            </div>
            <h5 className='text-lg font-medium'>2.2 Km</h5>
        </div>
        <div className='flex gap-2 justify-between flex-col items-center'>
            
        <div className='w-full mt-5 '>
            <div className='flex  items-center gap-5 p-3 border-b-2 '>
                <i className=" text-lg ri-map-pin-range-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-gray-700 text-sm -mt-1'>Kankariya Talab, Bhopal</p>
                </div>
            </div>
            <div className='flex  items-center gap-5 p-3 border-b-2 '>
                <i className=" text-lg ri-map-pin-time-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-gray-700 text-sm -mt-1'>Kankariya Talab, Bhopal</p>
                </div>
            </div>
            <div className='flex  items-center gap-5 p-3  '>
                <i className=" text-lg ri-cash-line" ></i>
                <div>
                    <h3 className='text-lg font-medium'>193.20</h3>
                    <p className='text-gray-700 text-sm -mt-1'>Cash, Phonepay, Gpay</p>
                </div>
            </div>
        </div>
        <div className='mt-8 w-full'>
            <Link to="/captain-home"
            className=' mt-3 flex text-lg justify-center w-full bg-green-600 text-white font-semibold p-4  rounded-lg'>Finish Ride</Link>
            
        </div>
            
        </div>
    </div>
  )
}

export default FinishRide
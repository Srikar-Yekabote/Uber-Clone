import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
    <h5
      onClick={() => 
        props.setVehicalFound(false)

      }
      className="p-1 text-center w-[93%] absolute top-0"
    >
      <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i>
    </h5>
    <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

    <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-30' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
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
    </div>
</div>
  )
}

export default LookingForDriver
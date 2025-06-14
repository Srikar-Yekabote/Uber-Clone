import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5
          onClick={() => props.setVehiclePanel(false)}
          className="p-1 text-center w-[93%] absolute top-0"
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i>
        </h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle </h3>
        {/* Car */}
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehiclePanel(false)
        }} className='flex border-2 active:border-black mb-2 rounded-xl  w-full p-3 items-center justify-between '>
          <img className='h-12 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-6-line">4</i></span></h4>
            <h5 className='font-medium text-sm'>4 min away </h5>
            <p className='font-medium text-xs text-gray-600'>Afforable, Compact rides </p>           
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>
        {/* Auto */}
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehiclePanel(false)
        }} className='flex border-2 active:border-black mb-2 rounded-xl  w-full p-3 items-center justify-between '>
          <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-6-line">3</i></span></h4>
            <h5 className='font-medium text-sm'>2 min away </h5>
            <p className='font-medium text-xs text-gray-600'>Afforable, Compact, Free rides </p>           
          </div>
          <h2 className='text-xl font-semibold'>₹110.65</h2>
        </div>
        {/* Bike */}
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehiclePanel(false)
        }} className='flex border-2 active:border-black mb-2 rounded-xl  w-full p-3 items-center justify-between '>
          <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberMoto <span><i className="ri-user-6-line">1</i></span></h4>
            <h5 className='font-medium text-sm'>1 min away </h5>
            <p className='font-medium text-xs text-gray-600'>Afforable Motocycle rides </p>           
          </div>
          <h2 className='text-xl font-semibold'>₹75.50</h2>
        </div>

    </div>
  )
}

export default VehiclePanel
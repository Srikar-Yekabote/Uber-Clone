import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'




const Home = () => {
  const [pickup, setPickup] =useState('')
  const [destination, setDestination] =useState('')
  const [panelopen, setPanelOpen] = useState(false)
  const panelRef=useRef(null)
  const vehiclePanelRef=useRef(null)
  const confirmRidePanelRef=useRef(null)
  const vehicleFoundRef=useRef(null)
  const waitingForDriverRef=useRef(null)


  const panelCloseRef = useRef(null)
  const [ vehiclePanel, setVehiclePanel ] = useState(false)
  const [confirmRidePanel,setConfirmRidePanel ] = useState(false)
  const [vehicleFound,setVehicleFound ] = useState(false)
  const [waitingForDriver,setwaitingForDriver ] = useState(false)



  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(()=>{
    if(panelopen){
      gsap.to(panelRef.current,{
        height:'70%',
        opacity:1,
        padding:24,
        duration:0.5,
        ease:'power2.inOut'
      })
      gsap.to(panelCloseRef.current,{
        opacity:1,
        duration:0.5,
        ease:'power2.inOut'
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        opacity:0,
        padding:0,
        duration:0.5,
        ease:'power2.inOut'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0,
        duration:0.5,
        ease:'power2.inOut'
      })
    }
  },[panelopen])

  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        translateY:'100%',
      })
    }
  },[vehiclePanel])

  useGSAP(()=>{
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        translateY:'100%',
      })
    }
  },[confirmRidePanel])

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        translateY:'100%',
      })
    }
  },[vehicleFound])

  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        translateY:'100%',
      })
    }
  },[waitingForDriver])


  return (
    <div className='h-screeen relative overflow-hidden'> 
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
        <h5 ref={panelCloseRef}
        onClick={()=>setPanelOpen(false)}
        className=' absolute top-6 right-6 text-2xl opacity-0'
        ><i className="ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="list absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
          <input
          onClick={()=>setPanelOpen(true)}
          value={pickup}
          onChange={(e)=>setPickup(e.target.value)}
          type="text" 
          placeholder='Add a pickup location' 
          className='text-base rounded-lg px-12 py-2 bg-[#eee] w-full mt-5' 
          />

          <input 
          onClick={()=>setPanelOpen(true)}
          value={destination}
          onChange={(e)=>setDestination(e.target.value)}
          type="text" 
          placeholder='Enter your destination' 
          className='text-base rounded-lg px-12 py-2 bg-[#eee] w-full mt-5' 
          />
        </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
            <LocationSearchPanel  setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel}  setVehiclePanel={setVehiclePanel}/>
      </div>

      <div
        ref={confirmRidePanelRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div
      ref={waitingForDriverRef}
        className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
          <WaitingForDriver setwaitingForDriver={setwaitingForDriver}/>
      </div>

    </div>
  )
}

export default Home

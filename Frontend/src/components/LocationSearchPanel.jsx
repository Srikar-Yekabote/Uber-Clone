import React from 'react'

const LocationSearchPanel = (props) => {

    const locations=[
        "24B, Near kapoor's cafe, Sheryains School, Bhopal, MP, India",
        "30X, Near Sri's cafe, Sheryains School, Bhopal, MP, India",
        "20V, Near Vshu's cafe, Sheryains School, Bhopal, MP, India",
        "14D, Near Capt's cafe, Sheryains School, Bhopal, MP, India",
        
    ]
  return (
    <div>
        {/* this is just sample data */}
        {
            locations.map(function(elem,idx){
                return <div key={idx}
                onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }}
                className='flex gap-4 border-2 p-2 rounded-xl border-gray-100 active:border-black items-center my-1 justify-start'>  
                <h2 className='bg-[#eeee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className='ri-map-pin-fill '></i>
                </h2>
                <h4 className='text-lg font-medium '>{elem}</h4>
            </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel
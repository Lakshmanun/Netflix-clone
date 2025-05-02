
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//    <>
//    <h1 className=' text-3xl'> home page </h1> 
//    <Link> hello </Link>
//    </>
//   )
// }

// export default Home

import React, { useState } from 'react'
import GeoLocationModel from '../componets/GeoLocationModel';
const Home = () => {
  const[model,setmodel]=useState(true);
  return (
    <div>
      {model && <GeoLocationModel onClose={()=>setmodel(!model)}/> }
       <div className={model ? "blur-sm" : ""}>
       <h1 className=' mt-20 text-center text-blue-600 text-4xl'> hello  </h1> 
        <h1 className="text-2xl font-bold text-center mt-10">Welcome to Our Website</h1>
        {/* Other page content */}
      </div>
    </div>
  )
}
export default Home

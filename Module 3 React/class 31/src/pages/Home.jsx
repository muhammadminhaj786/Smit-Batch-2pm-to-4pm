import React, { useEffect, useState } from 'react'
import MyNavBar from '../component/MyNavBar'
import MyCrousel from '../component/MyCrousel'
import Banner from '../component/Banner'
import { Button } from 'primereact/button'
import { supabase } from '../config/supabase'
import MyCard from '../component/MyCard'


const Home = () => {
  const [cars,setCars ] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('cars')
            .select()

        if(error){
            console.log(error.message)
        }else{
            console.log(data)
            setCars(data)

        }
    };
    fetchData()
}, [])
  return (
    <div>
  
      <Banner />
      <div className="grid  grid-cols-3 gap-8 w-[80%] mx-auto mt-[40px] p-4">
          {
            cars && (
                cars.map((data,index)=> { 
                    return (
                       <div  key={index}>
                        <MyCard data={data} /> 
                       </div>
                           
                    )
                })
            )
          }
          </div>
 
    </div>
  )
}

export default Home
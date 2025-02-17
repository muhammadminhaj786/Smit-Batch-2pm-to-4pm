import { useState } from 'react'
import './Card.css'

export function Card(){

    const price = 5400


    const [name, setName] = useState('minhaj')

    let [count, setCount] = useState(0)


    

    function increment(){
        
        setCount(++count)
        console.log('chala', count)
        return (
            count
        )
    }

    function updateName (){
        setName('abc')
    }

    return (
        <div className="card">
            <div>
                <img className='img' src="src\assets\airpods.jpg_.webp" alt="" />
            </div>
            <div className='ctn'>
                <p>
                Airpods Air Pro 3rd Gen TWS (True Wireless Stereo)
                </p>
               <div className='divCtn'>
               <p className='price'>
                    Rs {price}
                </p>
                <p>
                    view <span>{count}</span>
                </p>
               </div>
                <div className='btnDiv'>
                <button onClick={increment} className='btn'>
                    Buy Now
                </button>
                </div>
            </div>
        </div>
    )
}



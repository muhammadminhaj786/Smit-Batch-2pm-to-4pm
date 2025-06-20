import React from 'react'
import DefaultInputProducts from './DefaultInputProducts'


const Product = () => {
  return (
    <div>
        <h1  className='text-center m-2 font-bold text-3xl'> Product</h1>
        <form className='mt-8'>
        <DefaultInputProducts />
        </form>
    </div>
  )
}

export default Product
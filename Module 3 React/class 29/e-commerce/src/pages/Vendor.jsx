// import { supabase } from '../config/supabase'
// import { Button } from '@heroui/button'
// import { Input, Textarea } from '@heroui/input'
// import React, { useState } from 'react'

// const Vendor = () => {

//     const [name, setName] = useState('')
//     const [model, setModel] = useState('')
//     const [price, setPrice] = useState('')
//     const [description, setDescription] = useState('')

//     const handleSubmit =async (e) => {
//         e.preventDefault()
//         console.log('run')
//         console.log(name, model, price, description)
//         const { error } = await supabase
//             .from('cars')
//             .insert({ name:name, model: model, price:price, description:description })
//     }


//     return (
//         <div>
//             <h1 className='font-bold text-3xl text-center mt-2'>Add Car</h1>
//             <form onSubmit={handleSubmit} className='w-[50%] mx-auto mt-8 bg-slate-100 h-[400px] p-4' >
//                 <Input onChange={(e) => setName(e.target.value)} className='mb-6' placeholder='Enter a car name' />
//                 <Input onChange={(e) => setModel(e.target.value)} className='mb-6' placeholder='Enter a car model' />
//                 <Input onChange={(e) => setPrice(e.target.value)} className='mb-6' placeholder='Enter a car price' />
//                 <Textarea onChange={(e) => setDescription(e.target.value)} className='mb-6' placeholder='Enter description' />
//                 <Button type='submit'>Add</Button>
//             </form>
//         </div>
//     )
// }

// export default Vendor

import { supabase } from '../config/supabase'
import { Button } from '@heroui/button'
import { Input, Textarea } from '@heroui/input'
import { form } from '@heroui/theme'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'Yup'

const Vendor = () => {


    const formik = useFormik({
        initialValues: {
            name: '',
            model: '',
            price: '',
            description: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            model: Yup.string().required('model is required'),
            price: Yup.string().required('price is required'),
            description: Yup.string().required('description is required'),

        }),
        onSubmit: async (values) => {
            const { error } = await supabase
                .from('cars')
                .insert({ name: values.name, model: values.model, price: values.price, description: values.description })
        }
    
    })


return (
    <div>
        <h1 className='font-bold text-3xl text-center mt-2'>Add Car</h1>
        <form onSubmit={formik.handleSubmit} className='w-[50%] mx-auto mt-8 bg-slate-100 h-[400px] p-4' >
            <Input name='name' onChange={formik.handleChange} className='mb-6' placeholder='Enter a car name' />
            {
                formik.touched && formik.errors.name && (
                    <p className='text-red-500'>{formik.errors.name}</p>
                )
            }
            <Input name='model' onChange={formik.handleChange} className='mb-6' placeholder='Enter a car model' />
            {
                formik.touched && formik.errors.model && (
                    <p className='text-red-500'>
                        {formik.errors.model}
                    </p>
                )
            }
            <Input name='price' onChange={formik.handleChange} className='mb-6' placeholder='Enter a car price' />
            <Textarea name='description' onChange={formik.handleChange} className='mb-6' placeholder='Enter description' />
            <Button type='submit'>Add</Button>
        </form>
    </div>
)
}

export default Vendor
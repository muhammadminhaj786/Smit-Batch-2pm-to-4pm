import { Input } from '@heroui/input'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Home = () => {

    // let [value, setValue] = useState('')
    // console.log(!!value)

    // const change = () => {
    //     // setValue(value => !value)
    //     setValue(!value)

    // }

    // // console.log(value)

    // return (
    //     <div>
    //         <p>{value ? 'hello' : 'world'}</p>
    //         <button onClick={change}>click</button>
    //     </div>
    // )

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        // validationSchema: Yup.object({
        //     email: Yup.string().required('Please fill out this field.'),
        //     password: Yup.string().required('Please fill out this field.').min(6,'password must be atleast 6 characters')
        // }),
        validationSchema: Yup.object({
            email: Yup.string().required('email is required'),
            password: Yup.string().required('password is required')
        }),
        onSubmit:  (value)=>{
            console.log(value)
            
        }
    })

    return (
        <div>
            <h1 className='text-red-500'>Form</h1>
          <form onSubmit={formik.handleSubmit}>
          <input name='email' onChange={formik.handleChange}  className='h-[50px] rounded-lg bg-zinc-300 w-[260px] p-4' type="text" placeholder='Enter Email'/>
          <br /><br />
          {
            formik.touched.email && formik.errors.email &&  (
                <p className='text-red-500'>{formik.errors.email}</p>
            )
          }
            <input name='password' onChange={formik.handleChange} className='h-[50px] rounded-lg bg-zinc-300 w-[260px] p-4' type="text" placeholder='Enter password'/>
            {
                formik.touched.password && formik.errors.password && (
                    <p className='text-red-500'>{formik.errors.password}</p>
                )
            }

            <br /><br />
            <button type='submit' className='w-[100px] h-[50px] border-none bg-green-500 rounded-lg'>submit</button>
          </form>
        </div>
    )

}

export default Home
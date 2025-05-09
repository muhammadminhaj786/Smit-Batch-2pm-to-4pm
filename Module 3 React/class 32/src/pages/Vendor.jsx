import { Button } from "@heroui/button";
import { supabase } from "../config/supabase";

import { Input, Textarea } from "@heroui/input";
import { form } from "@heroui/theme";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "Yup";
import MyCard from "../component/MyCard";


const Vendor = () => {
 

    const [fileUrl, setFileUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([])

    const handleFileChange = async (e) => {
        const avatarFile = e.target.files[0];
        const { data, error } = await supabase.storage
            .from("images")
            .upload(`public/${avatarFile.name}${Math.random(100)}.png`, avatarFile, {
                cacheControl: "3600",
                upsert: false,
            });

        if (error) {
            toast.error(error.message);
        } else {
            console.log(data);
            setFileUrl(data.fullPath);
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            model: "",
            price: "",
            description: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            model: Yup.string().required("model is required"),
            price: Yup.string().required("price is required"),
            description: Yup.string().required("description is required"),
        }),
        onSubmit: async (values) => {
            if (fileUrl) {
                const { error } = await supabase
                    .from("cars")
                    .insert({
                        name: values.name,
                        model: values.model,
                        price: values.price,
                        description: values.description,
                        image: fileUrl,
                    });
                if (error) {
                    toast.error(error.message);
                }
            } else {
                console.log("please upload a file");
            }
        },
    });

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
            <div>
                <h1 className="font-bold text-3xl text-center mt-2">Add Car</h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className="w-[50%] mx-auto mt-8 bg-slate-100 h-[400px] p-4"
                >
                    <Input
                        name="name"
                        onChange={formik.handleChange}
                        className="mb-6"
                        placeholder="Enter a car name"
                    />
                    {formik.touched && formik.errors.name && (
                        <p className="text-red-500">{formik.errors.name}</p>
                    )}
                    <Input
                        name="model"
                        onChange={formik.handleChange}
                        className="mb-6"
                        placeholder="Enter a car model"
                    />
                    {formik.touched && formik.errors.model && (
                        <p className="text-red-500">{formik.errors.model}</p>
                    )}
                    <Input
                        name="price"
                        onChange={formik.handleChange}
                        className="mb-6"
                        placeholder="Enter a car price"
                    />
                    <Textarea
                        name="description"
                        onChange={formik.handleChange}
                        className="mb-6"
                        placeholder="Enter description"
                    />
                    <input
                        className="mb-4"
                        accept="/*"
                        onChange={handleFileChange}
                        type="file"
                    />
                    {/* {
                    loading ? <Button  type='submit'>Add</Button> :<></>
                } */}
                    <Button isDisabled={loading} type="submit">
                        Add
                    </Button>
                </form>
            </div>
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
    );
};

export default Vendor;

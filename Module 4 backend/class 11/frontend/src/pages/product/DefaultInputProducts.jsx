import { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard.tsx"

import Label from "../../components/form/Label.tsx"
import Input from "../../components/form/input/InputField.tsx";
import TextArea from "../../components/form/input/TextArea.tsx";
import Button from "../../components/ui/button/Button.tsx";
import { MdOutlineOutbox } from "react-icons/md";
import axios from 'axios'



export default function DefaultInputProducts() {


    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState(0)


    const handleSubmit = async (e) => {
        e.preventDefault()
        
      try {

        const addProduct = await axios.post('http://localhost:8080/product', {
            name: name,
            description: description,
            price:price,
            stock:stock
        })


        console.log(addProduct)
        
      } catch (error) {
        console.log(error.message)
      }

    }




    return (
        <ComponentCard title="Create Product">
            <div  className="space-y-6">

                <div>
                    <Label htmlFor="inputTwo">Product Name</Label>
                    <Input onChange={(e)=>setName(e.target.value)} type="text" id="inputTwo" placeholder="Enter Product Name" />
                </div>
                <div>
                    <Label htmlFor="inputTwo">Product Price</Label>
                    <Input onChange={(e)=>setPrice(e.target.value)} type="text" id="inputTwo" placeholder="Enter Product Price" />
                </div>
                <div>
                    <Label htmlFor="inputTwo">Product Stock</Label>
                    <Input onChange={(e)=>setStock(e.target.value)} type="number" id="inputTwo" placeholder="Enter Product Stock" />
                </div>
                <div>
                    <Label>Description</Label>
                    <TextArea

                        value={description}
                        onChange={(value) => setDescription(value)}
                        rows={6}
                    />
                </div>


                <div>
                    <Label htmlFor="tm"> Payment With Card</Label>
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Card number"
                            className="pl-[62px]"
                        />
                        <span className="absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="6.25" cy="10" r="5.625" fill="#E80B26" />
                                <circle cx="13.75" cy="10" r="5.625" fill="#F59D31" />
                                <path
                                    d="M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z"
                                    fill="#FC6020"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <div >
                    <Button
                        size="sm"
                        variant="primary"
                        startIcon={<MdOutlineOutbox className="size-5" />}
                        onClick={handleSubmit}
                    >
                        Add Product
                    </Button>

                    
                </div>
            </div>
        
        </ComponentCard>
        
    );
}

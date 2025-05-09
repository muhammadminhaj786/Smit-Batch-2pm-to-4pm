import React from 'react'
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { supabase } from '../config/supabase';

const MyCard = ({ data }) => {
    const deleteCar = async () => {
        console.log(data.id)
        const {error}= await supabase
            .from('cars')
            .delete()
            .eq('id', data.id)
            .select()

        if(error){
            console.log(error.message)
        }else{
            console.log('car deleted successfully')
        }
    }
    const header = (
        <img
            alt="Card"
            // src="https://primefaces.org/cdn/primereact/images/usercard.png"
            src={`https://vuaxmyndmqheweuttavv.supabase.co/storage/v1/object/${data.image}`}
            style={{ height: '350px', objectFit: 'cover' }}
        />
    );
    const footer = (
        <div className='flex justify-between'>
            <Button className='bg-blue-400 w-full text-white ' label="Edit" icon="pi pi-check" />
            <Button
                onClick={deleteCar}
                className='bg-red-500 w-full h-[40px] text-white '
                label="Delete"
                severity="secondary"
                icon="pi pi-times"
                style={{ marginLeft: "0.5em" }}
            />
        </div>
    );

    console.log(data)



    return (
        <div className="card flex justify-content-center">
            <Card
                title={data.name}
                subTitle={data.model}
                footer={footer}
                header={header}
                className="w-[300px]  "
            //   style={{width: "300px"}}
            >
                <p className="m-0">
                    {data.description}
                </p>
                <p className='text-3xl mt-4 font-bold'>

                    {data.price} PKR
                </p>
            </Card>
        </div>
    )
}

export default MyCard
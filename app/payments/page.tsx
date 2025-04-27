import { paymentData } from '@/data'
import React from 'react'
import { columns, Payment } from './columns';
import { DataTable } from './data-table';

const getData = async (): Promise<Payment[]> => {
    return paymentData;
}
const page = async () => {
    const data = await getData();
    return (
        <div className="">
            <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
                <h1 className='font-semibold'>All Payments</h1>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default page
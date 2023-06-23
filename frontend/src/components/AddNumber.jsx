import axios from 'axios'
import React, { useState } from 'react'

const AddNumber = ({ setAddNumber }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:4000/number', {
            firstName,
            lastName,
            phone
        })

        if (res.statusText = 'OK') {
            alert('Number Added')
            setAddNumber(false)
        }
    }

    return (
        <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-screen flex justify-center items-center '>
            <form onSubmit={handleSubmit} className=' max-w-[40rem] shadow-xl z-10 px-10 py-7 bg-red-200'>
                <div className='flex flex-col gap-2 mb-5'>
                    <label htmlFor="firstName" className='text-xl'>First Name</label>
                    <input
                        type="text"
                        id='firstName'
                        name='firstName'
                        onChange={(e) => setFirstName(e.target.value)}
                        className='h-10 rounded-md px-3'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="firstName" className='text-xl'>Last Name</label>
                    <input
                        type="text"
                        id='lastName'
                        name='lastName'
                        onChange={(e) => setLastName(e.target.value)}
                        className='h-10 rounded-md px-3'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="firstName" className='text-xl'>Phone</label>
                    <input
                        type="text"
                        id='phone'
                        name='phone'
                        onChange={(e) => setPhone(e.target.value)}
                        className='h-10 rounded-md px-3'
                    />
                </div>
                <div className='text-end'>
                    <button type='submit' className='mt-6 px-7 py-3 bg-blue-950 text-white'>Add</button>
                </div>
            </form>
            <div className='bg-gray-400 opacity-50 absolute top-0 right-0 bottom-0 left-0 z-0' onClick={() => setAddNumber(false)}></div>
        </div>
    )
}

export default AddNumber
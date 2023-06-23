import React from 'react'

const Navbar = ({ setAddNumber }) => {
    return (
        <div className='shadow-lg'>
            <header className=' max-w-[1440px] mx-auto'>
                <div className=' mx-2 md:mx-8 flex justify-between items-center py-4'>
                    <div className='text-2xl font-semibold tracking-widest'>Regitstry</div>
                    <div className='flex gap-7'>
                        <input type="text" className=' border-2 border-black  px-5 rounded-md hidden md:block' />
                        <button onClick={() => setAddNumber(true)}
                            className=' bg-blue-950 text-white px-6 py-2 rounded-lg'
                        >New</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
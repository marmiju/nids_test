import React from 'react'

export const Award = () => {
    return (
        <div className='  p-10 max-w-[1000px] bg-white rounded-2xl mx-auto shadow-2xl -mt-20 text-3xl font-bold flex justify-around'>
            <h1 >{new Date().getFullYear() - 2012 + "+"}
                <span className='text-sm'> <br />YEARS OF SUCCESS</span>
            </h1>
            <div className='border-r-2'> </div>
            <h1 >{new Date().getFullYear() - 2012}
                <span className='text-sm'><br />YEARS OF SUCCESS</span>
            </h1>
            <div className='border-r-2'> </div>
            <h1 >{new Date().getFullYear() - 2012}
                <span className='text-sm'><br />YEARS OF SUCCESS</span>
            </h1>
        </div>
    )
}

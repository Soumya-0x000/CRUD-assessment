import React, { useState } from 'react'
import FormEmpAddDialog from './FormEmpAddDialog';
import FormEmpDelAllDialog from './FormEmpDelAllDialog';

const Header = () => {
    return (
        <div className=' bg-slate-700 text-white flex items-center justify-between py-3 px-9 max- w-[75rem] rounded-t-md'>
            <div className='text-3xl'>
                Manage Employees
            </div>

            <div className='flex gap-6'>
                <FormEmpDelAllDialog/>
                <FormEmpAddDialog/>
            </div>

        </div>    
    )
}

export default Header;

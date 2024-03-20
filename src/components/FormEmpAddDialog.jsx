import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FaCirclePlus } from "react-icons/fa6";
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../store/employeeSLice.js';
import { v4 as uuidv4 } from 'uuid';

const FormEmpAddDialog = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const id = uuidv4();
        const {name, email, address, phone} = formJson;
        if(id && name.trim().length > 5 && email.includes('@') && email.trim().length > 5  && address.trim().length > 5 && phone.trim().length > 5 && !isNaN(phone)){
            dispatch(addEmployee({id, name, email, address, phone}));
            handleClose();
        } else {
            if (open) {
                alert("Please fill out all fields with proper details");
            }
        }
    };

    return (
        <>
            <button 
            className='px-3 py-1 flex items-center gap-x-2 bg-green-600 active:scale-105 transition-all rounded-md'
            onClick={handleClickOpen}>
                <FaCirclePlus className='text-lg'/> 
                Add New Employee
            </button>

            <Dialog
            open={open}
            onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <div className='flex items-center justify-between'>
                        <DialogTitle>Add Employee</DialogTitle>
                        <DialogTitle>
                            <RxCross1 onClick={handleClose} className='cursor-pointer'/>
                        </DialogTitle>
                    </div>

                    <DialogContent>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required className="w-full border rounded-md p-2 mb-2"/>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required className="w-full border rounded-md p-2 mb-2"/>

                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required className="w-full border rounded-md p-2 mb-2"/>

                        <label htmlFor="address">Address:</label>
                        <textarea id="address" name="address" rows="4" className="w-full border rounded-md p-2 mb-2"></textarea>
                    </DialogContent>

                    <DialogActions>
                        <button onClick={handleClose} className='px-4 py-1 text-lg'>
                            Cancel
                        </button>

                        <button 
                        className='px-4 py-1 text-lg bg-green-700 text-green-200 rounded-md'
                        type="submit">
                            Add
                        </button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}

export default FormEmpAddDialog;

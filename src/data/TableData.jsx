import React, { useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { editEmployee, setDelId, setEditId } from '../store/employeeSLice.js'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { RxCross1 } from 'react-icons/rx';

export const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'address', headerName: 'Address', width: 400 },
    { field: 'phone', headerName: 'Phone', type: 'number', width: 170 },
    { 
        field: 'actions', 
        headerName: 'Actions', 
        width: 110,
        renderCell: (params) => (
            <ActionButtons id={params.row.id} />
        ) 
    }, 
];

const ActionButtons = ({ id }) => {
    const dispatch = useDispatch();
    const dataToEdit = useSelector(state => state.employee.empData)
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    })
    
    const handleEdit = () => {
        const empToEdit = dataToEdit.find(emp => emp.id === id);
        if (empToEdit) {
            dispatch(setEditId(id));
            setFormData({
                name: empToEdit.name,
                email: empToEdit.email,
                address: empToEdit.address,
                phone: empToEdit.phone,
            })
            setOpen(true);
        }
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value});
    };

    const handleDelete = () => {
        dispatch(setDelId(id));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        console.log(formData)
        event.preventDefault();
        const {name, email, address, phone} = formData;
        if(id !== '' && name.trim().length > 5 && email.includes('@') && email.trim().length > 5  && address.trim().length > 5 && phone.trim().length > 5 && !isNaN(phone)){
            dispatch(editEmployee({id, name, email, address, phone}));
            handleClose();
        } else {
            if (open) {
                alert("Please fill out all fields with proper details");
                console.log({id, name, email, address, phone})
            }
        }
    };

    return (
        <>
            <div className=" flex text-lg gap-x-3 ">
                <MdEdit onClick={handleEdit} className=" cursor-pointer text-yellow-400" />
                <MdDelete onClick={handleDelete} className=" cursor-pointer text-red-400" />
            </div>

            <Dialog
            open={open}
            onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <div className='flex items-center justify-between'>
                        <DialogTitle>Edit Employee</DialogTitle>
                        <DialogTitle>
                            <RxCross1 onClick={handleClose} className='cursor-pointer'/>
                        </DialogTitle>
                    </div>

                    <DialogContent>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required className="w-full border rounded-md p-2 mb-2" value={formData.name} onChange={handleInputChange}/>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required className="w-full border rounded-md p-2 mb-2" value={formData.email} onChange={handleInputChange}/>

                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required className="w-full border rounded-md p-2 mb-2" value={formData.phone} onChange={handleInputChange}/>

                        <label htmlFor="address">Address:</label>
                        <textarea id="address" name="address" rows="4" className="w-full border rounded-md p-2 mb-2" value={formData.address} onChange={handleInputChange}/>
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
};

export default ActionButtons;

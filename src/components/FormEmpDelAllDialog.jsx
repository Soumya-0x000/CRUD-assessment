import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FaCircleMinus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { delAllEmployee, delEmpInBundle } from '../store/employeeSLice';

const FormEmpDelAllDialog = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const delIds = useSelector(state => state.employee.selectedDelIds)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleDeleteAllEntry = () => {
        if (delIds.length >= 1) {
            dispatch(delEmpInBundle(delIds))
            setOpen(false);
        } else {
            dispatch(delAllEmployee([]))
            setOpen(false);
        }
    };

    return (
        <React.Fragment>
            <button 
            className=' px-3 py-1 flex items-center gap-x-2 bg-red-600 active:scale-105 transition-all rounded-md'
            onClick={handleClickOpen}>
                <FaCircleMinus className='text-lg'/> 
                Delete
            </button>

            <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
            component: 'form',
            onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                handleClose();
            },
            }}>
                <div className=' flex items-center justify-between'>
                    <DialogTitle>Delete Employee</DialogTitle>
                    <DialogTitle>
                        <RxCross1 onClick={handleClose} className=' cursor-pointer'/>
                    </DialogTitle>
                </div>

                <DialogContent>
                    <DialogContentText>
                        <p>Are you sure you want to delete these records?</p>
                        <p className='text-yellow-400 mt-8 text-lg'>This action can not be undone!</p>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <button onClick={handleClose}
                    className='px-4 py-1 text-lg'>
                        Cancel
                    </button>

                    <button type="submit" 
                    className='px-4 py-1 text-lg bg-red-700 text-red-200 rounded-md'
                    onClick={handleDeleteAllEntry}>
                        Delete all
                    </button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default FormEmpDelAllDialog;

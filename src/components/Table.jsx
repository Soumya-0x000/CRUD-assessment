import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../data/TableData';
import './table.css';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setSelectedDel } from '../store/employeeSLice';

const Table = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const tableData = useSelector(state => state.employee.empData)
    const dispatch = useDispatch();

    const handleSelectionChange = (targetRow) => {
        if (targetRow.formattedValue === 'no' && !selectedRows.includes(targetRow.id)) {
            setSelectedRows(prevSelectedRows => [...prevSelectedRows, targetRow.id]);
        } else if (targetRow.formattedValue === 'yes') {
            setSelectedRows(prevSelectedRows => prevSelectedRows.filter(id => id !== targetRow.id));
        }
    };
    
    useEffect(() => {
        dispatch(setSelectedDel(selectedRows));
    }, [dispatch, selectedRows])

    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
             {/* header part  */}
            <Header/>

            {/* main table */}
            <div className=' '>
                <DataGrid 
                    rows={tableData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 1, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    onCellClick={handleSelectionChange}
                />
            </div>
        </div>
    );
}

export default Table

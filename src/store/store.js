import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSLice";

export const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer
    }
}) 
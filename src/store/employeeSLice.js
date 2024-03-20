import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    empData: [
        { id: 0, name: 'Mr. Snow White', email: 'Snow@gmail.com', address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae elit mollis fermentum.', phone: '34652346' },
        { id: 1, name: 'Mr. John Doe', email: 'john@example.com', address: 'Vivamus sed lacus ut odio fringilla mollis. Integer a libero et libero ultrices posuere ac at risus.', phone: '123456789' },
        { id: 2, name: 'Ms. Alice Johnson', email: 'alice@example.com', address: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', phone: '987654321' },
        { id: 3, name: 'Mr. Bob Smith', email: 'bob@example.com', address: 'Fusce euismod magna vitae enim tincidunt, non sodales arcu dignissim. Morbi condimentum est eget tortor sagittis.', phone: '876543210' },
        { id: 4, name: 'Ms. Emma Watson', email: 'emma@example.com', address: 'Aliquam pretium imperdiet est, nec suscipit eros vestibulum a. Nam hendrerit euismod dapibus.', phone: '135792468' },
        { id: 5, name: 'Mr. David Brown', email: 'david@example.com', address: 'Duis auctor odio nec ipsum tempor, eget volutpat felis auctor. Curabitur ultrices lacus sed augue scelerisque, eget molestie justo placerat.', phone: '246813579' },
        { id: 6, name: 'Ms. Sophia Miller', email: 'sophia@example.com', address: 'Suspendisse potenti. Vestibulum non ultricies mauris. Integer non ultricies magna, a tincidunt elit.', phone: '111222333' },
        { id: 7, name: 'Ms. Olivia Wilson', email: 'olivia@example.com', address: 'Etiam convallis libero vel enim lobortis, quis hendrerit metus ullamcorper. Nulla sed neque non purus consectetur dignissim.', phone: '444555666' },
        { id: 8, name: 'Mr. Michael Taylor', email: 'michael@example.com', address: 'Sed vitae sem nec odio consectetur fermentum. Mauris elementum magna sed lacus luctus, eget fringilla purus molestie.', phone: '777888999' },
        { id: 9, name: 'Mr. William Anderson', email: 'william@example.com', address: 'Phasellus consequat sem nec neque facilisis, at ultrices enim lobortis. Maecenas aliquet ipsum vel magna vehicula convallis.', phone: '000111222' },
        { id: 10, name: 'Ms. Charlotte Harris', email: 'charlotte@example.com', address: 'Vivamus a luctus odio. Nam euismod turpis ut magna faucibus, nec placerat felis vestibulum.', phone: '333444555' },
        { id: 11, name: 'Mr. Daniel Martinez', email: 'daniel@example.com', address: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', phone: '666777888' },
        { id: 12, name: 'Ms. Emily Thompson', email: 'emily@example.com', address: 'Nulla facilisi. Fusce posuere risus non sapien tempus varius. Donec malesuada magna id dui tempor, et convallis metus aliquam.', phone: '999000111' },
        { id: 13, name: 'Mr. Alexander Clark', email: 'alexander@example.com', address: 'Curabitur a efficitur orci. Nam id lectus eu eros fringilla pharetra. Duis nec augue vitae odio blandit sodales.', phone: '222333444' },
        { id: 14, name: 'Ms. Mia Lewis', email: 'mia@example.com', address: 'Nunc eget nisi ac dui cursus posuere. Vivamus nec eros magna. Phasellus vehicula elit eu ante eleifend fringilla.', phone: '555666777' },
        { id: 15, name: 'Mr. Ethan Walker', email: 'ethan@example.com', address: 'Sed sit amet velit nec elit laoreet posuere. Ut consequat lorem sed metus convallis, at maximus justo sodales.', phone: '888999000' },
        { id: 16, name: 'Ms. Isabella Green', email: 'isabella@example.com', address: 'Quisque vestibulum, felis eu dignissim pellentesque, lorem risus elementum dolor, nec aliquam quam metus eu purus.', phone: '333444555' },
        { id: 17, name: 'Ms. Ava Martinez', email: 'ava@example.com', address: 'Aliquam at nisi efficitur, bibendum odio eu, dictum eros. Ut vitae ante id libero tincidunt bibendum.', phone: '666777888' },
        { id: 18, name: 'Mr. James Anderson', email: 'james@example.com', address: 'Donec ultrices ligula et aliquet pharetra. In vitae justo at magna laoreet venenatis id ac massa.', phone: '999000111' },
        { id: 19, name: 'Mr. Logan Harris', email: 'logan@example.com', address: 'Praesent tempor mi vel mauris fermentum, nec rutrum arcu vehicula. Phasellus id ipsum commodo, interdum nunc eget, convallis urna.', phone: '222333444' },
        { id: 20, name: 'Mr. Benjamin Wilson', email: 'benjamin@example.com', address: 'Morbi ut eros ut lorem dignissim ultricies at id nunc. Proin eget eros a nunc luctus luctus.', phone: '555666777' },
        { id: 21, name: 'Ms. Chloe Johnson', email: 'chloe@example.com', address: 'Nullam nec est ut diam euismod malesuada a eget nisi. Sed id justo ac leo aliquet eleifend nec eget odio.', phone: '888999000' },
        { id: 22, name: 'Mr. Liam Thompson', email: 'liam@example.com', address: 'Nam maximus magna a turpis pellentesque, quis vestibulum risus venenatis. Sed at risus nec ipsum lacinia mattis.', phone: '111222333' },
        { id: 23, name: 'Ms. Ella Brown', email: 'ella@example.com', address: 'Vestibulum consectetur justo nec sem vehicula, ut sollicitudin tortor accumsan. Proin vestibulum dolor id tortor condimentum vehicula.', phone: '444555666' },
        { id: 24, name: 'Ms. Nora Martin', email: 'nora@example.com', address: 'Suspendisse potenti. Ut vehicula nunc id lectus ullamcorper condimentum. Nunc feugiat mi vitae convallis dignissim.', phone: '777888999' },
    ],
    editId: '',
    delId: '',
    selectedDelIds: [],
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: function(state, action) {
            const {id, name, email, address, phone} = action.payload;
            state.empData.push({id, name, email, address, phone})
        },
        delAllEmployee: function(state, action) {
            state.empData = action.payload
        },
        editEmployee: function(state, action) {
            const updatedEmployee = action.payload;
            const index = state.empData.findIndex(employee => employee.id === updatedEmployee.id);
            if (index !== -1) {
                state.empData[index] = { ...updatedEmployee };
            }
        },
        setEditId: function(state, action) {
            state.editId = action.payload;
        },
        setDelId: function(state, action) {
            state.delId = action.payload;
            const filteredEmpData = state.empData.filter(item => item.id !== action.payload)
            state.empData = filteredEmpData
        },
        setSelectedDel: function(state, action) {
            state.selectedDelIds = action.payload;
        },
        delEmpInBundle: function(state, action) {
            const ids = action.payload;
            state.empData = state.empData.filter(employee => !ids.includes(employee.id));
        }
    }
});

export const {
    addEmployee, 
    delAllEmployee, 
    editEmployee, 
    setDelId, 
    setEditId, 
    setSelectedDel, 
    delEmpInBundle
} = employeeSlice.actions;
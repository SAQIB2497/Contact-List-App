import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: "",
    contact: {
        name: "",
        surname: "",
        tel: ""
    },
    totalContacts: 0,
    contactList: []
}

const contactSlice = createSlice({
    name: "contactList",
    initialState,
    reducers: {
        setExistingContactKey: (state, action) => {
            state.key = action.payload;
        },
        updateContact: (state, action) => {
            state.key = "";
        },
        fetchTotalContacts: (state, action) => {
            state.totalContacts = action.payload ? Object.keys(action.payload).length : 0;
        },
        setContactList: (state, action) => {
            state.contactList = action.payload;
        }
    }
})

export const contactListActions = contactSlice.actions;
export default contactSlice;
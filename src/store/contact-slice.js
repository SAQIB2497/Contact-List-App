import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: "",
    contact: {
        name: "",
        surname: "",
        tel: ""
    },
    totalContacts: 0
}

const contactSlice = createSlice({
    name: "contactList",
    initialState,
    reducers: {

       
        setExistingContactKey: (state, action) => {
            state.key = action.payload;
        },
        updateContact: (state, action) => {
            const { key, name, surname, tel } = action.payload;
            fetch(`https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/${key}.json`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, surname, tel })
                }).catch(error => console.log(error));
            state.key = "";
        },
        fetchTotalContacts: (state, action) => {
            state.totalContacts = Object.keys(action.payload).length

        }
    }
})

export const contactListActions = contactSlice.actions;

export default contactSlice; 
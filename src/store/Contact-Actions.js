import { contactListActions } from "./contact-slice";

const fetchContactsAndUpdate = async (dispatch) => {
    try {
        const res = await fetch("https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json");
        const data = await res.json();
        const contactsData = [];
        for(const key in data) {
            contactsData.push({
                key: key,
                ...data[key]
            });
        }
        dispatch(contactListActions.setContactList(contactsData));
        dispatch(contactListActions.fetchTotalContacts(data));
    } catch (error) {
        console.log(error);
    }
}

export const addContact = (userData) => {
    return async (dispatch) => {
        try {
            await fetch('https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            });
            await fetchContactsAndUpdate(dispatch);
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteContact = (deleteKey) => {
    return async (dispatch) => {
        try {
            await fetch(`https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${deleteKey}.json`, {
                method: "DELETE"
            });
            await fetchContactsAndUpdate(dispatch);
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateContact = (key, contactData) => {
    return async (dispatch) => {
        try {
            await fetch(`https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${key}.json`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData)
            });
            await fetchContactsAndUpdate(dispatch);
        } catch (error) {
            console.log(error);
        }
    }
}
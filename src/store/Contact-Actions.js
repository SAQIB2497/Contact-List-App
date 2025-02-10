import { contactListActions } from "./contact-slice";

export const addContact = (userData) => {
    return (dispatch) => {
        fetch('https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData)
            })
            .then(() => {
                fetch("https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json")
                    .then(res => res.json())
                    .then(data => {
                        dispatch(contactListActions.fetchTotalContacts(data));
                    })

            })
            .catch(error => { console.log(error); });
    }

}

export const deleteContact = (deleteKey) => {
    return (dispatch) => {
        fetch(`https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${deleteKey}.json`,
            {
                method: "DELETE"
            })
            .then(() => {
                fetch("https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json")
                    .then(res => res.json())
                    .then(data => {
                        dispatch(contactListActions.fetchTotalContacts(data));
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }

}
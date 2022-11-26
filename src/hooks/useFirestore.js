import { useReducer, useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

let initialState = {
    document: null,
    isPending: false, 
    error: null,
    success: null,
}

const firestoreReducer = (state, { type, payload }) => {
    switch (type) {
        default: 
            return state;
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // collction ref
    const ref = projectFirestore.collection(collection);

    // add a document
    const addDocument = (doc) => {

    }

    // delete a document
    const deleteDocument = (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { addDocument, deleteDocument, response};
}


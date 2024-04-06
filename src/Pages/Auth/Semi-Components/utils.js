import { db, auth } from './../../../providers/firebase';
import { addDoc, collection } from 'firebase/firestore';
// import db from './../../../providers/firebase';

export const handleCBOReg = async (formData) => {
    try {
        const contactPersonEmail = formData.email;
        console.log(contactPersonEmail)
        const password = contactPersonEmail;
        const userCredential = await auth.createUserWithEmailAndPassword(contactPersonEmail, password);
        const contactPersonID = userCredential.user.uid;

        const formDataWithContactPersonID = { ...formData, contactPersonID };
        const docRef = await addDoc(collection(db, 'CBOData'), formDataWithContactPersonID);
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

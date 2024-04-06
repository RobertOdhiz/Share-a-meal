import { db } from './../../../providers/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();

export const handleCBOReg = async (formData) => {
    try {
        const contactPersonEmail = formData.email;
        console.log(contactPersonEmail)
        const password = contactPersonEmail;
        const userCredential = await createUserWithEmailAndPassword(auth, contactPersonEmail, password)
        
        await sendEmailVerification(userCredential.user);
        
        const contactPersonID = userCredential.user.uid;

        const formDataWithContactPersonID = { ...formData, contactPersonID };
        const docRef = await addDoc(collection(db, 'CBOData'), formDataWithContactPersonID);
        console.log('Document written with ID: ', docRef.id);

        return 'Registration successful! Please check your email for verification.';
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            return error.message;
          } else {
            return 'An unexpected error occurred.';
          }
    }
};

export const handlePartnerReg = async (formData) => {
    try {
        const contactPersonEmail = formData.email;
        console.log(contactPersonEmail)
        const password = contactPersonEmail;
        const userCredential = await createUserWithEmailAndPassword(auth, contactPersonEmail, password)
        
        await sendEmailVerification(userCredential.user);
        const contactPersonID = userCredential.user.uid;

        const formDataWithContactPersonID = { ...formData, contactPersonID };
        const docRef = await addDoc(collection(db, 'PartnerData'), formDataWithContactPersonID);
        console.log('Document written with ID: ', docRef.id);

        return 'Registration successful! Please check your email for verification.';
    } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
        return error.message;
      } else {
        return 'An unexpected error occurred.';
      }
    }
};

export const handleLogin = async (formData) => {
    try {
      const { email, password } = formData;
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user.uid);
  
      return 'Login successful!';
    } catch (error) {
      return Promise.reject(error);
    }
  };

  export const handleSendPasswordResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully!'); // Optional logging
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      throw error; // Re-throw the error for handling in the calling component
    }
  };

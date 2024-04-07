import { getAuth } from "firebase/auth";
import { db } from "../providers/firebase";
import { where, query, getDocs, collection } from "firebase/firestore";

const auth = getAuth();

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUserData = async () => {
  try {
    await delay(2000);
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error("No user currently logged in");
    }

    const uid = currentUser.uid;

    const q = query(collection(db, "Partner"), where("contactPersonID", "==", uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching document found for the logged-in user.");
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

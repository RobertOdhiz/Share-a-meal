import { getAuth } from "firebase/auth";
import { db } from "../providers/firebase";
import { where, query, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const auth = getAuth();

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUserData = async (collName) => {
  try {
    await delay(2000);
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error("No user currently logged in");
    }

    const uid = currentUser.uid;

    const q = query(collection(db, collName), where("contactPersonID", "==", uid));
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

export const useFetchUserData = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const collections = ["CBOData", "Partner", "PartnerData"];
  
        for (let i = 0; i < collections.length; i++) {
          try {
            const userData = await getUserData(collections[i]);
            delay(2000);
            if (userData !== null) {
              setUserData(userData);
              break;
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
      };
  
      fetchData();
    }, []);
  
    return userData;
  };
  

  export const getUserDocuments = async (collName) => {
    try {
      await delay(2000);
      const currentUser = auth.currentUser;
  
      if (!currentUser) {
        throw new Error("No user currently logged in");
      }
  
      const uid = currentUser.uid;
  
      const q = query(collection(db, collName), where("contactPersonID", "==", uid));
      const querySnapshot = await getDocs(q);
  
      const userDocuments = [];
  
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        userDocuments.push(userData);
      });
  
      return userDocuments;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return [];
    }
  };

  export const useFetchUserDocuments = (collectionName) => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userData = await getUserDocuments(collectionName);
          setUserData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchData();
    }, [collectionName]);
  
    return userData;
  };
  

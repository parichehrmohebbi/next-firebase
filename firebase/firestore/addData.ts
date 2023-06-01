import firebase_app from "../config";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(collectionName, data) {
  let result = null;
  let error = null;

  const icollection = collection(db, collectionName);
  try {
    result = await addDoc(icollection, data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

import firebase_app from "../config";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
} from "@firebase/firestore";

const db = getFirestore(firebase_app);
export async function getDocument(collectionName, id) {
  let docRef = doc(db, collectionName, id);
  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getDocuments(collectionName) {
  let result = null;
  let error = null;

  try {
    const q = query(collection(db, collectionName));
    const data = await getDocs(q);
    result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    error = e;
  }

  return { result, error };
}

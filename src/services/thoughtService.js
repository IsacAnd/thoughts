import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { auth } from "../firebase";

const thoughtsCollection = collection(db, "thoughts");

export async function addThought(title, description, likes = 0, dislikes = 0) {
  try {
    const userId = auth.currentUser?.uid || "desconhecido";

    const newThought = {
      id: 1,
      title,
      description,
      likes,
      dislikes,
      timeStamp: Timestamp.now(),
      userId: userId,
    };

    await addDoc(thoughtsCollection, newThought);
  } catch (error) {
    console.error("Erro ao adicionar pensamento:", error);
    return { success: false, message: "Erro ao adicionar pensamento." };
  }
}

export function getThoughts(callback) {
  const thoughtsRef = collection(db, "thoughts");
  const q = query(thoughtsRef, orderBy("timeStamp", "desc"));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const thoughts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(thoughts);
    },
    (error) => {
      console.error("Erro ao escutar os pensamentos:", error);
    }
  );

  return unsubscribe;
}

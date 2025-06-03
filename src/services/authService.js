import { auth, db, storage } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function registerUser({ email, password, username, image }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    let photoURL = null;

    if (image) {
      const storageRef = ref(storage, `users/${user.uid}/profileImage`);
      const snapshot = await uploadBytes(storageRef, image);
      photoURL = await getDownloadURL(snapshot.ref);
    }

    await updateProfile(user, {
      displayName: username,
      photoURL: photoURL,
    });

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      username,
      photoURL: photoURL,
      createdAt: new Date(),
    });

    return user;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    localStorage.setItem(
      "user",
      JSON.stringify({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        username: userCredential.user.displayName,
      })
    );

    return userCredential;
  } catch (error) {
    throw error;
  }
}

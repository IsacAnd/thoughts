import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs, // Você já tem, mas usaremos também para buscar usuários
  doc,
  getDoc, // Precisaremos desta para buscar documentos de usuários individuais
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { auth } from "../firebase"; // Importe auth para acesso ao currentUser

const thoughtsCollection = collection(db, "thoughts");
const usersCollection = collection(db, "users"); // Referência à sua coleção de usuários

// Certifique-se de que sua função addThought não está mais tentando salvar username/photoURL
// diretamente no pensamento, se você não os tiver lá.
// Se você está salvando APENAS o userId no pensamento, então addThought ficaria assim:
export async function addThought(title, description, likes = 0, dislikes = 0) {
  try {
    const user = auth.currentUser;

    if (!user) {
      console.error(
        "Nenhum usuário logado. Não é possível adicionar pensamento."
      );
      throw new Error("Usuário não autenticado.");
    }

    const newThought = {
      title,
      description,
      likes,
      dislikes,
      timeStamp: Timestamp.now(),
      userId: user.uid,
    };

    await addDoc(thoughtsCollection, newThought);
    return { success: true, message: "Pensamento adicionado com sucesso." };
  } catch (error) {
    console.error("Erro ao adicionar pensamento:", error.message);
    throw error;
  }
}

export function getThoughts(callback) {
  const thoughtsRef = collection(db, "thoughts");
  const q = query(thoughtsRef, orderBy("timeStamp", "desc"));

  const unsubscribe = onSnapshot(
    q,
    async (snapshot) => {
      // Use 'async' aqui porque faremos chamadas assíncronas
      const thoughts = [];
      const userCache = {}; // Cache para armazenar dados de usuário e evitar buscas repetidas

      for (const docSnapshot of snapshot.docs) {
        const thoughtData = {
          id: docSnapshot.id,
          ...docSnapshot.data(),
        };

        // Verifica se já temos os dados do usuário no cache
        if (!userCache[thoughtData.userId]) {
          // Busca os dados do usuário na coleção 'users' usando o userId
          const userDocRef = doc(db, "users", thoughtData.userId);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            userCache[thoughtData.userId] = userDocSnap.data();
          } else {
            // Fallback caso o documento do usuário não seja encontrado
            userCache[thoughtData.userId] = {
              username: "Usuário Removido",
              photoURL: null,
            };
          }
        }

        // Adiciona as informações do usuário ao objeto do pensamento
        thoughts.push({
          ...thoughtData,
          username: userCache[thoughtData.userId].username,
          photoURL: userCache[thoughtData.userId].photoURL,
        });
      }
      callback(thoughts);
    },
    (error) => {
      console.error("Erro ao escutar os pensamentos:", error);
    }
  );

  return unsubscribe;
}

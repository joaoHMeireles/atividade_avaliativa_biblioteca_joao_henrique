const { initializeApp } = require("firebase/app");
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc,
  } = require("firebase/firestore/lite");

  const firebaseConfig = {
    apiKey: "AIzaSyBfaUK8aVYJqds2Rmz8jlzXlxWqK_vIOJk",
    authDomain: "biblioteca-4c49d.firebaseapp.com",
    databaseURL: "https://biblioteca-4c49d-default-rtdb.firebaseio.com",
    projectId: "biblioteca-4c49d",
    storageBucket: "biblioteca-4c49d.appspot.com",
    messagingSenderId: "963637999389",
    appId: "1:963637999389:web:3f09eff56b6633df6153f4",
    measurementId: "G-C93764S15Z"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function save(nomeTabela, id, dado) {
  if (id) {
      const entidadeReferencia = await setDoc(doc(db, nomeTabela, id), dado);
      const dataSalva = {
          ...dado,
          id: id
      }
      return dataSalva;
  } else {
      const entidadeReferencia = await addDoc(collection(db, nomeTabela), dado);
      const dataSalva = {
          ...dado,
          id: entidadeReferencia.id
      }
      return dataSalva;
  }
}

async function get(nomeTabela) {
  const tabelaRef = collection(db, nomeTabela);

  const q = query(tabelaRef);

  const querySnapshot = await getDocs(q);

  const lista = [];

  querySnapshot.forEach((doc) => {
      const dado = {
          ...doc.data(),
          id: doc.id
      }
      lista.push(dado);
  });
  return lista;
}

async function getById(nomeTabela, id) {
  const docRef = doc(db, nomeTabela, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      return docSnap.data();
  } else {
      return new Error("Not found!");
  }

}

async function remove(nomeTabela, id){
  const dado = await deleteDoc(doc(db, nomeTabela, id));
  return {
      message: `${id} deleted`
  }
}

module.exports = {
  save,
  get,
  getById,
  remove
}

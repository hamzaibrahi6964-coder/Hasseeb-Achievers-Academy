import { db }

from "./firebase-config.js";

import {

collection,

addDoc,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function addExam(data){

try{

await addDoc(

collection(db,"cbt"),

data

);

return true;

}

catch(error){

console.error(error);

return false;

}

}

export async function getExams(){

const snapshot =

await getDocs(

collection(db,"cbt")

);

return snapshot.docs.map(doc => ({

id: doc.id,

...doc.data()

}));

}

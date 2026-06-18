import { db }

from "./firebase-config.js";

import {

collection,

addDoc,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function addQuestion(data){

try{

await addDoc(

collection(db,"questions"),

data

);

return true;

}

catch(error){

console.error(error);

return false;

}

}

export async function getQuestions(){

const snapshot =

await getDocs(

collection(db,"questions")

);

return snapshot.docs.map(doc => ({

id: doc.id,

...doc.data()

}));

}

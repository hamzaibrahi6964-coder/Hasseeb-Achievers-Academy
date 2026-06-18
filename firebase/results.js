import { db }

from "./firebase-config.js";

import {

collection,

addDoc,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function addResult(data){

try{

await addDoc(

collection(db,"results"),

data

);

return true;

}

catch(error){

console.error(error);

return false;

}

}

export async function getResults(){

const snapshot =

await getDocs(

collection(db,"results")

);

return snapshot.docs.map(doc => ({

id: doc.id,

...doc.data()

}));

}

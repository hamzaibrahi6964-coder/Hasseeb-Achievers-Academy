import { db }

from "./firebase-config.js";

import {

collection,

addDoc,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function addParent(data){

try{

await addDoc(

collection(db,"parents"),

data

);

return true;

}

catch(error){

console.error(error);

return false;

}

}

export async function getParents(){

const snapshot =

await getDocs(

collection(db,"parents")

);

return snapshot.docs.map(doc => ({

id: doc.id,

...doc.data()

}));

}

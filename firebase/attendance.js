import { db }

from "./firebase-config.js";

import {

collection,

addDoc,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function addAttendance(data){

try{

await addDoc(

collection(db,"attendance"),

data

);

return true;

}

catch(error){

console.error(error);

return false;

}

}

export async function getAttendance(){

const snapshot =

await getDocs(

collection(db,"attendance")

);

return snapshot.docs.map(doc => ({

id: doc.id,

...doc.data()

}));

}

import { db }

from "./firebase-config.js";

import {

collection,

addDoc

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function addStudent(data){

try{

await addDoc(

collection(db,"students"),

data

);

return true;

}

catch(error){

console.error(error);

return false;

}

}

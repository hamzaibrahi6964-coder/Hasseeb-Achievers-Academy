import { db }

from "./firebase-config.js";

import {

doc,

setDoc,

getDoc

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function saveSettings(data){

try{

await setDoc(

doc(db,"settings","school"),

data

);

return true;

}

catch(error){

console.error(error);

return false;

}

}

export async function getSettings(){

const snapshot =

await getDoc(

doc(db,"settings","school")

);

if(

snapshot.exists()

){

return snapshot.data();

}

return null;

}

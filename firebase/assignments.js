import { db }

from "./firebase-config.js";

import {

collection,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

export async function getAssignments(){

const snapshot =

await getDocs(

collection(db,"assignments")

);

return snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}));

}

import { auth }

from "./firebase-config.js";

import {

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

export async function loginAdmin(

email,

password

){

try{

const userCredential =

await signInWithEmailAndPassword(

auth,

email,

password

);

return {

success:true,

user:userCredential.user

};

}

catch(error){

return{

success:false,

message:error.message

};

}

}

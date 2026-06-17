import { db }

from "./firebase-config.js";

import {

collection,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

async function loadDashboard(){

const students = await getDocs(

collection(db,"students")

);

const teachers = await getDocs(

collection(db,"teachers")

);

const parents = await getDocs(

collection(db,"parents")

);

const classes = await getDocs(

collection(db,"classes")

);

const studentTotal = students.size;

const teacherTotal = teachers.size;

const parentTotal = parents.size;

const classTotal = classes.size;

document.getElementById(

"studentCount"

).textContent = studentTotal;

document.getElementById(

"teacherCount"

).textContent = teacherTotal;

document.getElementById(

"parentCount"

).textContent = parentTotal;

document.getElementById(

"classCount"

).textContent = classTotal;

document.getElementById(

"summaryStudents"

).textContent = studentTotal;

document.getElementById(

"summaryTeachers"

).textContent = teacherTotal;

document.getElementById(

"summaryParents"

).textContent = parentTotal;

document.getElementById(

"summaryClasses"

).textContent = classTotal;

}

loadDashboard();

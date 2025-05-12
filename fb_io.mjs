//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Mio Hoffman, Term 2 2025
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { get, update }from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { query, orderByChild, limitToFirst } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
 
import { onValue, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

function fb_authenticate(){
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
            prompt: 'select_account'
        });
        signInWithPopup(AUTH, PROVIDER).then((result) => {
            //Code for a successful authentication goes here
            console.log(result.user);
            document.getElementById("p_fbAuthenticate").innerHTML= "Authentication successful";
        })
        .catch((error) => {
            //Code for an authentication error goes here
            console.log(error);
        });
}

function fb_login(){
    const AUTH = getAuth();
    onAuthStateChanged(AUTH, (user) => {
        if (user) {
            document.getElementById("p_fbLogin").innerHTML= "Logged in";
        } else {
            document.getElementById("p_fbLogin").innerHTML= "Logged out";
        }
    }, (error) => {
        console.log(error);
    });
}

function fb_logout(){
    const AUTH = getAuth();
    signOut(AUTH).then(() => {
        document.getElementById("p_fbLogin").innerHTML= "Logged out";
    })
    .catch((error) => {
        console.log(error);
    });
}

const FB_GAMECONFIG = {
    apiKey: "AIzaSyCd2Z_1nM5CI6l6NVOrvlN7EDbKEaSTiv0",
    authDomain: "comp-2025-mio-hoffman.firebaseapp.com",
    databaseURL: "https://comp-2025-mio-hoffman-default-rtdb.firebaseio.com",
    projectId: "comp-2025-mio-hoffman",
    storageBucket: "comp-2025-mio-hoffman.firebasestorage.app",
    messagingSenderId: "724400775542",
    appId: "1:724400775542:web:dccd0b43fb6bc612725a57",
    measurementId: "G-GYKCG77RCD"
  };

function fb_writeRec(){
    const whereToWriteTo = "Fruit/Citrus/Lemon/colour"
    const dataToWrite = {yellow: true, warm: true, value:Math.random()};
    var reference = ref(FB_GAMEDB, whereToWriteTo);
    set(reference, dataToWrite).then(() => {
        document.getElementById("p_fbWriteRec").innerHTML= "Success";
    }).catch((error) => {
        console.log(error);
    });
}

function fb_readRec(){
    const whereToReadFrom = "Fruit/Citrus/Tangelo/taste";
    const reference = ref(FB_GAMEDB, whereToReadFrom);
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            document.getElementById("p_fbReadRec").innerHTML= "Success";
        } else {
            document.getElementById("p_fbReadRec").innerHTML= "No record found";
        }
    }).catch((error) => {
        console.log(error);
    });
}

function fb_readAll(){
    const whereToReadFrom = "Fruit/Citrus";
    const reference = ref(FB_GAMEDB, whereToReadFrom);
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            document.getElementById("p_fbReadAll").innerHTML= "Success";
        } else {
            document.getElementById("p_fbReadAll").innerHTML= "No records found";
        }
    }).catch((error) => {
        console.log(error);
    });
}

function fb_updateRec(){
    const whereToWriteTo = "Fruit/Citrus/Tangelo/taste";
    const dataToWrite = {taste: "not yummy"};
    const reference = ref(FB_GAMEDB, whereToWriteTo);
    update(reference, dataToWrite).then(() => {
        document.getElementById("p_fbUpdateRec").innerHTML= "success";
    }).catch((error) => {
        console.log(error);
    });
}

function fb_readSorted(){
    const whereToReadFrom = "Dogs";
    const sortkey = "Cuteness";
    const numberToRead = 5;
    const reference = query(ref(FB_GAMEDB, whereToReadFrom), orderByChild(sortkey), limitToFirst(numberToRead));
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        console.log(fb_data);
      if (fb_data != null) {
            document.getElementById("p_fbReadSorted").innerHTML= "Success: Record found";
        } else {
            document.getElementById("p_fbReadSorted").innerHTML= "Success: Record NOT found";
        }
    }).catch((error) => {
        console.log(error);
    });
}

function fb_onValue(){
    const monitorAndRead = "Fruit/Citrus/Lemon/sour";
    const dbReference = ref(FB_GAMEDB, monitorAndRead);
    onValue(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            document.getElementById("p_fbListen").innerHTML= "Success";
        } else {
            document.getElementById("p_fbListen").innerHTML= "No record found";
        }
    }).catch((error) => {
        console.log(error);
    });
}

function fb_deleteRec(){
    const whatToDelete = "Sports/Basketball";
     const dbReference= ref(FB_GAMEDB, whatToDelete);
    remove(dbReference).then(() => {
        document.getElementById("p_fbDeleteRec").innerHTML= "Success";
    }).catch((error) => {
        console.log(error);
    });
}
/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise, fb_authenticate, fb_login, fb_logout, fb_writeRec,
    fb_readRec, fb_readAll, fb_updateRec, fb_readSorted, fb_onValue, fb_deleteRec};

var FB_GAMEDB

function fb_initialise() {
    console.log('%c fb_initialise(): ', 
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
                
                const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
                FB_GAMEDB  = getDatabase(FB_GAMEAPP);
                console.info(FB_GAMEDB);  
                
                const app = initializeApp(FB_GAMECONFIG);
                const analytics = getAnalytics(app);
}

/**************************************************************/
// END OF CODE
/**************************************************************/
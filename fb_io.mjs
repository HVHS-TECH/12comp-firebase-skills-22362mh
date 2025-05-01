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

const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
 var FB_GAMEDB  = getDatabase(FB_GAMEAPP);
console.info(FB_GAMEDB);  

const app = initializeApp(FB_GAMECONFIG);
const analytics = getAnalytics(app);


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

const AUTH = getAuth();
const PROVIDER = new GoogleAuthProvider();
// The following makes Google ask the user to select the account
PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        //Code for a successful authentication goes here
        console.log("Successful");
    })
    .catch((error) => {
        //Code for an authentication error goes here
        console.log("Unsuccessful");
    });

import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const AUTH = getAuth();
onAuthStateChanged(AUTH, (user) => {
    if (user) {
        //✅ Code for user logged in goes here
        console.log("User logged in");
    } else {
        //✅ Code for user logged out goes here
        console.log("User logged out");
    }
}, (error) => {
    //❌ Code for an onAuthStateChanged error goes here
    console.log("Error");
});


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise };

export {
    FB_GAMECONFIG, FB_GAMEAPP };

function fb_initialise() {
    console.log('%c fb_initialise(): ', 
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}


/**************************************************************/
// END OF CODE
/**************************************************************/
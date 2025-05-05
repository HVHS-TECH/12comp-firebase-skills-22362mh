/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by Mio Hoffman, Term 2 2025
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise }
    from './fb_io.mjs';
    window.fb_initialise = fb_initialise;

import { fb_authenticate } 
    from './fb_io.mjs';
    window.fb_authenticate = fb_authenticate;

import { fb_login } 
    from './fb_io.mjs';
    window.fb_login = fb_login;

import { fb_logout } 
    from './fb_io.mjs';
    window.fb_logout = fb_logout;

import { fb_writeRec } 
    from './fb_io.mjs';
    window.fb_writeRec = fb_writeRec;

import { fb_readRec }
    from './fb_io.mjs';
    window.fb_readRec = fb_readRec;

import { fb_readAll }
    from './fb_io.mjs';
    window.fb_readAll = fb_readAll;
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/

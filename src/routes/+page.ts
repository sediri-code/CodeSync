import type {PageLoad} from "./$types";

export const load = (() => {

    //fetch call
    //graphQL client
    //database call
 return {
    snippets: [
        
            { title: "Ahmed Sediri",
             language: "html",
             code: `<h1> Hello </h1>`,
             favorite: false
            },
            { title: "Ahmed Sediri",
             language: "typescript",
             code: `console.log("Hello")`,
             favorite: false
            }
    ]
           
    }
 }) satisfies PageLoad; 

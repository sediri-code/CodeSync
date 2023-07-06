import {writable,get} from "svelte/store";

//SnippetStore
//Code Snippet
//Title,Code,Language,Favorite

export const snippetStore = writable<CodeSnippet[]>([]); // [codesnippet1,codesnippet2,etc..]


//addSnippet
export function addSnippet (input: CodeSnipperInput)
{
    let snippets = get (snippetStore);
    snippetStore.update(()=>{
        return [{...input,favorite:false}, ...snippets]
    })
}
//deleteSnippet
export function deleteSnippet (index:number)
{
    let snippets = get (snippetStore);
    snippets.splice(index,1); //removes 1 element at index

    snippetStore.update(()=>{
        
        return snippets;
    })
}
//toggleFavorite

export function toggleFavorite (index:number)
{
    let snippets = get (snippetStore);
    
    snippetStore.update(() => {
        return snippets.map((snippet,snippetIndex)=>{
            if(snippetIndex === index) {
                return {...snippet,favorite:!snippet.favorite}
            }
        
        return snippet;
    });
});
}




<script lang="ts">
	import CodeSnippetCard from "../CodeSnippetCard.svelte";
	import { snippetStore , addSnippet} from "../SnippetStore";
	import type { PageData } from "./$types";
	export let data: PageData;


	let formData : CodeSnipperInput = {
		title: "",
		language: "html",
		code: "",
	}
	//createSnippet (input: CodeSnippetInput)
	snippetStore.set(data.snippets);
	//SnipetStore -> a local writable that allows us to store code snippets
	// create / deleted snippets
	//favorite snipets
	// +page.ts to initially load in some example snipets (database request)
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create A code Snippet</h3>
         <div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input class="input" type="text" placeholder="Entre Title" bind:value={formData.title} />
			</label>
			<label class="label">
				<span>Programming language</span>
				<select class="select" bind:value={formData.language}>
					<option value = "html">HTML</option> 
					<option value = "CSS">CSS</option> 
					<option value = "typescript">Typescript</option> 
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea class="textarea" rows="4" placeholder="Enter your code here" bind:value={formData.code}></textarea>
			</label>
			<button type="button" class="btn btn-sm variant-filled-primary" on:click={() => addSnippet(formData)}>
				Create Snippet
			</button>	
				
		 </div>
		 <div class = "text-center py-6">
			<h2>My Code Snippets</h2>
		 </div>
         {#each $snippetStore as snippet,index}
		 <CodeSnippetCard snippet = {snippet} index={index}/>
		 {/each}
	</div>

</div>

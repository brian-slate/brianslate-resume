<script>
	import Header from '$lib/Header.svelte';
	import './../styles.css';
</script>

<div class="app cover-letter">
	<!-- <Header /> -->

	<slot />

	<!-- <footer>
		<div class="footer-container">
			<p>&copy; 2024 &middot; Built with <a href="https://kit.svelte.dev">SvelteKit</a></p>
		</div>
	</footer> -->
	
</div>

<style>
.app .cover-letter {
    column-count: 1 !important;
    margin: auto;
    padding: 20px;
    /* background-color: white; */
}

.app .cover-letter h1, 
.app .cover-letter h2, 
.app .cover-letter p {
    margin-top: 0.5em;
}

@media (max-width: 1200px), (max-width: 800px) {
    .app.cover-letter {
        column-count: 1 !important; /* Keeps single column layout in all screen sizes */
    }
}

</style>

<script>
	import Header from '$lib/Header.svelte';
	import '../styles.css';
</script>

<div class="app resume">
	<!-- <Header /> -->

	<slot />

	<footer>
		<div class="footer-container">
			<p>&copy; 2024 &middot; Built with <a href="https://kit.svelte.dev">SvelteKit</a></p>
		</div>
	</footer>
</div>

<style>
.app.resume {
	column-count: 3;
	column-gap: 40px;
}

@media (max-width: 1200px) { /* tablet */
	.app.resume {
		column-count: 2;
	}
}
@media (max-width: 800px) { /* tablet */
	.app.resume {
		column-count: 1;
	}
}
	
</style>

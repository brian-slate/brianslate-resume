<script>
	import Header from '$lib/Header.svelte';
	import './styles.css';
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

	
</style>

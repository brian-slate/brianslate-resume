<script>
	import '../styles.css';
</script>

<div class="app resume">

	<slot />

	<footer>
		<div class="footer-container">
			<p>&copy; 2024 &middot; Built with <a href="https://kit.svelte.dev">SvelteKit</a></p>
		</div>
	</footer>
</div>

<style>
.app.resume {
	display: grid;
	grid-template-columns: 0.8fr 1.2fr 0.8fr;
	grid-template-rows: auto;
	gap: 40px;
	align-items: start;
}


footer {
	grid-column: 1 / -1;
}

@media (max-width: 1200px) { /* tablet */
	.app.resume {
		grid-template-columns: 0.5fr 1fr;
	}
}

@media (max-width: 800px) { /* mobile */
	.app.resume {
		grid-template-columns: 1fr;
	}
}
</style>
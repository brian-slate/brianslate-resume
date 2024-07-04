<script>
	import Header from '$lib/Header.svelte';
	import './../styles.css';
</script>

<div class="app cover-letter">
	<slot />
</div>

<style>
.app.cover-letter {
    column-count: 1 !important;
    margin: auto;
}


@media (max-width: 1200px), (max-width: 800px) {
    .app.cover-letter {
        column-count: 1 !important; /* Keeps single column layout in all screen sizes */
    }
}

</style>

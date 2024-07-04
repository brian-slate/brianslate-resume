<script>
	export let coverLetterData;
</script>

<section id="summary">
	<div class="title-container">
		<h2>{coverLetterData.title}</h2>
	</div>
	<div class="text-container" id="hover-area">
		<pre>
{coverLetterData.letter}
		</pre>
	</div>
</section>

<style>
	pre {
		white-space: pre-wrap;
		font-size: 1.5rem;
	}

	.text-container {
		background-color: rgba(255, 255, 255, 0.6);
		padding: 20px;
		border-radius: 5px;
		margin-bottom: 10px;
		position: relative;
		cursor: pointer;
	}
</style>

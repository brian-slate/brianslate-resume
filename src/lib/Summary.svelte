<script>
	export let resumeData;
</script>

<section id="summary">
	<div class="title-container">
		<h2>Summary</h2>
	</div>
	<div class="text-container" id="hover-area">
		<span class="quote-icon" id="start-quote">“</span>
		<p>{resumeData.summary} <span id="sparkle" class="sparkle-icon">✨</span></p>
		<span class="quote-icon" id="end-quote">”</span>
	</div>
</section>

<style>
	.text-container {
		background-color: rgba(255, 255, 255, 0.6);
		padding: 20px;
		border-radius: 5px;
		margin-bottom: 10px;
		position: relative;
		cursor: pointer;
	}

	.quote-icon {
		font-size: 2em;
		position: absolute;
		color: black;
		transition: all 0.3s ease;
	}

	#start-quote {
		top: 0;
		left: 0;
	}

	#end-quote {
		bottom: 0;
		right: 0;
	}

	#hover-area:hover .quote-icon {
		transform: scale(3);
	}
</style>

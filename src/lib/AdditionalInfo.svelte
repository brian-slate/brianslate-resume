<script>
	export let resumeData;

	function handleMouseOver(event) {
		const icon = event.currentTarget.querySelector('.info-icon');
		icon.style.color = '#FFD700'; // Your theme gold color
	}
</script>

<section id="additional-info">
	<h2 class="section-title">Additional Information</h2>
	<ul class="info-list">
		{#each resumeData.additionalInfo as info}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<li class="info-item" on:mouseover={handleMouseOver}>
				<span class="info-icon">✔</span>
				<span class="info-text">{info}</span>
			</li>
		{/each}
	</ul>
</section>

<style>
	.section-title {
		font-size: 1.5em;
		font-weight: bold;
		color: #333;
		text-transform: uppercase;
		margin-bottom: 20px;
	}

	.info-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.info-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		cursor: pointer;
	}

	.info-icon {
		font-size: 1.2em;
		color: #4CAF50;
		margin-right: 10px;
		transition: all 0.3s ease;
	}

	.info-item:hover .info-icon {
		animation: pulse 0.3s ease-in-out;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(5);
		}
		100% {
			transform: scale(1);
		}
	}

	.info-text {
		font-size: 1em;
		color: #333;
	}
</style>

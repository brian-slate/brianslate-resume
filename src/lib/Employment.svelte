<script>
	export let resumeData;
</script>

<section id="employment">
	<h2>Employment History</h2>
	{#each resumeData.employment as job}
		<article class="job-entry">
			<h3 class="job-company">{job.company}</h3>
			<p class="job-position"><strong>{job.position}</strong> ({job.duration})</p>
			<p class="job-subheading">Location: {job.location}</p>
			{#if job['other-notes']}
				<p class="job-other-notes">{job['other-notes']}</p>
			{/if}
			<div class="responsibilities-container">
				<ul class="job-responsibilities">
					{#each job.responsibilities as responsibility}
						<li>{responsibility}</li>
					{/each}
				</ul>
			</div>
		</article>
	{/each}
</section>

<style>
	#employment h2 {
		margin-bottom: 1rem;
	}
	.job-entry {
		margin-bottom: 2rem;
		border-bottom: 1px dashed white;
		padding-bottom: 1rem;
	}
	.job-company {
		font-size: 1.5em;
		font-weight: bold;
		color: white;
		text-transform: uppercase;
		text-shadow: 0px 0px 1px #666; /* Fine dark gray outline */
	}
	.job-position {
		font-weight: bold;
		margin-top: 0;
	}
	.job-subheading {
		font-style: italic;
		color: #333;
		margin-top: 0;
	}
	.job-other-notes {
		font-size: 0.9em;
		color: #333;
		font-weight: bold;
	}
	.responsibilities-container {
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 5px;
		padding: 10px;
	}
	.job-responsibilities {
		list-style-type: none;
		font-size: 1.1em;
	}
	.job-responsibilities li {
		position: relative;
		padding-left: 25px;
		cursor: nw-resize;  /* More pleasing cursor */
		padding-bottom: 4px;
	}
	.job-responsibilities li::before {
		content: '\25B6';
		position: absolute;
		left: 0;
		color: rgba(0, 0, 0, 0.6);
		transition: all 1s ease;
	}
	.job-responsibilities li:hover::before {
		color: purple;
		transform: rotate(360deg);
		animation: bump 0.3s ease-in-out;
	}
	@keyframes bump {
		50% {
			transform: rotate(360deg) scale(3);
		}
		100% {
			transform: rotate(360deg) scale(1);
		}
	}
</style>

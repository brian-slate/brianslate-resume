<script>
	export let resumeData;
</script>

<section id="education">
	<h2>Education</h2>
	{#each resumeData.education as edu}
		<h3>{edu.school}</h3>
		<p>
			{edu.degree}, {edu.field} 
			<!-- {#if edu.startYear}
				{#if edu.endYear}
					({edu.startYear} - {edu.endYear})
				{:else}
					({edu.startYear})
				{/if}
			{:else if edu.endYear}
				({edu.endYear})
			{/if} -->
		</p>
	{/each}
</section>

<style>
</style>

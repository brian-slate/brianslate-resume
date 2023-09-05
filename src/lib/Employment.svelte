<script>
	export let resumeData;
</script>

<section id="employment">
	<h2>Employment History</h2>
	{#each resumeData.employment as job}
		<h3>{job.company}</h3>
		<p>{job.position} ({job.startDate} - {job.endDate || 'Current'})</p>
	{/each}
</section>

<style>
</style>

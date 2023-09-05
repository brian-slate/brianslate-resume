<script>
	export let resumeData;
</script>

<section id="education">
	<h2>Education</h2>
	{#each resumeData.education as edu}
		<h3>{edu.school}</h3>
		<p>{edu.degree}, {edu.field} ({edu.startYear} - {edu.endYear})</p>
	{/each}
</section>

<style>
</style>

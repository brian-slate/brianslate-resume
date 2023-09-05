<script>
	export let linkedInData;
</script>

<section id="linkedin-info">
	<h2>LinkedIn Information</h2>
	{#if linkedInData}
		<h3>{linkedInData.name}</h3>
		<p>{linkedInData.title}</p>
		<p>{linkedInData.location}</p>
		<p>{linkedInData.summary}</p>
	{:else}
		<p>Loading LinkedIn data...</p>
	{/if}
</section>

<style>
</style>

<script>
	export let resumeData;

	import BatteryMeter from '$lib/BatteryMeter.svelte';
</script>

<section id="skills">
	<h2>Skills</h2>
	{#each resumeData.skills as { name, level, category }}
		<div>
			<span>{name} ({category})</span>
			<BatteryMeter {level} />
		</div>
	{/each}
</section>

<style>
</style>

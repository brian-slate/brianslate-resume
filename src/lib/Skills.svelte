<script>
	export let resumeData;
	import BatteryMeter from '$lib/BatteryMeter.svelte';
</script>

<section id="skills">
	<h2>Skills</h2>
	{#each resumeData.skills as { name, level, category }}
	  <div class="skill-row">
		<span class="skill-text">{name} ({category})</span>  <!-- Use the new .skill-text class -->
		<div class="battery-container">  <!-- Use the new .battery-container class -->
		  <BatteryMeter {level} />
		</div>
	  </div>
	{/each}
  </section>
  
  

<style>
  .skill-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;  /* Minimum height to keep rows uniform */
    margin-bottom: 10px;
  }

  .skill-text {
    flex: 1;  /* Takes up remaining space */
    min-width: 0;  /* Allows text to wrap */
	padding-right: 15px;
    /* Removed white-space, overflow, and text-overflow */
  }

  .battery-container {
    flex-shrink: 0;  /* Prevents shrinking */
    width: 90px;  /* Fixed width for the battery */
  }
</style>

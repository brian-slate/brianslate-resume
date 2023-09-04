<script>
  export let resumeData;
  
  import BatteryMeter from '$lib/BatteryMeter.svelte';
</script>

<style>
  h2 {
    color: var(--gold);
  }
  p {
    color: var(--gray);
  }
</style>

<section id="skills">
  <h2>Skills</h2>
  {#each resumeData.skills as { name, level, category }}
    <div>
      <span>{name} ({category})</span>
      <BatteryMeter level={level} />
    </div>
  {/each}
</section>

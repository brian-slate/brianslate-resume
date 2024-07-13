<script>
	export let resumeData;
	import BatteryMeter from '$lib/BatteryMeter.svelte';
  
	// Define the custom order for categories
	const customOrder = [
		"Front-End",
		"Back-End",
		"Infrastructure",
		"Alerting & Monitoring",
	  	"Management",
	];
  
	// Group skills by category and sort them by level
	let groupedSkills = {};
	resumeData.skills.forEach(({ name, level, category, subitems }) => {
	  if (!groupedSkills[category]) {
		groupedSkills[category] = [];
	  }
	  groupedSkills[category].push({ name, level, subitems });
	  groupedSkills[category].sort((a, b) => b.level - a.level);
	});
  
	// Sort categories based on custom order and level
	const orderedCategories = Object.keys(groupedSkills).sort((a, b) => {
	  const indexA = customOrder.indexOf(a);
	  const indexB = customOrder.indexOf(b);
	  if (indexA === -1 && indexB === -1) return a.localeCompare(b);
	  if (indexA === -1) return 1;
	  if (indexB === -1) return -1;
	  return indexA - indexB;
	});
  </script>
  
  <section id="skills">
	<h2>Skills & Technologies</h2>
	{#each orderedCategories as category}
	  <!-- <h3>{category}</h3> -->
	  {#each groupedSkills[category] as { name, level, subitems }}
		<div class="skill-row">
		  <!-- <span class="skill-text">{name}</span> -->
		  <div class="battery-container">
			<!-- <BatteryMeter {level} /> Removing for now -->
		  </div>
		</div>
		{#if subitems}
		  <div class="subitems">
			{#each subitems as subitem}
			  <span class="subitem-text">{subitem}</span>
			{/each}
		  </div>
		{/if}
	  {/each}
	{/each}
  </section>
  
  <style>
	.skill-row {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  /* min-height: 50px; */
	  margin-bottom: 10px;
	}
  
	.skill-text {
	  flex: 1;
	  min-width: 0;
	  padding-right: 15px;
	}
  
	.battery-container {
	  flex-shrink: 0;
	  width: 90px;
	}
  
	.subitems {
	  margin-left: 20px;
	  font-size: 0.8em;
	}
  
	.subitem-text {
	  display: inline-block;
	  margin-right: 10px;
	  background: rgba(255, 255, 255, 0.5);  /* Semi-transparent white background */
	  padding: 5px;
	  border-radius: 4px;
	  margin-bottom: 15px;
	}
  </style>
  
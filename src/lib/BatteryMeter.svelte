<script>
  import { onMount } from 'svelte';
  export let level = 0;
  let segments = new Array(5).fill(false);
  let isMaxLevel = false;
  let currentFilling = -1;

  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < level) {
        currentFilling = i;
        setTimeout(() => {
          segments[i] = true;
          currentFilling = -1;
          i++;
        }, 250); // 250ms delay for the blink
      } else {
        clearInterval(interval);
        if (level === 5) {
          isMaxLevel = true;
        }
      }
    }, 500); // 500ms delay between each segment filling up
  });
</script>

<style>
  .battery {
    width: 90px;
    height: 40px;
    border: 2px solid black;
    position: relative;
    display: flex;
    background-color: white;
    gap: 1px;
  }
  .battery::before,
  .battery::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 4px;
    height: 12px;
    background-color: black;
    transform: translateY(-50%);
  }
  .battery::before {
    left: -4px;
    width: 2px;
    height: 32px;
  }
  .battery::after {
    right: -6px;
  }
  .segment {
    flex: 1;
    height: 100%;
    background-color: var(--color-lightgray);
  }
  .segment.active {
    background-color: var(--color-electric-green);
  }
  .segment.blink {
    animation: blink 0.5s 2 alternate;
  }
  @keyframes blink {
    0% { background-color: white; }
    100% { background-color: var(--color-theme-2); }
  }
  .lightning {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    display: none;
  }
  .battery.full .lightning {
    display: block; /* Show when battery is full */
  }
</style>

<div class="battery {isMaxLevel ? 'full' : ''}">
  {#each segments as segment, i}
    <div class="segment {segment ? 'active' : ''} {i === currentFilling ? 'blink' : ''}"></div>
  {/each}
  <span class="lightning">⚡️</span>
</div>

<script>
  import { onMount } from 'svelte';
  export let level = 0;
  let segments = new Array(5).fill(false);
  let isMaxLevel = false;
  let currentFilling = -1;
  let fullBlinkIndex = -1;
  let initialDelay = Math.random() * 1000; // Random delay up to 1 second

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
          setTimeout(() => {
            setInterval(() => {
              fullBlinkIndex = (fullBlinkIndex + 1) % 5;
            }, 1000); // 1s delay for the full battery blink
          }, initialDelay);
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
    background-color: var(--color-theme-2); /* Gold */
  }
  .segment.blink {
    animation: blink 0.5s 2 alternate; /* Blink twice */
  }
  @keyframes blink {
    0% { background-color: white; }
    100% { background-color: var(--color-theme-2); }
  }
  .segment.full {
    background-color: var(--color-electric-green); /* All segments stay green */
  }
  .segment.fullBlink {
    animation: fullBlink 1s infinite alternate; /* Slower animation for full battery */
    animation-delay: var(--random-delay, 0s); /* Use random delay */
  }
  @keyframes fullBlink {
    0% { background-color: var(--color-electric-green); }
    100% { background-color: rgba(var(--color-electric-green-rgb), 0.7); } /* Lighter shade */
  }
</style>

<div class="battery">
  {#if isMaxLevel}
    {#each segments as segment, i}
      <div class="segment full {i === fullBlinkIndex ? 'fullBlink' : ''}"></div>
    {/each}
  {:else}
    {#each segments as segment, i}
      <div class="segment {segment ? 'active' : ''} {i === currentFilling ? 'blink' : ''}"></div>
    {/each}
  {/if}
</div>

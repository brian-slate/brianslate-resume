<script>
  import Summary from '$lib/Summary.svelte';
  import Skills from '$lib/Skills.svelte';
  import Employment from '$lib/Employment.svelte';
  import Education from '$lib/Education.svelte';
  import PolygonBackground from '$lib/PolygonBackground.svelte';
  import { onMount } from 'svelte';

  let resumeData = null;

  let myColor1 = "rgba(128, 128, 128, 0.3)";
  let myColor2 = "rgba(255, 215, 0, 0.8)";
  let myAnimationSpeed = 1000;

  onMount(async () => {
    const res = await fetch('/resumeData.json');
    resumeData = await res.json();
  });
</script>

<style>
  :root {
    --gold: #ffd700;
    --gray: #808080;
  }
  h1, h2 {
    color: var(--gold);
  }
  p, span {
    color: var(--gray);
  }
  /* Remove the gray background for the section containers */
  section {
    /* background-color: var(--gray); Remove or comment out this line */
    margin-bottom: 16px;
  }
</style>

{#if resumeData}
  <PolygonBackground>
    <header>
      <h1>{resumeData.name || 'Your Name'}</h1>
      <p>{resumeData.title || 'Your Title'}</p>
    </header>
  </PolygonBackground>

  <PolygonBackground>
    <section class="section">
      <Summary {resumeData} />
    </section>
  </PolygonBackground>

  <PolygonBackground>
    <section class="section">
      <Skills {resumeData} />
    </section>
  </PolygonBackground>
{/if}

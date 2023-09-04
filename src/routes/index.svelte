<script>
  import Summary from '../lib/Summary.svelte';
  import Skills from '../lib/Skills.svelte';
  import Employment from '../lib/Employment.svelte';
  import Education from '../lib/Education.svelte';
  import LinkedInInfo from '../lib/LinkedInInfo.svelte';
  import { getLinkedInData } from '../lib/getLinkedInData.js';
  import { onMount } from 'svelte';

  let resumeData = {};
  let linkedInData = null;

  onMount(async () => {
    const res = await fetch('/static/resumeData.json');
    resumeData = await res.json();
    linkedInData = await getLinkedInData();
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
  /* Add more styles */
</style>

<header>
  <h1>{resumeData.name || 'Your Name'}</h1>
  <p>{resumeData.title || 'Your Title'}</p>
</header>

<Summary {resumeData} />
<Skills {resumeData} />
<Employment {resumeData} />
<Education {resumeData} />

<LinkedInInfo {linkedInData} />

<script>
	import Summary from '$lib/Summary.svelte';
	import Skills from '$lib/Skills.svelte';
	import Employment from '$lib/Employment.svelte';
	import Education from '$lib/Education.svelte';
	import PolygonBackground from '$lib/PolygonBackground.svelte';
	import { onMount } from 'svelte';
	import { reduced_motion } from './reduced-motion';

  let resumeData = null;
  let lightGrayThemeColor, goldThemeColor, orangeThemeColor, greenThemeColor, purpleThemeColor, lighterGrayThemeColor;

	onMount(async () => {
		const computedStyle = getComputedStyle(document.documentElement);
		lightGrayThemeColor = computedStyle.getPropertyValue('--color-theme-1').trim();
		goldThemeColor = computedStyle.getPropertyValue('--color-theme-2').trim();
		orangeThemeColor = computedStyle.getPropertyValue('--color-theme-3').trim();
		greenThemeColor = computedStyle.getPropertyValue('--color-theme-4').trim();
		purpleThemeColor = computedStyle.getPropertyValue('--color-theme-5').trim();
		lighterGrayThemeColor = computedStyle.getPropertyValue('--color-lightgray').trim();

		const res = await fetch('/resumeData.json');
		resumeData = await res.json();
	});
</script>

<svelte:head>
	<title>{`${resumeData?.name} - ${resumeData?.title}` || 'Loading...'}</title>
	<meta name="description" content="Brian T. Slate - Director of Software Engineering" />
</svelte:head>

{#if resumeData}
  <header id="profile">
    <img src="https://media.licdn.com/dms/image/D5603AQEpuj47L8XjNQ/profile-displayphoto-shrink_200_200/0/1686328359598?e=1699488000&v=beta&t=cQL7G2lWkmbm_nmMZGiizJQX1qlKWzjqxm5SgI1pNNc" alt="Brian T. Slate Profile Photo">
    <div>
      <h1>{resumeData.name}</h1>
      <p>{resumeData.title}</p>
    </div>
  </header>

  <section id="contact-info">
    <h2>Contact Info</h2>
    <p>Email: {resumeData.email}</p>
    <p>Mobile: {resumeData.tel}</p>
    <p>Website: {resumeData.website}</p>
  </section>

	<section id="summary" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={goldThemeColor}>
			<div class="content-container">
				<Summary {resumeData} />
			</div>
		</PolygonBackground>
	</section>

  <section id="linkedin">
    <h2>LinkedIn</h2>
    <p><a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank">Your LinkedIn Profile</a></p>
  </section>

  <section id="additional-info">
    <h2>Additional Information</h2>
    <p>Fluent in English and Spanish</p>
    <p>Experience with Agile methodologies</p>
    <p>Excellent communication skills</p>
  </section>

	<section id="skills" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={goldThemeColor}>
			<div class="content-container">
				<Skills {resumeData} />
			</div>
		</PolygonBackground>
	</section>

  <section id="employment" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={greenThemeColor}>
			<div class="content-container">
				<Employment {resumeData} />
			</div>
		</PolygonBackground>
	</section>

	<section id="education" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={lighterGrayThemeColor}>
			<div class="content-container">
				<Education {resumeData} />
			</div>
		</PolygonBackground>
	</section>

{/if}

<style>
	section, header {
    margin-bottom: 1rem;
  }
  .rounded-section {
		border-radius: 10px;
		overflow: hidden; /* to ensure the rounded corners also affect the PolygonBackground */
		padding: 0;
	}
	.content-container {
		padding: 0.5rem 1.5rem;
		margin: 0;
	}
	.skill-level {
		height: 20px;
		background-color: lightgray;
	}
	.skill-level span {
		display: block;
		height: 100%;
	}
	.linkedin {
		text-align: right;
		color: gold;
	}
</style>

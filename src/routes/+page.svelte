<script>
	import ProfileHeader from '$lib/ProfileHeader.svelte';
	import AdditionalInfo from '$lib/AdditionalInfo.svelte';
	import Summary from '$lib/Summary.svelte';
	import Skills from '$lib/Skills.svelte';
	import Employment from '$lib/Employment.svelte';
	import Education from '$lib/Education.svelte';
	import PolygonBackground from '$lib/PolygonBackground.svelte';
	import { onMount } from 'svelte';
	import { reduced_motion } from './reduced-motion';

	let resumeData = null;
	let lightGrayThemeColor,
		goldThemeColor,
		orangeThemeColor,
		greenThemeColor,
		purpleThemeColor,
		lighterGrayThemeColor;

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
  <ProfileHeader {resumeData} />

	<section id="contact-info">
		<h2>Contact Info</h2>
		<p>Email: {resumeData.contact.email}</p>
		<p>Mobile: {resumeData.contact.tel}</p>
		<p>Website: <a href={resumeData.contact.website}>{resumeData.contact.website}</a></p>
		<p>LinkedIn: <a href={resumeData.contact.linkedIn}>{resumeData.contact.linkedIn}</a></p>
	</section>

	<section id="summary" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={purpleThemeColor}>
			<div class="content-container">
				<Summary {resumeData} />
			</div>
		</PolygonBackground>
	</section>

	<!-- <section id="linkedin">
    <h2>LinkedIn</h2>
    <p><a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank">Your LinkedIn Profile</a></p>
  </section> -->

	<section id="education" class="rounded-section">
		<PolygonBackground leftColor={lighterGrayThemeColor} rightColor={lightGrayThemeColor}>
			<div class="content-container">
				<Education {resumeData} />
			</div>
		</PolygonBackground>
	</section>

  <AdditionalInfo {resumeData} />

	<section id="employment" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={greenThemeColor}>
			<div class="content-container">
				<Employment {resumeData} />
			</div>
		</PolygonBackground>
	</section>

	<section id="skills" class="rounded-section">
		<PolygonBackground leftColor={goldThemeColor} rightColor={lightGrayThemeColor}>
			<div class="content-container">
				<Skills {resumeData} />
			</div>
		</PolygonBackground>
	</section>
{/if}

<style>
	section {
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
</style>

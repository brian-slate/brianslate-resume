<script>
	import ProfileHeader from '$lib/ProfileHeader.svelte';
	import AdditionalInfo from '$lib/AdditionalInfo.svelte';
	import Summary from '$lib/Summary.svelte';
	import Skills from '$lib/Skills.svelte';
	import Employment from '$lib/Employment.svelte';
	import Education from '$lib/Education.svelte';
	import PolygonBackground from '$lib/PolygonBackground.svelte';
	import HalftoneWave from '$lib/HalftoneWave.svelte';
	import { onMount } from 'svelte';
	import jsPDF from 'jspdf';
	import html2canvas from 'html2canvas';

	let resumeData = null;
	let lightGrayThemeColor,
		goldThemeColor,
		orangeThemeColor,
		greenThemeColor,
		purpleThemeColor,
		lighterGrayThemeColor;

	const generatePDF = async () => {
		document.body.classList.add('pdf-generation');
		const canvas = await html2canvas(document.body);
		const imgData = canvas.toDataURL('image/png');
		
		const pdf = new jsPDF('p', 'mm', 'a4');  // Set the PDF to use A4 size
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
		
		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		// debugger;
		pdf.save('brian-slate-resume.pdf');
		document.body.classList.remove('pdf-generation');
	};

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
	<meta name="description" content="Brian T. Slate - Principal Tech Consultant & Software Architect" />
</svelte:head>

{#if resumeData}
  <ProfileHeader {resumeData} />

	<section id="contact-info">
		<h2>
			Contact Info
			<button id="generate-pdf" title="Download PDF" on:click={generatePDF} style="background: none; border: none; cursor: pointer;">📄</button>
		</h2>
		<p>Email: {resumeData.contact.email}</p>
		<p>Mobile: {resumeData.contact.tel}</p>
		<p>Website: <a href={resumeData.contact.website}>{resumeData.contact.website}</a></p>
		<p>LinkedIn: <a href={resumeData.contact.linkedIn}>{resumeData.contact.linkedIn}</a></p>
	</section>

	<!-- <section id="linkedin">
    <h2>LinkedIn</h2>
    <p><a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank">Your LinkedIn Profile</a></p>
  	</section> -->

	<section id="summary" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={purpleThemeColor}>
			<div class="content-container">
				<Summary {resumeData} />
			</div>
		</PolygonBackground>
	</section>

	<section id="education" class="rounded-section">
		<PolygonBackground leftColor={lightGrayThemeColor} rightColor={'rgba(0, 0, 0, 0.05)'}>
			<div class="content-container">
				<Education {resumeData} />
			</div>
		</PolygonBackground>
	</section>


	<section id="employment" class="rounded-section">
		<PolygonBackground leftColor={lighterGrayThemeColor} rightColor={lightGrayThemeColor}>
			<div class="content-container">
  				<AdditionalInfo {resumeData} />
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

	<section id="skills" class="rounded-section">
		<PolygonBackground leftColor={goldThemeColor} rightColor={lightGrayThemeColor}>
			<div class="content-container">
				<Skills {resumeData} />
			</div>
		</PolygonBackground>
	</section>
{/if}

<HalftoneWave />

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
	section {
		margin-bottom: 1rem;
	}
	.rounded-section {
		border-radius: 10px;
		overflow: hidden;
		padding: 0;
	}
	.content-container {
		padding: 0.5rem 1.5rem;
		margin: 0;
	}
	#contact-info {
		margin-bottom: 2rem;
	}
</style>

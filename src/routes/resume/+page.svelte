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

		const imgWidth = canvas.width;
		const imgHeight = canvas.height;

		// Convert canvas dimensions from pixels to millimeters
		const pdfWidth = imgWidth * 0.264583;
		const pdfHeight = imgHeight * 0.264583;

		// Create a PDF with the exact dimensions of the canvas
		const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);

		// Add the image to the PDF
		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

		// Save the PDF
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

	<div class="content">
		<section id="contact-info">
			<h2>
				Contact Info
				<button id="generate-pdf" title="Download PDF" on:click={generatePDF} style="background: none; border: none; cursor: pointer;">📄</button>
			</h2>
			<p>Email: {resumeData.contact.email}</p>
			<p>Mobile: {resumeData.contact.tel}</p>
			<p>Website: <a href={resumeData.contact.website}>{resumeData.contact.website}</a></p>
			<p>Github: <a href={resumeData.contact.github}>{resumeData.contact.github}</a></p>
			<p>LinkedIn: <a href={resumeData.contact.linkedIn}>{resumeData.contact.linkedIn}</a></p>
		</section>

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

		<section id="additional-info" class="rounded-section">
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
	</div>
{/if}

<HalftoneWave />

<style>

	.content {
		display: contents;
	}

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

	#contact-info,
	#summary,
	#education,
	#additional-info {
		grid-column: 1;
	}

	#employment {
		grid-column: 2;
		grid-row: 2 / span 6;
	}
	
	#skills {
		grid-column: 3;
		grid-row: 2 / span 6;
		
	}

	@media (max-width: 1200px) { /* tablet */
		/* .app.resume {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr auto;
		} */

		#skills {
			grid-column: 1 / -1;
			grid-row: auto;
		}
	}

	@media (max-width: 800px) { /* mobile */
		/* .app.resume {
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr auto;
		} */

		#contact-info,
		#summary,
		#education,
		#additional-info,
		#employment,
		#skills {
			grid-column: 1;
			grid-row: auto;
		}
	}
</style>

<script>
	export let resumeData;
</script>

<section id="summary">
	<div class="title-container">
		<h2>Engineering Manager, Efficiency @ Stripe</h2>
	</div>
	<div class="text-container" id="hover-area">
		<!-- <p>{resumeData.summary} <span id="sparkle" class="sparkle-icon">✨</span></p> -->
		<pre>
Hello Stripe Team,

I’m Brian Slate, excited to apply for the Engineering Manager position on the Efficiency team. With over 15 years of software development and management experience, particularly in optimizing cloud infrastructure, I am ready to contribute to Stripe’s strategic initiatives.

At CI Solutions, where I served as Director of Software Engineering, I led significant projects that enhanced cloud resource scalability and cost efficiency. This experience aligns closely with the goals of the Efficiency team at Stripe, where I am eager to drive efforts that improve infrastructure efficiency and reduce costs per transaction.

I look forward to the opportunity to leverage my expertise at Stripe to help scale operations effectively while upholding a best-in-class price/performance ratio.

Thank you for considering my application.

Warm regards,

Brian Slate						
		</pre>
	</div>
</section>

<style>
	pre {
		text-wrap: pretty;
		font-size: 1.5rem;
	}

	.text-container {
		background-color: rgba(255, 255, 255, 0.6); /* Semi-transparent white background */
		padding: 20px;
		border-radius: 5px;
		margin-bottom: 10px;
		position: relative;
		cursor: pointer; /* Changed cursor */
	}

	.quote-icon {
		font-size: 2em;
		position: absolute;
		color: black; /* Default color */
		transition: all 0.3s ease;
	}

	#start-quote {
		top: 0;
		left: 0;
	}

	#end-quote {
		bottom: 0;
		right: 0;
	}

	#hover-area:hover .quote-icon {
		transform: scale(3);
	}
</style>

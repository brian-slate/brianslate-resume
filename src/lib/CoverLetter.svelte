<script>
	export let resumeData;
</script>

<section id="summary">
	<div class="title-container">
		<h2>Staff Engineer - Browse and Catalog Engineering @ Lululemon</h2>
	</div>
	<div class="text-container" id="hover-area">
		<!-- <p>{resumeData.summary} <span id="sparkle" class="sparkle-icon">✨</span></p> -->
		<pre>
Hello Lululemon Team,

I’m thrilled at the chance to apply for the Staff Engineer role at Lululemon. As someone deeply passionate about blending technology with wellness, I feel like this position was made for me.

My background in computer science, paired with over a decade of engineering leadership — including leading the build-out and eventual acquisition of a prior startup at Bluetree Network — has prepared me well to jump into Lululemon’s technology domain. I love the idea of leading a team that’s as committed to innovation and quality as I am, especially in a place that puts such a strong emphasis on growth and community.

At CI Solutions, I led a team through major overhauls and new implementations that have sharpened my skills in making technical processes smoother and more efficient. What excites me about working at Lululemon is not just working on cutting-edge tech but doing so in a company that cares deeply about its impact on the world.

I’m looking forward to potentially discussing how I can bring my love for tech and my team-centric leadership style to Lululemon. Thanks for considering my application — I can’t wait to meet and share what I bring to the table.

Best,
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

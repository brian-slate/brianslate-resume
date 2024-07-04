<script>
	import { onMount, onDestroy } from 'svelte';

	export let leftColor = 'rgba(128, 128, 128, 0.3)';
	export let rightColor = 'rgba(255, 215, 0, 0.8)';
	export let shapeRegenerationMinInterval = 500;
	export let shapeRegenerationMaxInterval = 5000;

	let transitionEasingFunctions = ['ease-in', 'ease-out', 'ease-in-out', 'linear'];
	let randomEasingFunction;
	let durations = ['2s', '3s', '4s'];
	let randomDuration;
	let shapeRegenerationTimeout;
	let slotContainer;
	let leftShapePath = '';
	let rightShapePath = '';
	let resizeTimeout;
	let animating = true;
	// Disabling animations for Safari (SVG animations are really choppy with current implementation - will investigate and update later)
	let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

	function pointsToPath(points) {
		return `M${points.map((p) => `${p.x},${p.y}`).join(' L')} Z`;
	}

	function generateZigzagShape(width, height, leftPercent) {
		const points = [
			{ x: 0, y: 0 },
			{ x: width * leftPercent, y: 0 }
		];

		const numZigzags = Math.min(6, Math.max(2, Math.floor(height / 200)));
		const zigzagHeight = height / numZigzags;

		for (let i = 0; i < numZigzags; i++) {
			const baseY = i * zigzagHeight;
			const tipY = baseY + zigzagHeight / 2;
			const endY = baseY + zigzagHeight;
			const tipX = width * leftPercent + Math.random() * (width * 0.4);

			points.push({ x: tipX, y: tipY }, { x: width * leftPercent, y: endY });
		}

		points.push({ x: 0, y: height });

		return points;
	}

	function generateShapes() {
		const { width, height } = slotContainer.getBoundingClientRect();

		const leftPercent1 = 0.4 + Math.random() * 0.4;
		const leftPercent2 = 1 - leftPercent1;

		const points1 = generateZigzagShape(width, height, leftPercent1);
		const points2 = generateZigzagShape(width, height, leftPercent2).map((point) => {
			return { x: width - point.x, y: point.y };
		});

		leftShapePath = pointsToPath(points1);
		rightShapePath = pointsToPath(points2);
	}

	function setRandomShapeRegenerationTimeout() {
		if (isSafari) return; // Skip animation for Safari

		const randomTime =
			Math.random() * (shapeRegenerationMaxInterval - shapeRegenerationMinInterval) +
			shapeRegenerationMinInterval;
		shapeRegenerationTimeout = setTimeout(() => {
			requestAnimationFrame(() => {
				generateShapes();
				setRandomShapeRegenerationTimeout();
			});
		}, randomTime);
	}

	function handleResize() {
		animating = false;
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			animating = true;
			generateShapes();
		}, 200);

		if (animating) {
			generateShapes();
		}
	}

	onMount(() => {
		randomEasingFunction =
			transitionEasingFunctions[Math.floor(Math.random() * transitionEasingFunctions.length)];
		randomDuration = durations[Math.floor(Math.random() * durations.length)];
		generateShapes();
		setRandomShapeRegenerationTimeout();
		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(shapeRegenerationTimeout);
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		clearTimeout(shapeRegenerationTimeout);
	});
</script>

<div class="polygon-background" style="position: relative;" bind:this={slotContainer}>
	<svg style="position: absolute; width: 100%; height: 100%; z-index: -1;">
		<path
			d={leftShapePath}
			style={`fill:${leftColor}; transition: ${
				isSafari ? 'none' : animating ? `d ${randomDuration} ${randomEasingFunction}` : 'none'
			}; will-change: d;`}
		/>
		<path
			d={rightShapePath}
			style={`fill:${rightColor}; transition: ${
				isSafari ? 'none' : animating ? `d ${randomDuration} ${randomEasingFunction}` : 'none'
			}; will-change: d;`}
		/>
	</svg>
	<div>
		<slot />
	</div>
</div>

<style>
	/* Apply hardware acceleration hints */
	.polygon-background {
		transform: translateZ(0);
	}
</style>

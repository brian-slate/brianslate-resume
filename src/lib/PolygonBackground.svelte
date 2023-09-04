<script>
	import { afterUpdate, onMount, onDestroy } from 'svelte';

	export let leftColor = 'rgba(128, 128, 128, 0.3)';
	export let rightColor = 'rgba(255, 215, 0, 0.8)';
	export let animationSpeed = 1000; // in milliseconds

	const easingFunctions = ['ease-in', 'ease-out', 'linear', 'ease-in-out'];
	const durations = ['2s', '3s', '4s']; // You can add more durations as you like

	let selectedEasingFunction, selectedDuration;
	let animationInterval;

	let slotContainer;
	let path1 = '',
		path2 = '';

	function pointsToPath(points) {
		return `M${points.map((p) => `${p.x},${p.y}`).join(' L')}`;
	}

	function generateZigzagShape(width, height, leftPercent) {
		const points = [
			{ x: 0, y: 0 },
			{ x: width * leftPercent, y: 0 }
		];

		const numZigzags = Math.min(8, Math.max(2, Math.floor(height / 200)));
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

	function generatePolygonPoints() {
		const { width, height } = slotContainer.getBoundingClientRect();

		// Randomize the portion of the left filled area
		const leftPercent1 = 0.4 + Math.random() * 0.4;
		const leftPercent2 = 1 - leftPercent1; // Make sure the shapes overlap

		const points1 = generateZigzagShape(width, height, leftPercent1);
		const points2 = generateZigzagShape(width, height, leftPercent2).map((point) => {
			return { x: width - point.x, y: point.y };
		});

		path1 = pointsToPath(points1);
		path2 = pointsToPath(points2);
	}

	onMount(() => {
		// Randomly select an easing function and duration for this instance
		selectedEasingFunction = easingFunctions[Math.floor(Math.random() * easingFunctions.length)];
		selectedDuration = durations[Math.floor(Math.random() * durations.length)];

		// Generate initial polygons
		generatePolygonPoints();

		// Set up an interval to keep updating the polygons
		animationInterval = setInterval(generatePolygonPoints, animationSpeed);
	});

	// Don't forget to clear the interval when the component is destroyed
	onDestroy(() => {
		clearInterval(animationInterval);
	});

	afterUpdate(() => {
		generatePolygonPoints();
	});
</script>

<div style="position: relative;" bind:this={slotContainer}>
	<svg style="position: absolute; width: 100%; height: 100%; z-index: -1;">
		<path d={path1} style={`fill:${leftColor}`} />
		<path d={path2} style={`fill:${rightColor}`} />
	</svg>
	<div>
		<slot />
	</div>
</div>

<style>
	path {
		transition: d 3s ease-out;
	}
</style>

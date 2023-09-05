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
	let shapeRegenerationInterval;
	let slotContainer;
	let leftShapePath = '';
	let rightShapePath = '';
	let resizeTimeout;
	let animating = true;  // Reactive variable to control transitions

    function pointsToPath(points) {
		return `M${points.map(p => `${p.x},${p.y}`).join(' L')}`;
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

	function generateShapes() {
		const { width, height } = slotContainer.getBoundingClientRect();

		// Randomize the portion of the left filled area
		const leftPercent1 = 0.4 + Math.random() * 0.4;
		const leftPercent2 = 1 - leftPercent1; // Make sure the shapes overlap

		const points1 = generateZigzagShape(width, height, leftPercent1);
		const points2 = generateZigzagShape(width, height, leftPercent2).map((point) => {
			return { x: width - point.x, y: point.y };
		});

		leftShapePath = pointsToPath(points1);
		rightShapePath = pointsToPath(points2);
	}

	function setRandomShapeRegenerationInterval() {
		const randomTime = Math.random() * (shapeRegenerationMaxInterval - shapeRegenerationMinInterval) + shapeRegenerationMinInterval;
		shapeRegenerationInterval = setInterval(() => {
			generateShapes();
			clearInterval(shapeRegenerationInterval);
			setRandomShapeRegenerationInterval();
		}, randomTime);
	}

	function handleResize() {
		animating = false;

		// Force a reflow to apply the changes instantly.
		generateShapes();
		slotContainer.offsetHeight; // just reading the value forces the flush

		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			generateShapes();
			animating = true;
		}, 200);
	}

	onMount(() => {
		randomEasingFunction = transitionEasingFunctions[Math.floor(Math.random() * transitionEasingFunctions.length)];
        randomDuration = durations[Math.floor(Math.random() * durations.length)];
		generateShapes();
		setRandomShapeRegenerationInterval();
		window.addEventListener('resize', handleResize);

		return () => {
			clearInterval(shapeRegenerationInterval);
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		clearInterval(shapeRegenerationInterval);
	});
</script>

<div style="position: relative;" bind:this={slotContainer}>
	<svg style="position: absolute; width: 100%; height: 100%; z-index: -1;">
		<rect x="0" y="0" width="100%" height="100%" style={`fill:${!animating ? leftColor : 'none'}`} />
        <path
            d={leftShapePath}
            style={`fill:${leftColor}; transition: ${!animating ? '' : `d ${randomDuration} ${randomEasingFunction}`};`}
        />
        <path
            d={rightShapePath}
            style={`fill:${rightColor}; transition: ${!animating ? '' : `d ${randomDuration} ${randomEasingFunction}`};`}
        />
	</svg>
	<div>
		<slot />
	</div>
</div>

<style>

</style>

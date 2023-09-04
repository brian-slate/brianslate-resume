<script>
	import { afterUpdate, onMount } from 'svelte';
	let slotContainer;
	let points1 = [];
	let points2 = [];

	function randomizeCoordinate(coord, variance = 10) {
		return coord + (Math.random() * variance - variance / 2);
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

			points.push(
				{ x: tipX, y: tipY },
				{ x: width * leftPercent, y: endY }
			);
		}

		points.push(
			{ x: 0, y: height }
		);

		return points;
	}

	function generatePolygonPoints() {
        const { width, height } = slotContainer.getBoundingClientRect();
        
        // Randomize the portion of the left filled area
        const leftPercent1 = 0.4 + Math.random() * 0.4;
        const leftPercent2 = 1 - leftPercent1;  // Make sure the shapes overlap

        points1 = generateZigzagShape(width, height, leftPercent1);
        points2 = generateZigzagShape(width, height, leftPercent2).map(point => {
            return { x: width - point.x, y: point.y };
        });
	}

	onMount(() => {
		generatePolygonPoints();
	});

	afterUpdate(() => {
		generatePolygonPoints();
	});
</script>

<div style="position: relative;" bind:this={slotContainer}>
	<svg style="position: absolute; width: 100%; height: 100%; z-index: -1;">
		<polygon points={points1.map(p => `${p.x},${p.y}`).join(' ')} style="fill:rgba(128, 128, 128, 0.3);" />
		<polygon points={points2.map(p => `${p.x},${p.y}`).join(' ')} style="fill:rgba(255, 215, 0, 0.8);" />
	</svg>
	<div>
		<slot />
	</div>
</div>

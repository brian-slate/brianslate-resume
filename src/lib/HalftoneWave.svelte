<script lang="ts">
	import { onMount } from 'svelte';
    import { debounce } from './debounce';

	let canvas;
	const themeColors = [
		'rgba(255, 165, 0, 0.8)', // --color-theme-3
		'rgba(0, 128, 128, 0.8)', // --color-theme-4
		'rgba(128, 0, 128, 0.8)' // --color-theme-5
	];

	function drawHalftoneWavePattern() {
		if (canvas) {
			const ctx = canvas.getContext('2d');
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			const dotSpacing = 15;
			const waveFrequency = 0.02;
			const waveAmplitude = 75;

			for (let y = 0; y < canvas.height; y += dotSpacing) {
				for (let x = 0; x < canvas.width; x += dotSpacing) {
					const waveOffset = Math.sin(x * waveFrequency) * waveAmplitude * 0.2;

					// Use the theme colors based on the y position
					const colorIndex = Math.floor((y / canvas.height) * themeColors.length);
					ctx.fillStyle = themeColors[colorIndex];

					ctx.beginPath();
					ctx.arc(x, y + waveOffset * 10, 1, 0, Math.PI * 2);
					ctx.fill();
				}
			}
		}
	}

	onMount(async () => {
		drawHalftoneWavePattern();

		const debouncedDraw = debounce(drawHalftoneWavePattern, 250);
		window.addEventListener('resize', debouncedDraw);

		return () => {
			window.removeEventListener('resize', debouncedDraw);
		};
	});
</script>

<canvas bind:this={canvas} id="halftone-wave" />

<style>
	#halftone-wave {
		position: absolute;
		bottom: -2rem;
		left: 50%;
		transform: translateX(-50%);
		height: 50%;
		width: 100vw;
		opacity: 0.5;
		z-index: -100;
	}
</style>

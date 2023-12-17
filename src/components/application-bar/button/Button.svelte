<script lang="ts">
	export let button: 'close' | 'minimise' | 'maximise';

	let hovering = false;
</script>

<button
	class={button}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
>
	{#if hovering}
		<div class="dot" />
	{/if}
</button>

<style>
	button {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		border-radius: 50%;

		display: flex;
	}

	.close {
		background-color: red;
	}

	.minimise {
		background-color: yellow;
	}

	.maximise {
		background-color: green;
	}

	.dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;

		background-color: black;

		margin: auto;
	}
</style>

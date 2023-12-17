<script lang="ts">
	import Button from './button/Button.svelte';

	const buttons = ['close', 'minimise', 'maximise'] as const;
</script>

<div class="application-bar">
	<div class="buttons">
		{#each buttons as button (button)}
			<Button {button} />
		{/each}
	</div>
	Dylan Hamersztein - CV
</div>

<style>
	.application-bar {
		display: grid;
		height: 4%;
		width: 100%;
		position: relative;
		text-align: center;
		align-items: center;
		background: linear-gradient(#e5e5e5, #bfbfbf);
		border-top-right-radius: 7px;
		border-top-left-radius: 7px;
	}

	.buttons {
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: fit-content;
		height: 100%;
		position: absolute;
		margin-left: 5px;
	}
</style>

<script lang="ts">
	import { commandHistoryStore } from '../../stores/commandHistory';
	import Prompt from '../prompt/Prompt.svelte';
</script>

<div class="terminal">
	{#each $commandHistoryStore as command (command.command)}
		<Prompt {command} />
	{/each}
	<Prompt />
</div>

<style>
	.terminal {
		height: 100%;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;

		background-color: #272727;
		opacity: 80%;

		border: 1px solid black;
		border-top: none;
	}
</style>

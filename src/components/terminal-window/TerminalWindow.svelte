<script lang="ts">
	import ApplicationBar from '../application-bar/ApplicationBar.svelte';
	import Terminal from '../terminal/Terminal.svelte';
</script>

<div class="terminal-window">
	<ApplicationBar />
	<Terminal />
</div>

<style>
	.terminal-window {
		margin: auto;

		width: 80%;
		height: 80%;

		display: flex;
		flex-direction: column;
	}
</style>

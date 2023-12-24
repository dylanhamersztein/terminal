<script lang="ts">
	import TerminalWindow from '../components/terminal-window/TerminalWindow.svelte';
</script>

<div class="background">
	<TerminalWindow />
</div>

<style>
	.background {
		height: 100%;

		background-image: url('images/background.jpg');
		background-repeat: no-repeat;
		background-size: 100% auto;

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

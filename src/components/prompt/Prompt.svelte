<script lang="ts">
	import type { Command } from '$lib/types/command';
	import { onMount } from 'svelte';
	import { commandHistoryStore } from '../../stores/commandHistory';

	export let command: Command | undefined = undefined;

	let newCommand: string = '';

	const handle = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			if (/^reset$/i.test(newCommand)) {
				commandHistoryStore.reset();
			} else {
				commandHistoryStore.addCommand(newCommand, 'something');
			}

			newCommand = '';
		}
	};

	let ps1Row: HTMLElement;

	$: if (ps1Row) {
		[...ps1Row.children].forEach((child, index) => {
			(child as HTMLElement).style.zIndex = `${-index}`;
		});
	}

	let time = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	let cwd = '~';
</script>

<div class="wrapper">
	<div class="prompt">
		<div class="ps1" bind:this={ps1Row}>
			<span class="cwd">{cwd}</span>
			<span class="git-branch">master</span>
			<span class="separator" />
			<span class="time">{time.toLocaleTimeString()}</span>
		</div>
		{#if command}
			<p>{command.command}</p>
		{/if}
	</div>

	<div class="output">
		{#if !!command}
			<span>{command.output}</span>
		{:else}
			<input id="input" type="text" on:keydown={handle} bind:value={newCommand} />
		{/if}
	</div>
</div>

<style>
	.wrapper {
		padding: 5px;
	}

	.prompt {
		display: flex;
		flex-direction: column;
	}

	.ps1 {
		height: 30px;
		width: 100%;
		margin-bottom: 5px;

		display: flex;

		/* display: grid; */
		/* grid-template-columns: auto auto 5fr auto; */
		align-items: center;
	}

	span {
		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		min-width: 10%;

		&:not(:last-child) {
			border-radius: 0 50px 50px 0;

			&:not(:first-child):not(.separator) {
				margin-left: -15px;
			}
		}
	}

	.cwd {
		grid-area: 'a';
		background-color: blue;
		color: white;
		min-width: 50px;
	}

	.git-branch {
		grid-area: 'b';
		background-color: limegreen;
		display: flex;
		align-items: center;
		min-width: 80px;
	}

	.time {
		background-color: yellow;
	}

	.separator {
		grid-area: 'c';
		height: 1px;
		border-top: 1px solid lightgray;
		margin: 0;
		margin: 0 1% 0 1%;
		flex: 1 1 auto;
	}

	.output {
		color: white;
		margin-bottom: 15px;
	}

	p {
		margin: 0;
		color: white;
	}

	input {
		height: 50px;
		padding: 0;
		padding-left: 5px;
		background-color: #272727;
		caret-color: #e5e5e5;
		color: #e5e5e5;
		border: none;

		&:focus {
			outline: none;
		}
	}
</style>

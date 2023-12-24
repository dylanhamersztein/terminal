import type { Command } from '$lib/types/command';
import { writable } from 'svelte/store';

const createCommandHistoryStore = () => {
	const { subscribe, update, set } = writable<Command[]>([
		{
			command: 'curl google.com',
			output: '404 not found'
		}
	]);

	return {
		subscribe,
		addCommand: (command: string, output: string) =>
			update((prev) => [...prev, { command, output }]),
		reset: () => set([])
	};
};

export const commandHistoryStore = createCommandHistoryStore();

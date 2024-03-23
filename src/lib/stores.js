import { writable } from 'svelte/store';

export const streak = writable(14);
export const points = writable(180);
// Course-compare tray state (max 3 courses), persisted to localStorage.
// Plain module state + Svelte 5 runes in a .svelte.ts module.
import { browser } from '$app/env';

const KEY = 'edule-compare';
export const MAX_COMPARE = 3;

function load(): string[] {
	if (!browser) return [];
	try {
		const raw = localStorage.getItem(KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string').slice(0, MAX_COMPARE) : [];
	} catch {
		return [];
	}
}

function persist() {
	if (!browser) return;
	try {
		localStorage.setItem(KEY, JSON.stringify(compareStore.ids));
	} catch {
		/* storage unavailable — compare still works for the session */
	}
}

export const compareStore = $state({ ids: load() });

export function isComparing(id: string): boolean {
	return compareStore.ids.includes(id);
}

export function toggleCompare(id: string): boolean {
	const i = compareStore.ids.indexOf(id);
	if (i >= 0) {
		compareStore.ids.splice(i, 1);
	} else {
		if (compareStore.ids.length >= MAX_COMPARE) return false;
		compareStore.ids.push(id);
	}
	persist();
	return true;
}

export function clearCompare() {
	compareStore.ids.splice(0, compareStore.ids.length);
	persist();
}

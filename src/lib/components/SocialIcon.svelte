<script lang="ts">
	// Brand icons are no longer shipped by lucide-svelte, so EduLe uses small
	// inline SVGs (24×24 grid, currentColor, proper aria) for social brands.
	let { name, size = 18 }: { name: 'facebook' | 'x' | 'instagram' | 'youtube' | 'linkedin'; size?: number } = $props();

	const paths: Record<string, string> = {
		facebook: 'M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.2v3h2.5v7h2.8Z',
		x: 'M17.8 4h2.7l-6 6.8L21.5 20h-5.6l-4.3-5.6L6.6 20H3.9l6.4-7.3L3.7 4h5.7l3.9 5.1L17.8 4Zm-1 14.4h1.5L8.6 5.5H7L16.8 18.4Z',
		instagram:
			'M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6Zm0-2.1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm7.1-.3a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0ZM12 4.2c-2.5 0-2.8 0-3.8.1a5 5 0 0 0-1.7.3 3.4 3.4 0 0 0-2 2 5 5 0 0 0-.3 1.7c-.1 1-.1 1.3-.1 3.8s0 2.8.1 3.8a5 5 0 0 0 .3 1.7 3.4 3.4 0 0 0 2 2 5 5 0 0 0 1.7.3c1 .1 1.3.1 3.8.1s2.8 0 3.8-.1a5 5 0 0 0 1.7-.3 3.4 3.4 0 0 0 2-2 5 5 0 0 0 .3-1.7c.1-1 .1-1.3.1-3.8s0-2.8-.1-3.8a5 5 0 0 0-.3-1.7 3.4 3.4 0 0 0-2-2 5 5 0 0 0-1.7-.3c-1-.1-1.3-.1-3.8-.1Z',
		youtube:
			'M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8ZM10 15V9l5.2 3L10 15Z',
		linkedin:
			'M6.9 8.6H3.6V20h3.3V8.6ZM5.2 3.5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 13.6c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6V8.6h-3.3V20h3.3v-6.1c0-1.4.6-2.2 1.8-2.2 1.1 0 1.6.8 1.6 2.2V20h3.3v-6.4Z'
	};
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={paths[name]} /></svg>

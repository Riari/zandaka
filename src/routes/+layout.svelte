<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="layout">
	<Header />
	
	<main>
		<div>
			<slot />
		</div>
	</main>
	
	<footer>
		<div>
			Zandaka. An app by <a href="https://riari.dev/">riari.dev</a>.
		</div>
	</footer>
</div>

<style>
	.layout {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	main div,
	footer div {
		margin: 0 auto;
		min-width: 800px;
		max-width: 80vw;
	}

	main {
		flex: 1;
		padding: 2em 1em;
		color: var(--text-color);
	}

	footer {
		border-top: 1px solid var(--secondary-color);
		padding: 2em 1em;
		color: var(--primary-color);
	}

	footer a {
		color: var(--primary-color);
		font-weight: bold;
	}
</style>

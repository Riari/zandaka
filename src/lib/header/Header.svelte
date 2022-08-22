<script lang="ts">
	import { page } from '$app/stores';
	import logo from '/icon-white.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Zandaka" />
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Dashboard</a></li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background: var(--accent-color);
		padding: 0.5em;
	}

	.corner {
		width: 48px;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 48px;
	}

	nav {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--pure-white);
		font-weight: 300;
		font-size: 1rem;
		text-transform: uppercase;
		text-decoration: none;
		opacity: 0.8;
		transition: color 0.1s linear, opacity 0.1s linear;
	}

	a:hover {
		opacity: 1;
	}
</style>

<script>
	import { streak, points } from "$lib/stores.js";
</script>

<div class="container">
	<div class="nav">
		<div class="nav-start">
			<div class="icon">
				<img src = "happy.svg" alt="My Happy SVG"/>
			</div>
			<div class="nav-text">
				<div class="nav-name">
					Janna
				</div>
				<div class="nav-level">
					Lvl 20
				</div>
			</div>
		</div>
		<div class="nav-end">
			<div class="streak-points">
				<div class="streak">
					<img src="/fire.svg" alt="Current Streak">
					<p>{$streak}</p>
				</div>
				<div class="points">
					<img src="/tree.svg" alt="tree">
					<p>{$points}</p>
				</div>
			</div>
			<button>
				<img src="/Menu.svg" alt="Menu">
			</button>
		</div>
	</div>

	<div class="main-part">
		<slot/>
	</div>

	<div class="lower-nav">
		<div class="home">
			<img src="home.svg" alt="Home">
		</div>
		<div class="leaderboard">
			<img src="leaderboard.svg" alt="Leaderboard">
		</div>
		<div class="profile">
			<img src="profile.svg" alt="Profile">
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 12px 8px;
	}

	.nav-start {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.nav-end {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.streak-points {
		display: inline-flex;
		gap: 12px;
	}

	.streak, .points {
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}

	.streak p, .points p {
		font-size: 24px;
		font-weight: bold;
	}

	.streak img {
		width: 26px;
	}

	.main-part {
		display: flex;
		flex-direction: column;
		padding: 0 16px;
		gap: 20px;
		margin-bottom: 128px;
		width: 100%;
	}

	.lower-nav {
		position: fixed;
		border: 1px solid #000;
		background-color: #FFF;
		border-radius: 16px;
		box-shadow: #000 0 4px;
		left: 16px;
		bottom: 24px;
		display: inline-flex;
		align-items: center;
		justify-content: space-evenly;
		width: calc(100% - 32px);
		height: 64px;
		padding: 12px 8px;
		z-index: 2;
	}
</style>

<script>
    let data = [
		{
			name: "Arno",
			score: 19
		},
		{
			name: "Temo",
			score: 14
		},
		{
			name: "Juka",
			score: 10
		},

	]
</script>

<div class="leaderboard">
	<div class="lb">
		<div class="lb-title-wrapper">
			<div class="lb-title">
				Leading Today
			</div>
		</div>
		<div class="lb-list">
			{#each data as person}
				<div class="lb-person">
					<img class="lb-profile" src="profile.svg" alt={person.name}>
					<span class="lb-name">{person.name}</span>
					<div class="lb-progbar" style="width:{person.score / 0.25}%;"/>
					<span>{person.score}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
    	.leaderboard {
		width: 100%;
		border: 1px solid #000;
		border-radius: 16px;
		box-shadow: #000 4px 4px;
		padding: 8px;
	}

	.lb {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.lb-title-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lb-title {
		font-size: 24px;
		font-weight: 600;
	}

	.lb-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.lb-person {
		display: inline-flex;
		align-items: center;
	}

	.lb-profile {
		width: 30px;
	}

	.lb-name {
		width: 40px;
	}

	.lb-progbar {	
		background: rgb(160,242,208);
		background: linear-gradient(90deg, rgba(160,242,208,1) 0%, rgba(28,235,90,1) 100%);
		height: 18px;
		margin: 4px;
		border-radius: 8px;
	}
</style>
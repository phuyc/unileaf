<script>
	import TitleBar from "$lib/TitleBar.svelte";
  	import Leaderboard from "$lib/Leaderboard.svelte";
	import Event from "$lib/Event.svelte";
	import Task from "$lib/Task.svelte";

</script>

<Leaderboard />

<div class="future-events">
	<TitleBar title="Future Events"/>
	<div class="events">
		<Event
			title="Easter Sitsit"
			color="linear-gradient(90deg, rgb(102, 226, 255), rgb(255, 102, 196))"
			end={new Date("Mar 25, 2024 00:00:00 GMT+02:00").getTime()}
			location="Otakaari 20"
		/>
		<Event
			title="Zero Waste"
			color="linear-gradient(90deg, rgba(160,233,242,1) 0%, rgba(28,235,90,1) 100%)"
			end={new Date("Apr 7, 2024 00:00:00 GMT+02:00").getTime()}
			location="Undergraduate Center"
		/>
	</div>
</div>

<div class="daily-tasks">
	<TitleBar title="Daily Tasks" />
	<div class="tasks">
		<Task title="Food" src="fork.jpg" popup="popup.svelte"/>
		<Task title="Checkpoints" src="fork.jpg"/>
		<Task title="Transportation" src="fork.jpg"/>
		<Task title="Quizzes" src="fork.jpg"/>
	</div>
</div>


<style>
	.events {
		width: 100%;
		display: inline-flex;
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
	}

	.tasks {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
</style>

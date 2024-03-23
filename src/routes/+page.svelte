<script>
	import TitleBar from "$lib/TitleBar.svelte";
  	import Leaderboard from "$lib/Leaderboard.svelte";
	import Event from "$lib/Event.svelte";
	import Task from "$lib/Task.svelte";

	let isQuizOpen = false;

	let choice = "";

	function openQuiz() {
		isQuizOpen = !isQuizOpen;
	}

	function correct() {
		isQuizOpen = !isQuizOpen;
	}

	function incorrect() {
		isQuizOpen = !isQuizOpen;
	}
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
		<Task title="Food" src="fork.jpg"/>
		<Task title="Checkpoints" src="map.svg"/>
		<Task title="Transportation" src="bus.svg"/>
		<Task title="Quizzes" src="quiz.svg" handleClick={openQuiz}/>
	</div>
</div>

{#if isQuizOpen}
<button class="overlay" on:click|self={openQuiz}>
	<div class="quiz-popup">
		<button on:click={openQuiz}>
			<img class="close" src="x.svg" alt="X">
		</button>
		<div class="quiz-title">Question</div>
		<div class="quiz-part">
			<div class="quiz-question">
				What is the PRIMARY concern regarding the environmental impact of electric vehicles?
			</div>
			<div class="quiz-choices">
				<button class="choice" on:click={incorrect}>
					<div class="question-choice-letter">A</div>
					<div class="question-choice-text">Limited range</div>
				</button>
				<button class="choice" on:click={correct}>
					<div class="question-choice-letter">B</div>
					<div class="question-choice-text">Disposal of used batteries</div>
				</button>
				<button class="choice" on:click={incorrect}>
					<div class="question-choice-letter">C</div>
					<div class="question-choice-text">Reliance on fossil fuels</div>
				</button>
				<button class="choice" on:click={incorrect}>
					<div class="question-choice-letter">D</div>
					<div class="question-choice-text">The eco-friendly nature</div>
				</button>

			</div>
		</div>
	</div>
</button>
{/if}
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

	.overlay {
		position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
		width: 100%;
		height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
	}

	.quiz-popup {
		background-color: #FFF;
		border: 1px solid #FFF;
		border-radius: 16px;
		box-shadow: #000 4px 4px;
		width: 80%;
		/* height: 42%; */
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		position: relative;
		/* transform: translate(0, -10%); */
	}

	.close {
		position: absolute;
		right: 16px;
		top: 16px;
	}

	.quiz-part {
		display: flex;
		flex-direction: column;
		gap: 16px
	}

	.quiz-title {
		font-size: 28px;
		font-weight: 600;
	}	

	.quiz-choices {
		text-align: start;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.choice {
        display: flex;
        align-items: center;
        border: 1px solid #000;
        background: #FFF;
        width: 100%;
	}

	.choice:active {
		background: #DAF8FF;
	}

	.question-choice-letter {
        display: flex;
        width: 50px;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #000;

        /* Desktop/p2 Desktop */
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 450;
        line-height: 27px; /* 150% */
    }

	.question-choice-text {
        text-align: start;
        width: 100%;
        padding: 10px;
        border-left: 1px solid #000;
        color: #000;
        font-size: 18px;
        font-weight: 450;
        line-height: 27px; /* 150% */
    }
</style>

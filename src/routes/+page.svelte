<script>
	import TitleBar from "$lib/TitleBar.svelte";
  	import Leaderboard from "$lib/Leaderboard.svelte";
	import Event from "$lib/Event.svelte";
	import Task from "$lib/Task.svelte";

	import FoodPopup from "$lib/FoodPopup.svelte";
	
	import { streak, points } from "$lib/stores.js";

	let isQuizOpen = false;
	let isFoodCheckOpen = false;
	let isTransportationOpen = false;
	let isMinimapOpen=false;


	function disableScroll() {
		let x = document.getElementsByTagName("BODY")[0];
        x.style.overflow = isQuizOpen || isFoodCheckOpen || isTransportationOpen || isMinimapOpen ? 'hidden' : 'auto';
	}

	function switchTransportation() {
		isTransportationOpen = !isTransportationOpen;
		disableScroll();
	}

	function switchFoodCheck() {
		isFoodCheckOpen = !isFoodCheckOpen;
		disableScroll();
	}

	function switchMinimap(){
		isMinimapOpen=!isMinimapOpen;
		disableScroll();
	}


	function openQuiz() {
		isQuizOpen = !isQuizOpen;
		disableScroll();
	}

	// Name this better
	function correct(closeModal) {
		closeModal();
		disableScroll();
		points.update((n) => n + 5);
		streak.update((n) => n + 1);
	}

	// Name this better
	function incorrect(closeModal) {
		closeModal();
		disableScroll();
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
		<Task title="Food" src="fork.jpg" handleClick={switchFoodCheck}/>
		<Task title="Checkpoints" src="map.svg" handleClick={switchMinimap}/>
		<Task title="Transportation" src="bus.svg" handleClick={switchTransportation}/>
		<Task title="Quizzes" src="quiz.svg" handleClick={openQuiz}/>
	</div>
</div>



{#if isMinimapOpen}
	<button class="overlay" on:click|self={switchMinimap}>
		<div class="quiz-popup">
			<button on:click={switchMinimap}>
				<img class="close" src="x.svg" alt="X">
			</button>
			<h1>Checkpoints</h1>
			<img src="aaltoMap.png"
					style="max-width: 30% max-height: 20%;"
					alt="Aalto Map"
			>
		</div>
	</button>
{/if}

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
				<button class="choice" on:click={() => incorrect(openQuiz)}>
					<div class="question-choice-letter">A</div>
					<div class="question-choice-text">Limited range</div>
				</button>
				<button class="choice" on:click={() => correct(openQuiz)}>
					<div class="question-choice-letter">B</div>
					<div class="question-choice-text">Disposal of used batteries</div>
				</button>
				<button class="choice" on:click={() => incorrect(openQuiz)}>
					<div class="question-choice-letter">C</div>
					<div class="question-choice-text">Reliance on fossil fuels</div>
				</button>
				<button class="choice" on:click={() => incorrect(openQuiz)}>
					<div class="question-choice-letter">D</div>
					<div class="question-choice-text">The eco-friendly nature</div>
				</button>

			</div>
		</div>
	</div>
</button>
{/if}

{#if isFoodCheckOpen}
	<FoodPopup {switchFoodCheck} {correct} {incorrect}/>
{/if}

{#if isTransportationOpen}
	<button class="overlay" on:click|self={switchTransportation}>
		<div class="food-popup">
			<button on:click={switchTransportation}>
				<img class="close-food" src="x.svg" alt="X">
			</button>
			<div class="food-part">
				<div class="food-question">
					How did you commute today?
				</div>
				<div class="quiz-choices">
					<button class="foodchoice" on:click={() => correct(switchTransportation)}>
						<div class="food-choice-text">Walking/Cycling</div>

					</button>
					<button class="foodchoice" on:click={() => correct(switchTransportation)}>
						<div class="food-choice-text">Public transportation</div>
					</button>
					<button class="foodchoice" on:click={() => incorrect(switchTransportation)}>
						<div class="food-choice-text">Car</div>
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

	.food-popup{
		background-color: #FFF;
		border: 1px solid #FFF;
		border-radius: 16px;
		box-shadow: #000 4px 4px;
		/* width: 30%; */
		/* height: 42%; */
		padding: 30px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		position: relative;
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
	
	.food-question{
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.quiz-choices {
		text-align: start;
		display: flex;
		flex-direction: column;
	}

	.foodchoice{
		display: flex;
		align-items: center;
		border: 1px solid #000;
		background: #FFF;
		width: 100%;
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

	.foodchoice:active{
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

	.food-choice-text{
		text-align: start;
		width: 100%;
		padding: 10px;
		border-left: 1px solid #000;
		color: #000;
		font-size: 18px;
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

	.close-food {
		position: absolute;
		top: 8px;
		right: 8px;
	}
</style>

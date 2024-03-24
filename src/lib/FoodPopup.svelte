<script>
    export let switchFoodCheck;
	export let correct;
	export let incorrect;
</script>

<button class="overlay" on:click|self={switchFoodCheck}>
    <div class="food-popup">
        <button on:click={switchFoodCheck}>
            <img class="close" src="x.svg" alt="X">
        </button>
        <div class="food-part">
                <div class="food-question">
                What kind of food did you eat?
            </div>
            <div class="food-choices">
                <button class="foodchoice" on:click={() => correct(switchFoodCheck)}>
                    <div class="food-choice-text">Vegeterian</div>

                </button>
                <button class="foodchoice" on:click={() => incorrect(switchFoodCheck)}>
                    <div class="food-choice-text">Non vegeterian</div>
                </button>
            </div>
        </div>
    </div>
</button>

<style>
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

    .food-popup {
        background-color: #FFF;
		border: 1px solid #000;
		border-radius: 16px;
		box-shadow: #000 4px 4px;
		/* width: 80%; */
		/* height: 42%; */
		padding: 30px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		position: relative;
    }

    .food-question{
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 10px;
	}

    .foodchoice{
		display: flex;
		align-items: center;
		border: 1px solid #000;
		background: #FFF;
		width: 100%;
	}

    .foodchoice:active{
		background: #DAF8FF;
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

    .close {
		position: absolute;
		right: 8px;
		top: 8px;
	}
</style>
<script>
    export let title;
    export let src;
    import Modal from './Modal.svelte';
    let showModal = false;

    var correctFood=document.getElementById("foodOption1")


</script>

<button class="task" on:click={() => (showModal = true)}>
    <div class="title">{title}</div>
    <div class="icon">
        <img src={src} alt={src}>
    </div>
</button>

<Modal bind:showModal>
    <div id="foodModal" class="modal1">
        <div class="container">
            <div class="modal-content">
                <h1>What type of food did you eat?</h1>
                <br>
                <input type="radio" id="foodOption1" name="food" value="vegFood">
                <h2>Vegeterian</h2>
                <br>
                <input type="radio" id="foodOption2" name="food" value="nonVegFood">
                <h2>Non vegeterian</h2>
            </div>
        </div>
    </div>

</Modal>


<style>

    .task {
        width: 100%;
        background: #FFF;
        border: 1px solid #000;
        border-radius: 16px;
        box-shadow: #000 4px 4px;
        height: 125px;
        display: flex;
        flex-direction: column;
        padding: 8px;
    }

    .task:active {
        box-shadow: none;
        transform: translate(4px, 4px);
    }

    .title {
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: 450;
    }

    .icon {
        width: 100%;
        height: 100%;
    }

    img {
        width: 80px;
    }
</style>

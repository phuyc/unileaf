<script>
    export let title;
    export let src;
    export let handleClick = () => {};

    import Modal from './Modal.svelte';
    let showModal = false;


</script>

<button class="task" on:click={handleClick}>
    <div class="title">{title}</div>
    <div class="icon">
        <img src={src} alt={src}>
    </div>
</button>



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

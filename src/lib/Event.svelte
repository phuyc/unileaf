<script>
    export let color;
    export let end;
    export let title;
    export let location = "";

    let now = Date.now();

    let interval = setInterval(() => {
        now = Date.now();
    }, 1000)

    $: if (count === 0) clearInterval(interval);

    $: count = Math.round((end - now));
    $: d = Math.floor(count / (1000 * 60 * 60 * 24));
    $: h = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    $: m = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    $: s = Math.floor((count % (1000 * 60)) / 1000);
</script>

<button class="event">
    <div class="poster" style="background: {color};"/>
    <div class="description">
        <div class="title">{title}</div>
        <div class="location">{location}</div>
        <a href="https://dataguild.fi/" class="see-more">See More</a>
        <div class="time">{d}d left</div>
    </div>
</button>

<style>
    .event {
        width: calc(50% - 6px);
        height: 160px;
        border: 1px solid #000;
        border-radius: 16px;
        box-shadow: #000 4px 4px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
    }

    .event:active {
        box-shadow: none;
        transform: translate(4px, 4px);
    }

    .poster {
        height: 40%;
        width: 100%;
    }

    .description {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        text-align: start;
    }

    .title {
        font-size: 18px;
        font-weight: 600;
    }

    .see-more {
        position: absolute;
        bottom: 4px;
        left: 10px;
        font-weight: 600;
    }

    .time {
        position: absolute;
        bottom: 4px;
        right: 10px;
        font-weight: 600;
    }
</style>

<script>
  export let level = 0;
</script>

<style>
  .battery {
    width: 100px;
    height: 40px;
    border: 2px solid black;
    position: relative;
  }
  .charge {
    height: 100%;
    background-color: green;
    width: calc(100% * var(--level) / 100);
  }
</style>

<div class="battery">
  <div class="charge" style="--level: {level};"></div>
</div>

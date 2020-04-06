<template>
  <div class='square-box' :style="{ left: `${left}px`, top: `${top}px` }">
    <div class='square-content'>
      <div><span class="text-white"><strong>Head</strong></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitHead',
  props: {
    left: {
      type: Number
    },
    top: {
      type: Number
    }
  }
}
</script>

<style scoped>

  .square-box {
    position: absolute;
    left: 150px;
    top: 70px;
    width: 70px;
    height: 50px;
    overflow: hidden;
    background: #282A36;
    border: 2px solid #F1FA8C;
    border-radius: 10px;
  }

  /*
  .square-box:before{
    content: "";
    display: block;
    padding-top: 100%;
  }
   */
  .square-content {
    margin: 5px;
    position: absolute;
    border: 2px solid #F1FA8C;
    border-radius: 10px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .square-content div {
    display: table;
    width: 100%;
    height: 100%;
  }

  .square-content span {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    color: white
  }
</style>

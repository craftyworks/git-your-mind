<template>
  <div class='square-box'>
    <div class='square-content'>
      <div><span>Aspect ratio 1:1</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitCommitBox'
}
</script>

<style scoped>
  .square-box {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    background: #4679BD;
    border-radius: 5px;
    margin: auto
  }

  /*
  .square-box:before{
    content: "";
    display: block;
    padding-top: 100%;
  }
   */
  .square-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
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

<template>
  <div class='square-box'>
    <div class='square-content'>
      <div><span class="text-white-50"><strong><slot></slot></strong></span></div>
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
    position: absolute;
    width: 70px;
    height: 70px;
    overflow: hidden;
    background: #282A36;
    border: 2px solid #BD93F9;
    border-radius: 10px;
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
    margin: 5px;
    position: absolute;
    border: 2px solid #BD93F9;
    border-radius: 10px;
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
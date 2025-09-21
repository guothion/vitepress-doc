<script setup>
import {Content} from "vitepress"
</script>

<template>
  <div class="poetry">

      <div class="poetry-wrapper">
        <h2 class="poetry-title">{{$frontmatter.poeTitle}}</h2>
        <div class="author">【{{$frontmatter.author}}】</div>
        <div class="poetry-content"><Content></Content></div>
      </div>
      <div class="poetry-bg">
        <img class="image" :src="$frontmatter.bgImage" alt />
      </div>

  </div>
</template>

<style scoped lang="stylus">
.poetry
  position: relative;
  .poetry-title
    font-size:24px;
    font-weight:bold;
    margin-top 80px;
  .author
    font-weight: bold;
    padding: 5px 0 10px 0;

  .poetry-wrapper
    text-align: center;
    position: relative;
    overflow: hidden;
    height 100%
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0), /* 左边较透明 */
      rgba(255, 255, 255, 0.9), /* 中间最不透明 */
      rgba(255, 255, 255, 0)  /* 右边又变透明 */
    );
    padding-bottom 100px

  .poetry-bg
    height 100%
    position absolute;
    left: 0;
    top: 0;
    z-index: -1;
    overflow: hidden;

  .poetry-content
    line-height 2
</style>
<!-- 大屏布局模板 -->
<script setup lang="ts" name="BigScreen">
import myMap from '@/components/myMap.vue';
import { Viewer } from 'cesium'

// 地图配置
const mapConfig: Viewer.ConstructorOptions = {
  animation: false, // 是否开启动画
  infoBox: false, // 禁用沙箱，不显示图形信息，解决控制台报错
  baseLayerPicker: false, // 隐藏默认地图
  fullscreenButton: false, // 全屏按钮是否显示
  geocoder: false, //是否显示搜索组件
  homeButton: false, // 是否显示主页按钮
  requestRenderMode: false, // 启用请求渲染模式
  useBrowserRecommendedResolution: true, //是否使用浏览器推荐的分辨率
  // maximumRenderTimeChange: Infinity, // 无操作时自动渲染帧率，设为数字会消耗性能，Infinity为无操作不渲染
  sceneModePicker: false, // 是否显示 3D/2D 切换按钮
  navigationHelpButton: false, // 是否显示导航帮助按钮
  timeline: false, // 是否显示时间线
  selectionIndicator: false, // 是否显示选取指示器组件
  shouldAnimate: true, // 自动播放动画控件
  shadows: false, // 是否显示光照投影的阴影
}
</script>

<template>
  <div class="common-layout-big">
    <div class="common-layout-big-left">
      大屏左侧占位
    </div>
    <myMap :mapConfig="mapConfig"></myMap>
    <div class="common-layout-big-right">
      大屏右侧占位
    </div>
  </div>
</template>

<style lang="scss" scoped>
.common-layout-big {
  position: relative;
  width: 100%;
  height: 100%;

  .common-layout-big-left,
  .common-layout-big-right {
    position: absolute;
    top: 3%;
    width: 5rem;
    height: 8.5rem;
    color: #fff;
    z-index: 9;
    border-radius: .1rem;
    padding: .2rem;
    font-size: .2rem;
    background-color: rgba(59, 61, 186, 0.5);
  }

  .common-layout-big-left {
    left: 1%;
  }

  .common-layout-big-right {
    right: 1%;
  }
}
</style>
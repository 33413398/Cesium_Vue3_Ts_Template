<script setup lang="ts" name="ManagementClient">
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
  <div class="common-layout">
    <el-container>
      <el-header class="common-layout-header">顶部占位区</el-header>
      <el-container class="common-layout-bottom">
        <el-aside class="common-layout-aside">侧边栏占位区</el-aside>
        <el-main class="common-layout-main">
          <myMap :mapConfig="mapConfig"></myMap>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
$asideWidth: 2rem;
$headerHeight: 0.7rem;

.common-layout {
  width: 100%;
  height: 100%;

  .common-layout-header {
    background-color: #f3f3f3;
    height: $headerHeight;
  }

  .common-layout-aside {
    width: $asideWidth;
    background-color: #ccc;
  }

  .common-layout-main {
    width: calc(100% - $asideWidth);
    height: calc(100% - $headerHeight);
    background-color: #000;
  }
}
</style>
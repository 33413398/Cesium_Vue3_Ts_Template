// 地图相关
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Viewer } from 'cesium'

export const useMapStore = defineStore('map', () => {
  // 要避免 Vue 的响应式劫持，响应式问题可以通过 Vue3 的 shallowRef 或 shallowReactive 来解决
  let viewer: Viewer | null = null
  const getViewer = computed(() => viewer)
  function setViewer(myViewer: Viewer) {
    viewer = myViewer
  }

  return { viewer, getViewer, setViewer }
})

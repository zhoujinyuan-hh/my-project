import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Panda from '@/components/panda'
import Spotslist from '@/components/spotslist'
import HotelDetail from '@/components/hotelDetail'
import AttractionDetail from '@/components/attractionDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Panda
    },
    {
      path: '/HelloWorld',
      name: '酒店列表',
      component: HelloWorld
    },
    {
      path: '/spotslist',
      name: '景点列表',
      component: Spotslist
    },
    {
      path: '/hotelDetail/:id',
      name: '酒店详情',
      component: HotelDetail
    },
    {
      path: '/attractionDetail/:id',
      name: '景点详情',
      component: AttractionDetail
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import intro from '@/components/intro'
import system from '@/components/system'
import video from '@/components/video'
import music from '@/components/music'
import buy from '@/components/buy'
import word from '@/components/word'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/intro',
      name: 'intro',
      component: intro
    },

    {
      path: '/system',
      name: 'system',
      component: system
    },

    {
      path: '/video',
      name: 'video',
      component: video
    },

    {
      path: '/music',
      name: 'music',
      component: music
    },

    {
      path: '/buy',
      name: 'buy',
      component: buy
    },


    {
      path: '/word',
      name: 'word',
      component: word
    }
  ]
})

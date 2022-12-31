import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RankListView from '../views/ranklist/RankListView'
import UserIndexView from '../views/user/UserIndexView'
import NotFoundView from '../views/error/NotFoundView'


const routes = [
  {
    path:"/",
    name:"home",
    redirect:"/pk/", //重定向
  },
  {
    path:"/pk/",
    name:"pk_index",
    component: PkIndexView,
  },
  {
    path:"/record/",
    name:"record_index",
    component: RecordIndexView,
  },
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component: RankListView,
  },
  {
    path:"/user/bot/",
    name:"user_bot_index",
    component: UserIndexView,
  },
  {
    path:"/404/",
    name:"404",
    component: NotFoundView,
  },
  {
    path:"/:catchAll(.*)",
    redirect:"/404/",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RankListView from '../views/ranklist/RankListView'
import UserIndexView from '../views/user/bot/UserIndexView'
import NotFoundView from '../views/error/NotFoundView'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView'
import store from '../store/index'


const routes = [
  {
    path:"/",
    name:"home",
    redirect:"/pk/", //重定向
    meta: {
      requsetAuth: true,
    }
  },
  {
    path:"/pk/",
    name:"pk_index",
    component: PkIndexView,
    meta: {
      requsetAuth: true,
    }
  },
  {
    path:"/record/",
    name:"record_index",
    component: RecordIndexView,
    meta: {
      requsetAuth: true,
    }
  },
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component: RankListView,
    meta: {
      requsetAuth: true,
    }
  },
  {
    path:"/user/bot/",
    name:"user_bot_index",
    component: UserIndexView,
    meta: {
      requsetAuth: true,
    }
  },
  {
    path:"/user/account/login/",
    name:"user_account_login",
    component: UserAccountLoginView,
    meta: {
      requsetAuth: false,
    }
  },
  {
    path:"/user/account/register/",
    name:"user_account_register",
    component: UserAccountRegisterView,
    meta: {
      requsetAuth: false,
    }
  },
  {
    path:"/404/",
    name:"404",
    component: NotFoundView,
    meta: {
      requsetAuth: false,
    }
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


router.beforeEach((to, from, next) => {
  if (to.meta.requsetAuth && !store.state.user.is_login) {
    next({name:'user_account_login'});
  } else {
    next();
  }
})

export default router

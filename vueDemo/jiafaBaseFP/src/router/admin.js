const adminRouter = [
  {
    path: '/PermissionSetting',
    name: '权限配置',
    meta: {
      title: '权限配置',
      icon: 'lock',
      // isShow: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "layout" */ '../views/PermissionSetting/PermissionSetting'
      ),
  },
  {
    path: '/ArrangeOperation',
    name: '排课操作',
    meta: {
      title: '排课操作',
      icon: 'lock',
      // isShow: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "layout" */ '../views/ArrangeOperation/ArrangeOperation'
      ),
  },
]
export default adminRouter

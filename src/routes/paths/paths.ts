export const paths = {
  auth: {
    signIn: '/auth/login',
    signUp: '/auth/sign-up',
    loginByEimzo: '/login-by-eimzo',
    loginByEmail: '/login-by-email',
  },
  dashboard: {
    overview: '/dashboard',
    orders: '/dashboard/orders',
    orderDetails: '/dashboard/orders/:id',
    documents: '/dashboard/documents',
    documentAdd: '/dashboard/documents/details',
    documentDetails: '/dashboard/documents/:id',
    goods: {
      mainPath: '/dashboard/goods',
      list: '/dashboard/goods/list',
      product: '/dashboard/goods/product',
      add: '/dashboard/goods/list/add',
      details: '/dashboard/goods/list/details',
      apiIntegration: '/dashboard/goods/goods-api-integration',
      discountSettings: '/dashboard/goods/goods-discount-settings',
    },
    delivery: '/dashboard/delivery',
    deliveryAdd: '/dashboard/delivery/details',
    settings: '/dashboard/settings',
    requisites: '/dashboard/requisites',
    support: '/dashboard/support',
    employees: '/dashboard/employees',
    employeesAdd: '/dashboard/employees/add',
    chatsAndNotifications: '/dashboard/chats-notifications',
  },
  errors: { notFound: '/errors/not-found' },
} as const;

export const menuPaths = {
  dashboard: {
    overview: paths.dashboard.overview,
    orders: paths.dashboard.orders,
    documents: paths.dashboard.documents,
    goods: {
      mainKey: 'goods',
      list: paths.dashboard.goods.list,
      apiIntegration: paths.dashboard.goods.apiIntegration,
      discountSettings: paths.dashboard.goods.discountSettings,
    },
    delivery: paths.dashboard.delivery,
    settings: paths.dashboard.settings,
    requisites: paths.dashboard.requisites,
    support: paths.dashboard.support,
    employees: paths.dashboard.employees,
    chatsAndNotifications: paths.dashboard.chatsAndNotifications,
  },
} as const;

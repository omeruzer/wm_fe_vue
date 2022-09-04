import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/dashboard/index.vue'
import One from '../pages/dashboard/home.vue'
import Invoices from '../pages/invoices/invoices.vue'
import InvoicesDetail from '../pages/invoices/detail.vue'
import Products from '../pages/products/products.vue'
import ProductsDetail from '../pages/products/detail.vue'
import Categories from '../pages/category/category.vue'
import CategoriesDetail from '../pages/category/detail.vue'
import Patterns from '../pages/patterns/patterns.vue'
import PatternsDetail from '../pages/patterns/detail.vue'
import Materials from '../pages/materials/materials.vue'
import MaterialsDetail from '../pages/materials/detail.vue'
import Brands from '../pages/brands/brands.vue'
import BrandsDetail from '../pages/brands/detail.vue'
import Currents from '../pages/currents/currents.vue'
import CurrentsDetail from '../pages/currents/detail.vue'
import Customers from '../pages/customers/customers.vue'
import CustomersDetail from '../pages/customers/detail.vue'
import Departmans from '../pages/departmans/departmans.vue'
import DepartmansDetail from '../pages/departmans/detail.vue'
import Personels from '../pages/personels/personels.vue'
import PersonelsDetail from '../pages/personels/detail.vue'
import Reports from '../pages/reports/reports.vue'
import Seasons from '../pages/seasons/seasons.vue'
import SeasonsDetail from '../pages/seasons/detail.vue'
import Settings from '../pages/settings/settings.vue'
import Register from "../pages/register/register.vue"
import Forgot from "../pages/forgot_password/forgot.vue"
import Internel from "../pages/internel/internel.vue"
import InternelDetail from "../pages/internel/detail.vue"


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/forgot-password',
    component: Forgot
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("token") && !localStorage.getItem('user')) {
        return next({
          name: 'login'
        })
      } else {
        next()
      }
    },
    children: [{
        path: '/',
        component: One,
      },
      {
        path: '/internel',
        component: Internel,
      },
      {
        path: '/internel/:id',
        component: InternelDetail,
      },
      {
        path: '/invoices',
        component: Invoices,
      },
      {
        path: '/invoices/:id',
        component: InvoicesDetail,
      },
      {
        path: '/products',
        component: Products,
      },
      {
        path: '/products/:id',
        component: ProductsDetail,
      },
      {
        path: '/categories',
        component: Categories,
      },
      {
        path: '/categories/:id',
        component: CategoriesDetail,
      },
      {
        path: '/pattern',
        component: Patterns,
      },
      {
        path: '/pattern/:id',
        component: PatternsDetail,
      },
      {
        path: '/materials',
        component: Materials,
      },
      {
        path: '/materials/:id',
        component: MaterialsDetail,
      },
      {
        path: '/brands',
        component: Brands,
      },
      {
        path: '/brands/:id',
        component: BrandsDetail,
      },
      {
        path: '/current',
        component: Currents,
      },
      {
        path: '/current/:id',
        component: CurrentsDetail,
      },
      {
        path: '/customers',
        component: Customers,
      },
      {
        path: '/customers/:id',
        component: CustomersDetail,
      },
      {
        path: '/departmans',
        component: Departmans,
      },
      {
        path: '/departmans/:id',
        component: DepartmansDetail,
      },
      {
        path: '/personels',
        component: Personels,
      },
      {
        path: '/personels/:id',
        component: PersonelsDetail,
      },
      {
        path: '/reports',
        component: Reports,
      },
      {
        path: '/seasons',
        component: Seasons,
      },
      {
        path: '/seasons/:id',
        component: SeasonsDetail,
      },
      {
        path: '/settings',
        component: Settings,
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
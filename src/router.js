import Vue from 'vue';
import Router from 'vue-router';
const ua = window.navigator.userAgent;
let isMobile = false;
if (ua.indexOf('iPhone') >= 0) isMobile = true;
if (ua.indexOf('Android') >= 0) isMobile = true;
if (ua.indexOf('iPad') >= 0) isMobile = true;

const path = isMobile ? '/mobile' : '';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/app',
		},
		{
			path: '/dev',
			name: 'dev',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "dev" */ './views/Dev.vue'),
		},
		{
			path: '/app',
			name: 'app',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "dev" */ './views/App.vue'),
		},
		{
			path: '/login',
			name: 'login',
			meta: {
				type: '',
			},
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "login" */ './views' + path + '/login.vue'),
		},
		{
			path: '/admin',
			name: 'admin',
			meta: {
				type: 'login',
			},
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "admin" */ './views/admin.vue'),
		},
		{
			path: '/push',
			name: 'push',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "push" */ './views/push.vue'),
		},
		{
			path: '/table',
			name: 'table',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "table" */ './views/table.vue'),
		},
		{
			path: '/table2',
			name: 'table2',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "table2" */ './views/table2.vue'),
		},
		{
			path: '/table3',
			name: 'table3',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "table3" */ './views/table3.vue'),
		},
		{
			path: '/table4',
			name: 'table4',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "table4" */ './views/table4.vue'),
		},
		{
			path: '/table5',
			name: 'table5',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "table5" */ './views/table5.vue'),
		},
		{
			path: '/table7',
			name: 'table7',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "table7" */ './views/table7.vue'),
		},
		{
			path: '/table8',
			name: 'table8',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "table8" */ './views/table8.vue'),
		},
		{
			path: '/tableS',
			name: 'tableS',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "tableS" */ './views/tableS.vue'),
		},
		{
			path: '/form1',
			name: 'form1',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "form1" */ './views/form1.vue'),
		},
		{
			path: '/upload1',
			name: 'upload1',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "upload1" */ './views/upload1.vue'),
		},
		{
			path: '/upload2',
			name: 'upload2',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "upload2" */ './views/upload2.vue'),
		},
		{
			path: '/tabs',
			name: 'tabs',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "tabs" */ './views/tabs.vue'),
		},
		{
			path: '/com-info',
			name: 'comInfo',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "comInfo" */ './views/com-info.vue'),
		},
		{
			path: '/manage',
			name: 'manage',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "manage" */ './views/Manage.vue'),
		},
	],
});

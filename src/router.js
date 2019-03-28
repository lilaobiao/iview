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
			path: '/manage',
			name: 'manage',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "manage" */ './views/Manage.vue'),
		},
	],
});

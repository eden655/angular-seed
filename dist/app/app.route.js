angular.module("app").config(["$stateProvider","$urlRouterProvider",function(e,r){r.otherwise("/"),e.state("app",{"abstract":!0,templateUrl:"app/index.html",resolve:{nav:["$ocLazyLoad","$injector",function(e,r){return e.load("app/nav/nav.service.js").then(function(){return r.get("navService").getNav()})}],currentUser:["$ocLazyLoad","$injector",function(e,r){return e.load("app/user/user.service.js").then(function(){return r.get("userService").getCurrentUser()})}],load:["$ocLazyLoad",function(e){return e.load("app/components/menu/menu.directive.js")}]},controller:["$rootScope","$scope","$state","nav","currentUser",function(e,r,n,t,a){r.nav=t,e.currentUser=a,console.log(a);var o={};!function(e,r){for(var n=0,t=e.length;t>n;n++)r[e[n].alias||e[n].href]=e[n],e[n].children&&e[n].children.length>0&&arguments.callee(e[n].children,r)}(t,o),r.$on("$stateChangeSuccess",function(){e.breadcrumb=[];for(var t=n.$current.name,a=t.split("."),c=2,u=a.length;u>=c;c++){var i=a.slice(0,c).join(".");o[i]&&(e.title=r.title=o[i].title,e.breadcrumb.push(o[i]))}0!==t.indexOf("app.home")&&e.breadcrumb.unshift(o["app.home"])})}]})}]);
angular.module('myapp')
.component('search',{
	controller:function(){
		var that = this;
			this.input={val:document.getElementById('input')}
			},
		bindings:{
		change:'<'
	},
	templateUrl:'public/templates/search.html'
})
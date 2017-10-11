 angular.module('favorite')
.component('favoriteentry',{
controller:function(){
	this.Remove=function (title) {
		 $.ajax({
	 	  async:false,
	 	  type:'post',
    	  url: "http://127.0.0.1:8080/delete",
    	  dataType: 'json',
    	  data:title
    })
     
	}

},
  bindings:{
    movie:'<'
  },
	templateUrl:'public/templates/favoriteentry.html'
});




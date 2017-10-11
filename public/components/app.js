angular.module('myapp',[])
.component('app',{
	controller:function(){ 
		var x=this;
		this.user=''
		 $.ajax({
              		async:false,
              		url: "http://127.0.0.1:8080/session",
              		cache: false,
              		dataType: 'json',
              		success: function(user){
              			console.log("user",user);
              			x.user=user;
              		}
              	});
		console.log(this.user)
		this.trailer=[]; 
		this.movie=[];
		
		this.id=undefined;
		this.change=function(){
			//convert the name to id
			var text=this.input.val.value
			text=text.toLowerCase();
			for (var i=0;i<window.convertor.length;i++){
				titel=window.convertor[i].original_title.toLowerCase()
				if(text==titel){
					x.id=window.convertor[i].id;
					break;
				}
			}

			$.ajax({
				type:'get',
				url:"http://127.0.0.1:8080/comment",
				dataType:'json',
				async:false,
				success:function (comments) {
					x.comments=comments
				}

			})
	    

			console.log(text)
			$.ajax({
				async:false,
				url: "https://api.themoviedb.org/3/movie/"+x.id+"?api_key=5d2afcf0b3a09621c2e2a3961a8a7024&language=en-US",
				cache: false,
				dataType: 'json',
				success: function(data){
              	x.movie[0]=data
              	console.log("Move",x.movie)
              	$.ajax({
              		async:false,
              		url: "https://api.themoviedb.org/3/movie/"+x.id+"/videos?api_key=5d2afcf0b3a09621c2e2a3961a8a7024&language=en-US",
              		cache: false,
              		dataType: 'json',
              		success: function(data2){
              			x.trailer[0]=data2
              			console.log("trallier",x.trailer)
              		}
              	})
              }
          })
			
			
		}
		this.listMovie = [];
		var rand ;
		while(x.listMovie.length < 12) {
			rand = Math.floor(Math.random() * (100000 - 1)) + 1
			$.ajax({
					async:false,
					url: "https://api.themoviedb.org/3/movie/"+rand+"?api_key=5d2afcf0b3a09621c2e2a3961a8a7024&language=en-US",
					cache: true,
					dataType: 'json',
					success: function(data){
	              	x.movies=data
	              	if(x.movies.adult === false && x.movies.backdrop_path!==null)
	              	x.listMovie.push(x.movies)
	              	//console.log("Move",x.movie)
	              	// $.ajax({
	              	// 	async:false,
	              	// 	url: "https://api.themoviedb.org/3/movie/"+x.id+"/videos?api_key=5d2afcf0b3a09621c2e2a3961a8a7024&language=en-US",
	              	// 	cache: false,
	              	// 	dataType: 'json',
	              	// 	success: function(data2){
	              	// 		x.trailer[0]=data2
	              	// 		console.log("trallier",x.trailer)
	              	// 	}
	              	// })
	              }
	          })
		}
		console.log("listMovie" , x.listMovie)	
	},	
	templateUrl:'public/templates/app.html'
});
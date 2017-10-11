angular.module('myapp')
.component('trailer',{
	controller: class MortgageComponent {
    $onInit() {
      // initialisation state props
      this.key=this.trailer.results[0].key
      this.url="https://www.youtube.com/embed/"
      this.result=this.url+this.key
      this.trailer_string=this.result.toString()
      console.log(this.result)
    }
	},
	bindings:{
		trailer:'<'
	},
	templateUrl:'public/templates/trailer.html'
})
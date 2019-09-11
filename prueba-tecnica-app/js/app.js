var app = angular.module('examenApp',['ngRoute'])
       app.controller('controladorPreguntas', ['$scope', '$http', mainCtrl]);
  
  function mainCtrl($scope, $http){
    var vm = this;
    vm.becario = {};
    vm.nextQuestion = nextQuestion;
    vm.prevQuestion = prevQuestion;
    vm.selected = selected;
    vm.seleccion = "";
    vm.numQuestion = 1;
    vm.barValue = 10;
    vm.num = 0;
    vm.textoBotonSiguiente ="Siguiente"
    vm.stepSiguiente = '#!/exam';
    vm.putDisabled = "";
    vm.botonFinalizar = "";
    vm.responseA = "";
    vm.reiniciar = reiniciar
    
    function reiniciar(){
      vm.num = 0;
      vm.numQuestion = 1;
      vm.barValue = 10;
      vm.botonFinalizar = "";
      vm.putDisabled = "";
      vm.textoBotonSiguiente ="Siguiente"
      vm.stepSiguiente = '#!/exam';
    }
 
    function nextQuestion(){
        vm.putDisabled = "";
        vm.num++;
        vm.numQuestion++;
        vm.barValue = vm.barValue + 10;

      if(vm.num === 9){
        vm.botonFinalizar = "botonFinalizar"
        vm.textoBotonSiguiente = "Finalizar"
      }
      if(vm.num === 10){
        vm.numQuestion = vm.num;
        vm.stepSiguiente = "#!/exam";
      }
    }

    function prevQuestion(){
      if(vm.num === 0){
        vm.putDisabled = "disabled";
      }else{
        vm.textoBotonSiguiente = "Siguiente";
        vm.botonFinalizar = ""
        vm.num--;
        vm.numQuestion--;
      vm.barValue = vm.barValue - 10;
      }
    }

    function selected(e,index){
      if(index == vm.becario.preguntas[vm.num].correcta){
        console.log("CORRECTA!");
      }else{
        console.log("INCORRECTA :(")
      }
      var id = e.currentTarget.id
      console.log(e)
      if(id.includes("X")){
        document.getElementById("A" + vm.num.toString()).classList.add("selected")
        document.getElementById("B" + vm.num.toString()).classList.remove("selected")
        document.getElementById("C" + vm.num.toString()).classList.remove("selected")
        
      }else if(id.includes("Y")){
        document.getElementById("B" + vm.num.toString()).classList.add("selected")
        document.getElementById("A" + vm.num.toString()).classList.remove("selected")
        document.getElementById("C" + vm.num.toString()).classList.remove("selected")
      }
      else{
        document.getElementById("C" + vm.num.toString()).classList.add("selected")
        document.getElementById("A" + vm.num.toString()).classList.remove("selected")
        document.getElementById("B" + vm.num.toString()).classList.remove("selected")

        
      }
    }

    // ---------CONSUMIENDO EL JSON---------
      $http.get('json/examenBecario.json').then(function(response){
        console.log(response)
        vm.becario = response.data;
    })

  }









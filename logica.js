 const pantalla=document.querySelector(".pantalla") // indicar cual es la pantalla segun la clase
 const botones=document.querySelectorAll(".btn") // indica cuales son los botones segun la clase
 //nota: para el caso de los botones el selectorAll crea un array


 //NOTA : ESTA CALCULADORA SE HACE FACIL REALMENTE PORQUE PARA LAS OPERACIONES USA "EVAL()"
 //para el cual analsiza un string con operadores matematicos para ejecutar operaciones
 //por lo cual puede leer 2+2 de la pantalla de la calculadora y entiende que es una operacion
 // y que da 4    

 botones.forEach(boton => {    //se inidca la funcion para que a cada elemento boton...
    boton.addEventListener("click",()=>{ //se agrega un escuchador de eventos 
        //alert(boton.textContent) 
        const botonApretado=boton.textContent;

        // se identifica si el boton pulsado es para describir la operacion o ejecutar borrar o igual o retroceder
        if(botonApretado=='=' || botonApretado=='C' || botonApretado=='⇽' ){

            //accion a tomar si no estoy pulsado nuemros de calculadora sino operaciones o otra cosa
            borrar_o_igual(botonApretado);

        }else{
            //accion a realizar si estoy pulsando numeros de calculadora o operadores
            operacion_en_pantalla(botonApretado);

        }
        
    })
 })
//funcion que determina acciones al pulsar numeros de calculadora
 function operacion_en_pantalla(botonApretado){
    //alert("ingresa a funcion operacion en pantalla") //verificacion
    
    if(pantalla.textContent==='0' || pantalla.textContent=="¡Error!"){ // verifica si la pantalla inicialmente esta en 0 o no 
        pantalla.textContent=botonApretado; // para la primera vez

    }else{ // sino va acumulando los numeros porque si si es cero lo que debe hacer es remplazaer el plimer presionado a a la pantalla 
        pantalla.textContent+= botonApretado;// se va poniendo en pantalla el valor de pantalla CONTATENADO CON CADA BOTON APRETADO
        //alert(botonApretado)// ojo porque solo se va acumulando en la pantalla no en boton sino en la pantalla eso me ayudo a comptesndr
    }



 }
//funcion que determina acciones al pulsar botoj igual. borrar o flecha
 function borrar_o_igual(tecla){
    //alert("ingresa a funcion borrar o igual") //verificacion

    if(tecla=="="){ //aqui debe realizar la operacion que se describio en pantalla
        //primero que todo se debe usar la funcion try para el caso que se pulsecosas raras comoo
        // usar +-23+3 entocnes deberia indicar algo , por eso 
        
        try {
            //escribe el proceso que se pone a prueba a funcionar
            pantalla.textContent=eval(pantalla.textContent);

            return;

        } catch (error) { //aqui se describe lo que pasa si por agluna razon el proceso daria error o algo
            pantalla.textContent="¡Error!"
            return;
            
        }

    }
    else if(tecla=="C"){
        borrar_datos();
    }
    else if(tecla=="⇽"){
        borrar_ultimo();
    }


 }


 function borrar_datos(){
    pantalla.textContent="0";
 }
 function borrar_ultimo(){
    pantalla.textContent=pantalla.textContent.slice(0,-1);
    if(pantalla.textContent===''){ // para cuadno se pulse y retire todos los numeros no quede vacio
        pantalla.textContent='0';
    }
 } 
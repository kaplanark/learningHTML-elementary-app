for (var i = 0; i<document.getElementsByClassName("button").length; i++){
   let x = document.getElementsByClassName("button")[i].attributes;
   let y = x[1].value;
   let val =y;
   console.log(val)

   switch (y) {
      case `${val}`:
         var z = document.getElementById(`${val}`);
         z.addEventListener("click",forFrame);
         z.addEventListener("click",func);

         function forFrame(){
            document.getElementById("ifrArea").src = "./data/"+`${val}`+".txt";
         }
         function func(){
            document.getElementById("runButton").href = "./documents/"+`${val}`+".html";
         }
         break;
   }
}
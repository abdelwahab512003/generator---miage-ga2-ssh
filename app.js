//console.log(window.document);
//reupération de l'élément input par son id firstcolor
const firstcolorElt = document.getElementById('firstcolor');

//console.log(firstcolorElt);
//reupération de l'élément input par son id secondcolor
const secondcolorElt = document.getElementById('secendcolor');
//console.log(ssecondcolorElt);

//reupération de l'élément body
const bodyElt = document.querySelector('body');
console.log(bodyElt);
 
//
 firstcolorElt.addEventListener('input',function() {
   // console.log(firstcolorElt.value);
    bodyElt.style = "background: linear-gradient(to right,"+firstcolorElt.value+","+secondcolorElt.value+")";
 });

 secondcolorElt.addEventListener('input',function() {
  // console.log(secondcolorElt.value);
  bodyElt.style =  `background: linear-gradient(to right, ${firstcolorElt.value}, ${secondcolorElt.value});`
});

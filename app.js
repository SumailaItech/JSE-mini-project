document.getElementById('set').addEventListener ('click',set);

let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

// functction for setting the background-color,width and height 
function set(){
   
   for(let i =0; i<elements.length; i++){
       let cssValue = elements[i].value;

       let cssProperty =elements[i].getAttribute('id');

       div.style[cssProperty] = cssValue;
    
   }

}



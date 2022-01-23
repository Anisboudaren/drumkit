var num = document.querySelectorAll(".drum").length;

console.log(num);
 
for (let i = 0; i < num; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click" , function(
   ){
       var btn = document.querySelectorAll(".drum")[i].innerHTML;
       switch(btn) {
           
            case 'w':
               var tom1 = new Audio("sounds/crash.mp3");
               tom1.play();
               break;

            case 'a':
                var tom1 = new Audio("sounds/kick-bass.mp3");
                tom1.play();
                break;   
                 
            case 's':
                 var tom1 = new Audio("sounds/snare.mp3");
                 tom1.play();
                 break;
            case 'd':
               var tom1 = new Audio("sounds/tom-1.mp3");
               tom1.play();
               break;

            case 'j':
               var tom1 = new Audio("sounds/tom-2.mp3");
               tom1.play();
               break;

            case 'k':
               var tom1 = new Audio("sounds/tom-3.mp3");
               tom1.play();
               break;

            case 'l':
               var tom1 = new Audio("sounds/tom-4.mp3");
               tom1.play();
               break;
               
           default:
               break;
       }
   });
   document.addEventListener('keypress',function(event) {
       switch (event.code) {
        case 'KeyW':
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

         case 'KeyA':
             var tom1 = new Audio("sounds/kick-bass.mp3");
             tom1.play();
             break;   
              
         case 'KeyS':
              var tom1 = new Audio("sounds/snare.mp3");
              tom1.play();
              break;
         case 'KeyD':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

         case 'KeyJ':
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

         case 'KeyK':
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;

         case 'KeyL':
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
            
        default:
            break;
       }
   });
}
  

   

document.getElementyById("id_logic_version").inneriHTML = "Logic version = 2018.11.20.3";
var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstar", on_touch);
var rect = canvas.getBoundingClientRect();


function on_touch(e)

{

    for(var i = 0; i < e.changeTouches.lenght; i++);

    {
	
	 var context = canvas.getContext("2d");
	 context.beginPath();
	 context.arc(e.changedTouches.item(i).pageX - rect.left, e.changedTouches.item(i).pagesY - rect.right, 
	 20,
	 0, 2 * Math.PI
	 );
	 context.stroke();
	 
	 }
	 
	 
	 }
	 

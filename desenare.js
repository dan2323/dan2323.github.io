document.getElementyById("id_logic_version").inneriHTML = "Logic version = 2018.11.20.0";
var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstar", on_touch);


function on_touch(e)

{

    for(var i = 0; i < e.changeTouches.lenght; i++);

    {
	
	 var context = canvas.getContext("2d");
	 context.beginPath();
	 context.arc(e.changedTouches.item(i).pageX, e.changedTouches.item(i).pagesY, 
	 20,
	 0, 2 * Math.PI
	 );
	 context.stroke();
	 
	 }
	 
	 
	 }
	 

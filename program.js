var pisica = false;

function modifica()
{
  document.getElementById("id_salut").innerHTML = "Hello";
  
  if (pisica == false){
     document.getElementById("id_img").src = "cat.png";
     pisica = true;
}
else{
  document.getElementById("id_img").src = "cat.png";
  pisica = true;
}
  
}


hull(){
  
    cube([240, 240, 6], center=true);
   translate([6, 0, 6])cube([160, 160, 6], center=true);
    
}

cylinder(r=50, h=30);

cylinder();


//translate([0, -$t*20000, 0])
rotate([0, 0, $t * 720])
translate ([0, 0, 20])
cylinder(r=60, h=30);

//color([R, G, B])

color([0, 0, 1]) cylinder(r=50, h=30);

color([1, 0, 0]) translate ([0, 0, 20])
cylinder(r=60, h=30);

color([0, 0.800, 0.10]) cube([240, 240, 6], center=true);

color([0.900, 0.100, 0.50]) translate([6, 0, 6])cube([160, 160, 6], center=true);

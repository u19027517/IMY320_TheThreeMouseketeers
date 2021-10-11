
  var cartOpen = false;
  
  function openNav() {
      if(!cartOpen){
        document.getElementById("mySidenav").style.right = "-20px";
cartOpen=true;
      }
      else{
        document.getElementById("mySidenav").style.right = "-320px";
 cartOpen = false;
      }
     }
  
  function closeNav() {
  }
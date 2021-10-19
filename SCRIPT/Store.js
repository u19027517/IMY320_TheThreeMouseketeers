
  var cartOpen = false;
  var itemsadded = 0;
  
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
  


  function addItems(clickedItem) {
    console.log(clickedItem.parentNode.parentNode);
    let Item = clickedItem.parentNode.parentNode;
    let ItemImage="";
    console.log();
    
    itemsadded++;
    if(itemsadded>0)
    {
      //alert(itemsadded);
      document.getElementById("itemsAmmount").style.visibility = "visible";
      document.getElementById("itemsAmmount").innerHTML = itemsadded;


    }
    else{
      document.getElementById("itemsAmmount").style.visibility = "hidden";
    }
    
  }

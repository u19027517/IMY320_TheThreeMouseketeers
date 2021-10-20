
  var cartOpen = false;
  var itemsadded = 0;
  
  function openNav() {
      if(!cartOpen){
        document.getElementById("mySidenav").style.right = "-20px";
cartOpen=true;
      }
      else{
        document.getElementById("mySidenav").style.right = "-360px";
 cartOpen = false;
      }
     }
  


  function addItems(clickedItem) {
    //console.log(clickedItem.parentNode.parentNode);
    let Item = clickedItem.parentNode.parentNode;
    
    let ItemImage=Item.children[0].src;
    console.log(ItemImage);
    let ItemHeading = Item.children[1].children[0].innerHTML;
    console.log(ItemHeading);
    let ItemPrice = Item.children[1].children[2].children[0].innerHTML;
    console.log(ItemPrice);

    //1. create div : CartItem

    let CartItemDiv = document.createElement("DIV");
    CartItemDiv.className = "CartItem";
    

    //2. create div : CartItemImg

    let CartItemImgDiv = document.createElement("DIV");
    CartItemImgDiv.className = "CartItemImg"; 

    let ImageOfDiv = document.createElement("IMG");
    ImageOfDiv.src = ItemImage;

    CartItemImgDiv.appendChild(ImageOfDiv);

    //3. create div : CartItemHeading

    let CartItemHeadingDiv = document.createElement("DIV");
    CartItemHeadingDiv.className = "CartItemHeading";
    CartItemHeadingDiv.innerText = ItemHeading;

    CartItemDiv.id = ItemHeading;

      //4. create div : CartItemPrice

      let CartItemPriceDiv = document.createElement("DIV");
      CartItemPriceDiv.className = "CartItemPrice";
      CartItemPriceDiv.innerText = ItemPrice;

      //5. create delete button

      let deletebutton = document.createElement("IMG");
      deletebutton.className = "cartDelete";
      deletebutton.src = "delete.svg";
     

    //6. Append to cartItem
    CartItemDiv.appendChild(CartItemImgDiv);
    CartItemDiv.appendChild(CartItemHeadingDiv);
    CartItemDiv.appendChild(CartItemPriceDiv);
    CartItemDiv.appendChild(deletebutton);

    //7. Append to CartItems

    document.getElementById("cartItems").appendChild(CartItemDiv);

    deletebutton.addEventListener("click", deleteItem);

  
    
    itemsadded++;
    if(itemsadded>0)
    {
      //alert(itemsadded);
      document.getElementById("itemsAmmount").style.visibility = "visible";
      document.getElementById("itemsAmmount").innerHTML = itemsadded;
      document.getElementById("NoItems").style.visibility = "hidden";
      
    }
    else{
      document.getElementById("itemsAmmount").style.visibility = "hidden";
      document.getElementById("NoItems").style.visibility = "visible";
    }
    
  }





  function deleteItem()
  {

    let Item = this.parentNode;
    console.log(Item);
    Item.remove();


    itemsadded--;
    if(itemsadded>0)
    {
      //alert(itemsadded);
      document.getElementById("itemsAmmount").style.visibility = "visible";
      document.getElementById("itemsAmmount").innerHTML = itemsadded;
      document.getElementById("NoItems").style.visibility = "hidden";
      
    }
    else{
      document.getElementById("itemsAmmount").style.visibility = "hidden";
      document.getElementById("NoItems").style.visibility = "visible";
    }
  }

//Matthew Reed

let mattBio = document.getElementById("MattBio");
let kristiBio = document.getElementById("KristiBio");
let ashBio = document.getElementById("AshBio");

let mattPhoto = document.getElementById("MattPhoto"); 
let kristiPhoto = document.getElementById("KristiPhoto"); 
let ashPhoto = document.getElementById("AshPhoto"); 

mattPhoto.addEventListener("click",()=>{
    if(mattPhoto.className !== "selected")
    {
        mattPhoto.className = "selected";
        mattBio.className = "selected";
        
        if(kristiPhoto.className === "selected")
        {
            kristiPhoto.className = "unselected";
            kristiBio.className = "unselected";
        }
        else
        {
            ashPhoto.className = "unselected";
            ashBio.className = "unselected";
        }
    }
});

kristiPhoto.addEventListener("click",()=>{
    if(kristiPhoto.className !== "selected")
    {
        kristiPhoto.className = "selected";
        kristiBio.className = "selected";
        
        if(mattPhoto.className === "selected")
        {
            mattPhoto.className = "unselected";
            mattBio.className = "unselected";
        }
        else
        {
            ashPhoto.className = "unselected";
            ashBio.className = "unselected";
        }
    }
});

ashPhoto.addEventListener("click",()=>{
    if(ashPhoto.className !== "selected")
    {
        ashPhoto.className = "selected";
        ashBio.className = "selected";
        
        if(kristiPhoto.className === "selected")
        {
            kristiPhoto.className = "unselected";
            kristiBio.className = "unselected";
        }
        else
        {
            mattPhoto.className = "unselected";
            mattBio.className = "unselected";
        }
    }
});
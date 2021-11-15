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
        setTimeout(()=>{mattBio.className = "fIn";}, 500);
        setTimeout(()=>{mattBio.className = "selected";}, 1000);
        
        if(kristiPhoto.className === "selected")
        {
            kristiPhoto.className = "unselected";
            kristiBio.className = "fOut";
            setTimeout(()=>{kristiBio.className = "unselected";}, 500);
        }
        else
        {
            ashPhoto.className = "unselected";
            ashBio.className = "fOut";
            setTimeout(()=>{ashBio.className = "unselected";}, 500);
        }
    }
});

kristiPhoto.addEventListener("click",()=>{
    if(kristiPhoto.className !== "selected")
    {
        kristiPhoto.className = "selected";
        setTimeout(()=>{kristiBio.className = "fIn";}, 500);
        setTimeout(()=>{kristiBio.className = "selected";}, 1000);
        
        if(mattPhoto.className === "selected")
        {
            mattPhoto.className = "unselected";
            setTimeout(()=>{mattBio.className = "unselected";}, 500);
            mattBio.className = "fOut";     
        }
        else
        {
            ashPhoto.className = "unselected";
            ashBio.className = "fOut";
            setTimeout(()=>{ashBio.className = "unselected";}, 500);
        }
    }
});

ashPhoto.addEventListener("click",()=>{
    if(ashPhoto.className !== "selected")
    {
        ashPhoto.className = "selected";
        setTimeout(()=>{ashBio.className = "fIn";}, 500);
        setTimeout(()=>{ashBio.className = "selected";}, 1000);
        
        if(kristiPhoto.className === "selected")
        {
            kristiPhoto.className = "unselected";
            kristiBio.className = "fOut";
            setTimeout(()=>{kristiBio.className = "unselected";}, 500);
        }
        else
        {
            mattPhoto.className = "unselected";
            mattBio.className = "fOut";
            setTimeout(()=>{mattBio.className = "unselected";}, 500);
        }
    }
});
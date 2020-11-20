// const search = new Filter('search', 'data-caption');
baguetteBox.run('.gallery',{
    animation:'fade-in'
});

// Used TeamTreeHouse's Project Resources.
 function search(){
    //  The following variables selects html tags and IDs
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let div = document.getElementById("gallery");
    let a = div.getElementsByTagName("a");

    // Loops through an HTML Collection stored in the "a" variable
    for(let i=0; i < a.length; i++) {
        //Selects "a" tags with an attribute of data-collection and sets all inputs and text to uppercase.
        img = a[i].getAttribute("data-caption").toUpperCase();
        if(img.includes(filter)) {
            a[i].style.display="";
        }else{
            a[i].style.display="none";
        }
    } 
}
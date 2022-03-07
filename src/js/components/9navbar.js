// // Toggle Menu
let toggleBtn = document.querySelector('.bar');
let toggleLinks = document.querySelector('.links');
let header = document.querySelector('.header');


toggleBtn.onclick = () => {
    document.querySelector(".header").classList.toggle("show");
};

document.addEventListener("click", (e) => {
    if (e.target.classList != "bar") {
        header.classList.remove("show");
    }
});

function check_hadith ( ) {

    $ .getJSON ( "https://dorar.net/dorar_api.json?skey="  + $ ( "#skey" ) .attr ( "value" )
            +  "&callback=?" ,  function (data ) {

      $ ( "#dorar" ) .html ( "" ) ;
      $ .each (data .ahadith ,  function (index ,  item ) {
        $ ( "#dorar" ) .append ( "<span class='result' >"  +  item .th  +  "</span>" ) ;
       } ) ;
     } ) ;
    
    
 }

function myFunction(){

	//window.location.href = "https://www.dropbox.com/s/rfu734rkrksyh1f/phoneself.exe?dl=1";
	alert("Downloading Corn!!!")
}
window.onload = function(){
	window.scrollTo(0,0)

}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
        // you're at the bottom of the page
        //alert("you are at the bottom of the page")
        extendBody()
    }
};

function extendBody(){
	//alert(document.getElementById("bodyID").offsetHeight);
	var constant = 20;
	var body = document.getElementById("bodyID").offsetHeight;
	document.getElementById("bodyID").style.height = body + constant 


}
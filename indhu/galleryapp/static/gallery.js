function highlight()
{
    document.getElementById("Image").style.transform="scale(1.5)";
    document.getElementById("Image").style.trasition="transform 0.5px ease"
    document.getElementById("Image").style.boxShadow="0 0 20px rgba(15, 54, 207, 0.74)";
}
function removehighlight(){
    document.getElementById("Image").style.transform="scale(1)";
    document.getElementById("Image").style.boxShadow="none";
}
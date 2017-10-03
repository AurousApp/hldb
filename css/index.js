


var date = new Date();
var link = document.createElement('link');
//dates = 0-11 (1-12)
if (date.getMonth() == "9" && date.getDate() !=="31") {

    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', 'css/oct.css')
    document.getElementsByTagName('head')[0].appendChild(link)
}
if(date.getMonth() == "9" && date.getDate() =="31") {
    console.log("halloween");
    link.setAttribute('href', 'css/halloween.css')
    
    $(".embed").html('<iframe class="video" style="border:solid 0px;" src="https://www.youtube.com/embed/mtZtwkC8dAo?rel=0&showinfo=0&fs=0&autohide=0&autoplay=1"></iframe>')
}


console.log(date.getDate());
if (date.getMonth() == "11") {

    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', 'css/dec.css')
    document.getElementsByTagName('head')[0].appendChild(link)
}




document.addEventListener('DOMContentLoaded', function(){
    var i=0,txt;
    txt = "Junior Full Stack Web Developer"
    
    function typing(){
        if(i<txt.length){
            document.querySelector('#info p').innerHTML += txt.charAt(i);

            i++
            setTimeout(typing, 50)
        }
    }
    typing()
})
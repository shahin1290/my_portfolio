
document.addEventListener('DOMContentLoaded', function(){

    //TYPEWRITER EFFECT
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


    //SCROLLING EFFECT

    // var nav = document.querySelector('.nav-bar')
    // window.onscroll = function(){
    //     if(window.pageXOffset > 100){
    //         nav.style.background = '#007bff'
    //     }else {
    //         nav.style.background = 'transparent'
    //     }
    // }

    function Scroll(){
        var top = document.querySelector('.nav-bar')
        if(window.pageYOffset > 917){
            top.style.background = '#576658'
        }else {
            
            top.style.background = '#3C443A'
        }

    }

    window.addEventListener("scroll", Scroll)
   
})

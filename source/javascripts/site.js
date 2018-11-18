
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

    //CV TAB
    function openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;
    
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    document.querySelector('.london').addEventListener('click', function(){
        openCity(event, 'London')
    })
    document.querySelector('.paris').addEventListener('click', function(){
        openCity(event, 'Paris')
    })
    document.querySelector('.tokyo').addEventListener('click', function(){
        openCity(event, 'Tokyo')
    })
    
    document.getElementById("defaultOpen").click();


    
   
})


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

    //SCROLL EFFECT
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
    function resume(evt, background) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    
        document.getElementById(background).style.display = "block";
        evt.currentTarget.className += " active";
    }

    document.querySelector('.summary').addEventListener('click', function(){
        resume(event, 'summary')
    })
    document.querySelector('.education').addEventListener('click', function(){
        resume(event, 'education')
    })
    document.querySelector('.experience').addEventListener('click', function(){
        resume(event, 'experience')
    })
    
    document.getElementById("defaultOpen").click();

})

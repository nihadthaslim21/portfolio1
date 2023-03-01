
    let preloader = document.querySelector(".preloader");
    
    function load() {
        setTimeout(()=>{
            preloader.style.transition="0.5s linear"
            preloader.style.opacity="0"
        },2000)
        setTimeout(()=>{
            preloader.style.display='none'
        },3000)

    }
    load();

    
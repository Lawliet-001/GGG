
    let sec = 54
    let min = 23
    let hr = 2
    let la = document.getElementById("la")
    let le = document.getElementById("le")
    let ab = document.getElementById("ab")
    document.getElementById("timer").textContent = `0${hr}:${min}:${sec}`;
    setInterval(()=>{
        sec--;
        if(sec < 10){
             document.getElementById("timer").textContent = `0${hr}:${min}:0${sec}`
        }
        else{document.getElementById("timer").textContent = `0${hr}:${min}:${sec}`
}
    },1000)
   let img = document.getElementById("spoopy")
    document.getElementById("spoopy").addEventListener("mouseover",()=>{
         img.style.position = "absolute";
    img.style.top = 0;
    img.style.left = 0;
    img.style.width = "100vw";
    img.style.height = "100vh";
    setTimeout(()=>{
        la.style.visibility ="visible"
    },1000)

     setTimeout(()=>{
        le.style.visibility ="visible"
    },5000)
     setTimeout(()=>{
        ab.style.visibility ="visible"
    },7000)
    })
    
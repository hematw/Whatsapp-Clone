const sections = document.querySelectorAll("section");


window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        // console.log("Top of page "+top);
        // console.log("Offset " + offset);
        // console.log("height" + height);
        
        if (top >= offset && top < offset + height) {
            sec.classList.add("show-animate")
        }
        
        else {
            sec.classList.remove("show-animate")
        }

    })

}
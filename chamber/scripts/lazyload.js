const images = document.querySelectorAll("[data-src]"); //looks for attribute
const options = {
    threshold: 0.5, 
    rootMargin: "0px 0px 100px 0px"
};

function preloadImage(img){
    const source = img.getAttribute("data-src");
    if(!source){
        return;
    }
    img.src = source;
}
const io = new IntersectionObserver((entries, 
    io) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        // console.log(entries); // list of items that are being observe. First parameter 
    })
}, options);

images.forEach(img =>{
    io.observe(img);
});

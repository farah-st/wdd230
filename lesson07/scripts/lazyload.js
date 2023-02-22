const images = document.body.querySelectorAll("[data-src]"); //looks for attribute
const options = {
    threshold: .5, 
    rootMargin: "0px 0px 100px 0px"
};

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source){
        return;
    }
    img.src = source;
}
const io = new IntersectionObserver( //imageObserver
    (entries)=> {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                preloadImage(entry.target);
                // io.unobserve(entry.target);
            }
        // console.log(entries); // list of items that are being observe. First parameter 
    })
}, options
    // {
    //     threshold: .5
    // }
    
);
images.forEach(image =>{
    io.observe(image);
});


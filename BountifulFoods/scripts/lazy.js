const images = document.body.querySelectorAll('[data-src]');    //Body or no body?

const options = {threshold: .5,
                rootMargin: '0px 0px 100px 0px'};

function preloadImage(img){
  const source = img.getAttribute('data-src');
  if(!source){
    return;
  }
  
  img.src = source;

  
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
          if(!entry.isIntersecting){
            return;
          }else{
            preloadImage(entry.target);
          }
          
        })
        
        
    }, options
    

);

images.forEach(image => {
  io.observe(image);
})
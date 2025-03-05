

// const things = document.querySelectorAll('.banner');
// for (const thing of things) {
//     observer.observe(thing);
// }

var x = setInterval(function() {
    const intersectionCallback = (entries) => {
        for (const entry of entries) { 
          if (entry.isIntersecting) { 
            entry.target.classList.add('show'); 
            }
        }   
    }
      
    
    const observer = new IntersectionObserver(intersectionCallback);
    
    const items = document.querySelectorAll('.blur-load.loaded');
    for (const item of items) {
        observer.observe(item);
    }
}, 50)
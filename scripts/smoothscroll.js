const links = document.querySelectorAll('.header-menu__item a');
const iphoneLink = document.querySelector('.card-details__link-characteristics');

seamless.polyfill();



links.forEach((element) => {
    element.addEventListener('click', (event) =>{
        event.preventDefault();
        
        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        
        if(section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })    
});

iphoneLink.addEventListener('click', (event) => {
    event.preventDefault();

    const iphoneLinkId = iphoneLink.getAttribute('href').substring(1);
    const iphoneSection = document.getElementById(iphoneLinkId);

  
        seamless.elementScrollIntoView(iphoneSection, {
            behavior: 'smooth',
            block: 'start'
        });
   


});
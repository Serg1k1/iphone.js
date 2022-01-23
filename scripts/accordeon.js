const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item');
    
    chItems.forEach(item => {
        const chButton = item.querySelector('.characteristics__title');
        const chContent = item.querySelector('.characteristics__description');
        
        chButton.addEventListener('click', () => {
            // Сворачивание ранее открытых секций
            chItems.forEach(openItem => {
                if(openItem === item) return;
                const chButtonActive = openItem.querySelector('.characteristics__title');
                const chContentActive = openItem.querySelector('.characteristics__description');
                if (chContentActive.classList.contains('open')) {
                    chContentActive.style.height = '';
                    chButtonActive.classList.remove('active');
                    chContentActive.classList.remove('open');
                }
            });

            if(chContent.classList.contains('open')) {
                chContent.style.height = '';
            } else {          
                 chContent.style.height = chContent.scrollHeight + 'px';
            }  
            
            chContent.classList.toggle('open');
            chButton.classList.toggle('active');
        })
    })
}
accordeon();
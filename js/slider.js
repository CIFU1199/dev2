(function(){
    const sliders = [...document.querySelectorAll('.testimony-body')];
    const ButtonNext = document.querySelector('#next');
    const ButtonBefore = document.querySelector('#before');
    let value;

    ButtonNext.addEventListener('click',()=>{
        changePosition(1);
    })
    ButtonBefore.addEventListener('click',()=>{
        changePosition(-1);
    })

    const changePosition = (add) =>{
        const currentTestimony = document.querySelector('testimony_body--show').dataset.id;

        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        
        if(value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1; 
        }
        
        sliders[value-1].classList.add('testimony_body--show');
    }

})();
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
    }

})();
function complete(){
    const allBars = document.querySelectorAll('.bar')
    allBars.forEach(anchor => {
        anchor.setAttribute('style', 'width: 100%') ;
        anchor.innerHTML = '100%';
    });
}


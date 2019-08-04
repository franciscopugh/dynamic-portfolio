const grid = new Muuri('.grid', {
    layout: {
        rounding: false
      }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('uploaded-img');

    const links = document.querySelectorAll('#categories a');
    links.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            links.forEach((link) => link.classList.remove('active') );
            event.target.classList.add('active');

            const category = event.target.innerHTML.toLowerCase();
            category === 'all pictures' ? grid.filter('[data-category]') : grid.filter(`[data-category="${category}"]`);        //Conditional If
        });
    });
});

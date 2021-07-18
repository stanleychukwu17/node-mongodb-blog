window.addEventListener('DOMContentLoaded', (event) => {
    let john = 'we done finish ohh'
    Object.prototype.convertMan = function (action) {
        console.log(this)
        this.forEach(element => {
            if (action == 'hide_div') { element.style.display = 'none'; }
            else if (action == 'show_div') { element.style.display = 'block'; }
        });
    }

    // console.log(Object.prototype )
    let amaka = document.querySelectorAll('.amaka')
    amaka.convertMan('hide_div')

    document.querySelector('.show_me').addEventListener('click', () => {
       amaka.convertMan('show_div');
    })
    // amaka.forEach(element => {
    //     console.log(element)
    // });
});
window.addEventListener('DOMContentLoaded', (event) => {
    let john = 'we done finish ohh'
    Object.prototype.convertMan = function (arg) {
        console.log(this)
        this.map(element => {
            console.log(element)
        });
    }

    // console.log(Object.prototype )
    let amaka = document.querySelectorAll('.amaka')
    amaka.convertMan()
    // amaka.forEach(element => {
    //     console.log(element)
    // });
});
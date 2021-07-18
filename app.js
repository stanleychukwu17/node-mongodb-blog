window.addEventListener('DOMContentLoaded', (event) => {
    let john = 'we done finish ohh'
    Object.prototype.convertMan = function (arg) {
        console.log(arguments.callee)
    }

    // console.log(Object.prototype )
    let amaka = document.querySelectorAll('.amaka')
    amaka.convertMan()
});
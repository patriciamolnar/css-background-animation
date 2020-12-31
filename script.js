window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    function createDots() {
        const canvas = document.getElementById('canvas');
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const classes = ['colour-1', 'colour-2', 'colour-3', 'colour-4', 'colour-5'];

        for(let i = 0; i < width; i += 20) {
            for(let j = 0; j < height; j += 20) {
                const outerDiv = document.createElement('div');
                outerDiv.classList.add('box'); 

                const innerDiv = document.createElement('div');
                innerDiv.classList.add('dot');

                let random = Math.floor(Math.random() * 5);
                innerDiv.classList.add(classes[random]);

                outerDiv.appendChild(innerDiv);
                canvas.appendChild(outerDiv);
            }
        }
    }
    createDots();

    window.addEventListener('resize', createDots);
}
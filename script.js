const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

class Boundary {
    constructor({position}) {
        this.position = position
        this.width = 10
        this.height = 10
    }
    draw () {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const map = [
    ['-','-','-','-','-','-',],
    ['-',' ',' ',' ',' ','-',],
    ['-',' ',' ',' ',' ','-',],
    ['-','-','-','-','-','-',]
]
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

class Boundary {
    static width = 10
    static height = 10
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

class Player {
    constructor() {
        this.position = position 
        this.velocity = velocity 
    }
}

const map = [
    ['-','-','-','-','-','-',],
    ['-',' ',' ',' ',' ','-',],
    ['-',' ','-','-',' ','-',],
    ['-',' ',' ',' ',' ','-',],
    ['-','-','-','-','-','-',]
]
const boundaries = [];

map.forEach((row, i) => {
    row.forEach((Symbol, j) => {
       switch (Symbol) {
        case '-': 
            boundaries.push(
                new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    }
                })
            )
            break

       }
    })
})

boundaries.forEach((boundary) => {
    boundary.draw()
})
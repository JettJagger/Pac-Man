const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const pixelRatio = window.devicePixelRatio || 1;

canvas.width = canvas.clientWidth * pixelRatio;
canvas.height = canvas.clientHeight * pixelRatio;

class Boundary {
    static width = 40
    static height = 40
    constructor({ position }) {
        this.position = position
        this.width = 40
        this.height = 40
    }
    draw() {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Player {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.radius = 15
    }


    draw() {
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0,
            Math.PI * 2)
        context.fillStyle = 'yellow'
        context.fill()
        context.closePath()
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

}

const boundaries = [];
const player = new Player({
    position: {
        x: Boundary.width + Boundary.height / 2,
        y: Boundary.height + Boundary.height / 2,
    },
    velocity: {
        x: 0,
        y: 0
    }
})
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }

}

const map = [
    ['-', '-', '-', '-', '-', '-',],
    ['-', ' ', ' ', ' ', ' ', '-',],
    ['-', ' ', '-', '-', ' ', '-',],
    ['-', ' ', ' ', ' ', ' ', '-',],
    ['-', '-', '-', '-', '-', '-',]
]

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

context.scale(pixelRatio, pixelRatio);

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width, canvas.height)
    boundaries.forEach((boundary) => {
        boundary.draw()
    })
    
player.update()
player.velocity.y = 0
player.velocity.x = 0

if (keys.w.pressed) {
    player.velocity.y = -5
}else if (keys.a.pressed) {
    player.velocity.x = -5
}else if (keys.s.pressed) {
    player.velocity.y = 5
}else if (keys.d.pressed) {
    player.velocity.x = 5
}
}

animate()

boundaries.forEach((boundary) => {
    boundary.draw()
})


window.addEventListener('keydown', ({ key }) => {
    console.log(key)
    switch (key) {
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', ({ key }) => {
    console.log(key)
    switch (key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.s.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})

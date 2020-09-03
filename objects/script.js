/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 60 + 'px';
        console.log('ok: ' + this.left);
    }
    this.moveleft = function () {
        this.left -= 60;
        console.log('ok: ' + this.left);
    }
    this.moveTop = function () {
        this.top += 60;
    }
    this.moveDown = function () {
        this.top -= 60;
    }
    this.moveSuperCar = function (evt) {
        switch (evt.keyCode) {
            case 37:
                this.moveleft();
            case 38:
                this.moveTop();
            case 39:
                this.moveRight();
            case 40:
                this.moveDown();
        }
    }
}


let hero = new Hero('ducati.png', 20, 100, 100);

function start() {

    // if (hero.left < window.innerWidth - hero.size) {
    //     hero.moveRight();
    // }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    hero.moveSuperCar();
    // setTimeout(start, 300)
}

function stop() {
    if (hero.left < window.innerWidth + hero.size) {
        hero.moveleft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(stop, 300)
}

start();
// hero.moveSuperCar();
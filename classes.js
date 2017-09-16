class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // This is a getter method; treat it like a property of an object.
    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Static methods are called on the class itself and NOT on a class instance.
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}


function basic_class() {
    var r = new Rectangle(4, 5);
    console.log(r);
    console.log('Area: ' +  r.area);
}

function static_method() {
    var p1 = new Point(1, 1);
    var p2 = new Point(2, 2);
    console.log( 'distance: ' + Point.distance(p1, p2) );
}

class MenuItem {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    makeRed() {
        this.color = 'red';
    }
}

class UltraMenuItem extends MenuItem {
    #_default_color = 'white';
    constructor(...args) {
        super(...args);
    }

    makeBlue() {
        this.color = 'blue';
    }

    makeRed() {
        this.color = 'ultra red';
    }

    setUserColor(color = this.#_default_color) {
        this.color = color;
    }
}

const menuItem = new MenuItem('bar', 'green')
const ultraItem = new UltraMenuItem('bar', 'green')

//   console.log(menuItem.color)
//   menuItem.makeRed()
//   console.log(menuItem.color)
console.log(ultraItem._default_color)
//   console.log(ultraItem.color)
//   ultraItem.setUserColor()
//   console.log(ultraItem.color)
//   ultraItem.makeRed()
//   console.log(ultraItem.color)
const script = require('../script');
const add = script.add;
const sub = script.sub;
const divide = script.divide;
const mult = script.mult;

describe('Функция add()', () => {
    it('должна возвращать 5 при аргументах (3, 2)', () => {
        expect(add(3, 2)).toBe(5);
    })
});

describe('Функция add()', () => {
    it('должна возвращать null при аргументах (3, null)', () => {
        expect(add(3, null)).toBeNull();
    })
});

describe('Функция add()', () => {
    it('должна возвращать null при аргументах (null, 2)', () => {
        expect(add(null, 2)).toBeNull();
    })
});

describe('Функция sub()', () => {
    it('должна возвращать 1 при аргументах (3, 2)', () => {
        expect(sub(3, 2)).toBe(1);
    })
});

describe('Функция sub()', () => {
    it('должна возвращать 1 при аргументах (null, 2)', () => {
        expect(sub(null, 2)).toBeNull();
    })
});

describe('Функция sub()', () => {
    it('должна возвращать 1 при аргументах (3, null)', () => {
        expect(sub(3, null)).toBeNull();
    })
});

describe('Функция sub()', () => {
    it('должна возвращать 0 при аргументах (1000, 1000)', () => {
        expect(sub(1000, 1000)).toBe(0);
    })
});


// и тд, крч))

let str = "KL1386";
let editStr = str.toLowerCase();
let arr = editStr.split('');

let arrValues = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    a: "Alfa",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliett",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oskar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "X-ray",
    y: "Yankee",
    z: "Zulu"
};

let resStr = '';
for(let value of arr) {
    switch (value) {
        case '1':
            resStr += arrValues[1] + '-';
            break;
        case '2':
            resStr += arrValues[2] + '-';
            break;
        case '3':
            resStr += arrValues[3] + '-';
            break;
        case '4':
            resStr += arrValues[4] + '-';
            break;
        case '5':
            resStr += arrValues[5] + '-';
            break;
        case '6':
            resStr += arrValues[6] + '-';
            break;
        case '7':
            resStr += arrValues[7] + '-';
            break;
        case '8':
            resStr += arrValues[8] + '-';
            break;
        case '9':
            resStr += arrValues[9] + '-';
            break;
        case 'a':
            resStr += arrValues['a'] + '-';
            break;
        case 'b':
            resStr += arrValues['b'] + '-';
            break;
        case 'c':
            resStr += arrValues['c'] + '-';
            break;
        case 'd':
            resStr += arrValues['d'] + '-';
            break;
        case 'e':
            resStr += arrValues['e'] + '-';
            break;
        case 'f':
            resStr += arrValues['f'] + '-';
            break;
        case 'g':
            resStr += arrValues['g'] + '-';
            break;
        case 'h':
            resStr += arrValues['h'] + '-';
            break;
        case 'i':
            resStr += arrValues['i'] + '-';
            break;
        case 'j':
            resStr += arrValues['j'] + '-';
            break;
        case 'k':
            resStr += arrValues['k'] + '-';
            break;
        case 'l':
            resStr += arrValues['l'] + '-';
            break;
        case 'm':
            resStr += arrValues['m'] + '-';
            break;
        case 'n':
            resStr += arrValues['n'] + '-';
            break;
        case 'o':
            resStr += arrValues['o'] + '-';
            break;
        case 'p':
            resStr += arrValues['p'] + '-';
            break;
        case 'q':
            resStr += arrValues['q'] + '-';
            break;
        case 'r':
            resStr += arrValues['r'] + '-';
            break;
        case 's':
            resStr += arrValues['s'] + '-';
            break;
        case 't':
            resStr += arrValues['t'] + '-';
            break;
        case 'u':
            resStr += arrValues['u'] + '-';
            break;
        case 'v':
            resStr += arrValues['v'] + '-';
            break;
        case 'w':
            resStr += arrValues['w'] + '-';
            break;
        case 'x':
            resStr += arrValues['x'] + '-';
            break;
        case 'y':
            resStr += arrValues['y'] + '-';
            break;
        case 'z':
            resStr += arrValues['z'] + '-';
            break;
        default:
            console.log('(_!_)');
    }
}

let resArr = resStr.split('-');
resStr = resArr.join(' ');
console.log(resStr);

// 8
// 1846

// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// "Maya"
// "Marisa"
// "Chi"

// "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// [10, 30, 20]

const obj = {
    numbers:{
        a:1,
        b:2
    }
}
const {numbers:{a,b}} = obj;

let arr = [1,2];
[arr[0], arr[1]]=[arr[1],arr[0]];

const raceResults = (arr) => ({first, second, third, ...rest})

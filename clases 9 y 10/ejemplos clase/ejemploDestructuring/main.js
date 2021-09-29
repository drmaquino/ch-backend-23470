// function opRara(nums) {
//     return nums.n1 + nums.n2 / nums.n3 - nums.n4
// }

// function opRara({ n1 = 1, n2, n3, n4 }) {
//     return n1 + n2 / n3 - n4
// }

// opRara({ n3: 3, n4: 4, n2: 2 })

// const a = [1, 2, 3, 4, 5]
// const [prim, segu, ...resto] = a

// console.log(prim, segu)
// console.log(resto)

// const a = [1, 2, 3, 4, 5]

// console.log(...a)

// function tresNums([a, b, c]) {
//     console.log(a)
//     console.log(b)
//     console.log(c)

// }

// const args = [1, 2, 3]

// tresNums(args)

const o = {
    a: 1, b: 2, c: [1, 2, 3]
}

const c = { ...o, d: 4 }

console.log(c)

o.c[0] = 'casa'

console.log(c)
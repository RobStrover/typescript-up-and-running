function fill<T>(array:any[], value:T):T[] {
    return array.map(() => value)
}

const result = fill([1,2,3], "a")

console.log(result)
console.log(result.map(x => x.toUpperCase()))

const values = fill(["rob", "steve", "trevor"], 4)

console.log(values);
console.log(values.map(x => x * 3));

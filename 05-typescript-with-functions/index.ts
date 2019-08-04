type Salutation = {greeting:string, name:string}

function greet(greeting:string = 'hello', name:string = 'Rob') {
    return `${greeting}, ${name}!`
}

function greetFromObject({greeting, name}:Salutation) {
    return `${greeting}, ${name}!`
}

const greetingMessage:string = greet('Yo')
const greetingMessage2:string = greetFromObject({greeting: 'Hello there', name: 'General Grievous'})

console.log(greetingMessage)
console.log(greetingMessage2)
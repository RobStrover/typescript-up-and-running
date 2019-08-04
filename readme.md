# Up and Running with TypeScript #

Notes from 'Up and Running with TypeScript' - https://egghead.io/courses/up-and-running-with-typescript

## Quick start ##

Access an instant TypeScript environment at: 
https://codesandbox.io/s/vanilla-ts

To create a local project, first make sure you have 'parcel bundler' installed globally:

`npm i -g parcel-bundler` 

Create an index.html with script tag with the src set to a `.ts` file.

Run `parcel index.html` to see parcel do all the work for you!

See '01-basic-setup' for an example

## Using TypeScript with React ##
To configure TypeScript to work with React, change the '.ts' extension to '.tsx', edit the files to create a basic react app and then re-run `parcel index.html`

Use a tsconfig.json file to make sure that your imports behave in the usual way (as they do in a normal js project)

## Understanding the TypeScript Compiler ##

Install TypeScript globally with `npm i -g typescript`

You can now run TypeScript from the terminal with `tsc filename.ts` (see folder '03-understanding-the-typescript-compiler')

Running this will output a js file version of your .ts file.

You will rarely use tsc this way as the command is used by webpack, parcel etc.

See folder '04-using-tsc'. command `tsc --init` created a tsconfig.json file.

The tsconfig.json file is our configuration file that tells TypeScript our target js output.

Alter the configuration to your needs and then run `tsc`. All .ts files in the directory will be compiled into JS.

## TypeScript Functions ##

A basic function in TypeScript looks like this:

```typescript
function greet(greeting:string = 'hello', name:string = 'Rob') {
    return `${greeting}, ${name}!`
}
```
Types are given to the function parameters:
`(greeting:string = 'hello', name:string = 'Rob')`

Objects can be passed to functions using the `options` type:
```typescript
function greetFromObject(options:{greeting:string, name:string}) {
    return `${options.greeting}, ${options.name}!`
}
```
Or (better imo) they can be destructured:
```typescript
function greetFromObject({greeting, name}:{greeting:string, name:string}) {
    return `${greeting}, ${name}!`
}
```
"Types" can be declared in place of parameters which REALLY cleans things up:
```typescript
type Salutation = {greeting:string, name:string}

function greetFromObject({greeting, name}:Salutation) {
    return `${greeting}, ${name}!`
}
```
## TypeScript Features With Vanilla JS ##

You can use JS doc to leverage TypeScript. Start by including:
`//@ts-check` at the top of your JS file.

then do something a little like this:
```js
//@ts-check

/**
 * @param {string} greeting
 * @return {string}
 */
function greet(greeting) {
    return greeting
}

greet(1)
```

## Interacting with DOM Elements with Type Assertions ##

Take an input element selector:

`const inputOne = document.getElementById("input-one")`

We must add a type to these in TypeScript:

```typescript
const inputOne = document.getElementById("input-one") as HTMLInputElement;
```

The same must be done with Event Listeners:

```typescript
const inputOne = document.getElementById("input-one") as HTMLInputElement;

inputOne.addEventListener("input", event => {
    const input = event.currentTarget as HTMLInputElement
    console.log(input.value)
})
```

## TypeScript Generics ##

Generics often appear in utility functions where you may not know the type of the input paramneters. Consider the following example:

```typescript
function fill<T>(array:any[], value:T):T[] {
    return array.map(() => value)
}

const result = fill([1,2,3], "a")

console.log(result)
console.log(result.map(x => x.toUpperCase()))

const values = fill(["rob", "steve", "trevor"], 4)

console.log(values);
console.log(values.map(x => x * 3));
```
`<T>` is the generic type that we do not know what it is (T is just a naming convention, you can write basically anything in its place)

Notice around the function signature:
```typescript
const result = fill([1,2,3], "a")

console.log(result)
console.log(result.map(x => x.toUpperCase()))
```
The type of the second parameter `"a"` is recognised by TypeScript and used throughout the function which means our `console.log(result.map(x => x.toUpperCase()))` is perfectly valid as our function is expected to return an array of our generic types (in this case, a string): `...value:T):T[] {`

This means that when we next use our function, pass an array of strings to be filled with an integer, the integer type is set in the generic and populated through the function. Neat!

## Use Type Definitions of Popular Projects on NPM ##

When installing and using external dependencies, a lot of them do not ship with types. Once you have started using the package in your TypeScript file, (in VS Code) highlight the imported package name and hit `CMD / Ctrl` + `p` which should give the option to install types for your package. You will see these added under the dev dependencies in your package.json.
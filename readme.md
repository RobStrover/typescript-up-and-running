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
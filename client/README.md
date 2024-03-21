# ZZENSE Front-End Overview
This is the README.md file for the front end of the clone. As seen on the main
repo [README](../README.md), this application is a full-stack application - with
a front-end built in ReactJS, while being bootstrapped with TailwindCSS and a
back-end built with NodeJS, Express, integrating a database with Mongoose.

## TailwindCSS
The front-end of this application was bootstrapped with TailwindCSS. To install
tailwind, you can simply follow the commands on their [installation docs](https://tailwindcss.com/docs/guides/create-react-app)
to install tailwind as a dependency.

Or, you can run these commands in the terminal to
```console
# install dependency
npm install --save-dev tailwindcss
```
After installing the dependencies, we have to create the config file
```console
# create tailwind config file
npx tailwindcss init
```

This is a general overview on how I installed TailwindCSS. The following steps 
differ for many users, so I would recommend searching around to debug any problems
with using tailwind after installing it.

Tailwind is a super light (and easy to use) framework for people who have no
styling experience or are bad at styling websites (both apply to me lol).

## ReactJS
The front-end of the application is built primarily on React. Having experience
using React in the past, I wanted to use React with TailwindCSS to streamline the
front-end of the application development process and give myself more time to
work on implementing the back-end.

## Client-Side File Structure
Below is tree of the client-side file structure:
```console
client
|
|___ node_modules
|       |
|       |__ [all dependencies installed]
|
|___ public
|       |___ [all img files]
|
|___ src
      |
      |__ App.css
      |
      |__ App.js
      |
      |__ componentes
            |
            |___ [all components of the screen(navbar, selections, menu, etc.)]
```

The code above is a small file structure of the client-side of the application 
so far. As changes are made (components are added, new dependencies installed, 
etc.), the file structure in the README will be updated to following the file
strucutre of the project.


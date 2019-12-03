# WEBPACK

## WHAT IS WEBPACK?

Webpack is a module builder.This is important to understand, as Webpack does not run during your page, it runs during your development.

```
Webpack is a tool wherein you use a configuration to explain to the builder how to load specific things. You describe to Webpack how to load *.js files, or how it should look at .scss files, etc. Then, when you run it, it goes into your entry point and walks up and down your program and figures out exactly what it needs, in what order it needs it, and what each piece depends on. It will then create bundles — as few as possible, as optimized as possible, that you include as the scripts in your application.
```

To understand what this means, let’s take a brief look at the history of JavaScript and why such behavior is 'necessary'.

*Some developers feel using module loaders is unwise, and prefer the old fashioned style of manually doing everything. There is certainly still merit to understanding all of this, and you should not feel compelled to use a module loader — however, there are as many arguments for how module loaders improve the development process. I personally feel it is wise to use them, but you should experiment and find out for yourself what works the best!*

## JAVASCRIPT HISTORY

### HOW IT WAS

Once upon a time, we had very few scripts on a webpage. You would include them with a few simple lines, such as this;

```
<head>
   <script src="scripts.js" type="text/javascript"></script>
</head>
```

This was a simpler time, when pages had few or sparse scripts. You could fit everything in a few files, and you could easily load them without conflict.

### HOW IT IS NOW

In the last 10 years, the entire scope and spectrum of web development has completely changed. Now we have dozens of scripts, each with a different purpose, each oftentimes created by a different person, each with different requirements.

It’s not uncommon for a modest, or even a small website to need several script libraries. What is more, these libraries oftentimes depend on other libraries — called “dependencies”. Not only do you have to load these scripts, you have to understand what they need to have loaded first!

### ASYNCHRONOUS BY DEFAULT

But wait, there’s more! Not only do you have to load everything in the right order, JavaScript tries to load everything at once by default! This adds insult to injury, as it’s not uncommon for scripts to load in a very different order than you declare.

This behavior is called asynchronous — it means that when the executing context (in this case, the web browser) encounters code, it begins to run it, but keeps going before it finishes.

### SEND IN THE MODULES

The problems with scripts are so pervasive that the entire development community as a whole set out to solve it; This emerged as a series of standards called modules. The idea behind modules is a standard way to encapsulate scripts in such a way that they can be referred to as a package, and they can be loaded easily, and declared as dependencies of other modules. Ideally, this would allow everything to load where it is needed, to understand what it needs, and to keep the overhead slim.

However, JavaScript is slow to evolve, as any change to the specification and behavior can only be “supported” when web browsers are updated to understand it. This makes it difficult to push things out the door, as the process of getting browsers up to date — a process that can take a very long time, as home users are not apt to update their browsers due to either lacking technical knowledge, or being afraid of breaking something by doing so.

### LOADERS TO THE RESCUE!

And so, here we are now; The current solution to the problem is module loaders. A module loader is usually a tool or a script through which a developer passes their JavaScript through — this tool (or script!) is responsible for determining load priority, dependencies, efficiency, paths, etc. It is a worker whose job is to make your scripts run like you expect without worrying about the overhead.

There are many module loaders, but some of the most popular are Webpack, SystemJS, JSPM, RequireJS, and RollUp. This series of tutorials will focus on Webpack because it is the loader of my choice. There are more module loaders that I’ve not listed, as I obviously have not experienced all of them.

*Please note, I am not advocating Webpack as being better than any other loader. It is the loader I choose, It is the loader I like. Every loader out there is incredibly useful and used by many various companies. In fact, many companies use different loaders for different parts of a project in large applications! As an example, Google’s Angular uses Webpack internally with its @angular/cli, but it uses RollUp to create the @angular packages!*

## WEBPACK CONCEPT

Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

Core Concepts:

- Entry
- Output
- Loaders
- Plugins
- Mode
- Browser Compatibilities

Please refer to below link for more details:

- https://webpack.js.org/concepts/

- https://github.com/ronami/minipack

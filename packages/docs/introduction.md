---
title: Introduction
---
# Introduction

## Why?

I believe that Laravel provides the ultimate DX of any framework I've used. Unfortunately Laravel is not based on TypeScript which provides a number of advantages:

* Types
    * Efficient hints in editors like VS Code
    * Compiler errors to catch bugs
* JavaScript
    * Share data types with the frontend
    * Share code and logic with the frontend
    * Asynchronous
    * The app is a running process in memory (no need to reload all files on every request!)

That being said, a number of features have not been ported over to Laravel, this is to keep the starter kit lighter and to keep with trends of a [Twelve-Factor App](https://12factor.net/) with a stateless, API driven services. 

The features that won't be ported over are:

* Templating engine like Blade
* Sessions (and all things powered by Sessions)
* Cookies
* Local filesytem (and all things powered by the local filesystem)
* Queues (not needed as functionality like sending an email can be done asynnchronously)

Yarn is also preferred over NPM.

## Why Not?

### AdonisJS

### QuorrraJS

### Grind

### Naravel

## Versioning Scheme

As a starter kit, looped does not have versioning. Simply follow the notes in [installation](installation) to get the latest starter!

All packages included in the starter kit will follow semantic versioning to ensure your application doesn't break. 

## Support Policy

Please file issues on [GitHub](https://github.com/morrislaptop/looped/issues).

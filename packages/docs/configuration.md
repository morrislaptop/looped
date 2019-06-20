---
title: Configuration
---
# Configuration

## Introduction

All of the configuration files for the Looped Starter Kit are stored in the `config` directory. Each option is documented, so feel free to look through the files and get familiar with the options available to you.

## Environment Configuration

It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server.

To make this a cinch, Looped utilizes the [DotEnv](https://github.com/motdotla/dotenv) library. In a fresh Looped installation, the root directory of your application will contain a `.env.example` file. If you install Looped via Yarn, this file will automatically be copied to `.env`. Otherwise, you should rename the file manually.

Your `.env` file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed.

If you are developing with a team, you may wish to continue including a `.env.example` file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. 

You may also create a `.env.testing` file. This file will override the `.env` file when running Jest tests or executing Looped commands with the `NODE_ENV=testing` option.

> Any variable in your `.env` file can be overridden by external environment variables such as server-level or system-level environment variables.
>
> You can only set the `NODE_ENV` variable in your server configuration, this does not work in the `.env` file

### Environment Variable Types & Default Values

If you need to define an environment variable with a value that contains spaces, you may do so by enclosing the value in double quotes.

```
APP_NAME="My Application"
```

All variables in your `.env` files are parsed as strings. It is recommended to cast these into the relevant types and provide default values in your `config/*.ts` files. 

```
const app = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    debug: process.env.APP_DEBUG === "true",    redis: process.env.REDIS_URL || 'redis://127.0.0.1'
}
```

TypeScript will automatically recognise the types of your config variables with this approach. If you would like to automate casting of env variables (which will not provide type safety), you can use the [dotenv-parse-variables](https://www.npmjs.com/package/dotenv-parse-variables) package.

### Determining The Current Environment

The current application environment is determined via the `NODE_ENV` variable from your `.env` file. You may access this value via the `environment` method on the `App` [facade](/facades):

```
const env = process.env.NODE_ENV
```

Examples of checking the current environment:

```
if (process.env.NODE_ENV === 'local') {
    // The environment is local
}

if (['local', 'staging'].includes(process.env.NODE_ENV) {
    // The environment is either local OR staging...
}
```

> The current application environment detection can be overridden by a server-level `APP_ENV` environment variable. This can be useful when you need to share the same application for different environment configurations, so you can set up a given host to match a given environment in your server's configurations.

## Accessing Configuration Values

All of the variables listed in this file will be loaded into the `process.env` Node super-global when your application receives a request. 

It is recommended you then organise your configuration values into relevant objects from the `config/index.ts` file.

You may easily access your configuration values by importing this file

```
import * as config from '../config'

console.log(config.app.redis)
```

To set configuration values at runtime, simpy set a value on the object.

```
config.app.debug = false
```

## Maintenance Mode

A maintenance mode is not included with the starter kit. It is recommended to use a deployment process or hosting provider which can provide this functionality at a higher level.

* [Heroku's Maintenance Mode](https://devcenter.heroku.com/articles/maintenance-mode)

---
title: Installation
---
# Installation

## Server Requirements

The Looped starter kit follows the [Node LTS Release Schedule](https://nodejs.org/en/about/releases/)

## Install Looped via Yarn

    yarn create @looped-ts

## Local Development Server

You can start the local development server which automatically restarts on code changes with the following command:

    yarn dev

## Configuration

### Configuration Files

All of the configuration files for the Looped starter kit are stored in the `config` directory. Each option is documented, so feel free to look through the files and get familiar with the options available to you.

### Directory Permissions

After installing Looped, you may need to configure some permissions. Directories within the `storage` and the `bootstrap/cache` directories should be writable by the node process or Looped will not run.

### Application Key

The next thing you should do after installing Looped is set your application key to a random string. If you installed Looped via Yarn, this key has already been set for you by the `yarn looped key:generate` command.

Typically, this string should be 32 characters long. The key can be set in the `.env` environment file. If you have not renamed the `.env.example` file to `.env`, you should do that now. **If the application key is not set, your user sessions and other encrypted data will not be secure!**

### Additional Configuration

Looped needs almost no other configuration out of the box. You are free to get started developing! However, you may wish to review the `config/index.ts` file and its documentation. It contains several options such as `timezone` and `locale` that you may wish to change according to your application.

You may also want to configure a few additional components of Laravel, such as:

- [Cache](/cache#configuration)
- [Database](/database#configuration)

## Production Server

You can start the production server with the following command:

    yarn serve

It's recommended to use a process watcher like [pm2](http://pm2.keymetrics.io/) or use a containerised service which will automatically restart the server if it crashes.

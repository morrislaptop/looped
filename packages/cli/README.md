@looped-ts/cli
==============

CLI utilities for the Looped Starter Kit

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@looped-ts/cli.svg)](https://npmjs.org/package/@looped-ts/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@looped-ts/cli.svg)](https://npmjs.org/package/@looped-ts/cli)
[![License](https://img.shields.io/npm/l/@looped-ts/cli.svg)](https://github.com/morrislaptop/looped-ts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @looped-ts/cli
$ looped COMMAND
running command...
$ looped (-v|--version|version)
@looped-ts/cli/0.0.1-alpha.4 darwin-x64 node-v12.5.0
$ looped --help [COMMAND]
USAGE
  $ looped COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`looped help [COMMAND]`](#looped-help-command)
* [`looped key:generate`](#looped-keygenerate)
* [`looped make:controller NAME`](#looped-makecontroller-name)
* [`looped make:middleware NAME`](#looped-makemiddleware-name)
* [`looped make:provider NAME`](#looped-makeprovider-name)

## `looped help [COMMAND]`

display help for looped

```
USAGE
  $ looped help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `looped key:generate`

generate a key and write to your .env file

```
USAGE
  $ looped key:generate

OPTIONS
  --help  show CLI help
  --show
```

_See code: [src/commands/key/generate.ts](https://github.com/morrislaptop/looped-ts/blob/v0.0.1-alpha.4/src/commands/key/generate.ts)_

## `looped make:controller NAME`

```
USAGE
  $ looped make:controller NAME

OPTIONS
  -h, --help     show CLI help
  --model=model
  --resource
```

_See code: [src/commands/make/controller.ts](https://github.com/morrislaptop/looped-ts/blob/v0.0.1-alpha.4/src/commands/make/controller.ts)_

## `looped make:middleware NAME`

```
USAGE
  $ looped make:middleware NAME

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/make/middleware.ts](https://github.com/morrislaptop/looped-ts/blob/v0.0.1-alpha.4/src/commands/make/middleware.ts)_

## `looped make:provider NAME`

```
USAGE
  $ looped make:provider NAME

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/make/provider.ts](https://github.com/morrislaptop/looped-ts/blob/v0.0.1-alpha.4/src/commands/make/provider.ts)_
<!-- commandsstop -->

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
@looped-ts/cli/0.0.0 darwin-x64 node-v12.4.0
$ looped --help [COMMAND]
USAGE
  $ looped COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`looped hello [FILE]`](#looped-hello-file)
* [`looped help [COMMAND]`](#looped-help-command)
* [`looped key:generate [FILE]`](#looped-keygenerate-file)
* [`looped key:what [FILE]`](#looped-keywhat-file)

## `looped hello [FILE]`

describe the command here

```
USAGE
  $ looped hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ looped hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/morrislaptop/looped-ts/blob/v0.0.0/src/commands/hello.ts)_

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

## `looped key:generate [FILE]`

generate a key and write to your .env file

```
USAGE
  $ looped key:generate [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/key/generate.ts](https://github.com/morrislaptop/looped-ts/blob/v0.0.0/src/commands/key/generate.ts)_

## `looped key:what [FILE]`

describe the command here

```
USAGE
  $ looped key:what [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/key/what.ts](https://github.com/morrislaptop/looped-ts/blob/v0.0.0/src/commands/key/what.ts)_
<!-- commandsstop -->

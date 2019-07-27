# Authentication

## Introduction

Looped makes implementing authentication very simple. At its core, Looped's authentication facilities is a simple function which should return a `User` object.

### Default Function

By default, Laravel includes an `App\User` [TypeORM model](/orm) in your `app` directory. This model may be used with the default authentication callback. If your application is not using TypeORM, you may change the callback defined in `app/Http/Kernel.ts`.

### Retrieving The Authenticated User

You may access the authenticated user via the `CurrentUser` decorator:

```typescript
import { Get, CurrentUser } from 'routing-controllers'
import { User } from '../../User';

@Get('/user')
async user(@CurrentUser() user: User) {
    return { user }
}
```

### Protecting Routes

The required property can be used to only allow authenticated users to access a given route. 

```typescript
import { Get, CurrentUser } from 'routing-controllers'
import { User } from '../../User';

@Get('/user')
async user(@CurrentUser({ required: true }) user: User) {
    return { user }
}
```

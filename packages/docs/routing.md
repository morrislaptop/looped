# Routing

## Basic Routing

The most basic Looped routes use the amazing [routing controllers](https://github.com/typestack/routing-controllers) package. This package allows a very simple and express method of defining routes:

```typescript
import { Controller, Get } from 'routing-controllers'
import { Service } from 'typedi'

@Controller()
@Service()
export class ExampleController
{
    @Get('/foo')
    async index() {
        return 'Hello World'
    }
}
```

#### The Default Route Files

All Looped routes are defined in your route files, which are located in the `routes` directory. These files are automatically loaded by the stater kit. The `routes/controllers.ts` file defines the controllers that are for your web interface.

For most applications, you will begin by defining routes in your controllers and registering your controllers in `routes/controllers.ts` file. The routes defined in your controller methods may be accessed by entering the defined route's URL in your browser. For example, you may access the following route by navigating to `http://your-app.test/user` in your browser:

```typescript
@Get('/user')
async index() {
		return ''
}
```

#### Available Router Methods

The router allows you to register routes that respond to any HTTP verb:

```typescript
import {Get, Post, Put, Patch, Delete} from "routing-controllers";

@Get('/users');
@Post('/users');
@Put('/users/:id');
@Patch('/users/:id');
@Delete('/users/:id');
```

Sometimes you may need to register a route that responds to multiple HTTP verbs. You may do so using the `match` method.

```typescript
@Post('/users');
@Put('/users/:id');
@Patch('/users/:id');
async store() {
		return User.updateOrCreate()
}
```

### Redirect Routes

If you are defining a route that redirects to another URI, you may use the `@Locatio` decorator. This method provides a convenient shortcut so that you do not have to define a full controller method for performing a simple redirect:

```typescript
@Redirect("http://github.com")
@Get('/gitub')
```

By default, `@Redirect` returns a `302` status code. You may customize the status code using the `@HttpCode` decorator.

```typescript
@HttpCode(301)
@Redirect("http://github.com")
@Get('/gitub')
```

### View Routes

If your route only needs to return a view, you may use the `Render` method. You may provide an object of data to pass to the view from the return value of the controller method:

```typescript
@Get('/')
@Render("index.ejs")
async index(@Req() req: Request) {
		return {
				hello: 'Looped',
		}
}
```

> There is a [current bug](https://github.com/typestack/routing-controllers/issues/378) where the rendered version is cached and that response will be used for all future requests. We are working on a fix for this. 

## Route Parameters

Sometimes you will need to capture segments of the URI within your route. For example, you may need to capture a user's ID from the URL. You may do so by defining route parameters:

```typescript
@Get("/users/:id")
show(@Param("id") id: number) {

}
```

You may define as many route parameters as required by your route:

```typescript
@Get("/posts/:id/comments/:comment")
show(@Param("id") postId: number, @Param("comment") commentId: number) {

}
```

## Route Groups

Route groups allow you to share route attributes, such as middleware or namespaces, across a large number of routes without needing to define those attributes on each individual route. Shared attributes are specified in an array format as the first parameter to the `Route::group` method.

Nested groups attempt to intelligently "merge" attributes with their parent group. Middleware and `where` conditions are merged while names, namespaces, and prefixes are appended. Namespace delimiters and slashes in URI prefixes are automatically added where appropriate.

## Route Prefixes

You can prefix all specific controller's actions with base route:

```typescript
@Controller("/users")
export class UserController {
    // ...
}
```

## Route Model Binding

When injecting a model ID to a controller action, you will often query to retrieve the model that corresponds to that ID. Looped route model binding provides a convenient way to automatically inject the model instances directly into your routes. For example, instead of injecting a user's ID, you can inject the entire `User` model instance that matches the given ID.

```typescript
import { EntityFromParam } from "typeorm-routing-controllers-extensions";
import { User } from '../../User'

@Get('/users/:id')
async show(@EntityFromParam('id') user: User) {
		return user
}
```

If a matching model instance is not found in the database, a 404 HTTP response will be automatically generated.
# Controllers


## Introduction

Controllers can group related request handling logic into a single class. Controllers are stored in the `app/Http/Controllers` directory.


## Basic Controllers


### Defining Controllers

Below is an example of a basic controller class. Note that the controller extends the base controller class included with Laravel. The base class provides a few convenience methods such as the `middleware` method, which may be used to attach middleware to controller actions:

```typescript
import { Controller, Get, Param } from 'routing-controllers'
import Container, { Service } from 'typedi'
import { User } from '../../User'

@Controller()
@Service()
export class ExampleController
{
    @Get('/users/:id')
  	@Render('users/show')
    async show(@Param('id') id: number ) {
        return {
            user: User.findOne(id)
        }
    }
}
```

Now, when a request matches the specified route URI, the `show` method on the `UserController` class will be executed. The route parameters will also be passed to the method.


## Controller Middleware

[Middleware](/middleware) may be assigned to the controller's routes directly in your controller files.Using the `@UseBefore` or `@UseAfter` decorators, you may easily assign middleware to the entire controller or a specific action.

```typescript
import { Controller, UseBefore } from "routing-controllers";
import { WatchUsers, LogUsers } from "../Middleware/Users";

@Controller()
@UseBefore(WatchUsers)
export class UserController {
  
  @Get("/users/:id")
  @UseAfter(LogUsers)
  show(@Param("id") id: number) {
      // ...
  }
  
}
```


## Resource Controllers

Looped resource routing assigns the typical "CRUD" routes to a controller with a single line of code. For example, you may wish to create a controller that handles all HTTP requests for "photos" stored by your application. Using the `make:controller` Artisan command, we can quickly create such a controller:

    yarn looped make:controller PhotoController --resource

This command will generate a controller at `app/Http/Controllers/PhotoController.ts`. The controller will contain a method for each of the available resource operations.

#### Actions Handled By Resource Controller

Verb      | URI                  | Action       
----------|-----------------------|--------------
GET       | `/photos`              | index        
POST      | `/photos`              | store        
GET       | `/photos/{photo}`      | show         
PUT/PATCH | `/photos/{photo}`      | update       
DELETE    | `/photos/{photo}`      | destroy      

#### Specifying The Resource Model

If you are using route model binding and would like the resource controller's methods to type-hint a model instance, you may use the `--model` option when generating the controller:

    php artisan make:controller PhotoController --resource --model=Photo

> Remember to keep your controllers focused. If you find yourself routinely needing methods outside of the typical set of resource actions, consider splitting your controller into two, smaller controllers.

## Dependency Injection & Controllers

#### Constructor Injection

The Laravel [service container](/container) is used to resolve all Laravel controllers. As a result, you are able to type-hint any dependencies your controller may need in its constructor. The declared dependencies will automatically be resolved and injected into the controller instance:

    <?php
    
    namespace App\Http\Controllers;
    
    use App\Repositories\UserRepository;
    
    class UserController extends Controller
    {
        /**
         * The user repository instance.
         */
        protected $users;
    
        /**
         * Create a new controller instance.
         *
         * @param  UserRepository  $users
         * @return void
         */
        public function __construct(UserRepository $users)
        {
            $this->users = $users;
        }
    }

You may also type-hint any [Laravel contract](/contracts). If the container can resolve it, you can type-hint it. Depending on your application, injecting your dependencies into your controller may provide better testability.

#### Method Injection

In addition to constructor injection, you may also type-hint dependencies on your controller's methods. A common use-case for method injection is injecting the `Illuminate\Http\Request` instance into your controller methods:

    <?php
    
    namespace App\Http\Controllers;
    
    use Illuminate\Http\Request;
    
    class UserController extends Controller
    {
        /**
         * Store a new user.
         *
         * @param  Request  $request
         * @return Response
         */
        public function store(Request $request)
        {
            $name = $request->name;
    
            //
        }
    }

If your controller method is also expecting input from a route parameter, list your route arguments after your other dependencies. For example, if your route is defined like so:

    Route::put('user/{id}', 'UserController@update');

You may still type-hint the `Illuminate\Http\Request` and access your `id` parameter by defining your controller method as follows:

    <?php
    
    namespace App\Http\Controllers;
    
    use Illuminate\Http\Request;
    
    class UserController extends Controller
    {
        /**
         * Update the given user.
         *
         * @param  Request  $request
         * @param  string  $id
         * @return Response
         */
        public function update(Request $request, $id)
        {
            //
        }
    }


## Route Caching

> {note} Closure based routes cannot be cached. To use route caching, you must convert any Closure routes to controller classes.

If your application is exclusively using controller based routes, you should take advantage of Laravel's route cache. Using the route cache will drastically decrease the amount of time it takes to register all of your application's routes. In some cases, your route registration may even be up to 100x faster. To generate a route cache, just execute the `route:cache` Artisan command:

    php artisan route:cache

After running this command, your cached routes file will be loaded on every request. Remember, if you add any new routes you will need to generate a fresh route cache. Because of this, you should only run the `route:cache` command during your project's deployment.

You may use the `route:clear` command to clear the route cache:

    php artisan route:clear

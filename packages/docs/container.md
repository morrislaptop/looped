# Service Container


## Introduction

The [TypeDI](https://github.com/typestack/typedi) service container is a powerful tool for managing class dependencies and performing dependency injection. Dependency injection is a fancy phrase that essentially means this: class dependencies are "injected" into the class via the constructor or, in some cases, "setter" methods.

Let's look at a simple example:

```typescript
class UserController extends Controller
{
  	constructor(private users: UserRepository) {
      
    }

	  @Get("/users/:id")
    show(const id: number) {
        const user = this.users.find(id)

        return { user }
    }
}
```

In this example, the `UserController` needs to retrieve users from a data source. So, we will **inject** a service that is able to retrieve users. In this context, our `UserRepository` most likely uses [TypeORM](https://typeorm.io/#/) to retrieve user information from the database. However, since the repository is injected, we are able to easily swap it out with another implementation. We are also able to easily "mock", or create a dummy implementation of the `UserRepository` when testing our application.

A deep understanding of the TypeDI service container is essential to building a powerful, large application.


## Binding


### Binding Basics

Almost all of your service container bindings will be registered within [service providers](/providers), so most of these examples will demonstrate using the container in that context.

> There is no need to bind classes into the container if they do not depend on any interfaces. The container does not need to be instructed on how to build these objects, since it can automatically resolve these objects using reflection.

#### Simple Bindings

Within a service provider, you always have access to the container by importing it from `typedi`. We can register a binding using the `set` method, passing the class or interface name that we wish to register along with the `object` that should be returned when requesting this class:

```typescript
Container.set(UserRepository, new UserRepository)
Container.set('Cache', new Cache)
```

Note that we receive the container itself as an argument to the resolver. We can then use the container to resolve sub-dependencies of the object we are building.


### Binding Interfaces To Implementations

A very powerful feature of the service container is its ability to bind an interface to a given implementation. For example, let's assume we have an `EventPusher` interface and a `RedisEventPusher` implementation. Once we have coded our `RedisEventPusher` implementation of this interface, we can register it with the service container like so:

```typescript
Container.set(EventPusher, new RedisEventPusher)
```

This statement tells the container that it should inject the `RedisEventPusher` when a class needs an implementation of `EventPusher`. Now we can type-hint the `EventPusher` interface in a constructor, or any other location where dependencies are injected by the service container:

```typescript
class UserController extends Controller
{
  	@Inject()
  	eventPusher: EventPusher

	  @Post("/users")
    store(@Body() data:any) {
        this.eventPusher.push('user_created', user)

        return { data }
    }
}
```


## Resolving

#### The `get` Method

You may use the `get` method to resolve a class instance out of the container. The `get` method accepts the name of the class or interface you wish to resolve:

    const api = Container.get(UserRepository)

#### Automatic Injection

Alternatively, and importantly, you may "type-hint" the dependency in the constructor or properties of a class that is resolved by the container, including [controllers](/controllers), [event listeners](/events), [middleware](/middleware), and more. In practice, this is how most of your objects should be resolved by the container.

For example, you may type-hint a repository defined by your application in a controller's constructor. The repository will automatically be resolved and injected into the class:

```typescript
class UserController extends Controller
{
  	@Inject('Cache')
  	cache: any
  
  	constructor(private users: UserRepository) {
      
    }

	  @Get("/users/:id")
    show(const id: number) {
        const user = this.users.find(id)
        
        this.cache.set('user', user)

        return { user }
    }
}
```



# Request Lifecycle


## Introduction

When using any tool in the "real world", you feel more confident if you understand how that tool works. Application development is no different. When you understand how your development tools function, you feel more comfortable and confident using them.

The goal of this document is to give you a good, high-level overview of how the Looped starter kit works. By getting to know the overall framework better, everything feels less "magical" and you will be more confident building your applications. If you don't understand all of the terms right away, don't lose heart! Just try to get a basic grasp of what is going on, and your knowledge will grow as you explore other sections of the documentation.


## Lifecycle Overview

### First Things

The entry point for all requests to a Laravel application is the `bootstrap/server.ts` file. This starts a process which creates a HTTP server and listens on a particular port. The `server.ts` file doesn't contain much code. Rather, it is a starting point for loading the rest of the framework.

The `server.ts` file retrieves an instance of the Looped application from `bootstrap/app.ts` script. The first action taken by Looped itself is to create an instance of the application / [service container](/container).

### HTTP / Console Kernels

Next, the incoming request is sent to either the HTTP kernel or the console kernel, depending on the type of request that is entering the application. These two kernels serve as the central location that all requests flow through. For now, let's just focus on the HTTP kernel, which is located in `app/Http/Kernel.ts`.

The HTTP kernel creates an `Express` server, which defines an array of `middlewares` that will be run before the request is executed. These middlewares configure error handling, configure logging, and perform other tasks that need to be done before the request is actually handled.

The method signature for the HTTP kernel's `handle` method is quite simple: receive a `Container` and return a `Server`. Think of the Kernel as being a big black box that represents your entire application. Feed it HTTP requests and it will return HTTP responses.

#### Service Providers

One of the most important Kernel bootstrapping actions is loading the [service providers](/providers) for your application. All of the service providers for the application are configured in the `bootstrap/app.ts`  file. First, the `register` method will be called on all providers, then, once all providers have been registered, the `boot` method will be called.

Service providers are responsible for bootstrapping all of the framework's various components, such as the database, queue, validation, and routing components. Since they bootstrap and configure every feature offered by the starter kit, service providers are the most important aspect of the entire Looped bootstrap process.

#### Dispatch Request

Once the application has been bootstrapped and all service providers have been registered, the `Server` will be asked to listen to a port for requests. The server will dispatch the request to a route or controller, as well as run any route specific middleware.


## Focus On Service Providers

Service providers are truly the key to bootstrapping a Looped application. The application instance is created, the service providers are registered, and the request is handed to the bootstrapped application. It's really that simple!

Having a firm grasp of how a Laravel application is built and bootstrapped via service providers is very valuable. Your application's default service providers are stored in the `app/Providers` directory.

By default, the `AppServiceProvider` is fairly empty. This provider is a great place to add your application's own bootstrapping and service container bindings. For large applications, you may wish to create several service providers, each with a more granular type of bootstrapping.

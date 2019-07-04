# Views

> Looped is designed for API applications, however Views are included for quick prototypes or small applications. 

Views contain the HTML served by your application and separate your controller / application logic from your presentation logic. Views are stored in the `resources/views` directory. A simple view might look something like this:

```ejs
<!-- View stored in resources/views/greeting.ejs -->

<html>
    <body>
        <h1>Hello, {{ name }}</h1>
    </body>
</html>
```

Since this view is stored at `resources/views/greeting.ejs`, we may return it using the `@Render` decorator like so:

```typescript
@Get('/')
@Render("getting.ejs")
async index(@Req() req: Request) {
		return {
				name: 'Looped',
		}
}
```

As you can see, the controller action should return the data that should be made available to the view. In this case, we are passing the `name` variable, which is displayed in the view using [EJS syntax](https://ejs.co/#docs).

Views may also be nested within sub-directories of the `resources/views` directory. For example, if your view is stored at `resources/views/admin/profile.ejs`, you may reference it like so:

```typescript
@Render('admin/profile.ejs');
```

>  Looking for more information on how to write EJS templates? Check out the full [EJS documentation](https://ejs.co/#docs) to get started.
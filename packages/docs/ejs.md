# EJS Templates

> Looped is designed to be an API first starter kit. However, the EJS template engine is included to facilitate quick prototypes or internal tools that could be built with Looped.

## Introduction

[EJS](https://ejs.co/) is the simple, yet powerful templating engine provided with Looped. Unlike other popular JS templating engines, EJS does not restrict you from using plain JS code in your views. In fact, all EJS views are compiled into plain JS code and cached until they are modified, meaning EJS adds essentially zero overhead to your application. EJS view files use the `.ejs` file extension and are typically stored in the `resources/views` directory.

## Displaying Data

You may display data passed to your EJS views by wrapping the variable in curly braces. For example, given the following route:

```typescript
import { Get, Render, Controller } from 'routing-controllers'
import { Service } from 'typedi'

@Controller()
@Service()
export class HomeController
{
    @Get('/')
    @Render('welcome.ejs')
    async home() {
        return { name: 'Samantha' }
    }
}
```

You may display the contents of the `name` variable like so:

```ejs
Hello, <%= name %>
```

> EJS `<%= %>` statements are automatically escaped to prevent XSS attacks.

You are not limited to displaying the contents of the variables passed to the view. You may also echo the results of any JS function. In fact, you can put any PHP code you wish inside of a Blade echo statement:

```ejs
The current UNIX timestamp is <%= Date.now() %>
```

#### Displaying Unescaped Data

By default, EJS `<%= %>` statements are automatically escaped to prevent XSS attacks. If you do not want your data to be escaped, you may use the following syntax:

```ejs
Hello, <%- name %>.
```

> {note} Be very careful when echoing content that is supplied by users of your application. Always use the escaped, percent equals syntax to prevent XSS attacks when displaying user supplied data.

#### Rendering JSON

Sometimes you may pass an object or array to your view with the intention of rendering it as JSON in order to initialize a JavaScript variable. For example:

```ejs
<script>
    var app = <%- JSON.stringify(user) %>
</script>
```

This approach is also useful for seeding Vue components or `data-*` attributes:

    <example-component :some-prop='<%- JSON.stringify(user) %>'></example-component>

> Using `JSON.stringify` in element attributes requires that it be surrounded by single quotes.

## Control Structures

In addition to displaying data, EJS also provides convenient shortcuts for common JS control structures, such as conditional statements and loops. These shortcuts provide a very clean, terse way of working with JS control structures, while also remaining familiar to their JS counterparts.

Control structures use the `<%`, and `%>` tags

### If Statements

```ejs
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```


### Switch Statements

```ejs
<%
    switch (role) {
        case 'admin':
            %>
            You are an admin.
            <%
        break;

        case 'user':
        default:
            %>
            You are a user.
            <%
    }
%>
```


### Loops

```ejs
<% for (let i = 0; i < 10; i++) { %>
    <p>The current value is <%= i %></p>
<% } %>

<% for (i in [1, 2, 3, 4]) { %>
		<p>The current value is <%= i %></p>
<% } %>
    
<% while (true) { %>
		<p>I'm looping forever.</p>
<% } %>
```

When using loops you may also end the loop or skip the current iteration:

```ejs
<% for (i in [1, 2, 3, 4]) { %>
    <% if (i < 2) continue; %>
    The current value is <%= i %>
    <% if (i > 2) break; %>
<% } %>
```


### Comments

EJS also allows you to define comments in your views. However, unlike HTML comments, EJS comments are not included in the HTML returned by your application:

```
<%# This comment will not be present in the rendered HTML %>
```

## Including Sub-Views

EJS's `include` function allows you to include an EJS view from within another view. Include paths are relative to the current template. All variables that are available to the parent view will be made available to the included view:

```ejs
<%- include('hello') %>
```

> Use the `<%-` tag to ensure that your include is not escaped HTML

Even though the included view will inherit all data available in the parent view, you may also pass an array of extra data to the included view:

```ejs
<%- include('hello', { friend: 'Craig' }) %>
```

# Helpers

- [Introduction](#introduction)
- [Available Methods](#available-methods)


## Introduction

Laravel includes a variety of global "helper" PHP functions. Many of these functions are used by the framework itself; however, you are free to use them in your own applications if you find them convenient.


## Available Methods

<style>
    .collection-method-list > p {
        column-count: 3; -moz-column-count: 3; -webkit-column-count: 3;
        column-gap: 2em; -moz-column-gap: 2em; -webkit-column-gap: 2em;
    }

    .collection-method-list a {
        display: block;
    }
</style>

### Arrays & Objects

<div class="collection-method-list" markdown="1">

[Arr::add](#method-array-add)
[Arr::collapse](#method-array-collapse)
[Arr::divide](#method-array-divide)
[Arr::dot](#method-array-dot)
[Arr::except](#method-array-except)
[Arr::first](#method-array-first)
[Arr::flatten](#method-array-flatten)
[Arr::forget](#method-array-forget)
[Arr::get](#method-array-get)
[Arr::has](#method-array-has)
[Arr::last](#method-array-last)
[Arr::only](#method-array-only)
[Arr::pluck](#method-array-pluck)
[Arr::prepend](#method-array-prepend)
[Arr::pull](#method-array-pull)
[Arr::random](#method-array-random)
[Arr::set](#method-array-set)
[Arr::sort](#method-array-sort)
[Arr::sortRecursive](#method-array-sort-recursive)
[Arr::where](#method-array-where)
[Arr::wrap](#method-array-wrap)
[data_fill](#method-data-fill)
[data_get](#method-data-get)
[data_set](#method-data-set)
[head](#method-head)
[last](#method-last)
</div>

### Paths

<div class="collection-method-list" markdown="1">

[app_path](#method-app-path)
[base_path](#method-base-path)
[config_path](#method-config-path)
[database_path](#method-database-path)
[mix](#method-mix)
[public_path](#method-public-path)
[resource_path](#method-resource-path)
[storage_path](#method-storage-path)

</div>

### Strings

<div class="collection-method-list" markdown="1">

[\__](#method-__)
[class_basename](#method-class-basename)
[e](#method-e)
[preg_replace_array](#method-preg-replace-array)
[Str::after](#method-str-after)
[Str::before](#method-str-before)
[Str::camel](#method-camel-case)
[Str::contains](#method-str-contains)
[Str::containsAll](#method-str-contains-all)
[Str::endsWith](#method-ends-with)
[Str::finish](#method-str-finish)
[Str::is](#method-str-is)
[Str::kebab](#method-kebab-case)
[Str::limit](#method-str-limit)
[Str::orderedUuid](#method-str-ordered-uuid)
[Str::plural](#method-str-plural)
[Str::random](#method-str-random)
[Str::replaceArray](#method-str-replace-array)
[Str::replaceFirst](#method-str-replace-first)
[Str::replaceLast](#method-str-replace-last)
[Str::singular](#method-str-singular)
[Str::slug](#method-str-slug)
[Str::snake](#method-snake-case)
[Str::start](#method-str-start)
[Str::startsWith](#method-starts-with)
[Str::studly](#method-studly-case)
[Str::title](#method-title-case)
[Str::uuid](#method-str-uuid)
[trans](#method-trans)
[trans_choice](#method-trans-choice)

</div>

### URLs

<div class="collection-method-list" markdown="1">

[action](#method-action)
[asset](#method-asset)
[route](#method-route)
[secure_asset](#method-secure-asset)
[secure_url](#method-secure-url)
[url](#method-url)

</div>

### Miscellaneous

<div class="collection-method-list" markdown="1">

[abort](#method-abort)
[abort_if](#method-abort-if)
[abort_unless](#method-abort-unless)
[app](#method-app)
[auth](#method-auth)
[back](#method-back)
[bcrypt](#method-bcrypt)
[blank](#method-blank)
[broadcast](#method-broadcast)
[cache](#method-cache)
[class_uses_recursive](#method-class-uses-recursive)
[collect](#method-collect)
[config](#method-config)
[cookie](#method-cookie)
[csrf_field](#method-csrf-field)
[csrf_token](#method-csrf-token)
[dd](#method-dd)
[decrypt](#method-decrypt)
[dispatch](#method-dispatch)
[dispatch_now](#method-dispatch-now)
[dump](#method-dump)
[encrypt](#method-encrypt)
[env](#method-env)
[event](#method-event)
[factory](#method-factory)
[filled](#method-filled)
[info](#method-info)
[logger](#method-logger)
[method_field](#method-method-field)
[now](#method-now)
[old](#method-old)
[optional](#method-optional)
[policy](#method-policy)
[redirect](#method-redirect)
[report](#method-report)
[request](#method-request)
[rescue](#method-rescue)
[resolve](#method-resolve)
[response](#method-response)
[retry](#method-retry)
[session](#method-session)
[tap](#method-tap)
[throw_if](#method-throw-if)
[throw_unless](#method-throw-unless)
[today](#method-today)
[trait_uses_recursive](#method-trait-uses-recursive)
[transform](#method-transform)
[validator](#method-validator)
[value](#method-value)
[view](#method-view)
[with](#method-with)

</div>


## Method Listing

<style>
    #collection-method code {
        font-size: 14px;
    }

    #collection-method:not(.first-collection-method) {
        margin-top: 50px;
    }
</style>


## Arrays & Objects


#### `Arr::add()` {#collection-method .first-collection-method}

The `Arr::add` method adds a given key / value pair to an array if the given key doesn't already exist in the array or is set to `null`:

    use Illuminate\Support\Arr;

    $array = Arr::add(['name' => 'Desk'], 'price', 100);

    // ['name' => 'Desk', 'price' => 100]

    $array = Arr::add(['name' => 'Desk', 'price' => null], 'price', 100);

    // ['name' => 'Desk', 'price' => 100]



#### `Arr::collapse()` {#collection-method}

The `Arr::collapse` method collapses an array of arrays into a single array:

    use Illuminate\Support\Arr;

    $array = Arr::collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    // [1, 2, 3, 4, 5, 6, 7, 8, 9]


#### `Arr::divide()` {#collection-method}

The `Arr::divide` method returns two arrays, one containing the keys, and the other containing the values of the given array:

    use Illuminate\Support\Arr;

    [$keys, $values] = Arr::divide(['name' => 'Desk']);

    // $keys: ['name']

    // $values: ['Desk']


#### `Arr::dot()` {#collection-method}

The `Arr::dot` method flattens a multi-dimensional array into a single level array that uses "dot" notation to indicate depth:

    use Illuminate\Support\Arr;

    $array = ['products' => ['desk' => ['price' => 100]]];

    $flattened = Arr::dot($array);

    // ['products.desk.price' => 100]


#### `Arr::except()` {#collection-method}

The `Arr::except` method removes the given key / value pairs from an array:

    use Illuminate\Support\Arr;

    $array = ['name' => 'Desk', 'price' => 100];

    $filtered = Arr::except($array, ['price']);

    // ['name' => 'Desk']


#### `Arr::first()` {#collection-method}

The `Arr::first` method returns the first element of an array passing a given truth test:

    use Illuminate\Support\Arr;

    $array = [100, 200, 300];

    $first = Arr::first($array, function ($value, $key) {
        return $value >= 150;
    });

    // 200

A default value may also be passed as the third parameter to the method. This value will be returned if no value passes the truth test:

    use Illuminate\Support\Arr;

    $first = Arr::first($array, $callback, $default);


#### `Arr::flatten()` {#collection-method}

The `Arr::flatten` method flattens a multi-dimensional array into a single level array:

    use Illuminate\Support\Arr;

    $array = ['name' => 'Joe', 'languages' => ['PHP', 'Ruby']];

    $flattened = Arr::flatten($array);

    // ['Joe', 'PHP', 'Ruby']


#### `Arr::forget()` {#collection-method}

The `Arr::forget` method removes a given key / value pair from a deeply nested array using "dot" notation:

    use Illuminate\Support\Arr;

    $array = ['products' => ['desk' => ['price' => 100]]];

    Arr::forget($array, 'products.desk');

    // ['products' => []]


#### `Arr::get()` {#collection-method}

The `Arr::get` method retrieves a value from a deeply nested array using "dot" notation:

    use Illuminate\Support\Arr;

    $array = ['products' => ['desk' => ['price' => 100]]];

    $price = Arr::get($array, 'products.desk.price');

    // 100

The `Arr::get` method also accepts a default value, which will be returned if the specific key is not found:

    use Illuminate\Support\Arr;

    $discount = Arr::get($array, 'products.desk.discount', 0);

    // 0


#### `Arr::has()` {#collection-method}

The `Arr::has` method checks whether a given item or items exists in an array using "dot" notation:

    use Illuminate\Support\Arr;

    $array = ['product' => ['name' => 'Desk', 'price' => 100]];

    $contains = Arr::has($array, 'product.name');

    // true

    $contains = Arr::has($array, ['product.price', 'product.discount']);

    // false


#### `Arr::last()` {#collection-method}

The `Arr::last` method returns the last element of an array passing a given truth test:

    use Illuminate\Support\Arr;

    $array = [100, 200, 300, 110];

    $last = Arr::last($array, function ($value, $key) {
        return $value >= 150;
    });

    // 300

A default value may be passed as the third argument to the method. This value will be returned if no value passes the truth test:

    use Illuminate\Support\Arr;

    $last = Arr::last($array, $callback, $default);


#### `Arr::only()` {#collection-method}

The `Arr::only` method returns only the specified key / value pairs from the given array:

    use Illuminate\Support\Arr;

    $array = ['name' => 'Desk', 'price' => 100, 'orders' => 10];

    $slice = Arr::only($array, ['name', 'price']);

    // ['name' => 'Desk', 'price' => 100]


#### `Arr::pluck()` {#collection-method}

The `Arr::pluck` method retrieves all of the values for a given key from an array:

    use Illuminate\Support\Arr;

    $array = [
        ['developer' => ['id' => 1, 'name' => 'Taylor']],
        ['developer' => ['id' => 2, 'name' => 'Abigail']],
    ];

    $names = Arr::pluck($array, 'developer.name');

    // ['Taylor', 'Abigail']

You may also specify how you wish the resulting list to be keyed:

    use Illuminate\Support\Arr;

    $names = Arr::pluck($array, 'developer.name', 'developer.id');

    // [1 => 'Taylor', 2 => 'Abigail']


#### `Arr::prepend()` {#collection-method}

The `Arr::prepend` method will push an item onto the beginning of an array:

    use Illuminate\Support\Arr;

    $array = ['one', 'two', 'three', 'four'];

    $array = Arr::prepend($array, 'zero');

    // ['zero', 'one', 'two', 'three', 'four']

If needed, you may specify the key that should be used for the value:

    use Illuminate\Support\Arr;

    $array = ['price' => 100];

    $array = Arr::prepend($array, 'Desk', 'name');

    // ['name' => 'Desk', 'price' => 100]


#### `Arr::pull()` {#collection-method}

The `Arr::pull` method returns and removes a key / value pair from an array:

    use Illuminate\Support\Arr;

    $array = ['name' => 'Desk', 'price' => 100];

    $name = Arr::pull($array, 'name');

    // $name: Desk

    // $array: ['price' => 100]

A default value may be passed as the third argument to the method. This value will be returned if the key doesn't exist:

    use Illuminate\Support\Arr;

    $value = Arr::pull($array, $key, $default);


#### `Arr::random()` {#collection-method}

The `Arr::random` method returns a random value from an array:

    use Illuminate\Support\Arr;

    $array = [1, 2, 3, 4, 5];

    $random = Arr::random($array);

    // 4 - (retrieved randomly)

You may also specify the number of items to return as an optional second argument. Note that providing this argument will return an array, even if only one item is desired:

    use Illuminate\Support\Arr;

    $items = Arr::random($array, 2);

    // [2, 5] - (retrieved randomly)


#### `Arr::set()` {#collection-method}

The `Arr::set` method sets a value within a deeply nested array using "dot" notation:

    use Illuminate\Support\Arr;

    $array = ['products' => ['desk' => ['price' => 100]]];

    Arr::set($array, 'products.desk.price', 200);

    // ['products' => ['desk' => ['price' => 200]]]


#### `Arr::sort()` {#collection-method}

The `Arr::sort` method sorts an array by its values:

    use Illuminate\Support\Arr;

    $array = ['Desk', 'Table', 'Chair'];

    $sorted = Arr::sort($array);

    // ['Chair', 'Desk', 'Table']

You may also sort the array by the results of the given Closure:

    use Illuminate\Support\Arr;

    $array = [
        ['name' => 'Desk'],
        ['name' => 'Table'],
        ['name' => 'Chair'],
    ];

    $sorted = array_values(Arr::sort($array, function ($value) {
        return $value['name'];
    }));

    /*
        [
            ['name' => 'Chair'],
            ['name' => 'Desk'],
            ['name' => 'Table'],
        ]
    */


#### `Arr::sortRecursive()` {#collection-method}

The `Arr::sortRecursive` method recursively sorts an array using the `sort` function for numeric sub=arrays and `ksort` for associative sub-arrays:

    use Illuminate\Support\Arr;

    $array = [
        ['Roman', 'Taylor', 'Li'],
        ['PHP', 'Ruby', 'JavaScript'],
        ['one' => 1, 'two' => 2, 'three' => 3],
    ];

    $sorted = Arr::sortRecursive($array);

    /*
        [
            ['JavaScript', 'PHP', 'Ruby'],
            ['one' => 1, 'three' => 3, 'two' => 2],
            ['Li', 'Roman', 'Taylor'],
        ]
    */


#### `Arr::where()` {#collection-method}

The `Arr::where` method filters an array using the given Closure:

    use Illuminate\Support\Arr;

    $array = [100, '200', 300, '400', 500];

    $filtered = Arr::where($array, function ($value, $key) {
        return is_string($value);
    });

    // [1 => '200', 3 => '400']


#### `Arr::wrap()` {#collection-method}

The `Arr::wrap` method wraps the given value in an array. If the given value is already an array it will not be changed:

    use Illuminate\Support\Arr;

    $string = 'Laravel';

    $array = Arr::wrap($string);

    // ['Laravel']

If the given value is null, an empty array will be returned:

    use Illuminate\Support\Arr;

    $nothing = null;

    $array = Arr::wrap($nothing);

    // []


#### `data_fill()` {#collection-method}

The `data_fill` function sets a missing value within a nested array or object using "dot" notation:

    $data = ['products' => ['desk' => ['price' => 100]]];

    data_fill($data, 'products.desk.price', 200);

    // ['products' => ['desk' => ['price' => 100]]]

    data_fill($data, 'products.desk.discount', 10);

    // ['products' => ['desk' => ['price' => 100, 'discount' => 10]]]

This function also accepts asterisks as wildcards and will fill the target accordingly:

    $data = [
        'products' => [
            ['name' => 'Desk 1', 'price' => 100],
            ['name' => 'Desk 2'],
        ],
    ];

    data_fill($data, 'products.*.price', 200);

    /*
        [
            'products' => [
                ['name' => 'Desk 1', 'price' => 100],
                ['name' => 'Desk 2', 'price' => 200],
            ],
        ]
    */


#### `data_get()` {#collection-method}

The `data_get` function retrieves a value from a nested array or object using "dot" notation:

    $data = ['products' => ['desk' => ['price' => 100]]];

    $price = data_get($data, 'products.desk.price');

    // 100

The `data_get` function also accepts a default value, which will be returned if the specified key is not found:

    $discount = data_get($data, 'products.desk.discount', 0);

    // 0

The function also accepts wildcards using asterisks, which may target any key of the array or object:

    $data = [
        'product-one' => ['name' => 'Desk 1', 'price' => 100],
        'product-two' => ['name' => 'Desk 2', 'price' => 150],
    ];

    data_get($data, '*.name');

    // ['Desk 1', 'Desk 2'];


#### `data_set()` {#collection-method}

The `data_set` function sets a value within a nested array or object using "dot" notation:

    $data = ['products' => ['desk' => ['price' => 100]]];

    data_set($data, 'products.desk.price', 200);

    // ['products' => ['desk' => ['price' => 200]]]

This function also accepts wildcards and will set values on the target accordingly:

    $data = [
        'products' => [
            ['name' => 'Desk 1', 'price' => 100],
            ['name' => 'Desk 2', 'price' => 150],
        ],
    ];

    data_set($data, 'products.*.price', 200);

    /*
        [
            'products' => [
                ['name' => 'Desk 1', 'price' => 200],
                ['name' => 'Desk 2', 'price' => 200],
            ],
        ]
    */

By default, any existing values are overwritten. If you wish to only set a value if it doesn't exist, you may pass `false` as the fourth argument:

    $data = ['products' => ['desk' => ['price' => 100]]];

    data_set($data, 'products.desk.price', 200, false);

    // ['products' => ['desk' => ['price' => 100]]]


#### `head()` {#collection-method}

The `head` function returns the first element in the given array:

    $array = [100, 200, 300];

    $first = head($array);

    // 100


#### `last()` {#collection-method}

The `last` function returns the last element in the given array:

    $array = [100, 200, 300];

    $last = last($array);

    // 300


## Paths


#### `app_path()` {#collection-method}

The `app_path` function returns the fully qualified path to the `app` directory. You may also use the `app_path` function to generate a fully qualified path to a file relative to the application directory:

    $path = app_path();

    $path = app_path('Http/Controllers/Controller.php');


#### `base_path()` {#collection-method}

The `base_path` function returns the fully qualified path to the project root. You may also use the `base_path` function to generate a fully qualified path to a given file relative to the project root directory:

    $path = base_path();

    $path = base_path('vendor/bin');


#### `config_path()` {#collection-method}

The `config_path` function returns the fully qualified path to the `config` directory. You may also use the `config_path` function to generate a fully qualified path to a given file within the application's configuration directory:

    $path = config_path();

    $path = config_path('app.php');


#### `database_path()` {#collection-method}

The `database_path` function returns the fully qualified path to the `database` directory. You may also use the `database_path` function to generate a fully qualified path to a given file within the database directory:

    $path = database_path();

    $path = database_path('factories/UserFactory.php');


#### `mix()` {#collection-method}

The `mix` function returns the path to a [versioned Mix file](/mix):

    $path = mix('css/app.css');


#### `public_path()` {#collection-method}

The `public_path` function returns the fully qualified path to the `public` directory. You may also use the `public_path` function to generate a fully qualified path to a given file within the public directory:

    $path = public_path();

    $path = public_path('css/app.css');


#### `resource_path()` {#collection-method}

The `resource_path` function returns the fully qualified path to the `resources` directory. You may also use the `resource_path` function to generate a fully qualified path to a given file within the resources directory:

    $path = resource_path();

    $path = resource_path('sass/app.scss');


#### `storage_path()` {#collection-method}

The `storage_path` function returns the fully qualified path to the `storage` directory. You may also use the `storage_path` function to generate a fully qualified path to a given file within the storage directory:

    $path = storage_path();

    $path = storage_path('app/file.txt');


## Strings


#### `__()` {#collection-method}

The `__` function translates the given translation string or translation key using your [localization files](/localization):

    echo __('Welcome to our application');

    echo __('messages.welcome');

If the specified translation string or key does not exist, the `__` function will return the given value. So, using the example above, the `__` function would return `messages.welcome` if that translation key does not exist.


#### `class_basename()` {#collection-method}

The `class_basename` function returns the class name of the given class with the class' namespace removed:

    $class = class_basename('Foo\Bar\Baz');

    // Baz


#### `e()` {#collection-method}

The `e` function runs PHP's `htmlspecialchars` function with the `double_encode` option set to `true` by default:

    echo e('<html>foo</html>');

    // &lt;html&gt;foo&lt;/html&gt;


#### `preg_replace_array()` {#collection-method}

The `preg_replace_array` function replaces a given pattern in the string sequentially using an array:

    $string = 'The event will take place between :start and :end';

    $replaced = preg_replace_array('/:[a-z_]+/', ['8:30', '9:00'], $string);

    // The event will take place between 8:30 and 9:00


#### `Str::after()` {#collection-method}

The `Str::after` method returns everything after the given value in a string:

    use Illuminate\Support\Str;

    $slice = Str::after('This is my name', 'This is');

    // ' my name'


#### `Str::before()` {#collection-method}

The `Str::before` method returns everything before the given value in a string:

    use Illuminate\Support\Str;

    $slice = Str::before('This is my name', 'my name');

    // 'This is '


#### `Str::camel()` {#collection-method}

The `Str::camel` method converts the given string to `camelCase`:

    use Illuminate\Support\Str;

    $converted = Str::camel('foo_bar');

    // fooBar


#### `Str::contains()` {#collection-method}

The `Str::contains` method determines if the given string contains the given value (case sensitive):

    use Illuminate\Support\Str;

    $contains = Str::contains('This is my name', 'my');

    // true

You may also pass an array of values to determine if the given string contains any of the values:

    use Illuminate\Support\Str;

    $contains = Str::contains('This is my name', ['my', 'foo']);

    // true


#### `Str::containsAll()` {#collection-method}

The `Str::containsAll` method determines if the given string contains all array values:

    use Illuminate\Support\Str;

    $containsAll = Str::containsAll('This is my name', ['my', 'name']);

    // true


#### `Str::endsWith()` {#collection-method}

The `Str::endsWith` method determines if the given string ends with the given value:

    use Illuminate\Support\Str;

    $result = Str::endsWith('This is my name', 'name');

    // true


#### `Str::finish()` {#collection-method}

The `Str::finish` method adds a single instance of the given value to a string if it does not already end with the value:

    use Illuminate\Support\Str;

    $adjusted = Str::finish('this/string', '/');

    // this/string/

    $adjusted = Str::finish('this/string/', '/');

    // this/string/


#### `Str::is()` {#collection-method}

The `Str::is` method determines if a given string matches a given pattern. Asterisks may be used to indicate wildcards:

    use Illuminate\Support\Str;

    $matches = Str::is('foo*', 'foobar');

    // true

    $matches = Str::is('baz*', 'foobar');

    // false


#### `Str::kebab()` {#collection-method}

The `Str::kebab` method converts the given string to `kebab-case`:

    use Illuminate\Support\Str;

    $converted = Str::kebab('fooBar');

    // foo-bar


#### `Str::limit()` {#collection-method}

The `Str::limit` method truncates the given string at the specified length:

    use Illuminate\Support\Str;

    $truncated = Str::limit('The quick brown fox jumps over the lazy dog', 20);

    // The quick brown fox...

You may also pass a third argument to change the string that will be appended to the end:

    use Illuminate\Support\Str;

    $truncated = Str::limit('The quick brown fox jumps over the lazy dog', 20, ' (...)');

    // The quick brown fox (...)


#### `Str::orderedUuid()` {#collection-method}

The `Str::orderedUuid` method generates a "timestamp first" UUID that may be efficiently stored in an indexed database column:

    use Illuminate\Support\Str;

    return (string) Str::orderedUuid();


#### `Str::plural()` {#collection-method}

The `Str::plural` method converts a string to its plural form. This function currently only supports the English language:

    use Illuminate\Support\Str;

    $plural = Str::plural('car');

    // cars

    $plural = Str::plural('child');

    // children

You may provide an integer as a second argument to the function to retrieve the singular or plural form of the string:

    use Illuminate\Support\Str;

    $plural = Str::plural('child', 2);

    // children

    $plural = Str::plural('child', 1);

    // child


#### `Str::random()` {#collection-method}

The `Str::random` method generates a random string of the specified length. This function uses PHP's `random_bytes` function:

    use Illuminate\Support\Str;

    $random = Str::random(40);


#### `Str::replaceArray()` {#collection-method}

The `Str::replaceArray` method replaces a given value in the string sequentially using an array:

    use Illuminate\Support\Str;

    $string = 'The event will take place between ? and ?';

    $replaced = Str::replaceArray('?', ['8:30', '9:00'], $string);

    // The event will take place between 8:30 and 9:00


#### `Str::replaceFirst()` {#collection-method}

The `Str::replaceFirst` method replaces the first occurrence of a given value in a string:

    use Illuminate\Support\Str;

    $replaced = Str::replaceFirst('the', 'a', 'the quick brown fox jumps over the lazy dog');

    // a quick brown fox jumps over the lazy dog


#### `Str::replaceLast()` {#collection-method}

The `Str::replaceLast` method replaces the last occurrence of a given value in a string:

    use Illuminate\Support\Str;

    $replaced = Str::replaceLast('the', 'a', 'the quick brown fox jumps over the lazy dog');

    // the quick brown fox jumps over a lazy dog


#### `Str::singular()` {#collection-method}

The `Str::singular` method converts a string to its singular form. This function currently only supports the English language:

    use Illuminate\Support\Str;

    $singular = Str::singular('cars');

    // car

    $singular = Str::singular('children');

    // child


#### `Str::slug()` {#collection-method}

The `Str::slug` method generates a URL friendly "slug" from the given string:

    use Illuminate\Support\Str;

    $slug = Str::slug('Laravel 5 Framework', '-');

    // laravel-5-framework


#### `Str::snake()` {#collection-method}

The `Str::snake` method converts the given string to `snake_case`:

    use Illuminate\Support\Str;

    $converted = Str::snake('fooBar');

    // foo_bar


#### `Str::start()` {#collection-method}

The `Str::start` method adds a single instance of the given value to a string if it does not already start with the value:

    use Illuminate\Support\Str;

    $adjusted = Str::start('this/string', '/');

    // /this/string

    $adjusted = Str::start('/this/string', '/');

    // /this/string


#### `Str::startsWith()` {#collection-method}

The `Str::startsWith` method determines if the given string begins with the given value:

    use Illuminate\Support\Str;

    $result = Str::startsWith('This is my name', 'This');

    // true


#### `Str::studly()` {#collection-method}

The `Str::studly` method converts the given string to `StudlyCase`:

    use Illuminate\Support\Str;

    $converted = Str::studly('foo_bar');

    // FooBar


#### `Str::title()` {#collection-method}

The `Str::title` method converts the given string to `Title Case`:

    use Illuminate\Support\Str;

    $converted = Str::title('a nice title uses the correct case');

    // A Nice Title Uses The Correct Case


#### `Str::uuid()` {#collection-method}

The `Str::uuid` method generates a UUID (version 4):

    use Illuminate\Support\Str;

    return (string) Str::uuid();


#### `trans()` {#collection-method}

The `trans` function translates the given translation key using your [localization files](/localization):

    echo trans('messages.welcome');

If the specified translation key does not exist, the `trans` function will return the given key. So, using the example above, the `trans` function would return `messages.welcome` if the translation key does not exist.


#### `trans_choice()` {#collection-method}

The `trans_choice` function translates the given translation key with inflection:

    echo trans_choice('messages.notifications', $unreadCount);

If the specified translation key does not exist, the `trans_choice` function will return the given key. So, using the example above, the `trans_choice` function would return `messages.notifications` if the translation key does not exist.


## URLs


#### `action()` {#collection-method}

The `action` function generates a URL for the given controller action. You do not need to pass the full namespace of the controller. Instead, pass the controller class name relative to the `App\Http\Controllers` namespace:

    $url = action('HomeController@index');

    $url = action([HomeController::class, 'index']);

If the method accepts route parameters, you may pass them as the second argument to the method:

    $url = action('UserController@profile', ['id' => 1]);


#### `asset()` {#collection-method}

The `asset` function generates a URL for an asset using the current scheme of the request (HTTP or HTTPS):

    $url = asset('img/photo.jpg');

You can configure the asset URL host by setting the `ASSET_URL` variable in your `.env` file. This can be useful if you host your assets on an external service like Amazon S3:

    // ASSET_URL=http://example.com/assets

    $url = asset('img/photo.jpg'); // http://example.com/assets/img/photo.jpg


#### `route()` {#collection-method}

The `route` function generates a URL for the given named route:

    $url = route('routeName');

If the route accepts parameters, you may pass them as the second argument to the method:

    $url = route('routeName', ['id' => 1]);

By default, the `route` function generates an absolute URL. If you wish to generate a relative URL, you may pass `false` as the third argument:

    $url = route('routeName', ['id' => 1], false);


#### `secure_asset()` {#collection-method}

The `secure_asset` function generates a URL for an asset using HTTPS:

    $url = secure_asset('img/photo.jpg');


#### `secure_url()` {#collection-method}

The `secure_url` function generates a fully qualified HTTPS URL to the given path:

    $url = secure_url('user/profile');

    $url = secure_url('user/profile', [1]);


#### `url()` {#collection-method}

The `url` function generates a fully qualified URL to the given path:

    $url = url('user/profile');

    $url = url('user/profile', [1]);

If no path is provided, a `Illuminate\Routing\UrlGenerator` instance is returned:

    $current = url()->current();

    $full = url()->full();

    $previous = url()->previous();


## Miscellaneous


#### `abort()` {#collection-method}

The `abort` function throws [an HTTP exception](/errors#http-exceptions) which will be rendered by the [exception handler](/errors#the-exception-handler):

    abort(403);

You may also provide the exception's response text and custom response headers:

    abort(403, 'Unauthorized.', $headers);


#### `abort_if()` {#collection-method}

The `abort_if` function throws an HTTP exception if a given boolean expression evaluates to `true`:

    abort_if(! Auth::user()->isAdmin(), 403);

Like the `abort` method, you may also provide the exception's response text as the third argument and an array of custom response headers as the fourth argument.


#### `abort_unless()` {#collection-method}

The `abort_unless` function throws an HTTP exception if a given boolean expression evaluates to `false`:

    abort_unless(Auth::user()->isAdmin(), 403);

Like the `abort` method, you may also provide the exception's response text as the third argument and an array of custom response headers as the fourth argument.


#### `app()` {#collection-method}

The `app` function returns the [service container](/container) instance:

    $container = app();

You may pass a class or interface name to resolve it from the container:

    $api = app('HelpSpot\API');


#### `auth()` {#collection-method}

The `auth` function returns an [authenticator](/authentication) instance. You may use it instead of the `Auth` facade for convenience:

    $user = auth()->user();

If needed, you may specify which guard instance you would like to access:

    $user = auth('admin')->user();


#### `back()` {#collection-method}

The `back` function generates a [redirect HTTP response](/responses#redirects) to the user's previous location:

    return back($status = 302, $headers = [], $fallback = false);

    return back();


#### `bcrypt()` {#collection-method}

The `bcrypt` function [hashes](/hashing) the given value using Bcrypt. You may use it as an alternative to the `Hash` facade:

    $password = bcrypt('my-secret-password');


#### `blank()` {#collection-method}

The `blank` function returns whether the given value is "blank":

    blank('');
    blank('   ');
    blank(null);
    blank(collect());

    // true

    blank(0);
    blank(true);
    blank(false);

    // false

For the inverse of `blank`, see the [`filled`](#method-filled) method.


#### `broadcast()` {#collection-method}

The `broadcast` function [broadcasts](/broadcasting) the given [event](/events) to its listeners:

    broadcast(new UserRegistered($user));


#### `cache()` {#collection-method}

The `cache` function may be used to get values from the [cache](/cache). If the given key does not exist in the cache, an optional default value will be returned:

    $value = cache('key');

    $value = cache('key', 'default');

You may add items to the cache by passing an array of key / value pairs to the function. You should also pass the number of seconds or duration the cached value should be considered valid:

    cache(['key' => 'value'], 300);

    cache(['key' => 'value'], now()->addSeconds(10));


#### `class_uses_recursive()` {#collection-method}

The `class_uses_recursive` function returns all traits used by a class, including traits used by all of its parent classes:

    $traits = class_uses_recursive(App\User::class);


#### `collect()` {#collection-method}

The `collect` function creates a [collection](/collections) instance from the given value:

    $collection = collect(['taylor', 'abigail']);


#### `config()` {#collection-method}

The `config` function gets the value of a [configuration](/configuration) variable. The configuration values may be accessed using "dot" syntax, which includes the name of the file and the option you wish to access. A default value may be specified and is returned if the configuration option does not exist:

    $value = config('app.timezone');

    $value = config('app.timezone', $default);

You may set configuration variables at runtime by passing an array of key / value pairs:

    config(['app.debug' => true]);


#### `cookie()` {#collection-method}

The `cookie` function creates a new [cookie](/requests#cookies) instance:

    $cookie = cookie('name', 'value', $minutes);


#### `csrf_field()` {#collection-method}

The `csrf_field` function generates an HTML `hidden` input field containing the value of the CSRF token. For example, using [Blade syntax](/blade):

    {{ csrf_field() }}


#### `csrf_token()` {#collection-method}

The `csrf_token` function retrieves the value of the current CSRF token:

    $token = csrf_token();


#### `dd()` {#collection-method}

The `dd` function dumps the given variables and ends execution of the script:

    dd($value);

    dd($value1, $value2, $value3, ...);

If you do not want to halt the execution of your script, use the [`dump`](#method-dump) function instead.


#### `decrypt()` {#collection-method}

The `decrypt` function decrypts the given value using Laravel's [encrypter](/encryption):

    $decrypted = decrypt($encrypted_value);


#### `dispatch()` {#collection-method}

The `dispatch` function pushes the given [job](/queues#creating-jobs) onto the Laravel [job queue](/queues):

    dispatch(new App\Jobs\SendEmails);


#### `dispatch_now()` {#collection-method}

The `dispatch_now` function runs the given [job](/queues#creating-jobs) immediately and returns the value from its `handle` method:

    $result = dispatch_now(new App\Jobs\SendEmails);


#### `dump()` {#collection-method}

The `dump` function dumps the given variables:

    dump($value);

    dump($value1, $value2, $value3, ...);

If you want to stop executing the script after dumping the variables, use the [`dd`](#method-dd) function instead.

> {tip} You may use Artisan's `dump-server` command to intercept all `dump` calls and display them in your console window instead of your browser.


#### `encrypt()` {#collection-method}

The `encrypt` function encrypts the given value using Laravel's [encrypter](/encryption):

    $encrypted = encrypt($unencrypted_value);


#### `env()` {#collection-method}

The `env` function retrieves the value of an [environment variable](/configuration#environment-configuration) or returns a default value:

    $env = env('APP_ENV');

    // Returns 'production' if APP_ENV is not set...
    $env = env('APP_ENV', 'production');

> {note} If you execute the `config:cache` command during your deployment process, you should be sure that you are only calling the `env` function from within your configuration files. Once the configuration has been cached, the `.env` file will not be loaded and all calls to the `env` function will return `null`.


#### `event()` {#collection-method}

The `event` function dispatches the given [event](/events) to its listeners:

    event(new UserRegistered($user));


#### `factory()` {#collection-method}

The `factory` function creates a model factory builder for a given class, name, and amount. It can be used while [testing](/database-testing#writing-factories) or [seeding](/seeding#using-model-factories):

    $user = factory(App\User::class)->make();


#### `filled()` {#collection-method}

The `filled` function returns whether the given value is not "blank":

    filled(0);
    filled(true);
    filled(false);

    // true

    filled('');
    filled('   ');
    filled(null);
    filled(collect());

    // false

For the inverse of `filled`, see the [`blank`](#method-blank) method.


#### `info()` {#collection-method}

The `info` function will write information to the [log](/logging):

    info('Some helpful information!');

An array of contextual data may also be passed to the function:

    info('User login attempt failed.', ['id' => $user->id]);


#### `logger()` {#collection-method}

The `logger` function can be used to write a `debug` level message to the [log](/logging):

    logger('Debug message');

An array of contextual data may also be passed to the function:

    logger('User has logged in.', ['id' => $user->id]);

A [logger](/errors#logging) instance will be returned if no value is passed to the function:

    logger()->error('You are not allowed here.');


#### `method_field()` {#collection-method}

The `method_field` function generates an HTML `hidden` input field containing the spoofed value of the form's HTTP verb. For example, using [Blade syntax](/blade):

    <form method="POST">
        {{ method_field('DELETE') }}
    </form>


#### `now()` {#collection-method}

The `now` function creates a new `Illuminate\Support\Carbon` instance for the current time:

    $now = now();


#### `old()` {#collection-method}

The `old` function [retrieves](/requests#retrieving-input) an [old input](/requests#old-input) value flashed into the session:

    $value = old('value');

    $value = old('value', 'default');


#### `optional()` {#collection-method}

The `optional` function accepts any argument and allows you to access properties or call methods on that object. If the given object is `null`, properties and methods will return `null` instead of causing an error:

    return optional($user->address)->street;

    {!! old('name', optional($user)->name) !!}

The `optional` function also accepts a Closure as its second argument. The Closure will be invoked if the value provided as the first argument is not null:

    return optional(User::find($id), function ($user) {
        return new DummyUser;
    });


#### `policy()` {#collection-method}

The `policy` method retrieves a [policy](/authorization#creating-policies) instance for a given class:

    $policy = policy(App\User::class);


#### `redirect()` {#collection-method}

The `redirect` function returns a [redirect HTTP response](/responses#redirects), or returns the redirector instance if called with no arguments:

    return redirect($to = null, $status = 302, $headers = [], $secure = null);

    return redirect('/home');

    return redirect()->route('route.name');


#### `report()` {#collection-method}

The `report` function will report an exception using your [exception handler](/errors#the-exception-handler)'s `report` method:

    report($e);


#### `request()` {#collection-method}

The `request` function returns the current [request](/requests) instance or obtains an input item:

    $request = request();

    $value = request('key', $default);


#### `rescue()` {#collection-method}

The `rescue` function executes the given Closure and catches any exceptions that occur during its execution. All exceptions that are caught will be sent to your [exception handler](/errors#the-exception-handler)'s `report` method; however, the request will continue processing:

    return rescue(function () {
        return $this->method();
    });

You may also pass a second argument to the `rescue` function. This argument will be the "default" value that should be returned if an exception occurs while executing the Closure:

    return rescue(function () {
        return $this->method();
    }, false);

    return rescue(function () {
        return $this->method();
    }, function () {
        return $this->failure();
    });


#### `resolve()` {#collection-method}

The `resolve` function resolves a given class or interface name to its instance using the [service container](/container):

    $api = resolve('HelpSpot\API');


#### `response()` {#collection-method}

The `response` function creates a [response](/responses) instance or obtains an instance of the response factory:

    return response('Hello World', 200, $headers);

    return response()->json(['foo' => 'bar'], 200, $headers);


#### `retry()` {#collection-method}

The `retry` function attempts to execute the given callback until the given maximum attempt threshold is met. If the callback does not throw an exception, its return value will be returned. If the callback throws an exception, it will automatically be retried. If the maximum attempt count is exceeded, the exception will be thrown:

    return retry(5, function () {
        // Attempt 5 times while resting 100ms in between attempts...
    }, 100);


#### `session()` {#collection-method}

The `session` function may be used to get or set [session](/session) values:

    $value = session('key');

You may set values by passing an array of key / value pairs to the function:

    session(['chairs' => 7, 'instruments' => 3]);

The session store will be returned if no value is passed to the function:

    $value = session()->get('key');

    session()->put('key', $value);


#### `tap()` {#collection-method}

The `tap` function accepts two arguments: an arbitrary `$value` and a Closure. The `$value` will be passed to the Closure and then be returned by the `tap` function. The return value of the Closure is irrelevant:

    $user = tap(User::first(), function ($user) {
        $user->name = 'taylor';

        $user->save();
    });

If no Closure is passed to the `tap` function, you may call any method on the given `$value`. The return value of the method you call will always be `$value`, regardless of what the method actually returns in its definition. For example, the Eloquent `update` method typically returns an integer. However, we can force the method to return the model itself by chaining the `update` method call through the `tap` function:

    $user = tap($user)->update([
        'name' => $name,
        'email' => $email,
    ]);


#### `throw_if()` {#collection-method}

The `throw_if` function throws the given exception if a given boolean expression evaluates to `true`:

    throw_if(! Auth::user()->isAdmin(), AuthorizationException::class);

    throw_if(
        ! Auth::user()->isAdmin(),
        AuthorizationException::class,
        'You are not allowed to access this page'
    );


#### `throw_unless()` {#collection-method}

The `throw_unless` function throws the given exception if a given boolean expression evaluates to `false`:

    throw_unless(Auth::user()->isAdmin(), AuthorizationException::class);

    throw_unless(
        Auth::user()->isAdmin(),
        AuthorizationException::class,
        'You are not allowed to access this page'
    );


#### `today()` {#collection-method}

The `today` function creates a new `Illuminate\Support\Carbon` instance for the current date:

    $today = today();


#### `trait_uses_recursive()` {#collection-method}

The `trait_uses_recursive` function returns all traits used by a trait:

    $traits = trait_uses_recursive(\Illuminate\Notifications\Notifiable::class);


#### `transform()` {#collection-method}

The `transform` function executes a `Closure` on a given value if the value is not [blank](#method-blank) and returns the result of the `Closure`:

    $callback = function ($value) {
        return $value * 2;
    };

    $result = transform(5, $callback);

    // 10

A default value or `Closure` may also be passed as the third parameter to the method. This value will be returned if the given value is blank:

    $result = transform(null, $callback, 'The value is blank');

    // The value is blank


#### `validator()` {#collection-method}

The `validator` function creates a new [validator](/validation) instance with the given arguments. You may use it instead of the `Validator` facade for convenience:

    $validator = validator($data, $rules, $messages);


#### `value()` {#collection-method}

The `value` function returns the value it is given. However, if you pass a `Closure` to the function, the `Closure` will be executed then its result will be returned:

    $result = value(true);

    // true

    $result = value(function () {
        return false;
    });

    // false


#### `view()` {#collection-method}

The `view` function retrieves a [view](/views) instance:

    return view('auth.login');


#### `with()` {#collection-method}

The `with` function returns the value it is given. If a `Closure` is passed as the second argument to the function, the `Closure` will be executed and its result will be returned:

    $callback = function ($value) {
        return (is_numeric($value)) ? $value * 2 : 0;
    };

    $result = with(5, $callback);

    // 10

    $result = with(null, $callback);

    // 0

    $result = with(5, null);

    // 5

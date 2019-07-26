# Localization

## Introduction

Looped's localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application. Language strings are stored in files within the `resources/lang` directory. Within this directory there should be a subdirectory for each language supported by the application:

    /resources
        /lang
            en.json
            au.json

All language files return an object of keyed strings. For example:

```typescript
export default {
    hello: 'Gday mate',
}
```


### Configuring The Locale

The default language for your application is stored in the `config/index.ts` configuration file. You may modify this value to suit the needs of your application. You may also change the active language at runtime using the `setLocale` method:

```typescript
    import { setLocale } from 'i18n'
    
    setLocale('au')
```

You may configure a "fallback language", which will be used when the active language does not contain a given translation file. Like the default language, the fallback language is also configured in the `config/index.ts` configuration file:

#### Determining The Current Locale

You may use the `getLocale` method to determine the current locale:

```typescript
import { getLocale } from 'i18n'

async home(@Req() req: Request) {
    return { locale: getLocale(req) }
}
```


## Defining Translation Strings


### Using Short Keys

Typically, translation strings are stored in files within the `resources/lang` directory. 

All language files return an object of keyed strings. For example:

```typescript
{
    "hello": "G'day"
}
```


### Using Translation Strings As Keys

For applications with heavy translation requirements, defining every string with a "short key" can become quickly confusing when referencing them in your views. For this reason, Laravel also provides support for defining translation strings using the "default" translation of the string as the key.

## Retrieving Translation Strings

You may retrieve lines from language files using the `__` helper function. The `__` method accepts the key of the translation string as its first argument. For example, let's retrieve the `hello` translation string from the `resources/lang/au.json` language file:

```typescript
const msg = __('hello');
```

If the specified translation string does not exist, the `__` function will return the translation string key. So, using the example above, the `__` function would return `hello` if the translation string does not exist.

### Replacing Parameters In Translation Strings

If you wish, you may define placeholders in your translation strings. All placeholders are surrounded with a `{{ }}`. For example, you may define a welcome message with a placeholder name:

    'welcome' => 'Welcome, {{name}}',

To replace the placeholders when retrieving a translation string, pass an array of replacements as the second argument to the `__` function:

    __('welcome', { name: 'dayle' })

### Pluralization

Pluralization is a complex problem, as different languages have a variety of complex rules for pluralization. By using an object character, you may distinguish singular and plural forms of a string:

```json
{
  "%s dog": {
    "one": "%s dog",
    "other": "%s dog"
  }
}
```

You may even create more complex pluralization rules which specify translation strings for multiple number ranges:

```typescript
{
  "%s cat": {
    "one": "%d кошка",
    "few": "%d кошки",
    "many": "%d кошек",
    "other": "%d кошка",
  }
}
```

After defining a translation string that has pluralization options, you may use the `__n` function to retrieve the line for a given "count". In this example, since the count is greater than one, the plural form of the translation string is returned:

```typescript
__n('%s dog', 1);
```

You may also define placeholder attributes in pluralization strings. These placeholders may be replaced by passing an array as the third argument to the `trans_choice` function:

    {
    	"You have %s cat": {
    		"one": "You have %s cat",
    		"other": "You have %s cats named {{name}}"
    	}
    }
    
    __n(You have %s cat', 1, { name: 'Kitty' });

If you would like to display the integer value that was passed to the `__n` function, you may use the `%s` placeholder.
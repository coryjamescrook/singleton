# singleton
A simple design pattern for a singleton class in javascript.

#### To use
Simply install:
```javascript
npm install @coryjamescrook/singleton
```


Import into your project:
```javascript
import { Singleton } from '@coryjamescrook/singleton'
```
or
```javascript
const Singleton = require('@coryjamescrook/singleton')
```

Extend your singleton class from it:
```javascript
class SomeService extends Singleton {
  // whatever content your class needs
}
```

Get the singleton instance of your class:
```javascript
const service = SomeService.instance()
```

Voila!
# singleton
A simple design pattern for a singleton class in javascript.

#### To use
Simply install:
`npm install @coryjamescrook/singleton`

Import into your project:
`import { Singleton } from @coryjamescrook/singleton`

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
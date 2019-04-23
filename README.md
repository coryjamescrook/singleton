# singleton
A simple design pattern for a singleton class in javascript.

#### To use
Simply install:
```javascript
npm install @coryjamescrook/singleton
```


Import into your project:
```javascript
import Singleton from '@coryjamescrook/singleton'
```
or
```javascript
const Singleton = require('@coryjamescrook/singleton')
```

Extend your singleton class from it:
```javascript
class Test extends Singleton {
  constructor() {
    super()
    this.name = "TEST"
  }

  sayMyName() {
    console.log(`Hi! My name is ${this.name}`)
  }
}
```

Get the singleton instance of your class:
```javascript
const t = new Test
// only one instance of the object will ever be created
```

Try it out:
```javascript
console.log(t.sayMyName())
```

Voila!
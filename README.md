![](./logo.png)


# preloader-assets
load web assets, like js, css, image, and return a promise

> notice: assets-preloader only support image assets now, other assets will be as features in next version
## example

![](./example.gif)

see [Example](./example/README.md)

## How to use

```bash
npm i assets-preloader -S
```

```js
import Preloader from 'assets-preloader'

const imgs = [
  // your imgs
  // like 'http://assets-preload.io/logo.png'
]

const loader = new Preloader(imgs)

loader.listen('progress', (val) => {
  // your code when progress events emited
  // like: console.log(val)
})

// start load
loader.load().then(() => {
  // your code when all assets loaded
  // like console.log('success')
})
```

## Api

`Preloader` is a class, so you need init an instance

```js
const loader = new Preloader(assets)
```
### `.load`

start to load assets, it returns a `promise`

```js
loader.load().then(() => {
  // your code
})
```

### `.listen`

listen `progress` or `error` events

```js
loader.listen('progress', (val) => {
  console.log(`Loading progress is ${val}`)
})
```

## Events

### progress

Emited when asset loading completed, it's parameter is a progress number


### error

Emited when asset loading error, it's parameter is an `Error`



## How to build

```js
npm run build
```

## How to release

`assets-preloader` is using `standard-version`

```bash
# release as a major version
npm run release:major

#release as a major version
npm run release:minor

#release as a patch version
npm run release:patch

```
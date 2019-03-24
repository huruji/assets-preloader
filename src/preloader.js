export default class Loader {
  constructor(assets) {
    this.assets = Array.isArray(assets) ? assets : [assets]
    this.loadedNum = 0
    this.events = {
      progress: [],
      error: []
    }
  }

  load() {
    const self = this
    const assets = self.assets
    if (!assets.length) return Promise.resolve()

    const promiseLists = assets.map(asset => new Promise((resolve, reject) => {
      const img = new Image()
      img.src = asset
      img.addEventListener('load', (e) => {
        self.loadedNum++
        const progress = self.loadedNum / assets.length * 100
        self.emit('progress', progress)
        if (self.onprogress && typeof self.onprogress === 'function') {
          self.onprogress.call(this, progress)
        }
        resolve(img)
      })
      img.addEventListener('error', (e) => {
        self.loadedNum++
        const progress = self.loadedNum / assets.length * 100
        self.emit('error', e)
        if (self.onerror && typeof self.onerror === 'function') {
          self.onerror.call(this, e)
        }
        self.emit('progress', progress)
        if (self.onprogress && typeof self.onprogress === 'function') {
          self.onprogress.call(this, progress)
        }
        resolve(img)
      })
    }))

    return Promise.all(promiseLists)
  }

  listen(name, cb) {
    if (!Object.keys(this.events).includes(name)) return
    this.events[name].push(cb)
  }

  emit(name, ...args) {
    if (!Object.keys(this.events).includes(name)) return
    for (let i = 0; i < this.events[name].length; i++) {
      this.events[name][i].apply(this, args)
    }
  }
}

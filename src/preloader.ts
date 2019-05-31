export interface EType {
	progress: Function[]
	error: Function[]
}

export type Events = 'error' | 'progress'

const EVENT_PROGRESS: string = 'progress'
const EVENT_ERROR: string = 'error'
const EVENT_LOAD: string = 'load'

const FUNCTION_TYPE = 'function'

export default class Loader {
	/*
  * assets needed to preload
  */
	private assets: Array<string>
	private loadedNum: number
	private events: EType
	onerror: Function
	onprogress: Function

	constructor(
		/**
     * assets needed to preload
     */
		assets: string | string[]
	) {
		this.assets = Array.isArray(assets) ? assets : [assets]
		this.loadedNum = 0
		this.events = {
			progress: [],
			error: []
		}
	}

	/**
   * start loading
   */
	load(): Promise<HTMLImageElement[] | void> {
		const self = this
		const assets = self.assets
		if (!assets.length) return Promise.resolve()

		const promiseLists = assets.map(
			(asset: string): Promise<HTMLImageElement> =>
				new Promise(resolve => {
					const img = new Image()
					img.src = asset
					img.addEventListener(EVENT_LOAD, () => {
						self.loadedNum++
						const progress = self.loadedNum / assets.length * 100
						self.emit(EVENT_PROGRESS, progress)
						if (self.onprogress && typeof self.onprogress === FUNCTION_TYPE) {
							self.onprogress.call(this, progress)
						}
						resolve(img)
					})
					img.addEventListener(EVENT_ERROR, e => {
						self.loadedNum++
						const progress = self.loadedNum / assets.length * 100
						self.emit(EVENT_ERROR, e)
						if (self.onerror && typeof self.onerror === FUNCTION_TYPE) {
							self.onerror.call(this, e)
						}
						self.emit(EVENT_PROGRESS, progress)
						if (self.onprogress && typeof self.onprogress === FUNCTION_TYPE) {
							self.onprogress.call(this, progress)
						}
						resolve(img)
					})
				})
		)

		return Promise.all(promiseLists)
	}

	/**
   * listen events
   * progress or error
   */
	listen(name: Events, cb: Function): void {
		if (!Object.keys(this.events).includes(name)) return
		this.events[name].push(cb)
	}

	/**
   * emit events
   */

	private emit(name: string, ...args: any[]): void {
		if (!Object.keys(this.events).includes(name)) return
		for (let i = 0; i < this.events[name].length; i++) {
			this.events[name][i].apply(this, args)
		}
	}

	/**
   * add assets
   */

	add(asset: string) {
		this.assets.push(asset)
	}

	addEventListener = this.listen
}

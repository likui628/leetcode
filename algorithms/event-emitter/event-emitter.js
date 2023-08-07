class EventEmitter {

    constructor() {
        this.map = new Map()
    }

    subscribe(event, cb) {
        let cbList = []
        if (this.map.has(event)) {
            cbList = this.map.get(event)
        }
        this.map.set(event, [...cbList, cb])
        return {
            unsubscribe: () => {
                const cbList = this.map.get(event)
                this.map.set(event, cbList.filter(item => item !== cb))
            }
        };
    }

    emit(event, args = []) {
        if (this.map.has(event)) {
            return this.map.get(event).map(cb => cb(...args))
        }
        return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
import { Inject, Service } from 'typedi'
const debug = require('debug')

export function getOrElse<T>(cache: any, key: string, fn: () => T ): T {
    return cache.getOrElse(key, fn)
}

export function filter<T>(arr: (T | undefined | null)[]) {
    return arr.filter(n => n) as T[]
}

const dump = (function (){
    try {
        const dumper = require('dumper.js');
        return dumper.dump
    }
    catch (err) {
        return () => {}
    }
})()
export { dump }

export const log = debug('app')

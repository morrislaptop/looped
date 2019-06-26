import {createParamDecorator} from "routing-controllers";
import { isString, isArray, isObject, map, mapValues } from 'lodash';

function cleanObject(obj: any): any {
    const fn: any = isArray(obj) ? map : mapValues

    return fn(obj, cleanValue)
}

function cleanValue(value: any, key: any): any {
    if (isObject(value)) return cleanObject(value)

    return slim(value, key)
}

function slim(value: any, key: string) {
    const trimmed = isString(value) ? value.trim() : value
    const nulled = trimmed === '' ? null : trimmed

    return nulled
}

export function SlimBody() {
    return createParamDecorator({
        value: action => {
            const slimmed = cleanObject(action.request.body)

            return slimmed
        }
    });
}

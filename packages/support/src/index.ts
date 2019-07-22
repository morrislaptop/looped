import { HttpError } from 'routing-controllers'
import { format } from 'winston'

// nothing yet.
export function abort(status: number, text: string)
{
    throw new HttpError(status, text)
}

export function logFormat(env: string)
{
    return format.combine(
        format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
        format.printf((info) => {
            const { timestamp, level, message, ...rest } = info
            return `[${info.timestamp}] ${env}.${info.level.toUpperCase()}: ${info.message} ${JSON.stringify(rest)}`
        }),
    )
}

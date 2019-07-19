import { HttpError } from 'routing-controllers'

// nothing yet.
export function abort(status: number, text: string)
{
    throw new HttpError(status, text)
}

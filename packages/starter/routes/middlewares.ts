import { TrimStringsMiddleware, ConvertEmptyStringsToNull } from '@looped-ts/foundation';

export const middlewares = [
    TrimStringsMiddleware,
    ConvertEmptyStringsToNull,
]

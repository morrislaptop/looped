import * as config from '../config'
import { container } from './app'
import { handle } from '../app/Console/Kernel'

handle(container)

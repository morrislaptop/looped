import * as config from '../config'
import { container } from './app'
import { handle } from '../app/Http/Kernel'

const app = handle(container)

// run express application on port 3000
app.listen(config.app.port);

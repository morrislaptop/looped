import { app } from './app'
import * as config from '../config'

// run express application on port 3000
app.listen(config.app.port);

import * as config from '../config'
import { app } from './app'

// run express application on port 3000
app.listen(config.app.port);

import * as express from 'express'
import { resolveModuleName } from 'typescript'

const app = express()

app.use('/', (req: express.Request, res: express.Response) => res.send("Hello World!"))
app.listen(3000, () => console.log("app started..."))
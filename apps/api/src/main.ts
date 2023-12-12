import dotenv from 'dotenv';
dotenv.config()
import "reflect-metadata";
import './api/controllers/ctx';
import { Container } from 'inversify';
import { Socket } from './api/services/Socket';
import { SYMBOLS } from './lib/symbols';
import { ChatService } from './api/services/Chat';
import { InversifyExpressServer } from 'inversify-express-utils';
import cors from 'cors';
import bodyParser from 'body-parser';
import Debug from 'debug';

const container = new Container()

//singletons
container.bind<Socket>(SYMBOLS.Socket).toDynamicValue(() => {
    return new Socket(container)
}).inSingletonScope()

//services
container.bind<ChatService>(SYMBOLS.ChatService).to(ChatService);

export const getContainer = () => container;

const server = new InversifyExpressServer(container, null, { rootPath: '/api' })
server.setConfig((app) => {
    app.use(cors({
        origin: '*'
    }))
    app.use(bodyParser.json({ limit: '10mb' }))
})
let app = server.build();
app.listen(3001, () => {
    const log = Debug('express:server')
    log('Server is listening on :3001')
})

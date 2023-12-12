import { Container } from "inversify";
import { Socket } from "socket.io";

export class ChatEventHandler {

    constructor(
        private container: Container
    ) { }

    public listen(socket: Socket) {
    }
}
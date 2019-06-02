import { Env } from 'Env';

export class Client{

    public static room:string = null;

    constructor(roomToken:string){
        Client.room = roomToken;
    }
}

import { Env } from 'Env';

export class Client{

    public static room:string = null;
    private static displayName:string = 'Tod';

    constructor(roomToken:string){
        Client.room = roomToken;
    }

    public static setName(clientsName:string):void{
        this.displayName = clientsName;
    }

    public static getName():string{
        return this.displayName;
    }
}

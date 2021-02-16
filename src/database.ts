import { createConnection, useContainer, Connection } from "typeorm";
import Container from "typedi";



export async function createDBConnection() : Promise<Connection>{
    useContainer(Container);
    return await createConnection();
}

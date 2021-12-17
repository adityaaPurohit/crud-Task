// bcrypt encript password
import {hash} from 'bcrypt';

async function hashPassword(password){
    return await hash(password,10)
}

export {hashPassword};
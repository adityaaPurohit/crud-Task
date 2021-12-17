// Encript payload using jwt for authentication

import { sign } from "jsonwebtoken";
const privateKey = "SecretKey";
async function jwtAuth(payload) {
  return await sign(payload, privateKey);
}

export { jwtAuth };

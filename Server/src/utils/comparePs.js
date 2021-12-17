// bcrypt Compare encriped password

import { compare } from "bcrypt";

async function comparePassword(password, dbPassword) {
  return compare(password, dbPassword);
}

export { comparePassword };

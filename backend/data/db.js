import {Low} from "lowdb"
import {JSONFile} from "lowdb/node"

import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const filePath = path.join(__dirname, "db.json");

const adapter = new JSONFile(filePath);
const db = new Low(adapter, {students: []});

await db.read();
db.data ||= {students:[]};

await db.write();

export default db;
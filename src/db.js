import fs from "node:fs/promises";

const DB_PATH = "/home/chouaib/repos/CLI-note-app/DB.json";

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};

export const insertDB = async (note) => {
  const db = await getDB();
  console.log(db);
  db.notes.push(note);
  await saveDB(db);
  return note;
};

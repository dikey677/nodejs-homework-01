const { writeFile } = require("fs");
const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

//   fs.readFile(contactsPath, "utf-8")
//     .then((data) => console.log(data))
//     .catch((error) => console.log("ERRORRRRR", error.message));

const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);

  if (!result) {
    return null;
  }

  return result;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

const updateContact = async (name, email, phone, id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  contacts[index] = { id, name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[index];
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [deleteContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return deleteContact;
};

const contacts = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};

module.exports = contacts;

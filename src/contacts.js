const fs = require("fs/promises");
const path = require("path");

//   fs.readFile(contactsPath, "utf-8")
//     .then((data) => console.log(data))
//     .catch((error) => console.log("ERRORRRRR", error.message));

const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  // ...твой код

  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

const contacts = {
  listContacts,
  getContactById,
  addContact,
};

module.exports = contacts;

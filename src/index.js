const contactsOperations = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const listContacts = await contactsOperations.listContacts();
      console.log(listContacts);
      break;

    case "getContactById":
      const getContactById = await contactsOperations.getContactById(id);

      if (!getContactById) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(getContactById);
      break;

    case "addContact":
      if (name && email && phone !== null) {
        const newContact = await contactsOperations.addContact(
          name,
          email,
          phone
        );
        console.log(newContact);
      } else {
        throw new Error("You must enter valid data");
      }
      break;

    case "updateContact":
      const updateContact = await contactsOperations.updateContact(
        name,
        email,
        phone,
        id
      );
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(updateContact);
      break;

    case "removeContact":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
console.log(argv);

invokeAction(argv);

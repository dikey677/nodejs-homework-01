const contactsOperations = require("./contacts");
// const argv = require("yargs").argv;

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
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
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

const checkedId = "4";

invokeAction({
  action: "removeContact",
  id: checkedId,
});

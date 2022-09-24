# Получаем и выводим весь список контактов в виде таблицы (console.table)
node src/index.js --action listContacts
![image](https://user-images.githubusercontent.com/88406133/192119010-8034cc38-6161-4021-bd30-9aa90fe003c8.png)


# Получаем контакт по id
node src/index.js --action getContactById --id abc
![image](https://user-images.githubusercontent.com/88406133/192118651-c05faf38-0f6a-4caa-bd5c-7fdc0ed130ef.png)


# Добавялем контакт
node src/index.js --action addContact --name Mango --email mango@gmail.com --phone 322-22-22
![image](https://user-images.githubusercontent.com/88406133/192118691-7cb68d6d-027c-46ee-bfe8-1ad399d92107.png)


# Удаляем контакт
node src/index.js --action removeContact --id c73b9da5-fcee-41ba-8bf1-63b932774c5c
![image](https://user-images.githubusercontent.com/88406133/192118715-078410f5-8c69-4b51-95f3-cc95d7e9723e.png)

# Обновляем контакт
node src/index.js --action updateContact --id 1cd98942-1f95-40a5-b3aa-9cdbb937251b --name Boris --email boris2@rb.com --phone 988-123-3333
![image](https://user-images.githubusercontent.com/88406133/192118925-737e4886-ac3c-4d9d-ae2d-aba40023018f.png)



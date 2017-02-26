USE burgersSequelized_db;

SELECT * FROM burgers;


INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt, customerId)
VALUES (1, 'Cheese burger', false, '2017-01-31 13:59:59', '2017-01-31 13:59:59', 1);

INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt, customerId)
VALUES (2, 'Vegan burger', false, '2017-01-31 16:59:59', '2017-01-31 16:59:59', 2);

INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt, customerId)
VALUES (3, 'Salmon sandwich', false, '2017-01-31 23:30:20', '2017-01-31 23:30:20',2);
TRUNCATE TABLE APARTMENTS;
TRUNCATE TABLE OFFICES;
TRUNCATE TABLE STOREFRONTS;

ALTER SEQUENCE apartments_id_seq RESTART WITH 1;
ALTER SEQUENCE offices_id_seq RESTART WITH 1;
ALTER SEQUENCE storefronts_id_seq RESTART WITH 1;

INSERT INTO apartments(id, apartment_number, no_bedrooms, no_bathrooms, address, tenant, occupied_status, sq_footage, price) VALUES (1, 12, 2, 3, '123 Fourth St', 'Bill', true, 6000, 5000);
INSERT INTO apartments(id, apartment_number, no_bedrooms, no_bathrooms, address, tenant, occupied_status, sq_footage, price) VALUES (2, 2, 3, 2, '777 Second Ave', 'Steve', true, 4500, 2500);

INSERT INTO offices(id, office_number, no_floors, sq_footage, no_cubicles, no_bathrooms, address, co_name,occupied_status, price) VALUES(1, 32, 4, 9000, 55, 9, '434 Sixth Ave', 'Company Inc', true, 20000);
INSERT INTO offices(id, office_number, no_floors, sq_footage, no_cubicles, no_bathrooms, address, co_name,occupied_status, price) VALUES(2, 22, 3, 7500, 32, 7, '12 Palm Street', 'General Assembly', true, 19000);

INSERT INTO storefronts(id, address, occupied_status, price, kitchen, owner, outdoor_seating) VALUES(1, '323 23rd Street', true, 7500, false, 'Steven Miller', false);
INSERT INTO storefronts(id, address, occupied_status, price, kitchen, owner, outdoor_seating) VALUES(2, '66 Main Street', false, 7200, true, 'Chris Biggar', true);
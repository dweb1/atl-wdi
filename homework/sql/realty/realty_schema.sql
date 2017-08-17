DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS offices;
DROP TABLE IF EXISTS storefronts;

CREATE TABLE apartments (
    id SERIAL PRIMARY KEY,
    apartment_number INTEGER,
    no_bedrooms INTEGER,
    no_bathrooms INTEGER,
    address TEXT NOT NULL,
    tenant TEXT,
    occupied_status BOOLEAN,
    sq_footage INTEGER,
    price INTEGER
);

CREATE TABLE offices (
    id SERIAL PRIMARY KEY,
    office_number INTEGER,
    no_floors INTEGER,
    sq_footage INTEGER,
    no_cubicles INTEGER,
    no_bathrooms INTEGER,
    address TEXT NOT NULL,
    co_name TEXT,
    occupied_status BOOLEAN,
    price INTEGER
);

CREATE TABLE storefronts (
    id SERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    occupied_status BOOLEAN,
    price INTEGER,
    kitchen BOOLEAN,
    owner TEXT,
    outdoor_seating BOOLEAN DEFAULT FALSE
);
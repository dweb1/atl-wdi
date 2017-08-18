1. The average square footage of all offices.
SELECT AVG(sq_footage) FROM offices;

2. The total number of apartments.
SELECT SUM(apartment_number) FROM apartments;

3. The apartments where there is no tenant
SELECT * FROM apartments WHERE occupied_status = false;

4. The names of all of the companies
SELECT co_name FROM offices;

5. The number of cubicles and bathrooms in the 3rd office
SELECT no_bathrooms, no_cubicles FROM offices WHERE id = 3;

6. The storefronts that have kitchens
SELECT * FROM storefronts WHERE kitch = true;

7. The storefront with the highest square footage and outdoor seating
SELECT * FROM storefronts WHERE outdoor_seating = true ORDER BY sq_footage ASC LIMIT 1;

8. The office with the lowest number of cubicles
SELECT * FROM offices ORDER BY no_cubicles DESC LIMIT 1;

9. The office with the most cubicles and bathrooms


-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * FROM authors INNER JOIN books ON authors.id = books.author_id WHERE name LIKE '% Martin';

-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT * FROM authors INNER JOIN books ON authors.id = books.author_id WHERE name LIKE '% Kundera';

-- Find all books written by an author from China or the UK.
SELECT * FROM authors INNER JOIN books ON authors.id = books.author_id WHERE nationality = 'China' OR nationality = 'United Kingdom';

-- Find out how many books Albert Camus wrote.
SELECT count(title) FROM books INNER JOIN authors ON books.author_id = authors.id WHERE name LIKE '% Camus';

-- Find out how many books were written by US authors.
SELECT count(title) FROM books INNER JOIN books ON books.author_id = authors.id WHERE nationality = 'United States of America';

-- Find all books written after 1930 by authors from Argentina.
SELECT title FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'Argentina' AND books.publication_date > 1930;

-- Find all books written before 1980 by authors not from the US.
SELECT title FROM books INNER JOIN authors ON books.author_id = authors.id WHERE NOT nationality = 'United States of America' AND books.publication_date < 1980;
 
-- Find all authors whose names start with 'J'.
SELECT name FROM authors WHERE name LIKE 'J%';

-- Find all books whose titles contain 'the'.
SELECT title FROM books WHERE title ILIKE 'the %' OR title ILIKE '% the %';

-- Find all authors who have written books with that start with the letter 'N'.
SELECT DISTINCT name FROM authors INNER JOIN books ON authors.id = books.author_id WHERE books.title LIKE 'N%'
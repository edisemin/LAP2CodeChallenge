DROP TABLE IF EXISTS post;

CREATE TABLE post (
    id serial PRIMARY KEY,
    title varchar(100),
    name varchar(100),
    text varchar(500)
);

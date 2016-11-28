BEGIN;

DROP TABLE IF EXISTS playlist;
DROP TABLE IF EXISTS users;

-- work on it more later
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE playlist(
  trackid INT NOT NULL,
  trackname TEXT NOT NULL,
  artistid INT NOT NULL,
  artistname TEXT NOT NULL,
  collectionid INT NOT NULL,
  collectionname TEXT NOT NULL,
  youtube TEXT,
  user_id INT NOT NULL
);

COMMIT;

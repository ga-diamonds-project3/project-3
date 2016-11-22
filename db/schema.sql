BEGIN;

DROP TABLE IF EXISTS playlist;
DROP TABLE IF EXISTS users;

-- work on it more later
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
);

CREATE TABLE playlist(
  trackid INT NOT NULL,
  trackname TEXT NOT NULL,
  artistid INT NOT NULL,
  artistname TEXT NOT NULL,
  collectionid INT NOT NULL, 
  user_id INT NOT NULL,
);

COMMIT;

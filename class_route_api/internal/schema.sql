-- Database schema
-- Author: Weixuan Lin

DROP TABLE IF EXISTS reports;

CREATE TABLE reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    time REAL NOT NULL,
    topic TEXT NOT NULL,
    phase INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    detail TEXT NOT NULL
);

SET search_path TO public;

CREATE TABLE IF NOT EXISTS users (
    uuid UUID PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    created TIMESTAMPTZ DEFAULT NOW()
);

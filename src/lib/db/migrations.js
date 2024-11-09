import { makeQuery } from "./db.connection";

export default async function makeMigrations() {
    await makeQuery(`
CREATE TABLE IF NOT EXISTS customer_contacts (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    phone varchar(255),
    comments text,
    created_at timestamp default current_timestamp(),
    PRIMARY KEY (id)
);
    `);

    await makeQuery(`
CREATE TABLE IF NOT EXISTS dealer_search_locations (
    id int NOT NULL AUTO_INCREMENT,
    search_string varchar(255),
    additional_info text,
    created_at timestamp default current_timestamp(),
    PRIMARY KEY (id)
);
    `);

    await makeQuery(`
CREATE TABLE IF NOT EXISTS dealer_click_events (
    id int NOT NULL AUTO_INCREMENT,
    dealer_id int,
    event_type int,
    customer_info text,
    additional_info text,
    created_at timestamp default current_timestamp(),
    PRIMARY KEY (id)
);
        `);

    await makeQuery(`
CREATE TABLE IF NOT EXISTS dealers (
    id int NOT NULL AUTO_INCREMENT, 
    name varchar(255),
		type int,
    contact_phone varchar(255),
    website varchar(255),
    description varchar(255),
    timetable text,
		direction varchar(255),
		latitude decimal(8,6),
		longitude decimal(9,6),
    created_at timestamp default current_timestamp(),
    PRIMARY KEY (id)
)
        `);
}

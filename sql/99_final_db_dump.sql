USE home_db;


CREATE TABLE IF NOT EXISTS user (
    username VARCHAR(50) PRIMARY KEY,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS home (
    street_address VARCHAR(255) PRIMARY KEY,
    state VARCHAR(50),
    zip VARCHAR(10),
    sqft DECIMAL(10, 2),
    beds INT,
    baths INT,
    list_price DECIMAL(10, 2)
);

CREATE TABLE user_home_details (
    username VARCHAR(50),
    street_address VARCHAR(255),
    PRIMARY KEY (username, street_address),
    FOREIGN KEY (username) REFERENCES user(username),
    FOREIGN KEY (street_address) REFERENCES home(street_address)
);


-- Insert data into `user` table
INSERT INTO user (username, email) VALUES
('user7', 'user7@example.org'),
('user10', 'user10@example.org'),
('user3', 'user3@example.org'),
('user6', 'user6@example.org'),
('user2', 'user2@example.org');

-- Insert data into `home` table
INSERT INTO home (street_address, state, zip, sqft, beds, baths, list_price) VALUES
('72242 Jacobson Square', 'Arizona', '05378', 2945.89, 1, 3, 791204.0),
('75246 Cumberland Street', 'Arizona', '08229', 2278.71, 2, 1, 182092.0),
('7976 W Division Street', 'New Mexico', '99460', 2510.57, 1, 3, 842529.0),
('811 Walker-Bogan Terrace', 'Rhode Island', '19219', 3648.42, 1, 2, 964995.0),
('947 Allen Motorway', 'Massachusetts', '65353', 1375.37, 3, 3, 578532.0),
('4679 Horacio Plains', 'Texas', '62631', 1679.69, 6, 3, 303195.0),
('78089 Prospect Avenue', 'Nebraska', '95406', 4718.9, 1, 2, 358752.0),
('5788 Mallie Gateway', 'Nebraska', '37697', 2236.85, 3, 2, 632165.0),
('975 Marty Ridges', 'New Jersey', '28721', 1310.08, 6, 3, 467656.0);

-- Insert data into `user_home_details` table
INSERT INTO user_home_details (username, street_address) VALUES
('user7', '72242 Jacobson Square'),
('user7', '75246 Cumberland Street'),
('user10', '72242 Jacobson Square'),
('user3', '811 Walker-Bogan Terrace'),
('user3', '947 Allen Motorway'),
('user10', '7976 W Division Street'),
('user6', '4679 Horacio Plains'),
('user2', '78089 Prospect Avenue'),
('user2', '5788 Mallie Gateway'),
('user6', '975 Marty Ridges');
-- Drop the `lottery_db` database if it exists
DROP DATABASE IF EXISTS lottery_db;

-- Create the `lottery_db` database
CREATE DATABASE lottery_db;

-- Use the newly created `lottery_db` database
USE lottery_db;

-- Insert seed data into the 'sessions' table
INSERT INTO sessions (status, createdAt, updatedAt) 
VALUES 
    (3, '2024-07-01 10:00:00', '2024-07-01 10:00:00'), -- COMPLETED
    (3, '2024-07-02 10:00:00', '2024-07-02 10:00:00'), -- COMPLETED
    (3, '2024-07-03 10:00:00', '2024-07-03 10:00:00'), -- COMPLETED
    (3, '2024-07-04 10:00:00', '2024-07-04 10:00:00'), -- COMPLETED
    (1, '2024-07-05 10:00:00', '2024-07-05 10:00:00'); -- SCHEDULED

-- Insert seed data into the 'numbers' table for session_id 1
INSERT INTO numbers (value, status, session_id, createdAt, updatedAt) 
VALUES
    (12345, 3, 1, NOW(), NOW()),
    (67890, 3, 1, NOW(), NOW()),
    (23456, 3, 1, NOW(), NOW()),
    (34567, 3, 1, NOW(), NOW()),
    (45678, 3, 1, NOW(), NOW()),
    (56789, 3, 1, NOW(), NOW()),
    (67891, 3, 1, NOW(), NOW()),
    (78901, 3, 1, NOW(), NOW()),
    (89012, 3, 1, NOW(), NOW()),
    (1234, 3, 1, NOW(), NOW()),
    (5678, 3, 1, NOW(), NOW()),
    (9101, 3, 1, NOW(), NOW()),
    (2345, 3, 1, NOW(), NOW()),
    (6789, 3, 1, NOW(), NOW()),
    (6456, 3, 1, NOW(), NOW()),
    (7891, 3, 1, NOW(), NOW()),
    (1876, 3, 1, NOW(), NOW()),
    (4525, 3, 1, NOW(), NOW()),
    (7112, 3, 1, NOW(), NOW()),
    (123, 3, 1, NOW(), NOW()),
    (456, 3, 1, NOW(), NOW()),
    (789, 3, 1, NOW(), NOW()),
    (12, 3, 1, NOW(), NOW()),
    (34, 3, 1, NOW(), NOW()),
    (56, 3, 1, NOW(), NOW()),
    (78, 3, 1, NOW(), NOW()),
    (76098, 3, 1, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 2
INSERT INTO numbers (value, status, session_id, createdAt, updatedAt) 
VALUES
    (22345, 3, 2, NOW(), NOW()),
    (77897, 3, 2, NOW(), NOW()),
    (33456, 3, 2, NOW(), NOW()),
    (44567, 3, 2, NOW(), NOW()),
    (55678, 3, 2, NOW(), NOW()),
    (66789, 3, 2, NOW(), NOW()),
    (77891, 3, 2, NOW(), NOW()),
    (88901, 3, 2, NOW(), NOW()),
    (90122, 3, 2, NOW(), NOW()),
    (2234, 3, 2, NOW(), NOW()),
    (6789, 3, 2, NOW(), NOW()),
    (8214, 3, 2, NOW(), NOW()),
    (3455, 3, 2, NOW(), NOW()),
    (7899, 3, 2, NOW(), NOW()),
    (4567, 3, 2, NOW(), NOW()),
    (8901, 3, 2, NOW(), NOW()),
    (2876, 3, 2, NOW(), NOW()),
    (7525, 3, 2, NOW(), NOW()),
    (8212, 3, 2, NOW(), NOW()),
    (223, 3, 2, NOW(), NOW()),
    (567, 3, 2, NOW(), NOW()),
    (893, 3, 2, NOW(), NOW()),
    (22, 3, 2, NOW(), NOW()),
    (45, 3, 2, NOW(), NOW()),
    (67, 3, 2, NOW(), NOW()),
    (89, 3, 2, NOW(), NOW()),
    (86098, 3, 2, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 3
INSERT INTO numbers (value, status, session_id, createdAt, updatedAt) 
VALUES
    (32345, 3, 3, NOW(), NOW()),
    (87894, 3, 3, NOW(), NOW()),
    (43456, 3, 3, NOW(), NOW()),
    (54567, 3, 3, NOW(), NOW()),
    (65678, 3, 3, NOW(), NOW()),
    (76789, 3, 3, NOW(), NOW()),
    (87891, 3, 3, NOW(), NOW()),
    (98901, 3, 3, NOW(), NOW()),
    (51223, 3, 3, NOW(), NOW()),
    (3234, 3, 3, NOW(), NOW()),
    (7891, 3, 3, NOW(), NOW()),
    (9321, 3, 3, NOW(), NOW()),
    (4566, 3, 3, NOW(), NOW()),
    (8902, 3, 3, NOW(), NOW()),
    (5678, 3, 3, NOW(), NOW()),
    (9012, 3, 3, NOW(), NOW()),
    (3876, 3, 3, NOW(), NOW()),
    (8525, 3, 3, NOW(), NOW()),
    (9312, 3, 3, NOW(), NOW()),
    (323, 3, 3, NOW(), NOW()),
    (678, 3, 3, NOW(), NOW()),
    (901, 3, 3, NOW(), NOW()),
    (32, 3, 3, NOW(), NOW()),
    (56, 3, 3, NOW(), NOW()),
    (78, 3, 3, NOW(), NOW()),
    (99, 3, 3, NOW(), NOW()),
    (96098, 3, 3, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 4
INSERT INTO numbers (value, status, session_id, createdAt, updatedAt) 
VALUES
    (42345, 3, 4, NOW(), NOW()),
    (97892, 3, 4, NOW(), NOW()),
    (53456, 3, 4, NOW(), NOW()),
    (64567, 3, 4, NOW(), NOW()),
    (75678, 3, 4, NOW(), NOW()),
    (86789, 3, 4, NOW(), NOW()),
    (97891, 3, 4, NOW(), NOW()),
    (18901, 3, 4, NOW(), NOW()),
    (12334, 3, 4, NOW(), NOW()),
    (4234, 3, 4, NOW(), NOW()),
    (8901, 3, 4, NOW(), NOW()),
    (3432, 3, 4, NOW(), NOW()),
    (5679, 3, 4, NOW(), NOW()),
    (9012, 3, 4, NOW(), NOW()),
    (4678, 3, 4, NOW(), NOW()),
    (9123, 3, 4, NOW(), NOW()),
    (4876, 3, 4, NOW(), NOW()),
    (9525, 3, 4, NOW(), NOW()),
    (9412, 3, 4, NOW(), NOW()),
    (423, 3, 4, NOW(), NOW()),
    (789, 3, 4, NOW(), NOW()),
    (812, 3, 4, NOW(), NOW()),
    (43, 3, 4, NOW(), NOW()),
    (67, 3, 4, NOW(), NOW()),
    (89, 3, 4, NOW(), NOW()),
    (62, 3, 4, NOW(), NOW()),
    (77098, 3, 4, NOW(), NOW());


-- Insert seed data into the 'numbers' table for session_id 5 with status 3
INSERT INTO numbers (value, status, session_id, createdAt, updatedAt) 
VALUES
    (52345, 1, 5, NOW(), NOW()),
    (97896, 1, 5, NOW(), NOW()),
    (63456, 1, 5, NOW(), NOW()),
    (74567, 1, 5, NOW(), NOW()),
    (85678, 1, 5, NOW(), NOW()),
    (96789, 1, 5, NOW(), NOW()),
    (27891, 1, 5, NOW(), NOW()),
    (18901, 1, 5, NOW(), NOW()),
    (23445, 1, 5, NOW(), NOW()),
    (5234, 1, 5, NOW(), NOW()),
    (9012, 1, 5, NOW(), NOW()),
    (1543, 1, 5, NOW(), NOW()),
    (6784, 1, 5, NOW(), NOW()),
    (1234, 1, 5, NOW(), NOW()),
    (5789, 1, 5, NOW(), NOW()),
    (5976, 1, 5, NOW(), NOW()),
    (6535, 1, 5, NOW(), NOW()),
    (1556, 1, 5, NOW(), NOW()),
    (8432, 1, 5, NOW(), NOW()),
    (523, 1, 5, NOW(), NOW()),
    (678, 1, 5, NOW(), NOW()),
    (912, 1, 5, NOW(), NOW()),
    (56, 1, 5, NOW(), NOW()),
    (78, 1, 5, NOW(), NOW()),
    (89, 1, 5, NOW(), NOW()),
    (65, 1, 5, NOW(), NOW()),
    (16098, 1, 5, NOW(), NOW());

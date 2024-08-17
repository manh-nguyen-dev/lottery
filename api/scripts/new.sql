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
    (1, '2024-07-05 10:00:00', '2024-07-05 10:00:00'), -- SCHEDULED
    (1, '2024-07-06 10:00:00', '2024-07-06 10:00:00'); -- SCHEDULED

-- Insert seed data into the 'numbers' table for session_id 1
INSERT INTO numbers (value, session_id, createdAt, updatedAt) 
VALUES
    (12345, 1, NOW(), NOW()),
    (67890, 1, NOW(), NOW()),
    (23456, 1, NOW(), NOW()),
    (34567, 1, NOW(), NOW()),
    (45678, 1, NOW(), NOW()),
    (56789, 1, NOW(), NOW()),
    (67891, 1, NOW(), NOW()),
    (78901, 1, NOW(), NOW()),
    (89012, 1, NOW(), NOW()),
    (1234, 1, NOW(), NOW()),
    (5678, 1, NOW(), NOW()),
    (9101, 1, NOW(), NOW()),
    (2345, 1, NOW(), NOW()),
    (6789, 1, NOW(), NOW()),
    (6456, 1, NOW(), NOW()),
    (7890, 1, NOW(), NOW()),
    (1876, 1, NOW(), NOW()),
    (4525, 1, NOW(), NOW()),
    (7112, 1, NOW(), NOW()),
    (123, 1, NOW(), NOW()),
    (456, 1, NOW(), NOW()),
    (789, 1, NOW(), NOW()),
    (12, 1, NOW(), NOW()),
    (34, 1, NOW(), NOW()),
    (56, 1, NOW(), NOW()),
    (78, 1, NOW(), NOW()),
    (76098, 1, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 2
INSERT INTO numbers (value, session_id, createdAt, updatedAt) 
VALUES
    (22345, 2, NOW(), NOW()),
    (77890, 2, NOW(), NOW()),
    (33456, 2, NOW(), NOW()),
    (44567, 2, NOW(), NOW()),
    (55678, 2, NOW(), NOW()),
    (66789, 2, NOW(), NOW()),
    (77891, 2, NOW(), NOW()),
    (88901, 2, NOW(), NOW()),
    (90122, 2, NOW(), NOW()),
    (2234, 2, NOW(), NOW()),
    (6789, 2, NOW(), NOW()),
    (8210, 2, NOW(), NOW()),
    (3455, 2, NOW(), NOW()),
    (7899, 2, NOW(), NOW()),
    (4567, 2, NOW(), NOW()),
    (8901, 2, NOW(), NOW()),
    (2876, 2, NOW(), NOW()),
    (7525, 2, NOW(), NOW()),
    (8212, 2, NOW(), NOW()),
    (223, 2, NOW(), NOW()),
    (567, 2, NOW(), NOW()),
    (890, 2, NOW(), NOW()),
    (22, 2, NOW(), NOW()),
    (45, 2, NOW(), NOW()),
    (67, 2, NOW(), NOW()),
    (89, 2, NOW(), NOW()),
    (86098, 2, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 3
INSERT INTO numbers (value, session_id, createdAt, updatedAt) 
VALUES
    (32345, 3, NOW(), NOW()),
    (87890, 3, NOW(), NOW()),
    (43456, 3, NOW(), NOW()),
    (54567, 3, NOW(), NOW()),
    (65678, 3, NOW(), NOW()),
    (76789, 3, NOW(), NOW()),
    (87891, 3, NOW(), NOW()),
    (98901, 3, NOW(), NOW()),
    (51223, 3, NOW(), NOW()),
    (3234, 3, NOW(), NOW()),
    (7890, 3, NOW(), NOW()),
    (9321, 3, NOW(), NOW()),
    (4566, 3, NOW(), NOW()),
    (8902, 3, NOW(), NOW()),
    (5678, 3, NOW(), NOW()),
    (9012, 3, NOW(), NOW()),
    (3876, 3, NOW(), NOW()),
    (8525, 3, NOW(), NOW()),
    (9312, 3, NOW(), NOW()),
    (323, 3, NOW(), NOW()),
    (678, 3, NOW(), NOW()),
    (901, 3, NOW(), NOW()),
    (32, 3, NOW(), NOW()),
    (56, 3, NOW(), NOW()),
    (78, 3, NOW(), NOW()),
    (90, 3, NOW(), NOW()),
    (96098, 3, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 4
INSERT INTO numbers (value, session_id, createdAt, updatedAt) 
VALUES
    (42345, 4, NOW(), NOW()),
    (97890, 4, NOW(), NOW()),
    (53456, 4, NOW(), NOW()),
    (64567, 4, NOW(), NOW()),
    (75678, 4, NOW(), NOW()),
    (86789, 4, NOW(), NOW()),
    (97891, 4, NOW(), NOW()),
    (18901, 4, NOW(), NOW()),
    (12334, 4, NOW(), NOW()),
    (4234, 4, NOW(), NOW()),
    (8901, 4, NOW(), NOW()),
    (3432, 4, NOW(), NOW()),
    (5679, 4, NOW(), NOW()),
    (9012, 4, NOW(), NOW()),
    (4678, 4, NOW(), NOW()),
    (9123, 4, NOW(), NOW()),
    (4876, 4, NOW(), NOW()),
    (9525, 4, NOW(), NOW()),
    (9412, 4, NOW(), NOW()),
    (423, 4, NOW(), NOW()),
    (789, 4, NOW(), NOW()),
    (812, 4, NOW(), NOW()),
    (43, 4, NOW(), NOW()),
    (67, 4, NOW(), NOW()),
    (89, 4, NOW(), NOW()),
    (77098, 4, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 5
INSERT INTO numbers (value, session_id, createdAt, updatedAt) 
VALUES
    (52345, 5, NOW(), NOW()),
    (97890, 5, NOW(), NOW()),
    (63456, 5, NOW(), NOW()),
    (74567, 5, NOW(), NOW()),
    (85678, 5, NOW(), NOW()),
    (96789, 5, NOW(), NOW()),
    (27891, 5, NOW(), NOW()),
    (18901, 5, NOW(), NOW()),
    (23445, 5, NOW(), NOW()),
    (5234, 5, NOW(), NOW()),
    (9012, 5, NOW(), NOW()),
    (1543, 5, NOW(), NOW()),
    (6780, 5, NOW(), NOW()),
    (1234, 5, NOW(), NOW()),
    (5789, 5, NOW(), NOW()),
    (5976, 5, NOW(), NOW()),
    (6535, 5, NOW(), NOW()),
    (1556, 5, NOW(), NOW()),
    (8432, 5, NOW(), NOW()),
    (523, 5, NOW(), NOW()),
    (678, 5, NOW(), NOW()),
    (912, 5, NOW(), NOW()),
    (56, 5, NOW(), NOW()),
    (78, 5, NOW(), NOW()),
    (89, 5, NOW(), NOW()),
    (16098, 5, NOW(), NOW());

-- Insert seed data into the 'numbers' table for session_id 6
INSERT INTO numbers (value, session_id, createdAt, updatedAt) 
VALUES
    (42345, 6, NOW(), NOW()),
    (57890, 6, NOW(), NOW()),
    (63456, 6, NOW(), NOW()),
    (74567, 6, NOW(), NOW()),
    (45678, 6, NOW(), NOW()),
    (96789, 6, NOW(), NOW()),
    (67891, 6, NOW(), NOW()),
    (78901, 6, NOW(), NOW()),
    (89012, 6, NOW(), NOW()),
    (1234, 6, NOW(), NOW()),
    (5678, 6, NOW(), NOW()),
    (9101, 6, NOW(), NOW()),
    (2345, 6, NOW(), NOW()),
    (6789, 6, NOW(), NOW()),
    (6456, 6, NOW(), NOW()),
    (7890, 6, NOW(), NOW()),
    (1876, 6, NOW(), NOW()),
    (4525, 6, NOW(), NOW()),
    (7112, 6, NOW(), NOW()),
    (123, 6, NOW(), NOW()),
    (456, 6, NOW(), NOW()),
    (789, 6, NOW(), NOW()),
    (12, 6, NOW(), NOW()),
    (34, 6, NOW(), NOW()),
    (56, 6, NOW(), NOW()),
    (78, 6, NOW(), NOW()),
    (76098, 6, NOW(), NOW());


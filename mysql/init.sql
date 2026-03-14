CREATE DATABASE IF NOT EXISTS ecommerce;

USE ecommerce;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Seed data
INSERT INTO users (name) VALUES
  ('Nguyen Van A'),
  ('Tran Thi B'),
  ('Le Van C'),
  ('Pham Thi D'),
  ('Hoang Van E');

-- =========================================================
-- Quantum Medical & Prosthetics - cPanel MySQL Schema
-- Database Table: leads
-- =========================================================

CREATE TABLE IF NOT EXISTS `leads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `organization` VARCHAR(255) DEFAULT NULL,
  `city` VARCHAR(255) DEFAULT NULL,
  `investment_capacity` VARCHAR(255) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `lead_type` VARCHAR(100) DEFAULT 'general',
  `status` VARCHAR(50) DEFAULT 'new',
  `created_at` VARCHAR(100) NOT NULL,
  `ip` VARCHAR(100) DEFAULT 'unknown',
  INDEX `idx_created_at` (`created_at`),
  INDEX `idx_lead_type` (`lead_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

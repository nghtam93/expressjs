-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2022 at 10:49 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `cls_name` varchar(255) NOT NULL,
  `cls_position` varchar(255) NOT NULL,
  `cls_office` varchar(255) NOT NULL,
  `cls_age` int(11) NOT NULL,
  `cls_date` date NOT NULL,
  `cls_salary` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `cls_name`, `cls_position`, `cls_office`, `cls_age`, `cls_date`, `cls_salary`) VALUES
(1, 'Tâm', 'Vietnam', 'Danang', 29, '2022-04-06', '$1,500,000'),
(2, 'Trình', 'Vietnam', 'Danang', 30, '2022-04-15', '$5,500,000'),
(3, 'Oanh Ngô', 'Vietnam', 'Danang', 28, '2022-04-20', '$100,000'),
(4, 'Đức', 'Vietnam', 'Danang', 3, '2022-04-10', '$5000'),
(5, 'BabyKing213', 'Vietnam', 'Hà Nội', 30, '2022-04-02', '$5500,000'),
(25, 'Phúc Bê Đê', 'USA', 'Hà Nội', 30, '2022-04-07', '$10,500,000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 17, 2022 at 01:29 AM
-- Server version: 8.0.28
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobilestore`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `name` varchar(60) NOT NULL,
  `subject` varchar(500) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`name`, `subject`, `email`, `message`, `id`) VALUES
('Falak butt', 'Project not arrived', 'falakbutt@mujra.com', 'Mera product nhi aya, bahot kharab service, you guys suck!', 1),
('Afreen khan', 'Great service', 'afreen.khan@gmail.com', 'I loved your service, delivery man was very friendly, Thankyou!', 2),
('Akash', 'Product not delivered', 'Akash@gmail.com', 'My product is not delivered', 3),
('Akash', 'Defected Product', 'Akash@gmail.com', 'I recieved defected product, please return', 4),
('john cena', 'Defected product', 'Johncena@gmail.com', 'I got defected product, please return', 5),
('sonia', 'great service', 'sonia@gmail.com', 'Great service, but my product is late', 6),
('Surjit', 'defected product', 'surjit@gmail.com', 'I recieved defected product, please return', 7),
('Example', 'no subject', 'example@example.com', 'This is message', 8),
('Example', 'no subject', 'example@example.com', 'This is message', 9),
('Example', 'no subject', 'example@example.com', 'This is message', 10),
('S', 'df', 'f@hjvg', 'This is message', 11);

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE IF NOT EXISTS `newsletter` (
  `email` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`email`, `id`) VALUES
('akash@gmail.com', 1),
('akash@gmail.com', 2),
('akash@gmail.com', 3),
('example@gmail.com', 4),
('john@zetmail.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `new_other_products`
--

DROP TABLE IF EXISTS `new_other_products`;
CREATE TABLE IF NOT EXISTS `new_other_products` (
  `product_name` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `product_image` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new_other_products`
--

INSERT INTO `new_other_products` (`product_name`, `product_image`, `description`, `price`, `id`) VALUES
('Spigen Essential PF2104 15W Max Wireless Charger', 'Mobiles/wireless charger.png', 'About this item:\r\n- [Fast Charging] 15W fast charging with airboost technology\r\n- [Made in India] Spigen Essential wireless charger is Made in india\r\n- [Design] Slim, Small, Slick design completes chic style\r\n- [Technology] Verified through High & Low Temperature Test and Drop Test\r\n- [Compatibility & Included] Only Compatible with mobiles supporting wireless charging. 1 wireless charger and 1 USB-A to C cable (1m)', 999, 1),
('MI MOTO 200000 mAh Power Bank  (White, Lithium-ion)', 'Mobiles/smart-power-bank-30000-zx5-zofia-original-imag6ggkqtxby2er.webp', 'Highlights: Capacity: 200000 mAh,\r\nLithium-ion Battery | Micro Connector,\r\nPower Source: ADAPTOR,\r\nCharging Cable Included', 599, 2);

-- --------------------------------------------------------

--
-- Table structure for table `new_products`
--

DROP TABLE IF EXISTS `new_products`;
CREATE TABLE IF NOT EXISTS `new_products` (
  `product_name` varchar(500) NOT NULL,
  `product_image` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `price` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `new_products`
--

INSERT INTO `new_products` (`product_name`, `product_image`, `description`, `price`, `id`) VALUES
('Tecno Pop 5 LTE(Ice Blue 2G+32GB)', 'Mobiles/m6.png', 'Tecno Pop 5 LTE(Ice Blue 2G+32GB)| 6.52 HD+Dot Notch | 5000mAh | 8MP Dual Camera | Front Flash| IPX2 Splash Resistant', 100, 1),
('Galaxy S20 FE  ', 'Mobiles/812yohjGZ2L._SY741_-removebg-preview (1).png', '5G Ready powered by Qualcomm Snapdragon 865 Octa-Core processor, 8GB RAM, 128GB internal memory expandable up to 1TB, Android 11.0 operating system and dual SIM,\r\nTriple Rear Camera Setup - 12MP (Dual Pixel)', 39999, 2),
('OPPO A31', 'Mobiles/xSR6lVQplHYd6Vtv-removebg-preview.png', ' Color: Mystery Black, Lake Green, Fantasy White Operating System: ColorOS 6.1.2, based on Android 9 CPU: MT6765V/CB GPU: IMG GE8320 Battery: 4100/4230mAh (Min/Typ) RAM: 4GB/ 6GB Storage: 64GB/ 128GB (Expandable up to 256GB), Size: 16.5cm (6.5\'\').', 11990, 3),
('realme 9i (Prism Black, 128 GB)  (6 GB RAM)', 'Mobiles/51u9-q9539L._SX679_-removebg-preview (1).png', '6 GB RAM | 128 GB ROM | Expandable Upto 1 TB\r\n16.76 cm (6.6 inch) Full HD+ Display\r\n50MP + 2MP + 2MP | 16MP Front Camera\r\n5000 mAh Lithium ion Battery\r\nQualcomm Snapdragon 680 (SM6225) Processor', 15850, 4);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `product_name` varchar(500) NOT NULL,
  `person_name` varchar(200) NOT NULL,
  `phone` bigint NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `quantity` mediumint NOT NULL,
  `image` varchar(1000) NOT NULL,
  `price` varchar(200) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`product_name`, `person_name`, `phone`, `email`, `address`, `quantity`, `image`, `price`, `id`) VALUES
('OnePlus Nord CE 2 5G (Bahamas Blue, 6GB RAM, 128GB Storage)', 'Sachin', 6280298413, 'info@MobileHub.com', 'Village shamsherpur, District Gurdaspur', 2, 'Mobiles/m1.png', 'Rs. 15999', 49),
('Realme narzo 50A (Oxygen Blue , 4GB RAM + 64 GB Storage) Helio G85 Processor |', 'Akash', 6280297455, 'akash@gmail.com', 'Village wadala Granthian, District Gurdaspur', 3, 'Mobiles/m2.png', 'Rs. 16000', 50);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

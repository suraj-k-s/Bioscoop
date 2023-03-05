-- phpMyAdmin SQL Dump
-- version 2.11.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 23, 2022 at 09:35 AM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_bioscoop`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_addfilm`
--

CREATE TABLE `tbl_addfilm` (
  `film_id` int(11) NOT NULL auto_increment,
  `film_name` varchar(50) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `film_actor` varchar(50) NOT NULL,
  `film_actress` varchar(50) NOT NULL,
  `producer_id` int(11) NOT NULL,
  `film_description` longtext NOT NULL,
  `film_budget` varchar(50) NOT NULL,
  `film_poster1` varchar(100) NOT NULL,
  `film_poster2` varchar(100) NOT NULL,
  `film_poster3` varchar(100) NOT NULL,
  `film_banner` varchar(50) NOT NULL,
  `platform_id` int(11) NOT NULL,
  `film_status` varchar(50) NOT NULL default '0',
  PRIMARY KEY  (`film_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `tbl_addfilm`
--

INSERT INTO `tbl_addfilm` (`film_id`, `film_name`, `genre_id`, `film_actor`, `film_actress`, `producer_id`, `film_description`, `film_budget`, `film_poster1`, `film_poster2`, `film_poster3`, `film_banner`, `platform_id`, `film_status`) VALUES
(6, 'Kurup', 1, 'Dulquer Salaman', 'Sobhita Dhulipala', 3, 'Sukumara Kurup - a consummate criminal sets out to find a man of similar appearance to falsify his own death and claim insurance money', '10000000', 'http://localhost/Bioscoop/Project/api/Files/7468361.jpg', 'http://localhost/Bioscoop/Project/api/Files/7468400.jpg', 'http://localhost/Bioscoop/Project/api/Files/7468356.jpg', 'Wayfarer films', 3, '0'),
(18, 'Harry potter', 6, 'aaa', 'bbb', 3, 'aestrdouytijfdfnchgmvhj,jkhytrutjdyfxnhcgmvh,j.hiyutiy', '10000000', 'http://localhost/Bioscoop/Project/api/Files/329693.jpg', 'http://localhost/Bioscoop/Project/api/Files/329693.jpg', 'http://localhost/Bioscoop/Project/api/Files/329693.jpg', 'WB productions', 3, '0'),
(19, 'Alien', 1, 'asdfgh', 'sdfgaes', 3, 'sdsfghhjulitdyfhv,bjkhlkjkb', '19999999', 'http://localhost/Bioscoop/Project/api/Files/329585.jpg', 'http://localhost/Bioscoop/Project/api/Files/329585.jpg', 'http://localhost/Bioscoop/Project/api/Files/329585.jpg', 'WB', 3, '0'),
(20, 'prem', 5, 'nasdfgh', 'xgfjhgjk', 3, 'sdgjhfjgkhj', '10000000', 'http://localhost/Bioscoop/Project/api/Files/1.jpg', 'http://localhost/Bioscoop/Project/api/Files/3.jpg', 'http://localhost/Bioscoop/Project/api/Files/2.jpg', 'anwar', 3, '0'),
(21, 'Monster House', 6, 'rarsfdgh', 'stsfhg', 3, 'wfgjhfjkh', '10000000', 'http://localhost/Bioscoop/Project/api/Files/329694.jpg', 'http://localhost/Bioscoop/Project/api/Files/329694.jpg', 'http://localhost/Bioscoop/Project/api/Files/329694.jpg', 'MH', 3, '0'),
(22, 'romance', 4, 'asdf', 'asdfg', 3, 'arwsetrdytfyguhjiiuiy6t56r54edrf', '1000000', 'http://localhost/Bioscoop/Project/api/Files/329760.jpg', 'http://localhost/Bioscoop/Project/api/Files/329760.jpg', 'http://localhost/Bioscoop/Project/api/Files/329760.jpg', 'Wb', 3, '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL auto_increment,
  `admin_name` varchar(100) NOT NULL,
  `admin_email` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL,
  PRIMARY KEY  (`admin_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_distributorreg`
--

CREATE TABLE `tbl_distributorreg` (
  `distributor_id` int(11) NOT NULL auto_increment,
  `distributor_name` varchar(50) NOT NULL,
  `distributor_address` varchar(100) NOT NULL,
  `distributor_email` varchar(50) NOT NULL,
  `distributor_phno` bigint(20) NOT NULL,
  `distributor_idproof` varchar(100) NOT NULL,
  `distributor_income` varchar(100) NOT NULL,
  `place_id` int(11) NOT NULL,
  `distributor_doj` date NOT NULL,
  `distributor_status` varchar(50) NOT NULL default '0',
  `distribuitor_password` varchar(50) NOT NULL,
  `dis_status` varchar(50) NOT NULL default 'Pending',
  PRIMARY KEY  (`distributor_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_distributorreg`
--

INSERT INTO `tbl_distributorreg` (`distributor_id`, `distributor_name`, `distributor_address`, `distributor_email`, `distributor_phno`, `distributor_idproof`, `distributor_income`, `place_id`, `distributor_doj`, `distributor_status`, `distribuitor_password`, `dis_status`) VALUES
(2, 'Tommichan Mulakupadam', 'Ernakulam', 'tommichan123@gmail.com', 9207236971, 'http://localhost/Bioscoop/Project/api/Files/d4.jpg', 'http://localhost/Bioscoop/Project/api/Files/income-certificate-form-delhi-150.jpg', 3, '2022-05-11', '2', '54321', 'Rejected'),
(3, 'Eros International', 'Idukki', 'eros123@gmail.com', 9207236971, 'http://localhost/Bioscoop/Project/api/Files/1679742.jpg', 'http://localhost/Bioscoop/Project/api/Files/income.jpg', 6, '2022-05-12', '1', 'eros@123', 'Accepted'),
(4, 'Beyon', 'Ernakulam', 'beyon@gmail.com', 0, 'http://localhost/Bioscoop/Project/api/Files/d1.jpg', 'http://localhost/Bioscoop/Project/api/Files/income.jpg', 23, '2022-05-14', '1', 'beyon', 'Accepted');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL auto_increment,
  `district_name` varchar(50) NOT NULL,
  PRIMARY KEY  (`district_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(8, 'Idukki'),
(9, 'Thiruvananthapuram'),
(10, 'Thrissur'),
(11, 'Kozhikode'),
(12, 'Kannur'),
(13, 'Kollam'),
(14, 'Kottayam'),
(16, 'Palakkkad'),
(17, 'Malappuram'),
(18, 'Alapuzha'),
(19, 'Ernakulam'),
(20, 'Pathanamthitta'),
(21, 'Wayanad'),
(22, 'Kassargod'),
(23, 'idk');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

CREATE TABLE `tbl_genre` (
  `genre_id` int(11) NOT NULL auto_increment,
  `genre_name` varchar(50) NOT NULL,
  PRIMARY KEY  (`genre_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Thriller'),
(2, 'Drama'),
(4, 'Comedy'),
(5, 'Romance'),
(6, 'Fantasy'),
(7, 'Adventure'),
(8, 'Biopic');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_percentage`
--

CREATE TABLE `tbl_percentage` (
  `percentage_id` int(11) NOT NULL auto_increment,
  `percentage_value` int(11) NOT NULL,
  PRIMARY KEY  (`percentage_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `tbl_percentage`
--

INSERT INTO `tbl_percentage` (`percentage_id`, `percentage_value`) VALUES
(10, 25),
(11, 50),
(12, 75);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `place_id` int(11) NOT NULL auto_increment,
  `district_id` int(11) NOT NULL,
  `place_name` varchar(50) NOT NULL,
  PRIMARY KEY  (`place_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_id`, `district_id`, `place_name`) VALUES
(3, 8, 'Thodupuzha'),
(10, 8, 'Kattapana'),
(11, 22, 'Ranipuram'),
(12, 21, 'Kalpetta'),
(13, 20, 'Sabarimala'),
(14, 19, 'Kochi'),
(15, 18, 'Arthungal'),
(16, 17, 'Manjeri'),
(17, 16, 'Nelliyampathy'),
(18, 14, 'Pala'),
(19, 13, 'Ashtamudi'),
(20, 12, 'Taliparamba'),
(21, 11, 'Kappad'),
(22, 10, 'Athirappally'),
(23, 9, 'Kovalam'),
(24, 8, 'Adimali'),
(25, 8, 'Vagamon'),
(26, 8, 'Karikode');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_platform`
--

CREATE TABLE `tbl_platform` (
  `platform_id` int(11) NOT NULL auto_increment,
  `platform_name` varchar(50) NOT NULL,
  PRIMARY KEY  (`platform_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tbl_platform`
--

INSERT INTO `tbl_platform` (`platform_id`, `platform_name`) VALUES
(2, 'OTT'),
(3, 'Theatre');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_producerreg`
--

CREATE TABLE `tbl_producerreg` (
  `producer_id` int(11) NOT NULL auto_increment,
  `producer_name` varchar(50) NOT NULL,
  `producer_address` varchar(100) NOT NULL,
  `producer_email` varchar(50) NOT NULL,
  `producer_phno` bigint(20) NOT NULL,
  `place_id` int(11) NOT NULL,
  `producer_doj` date NOT NULL,
  `producer_idproof` varchar(100) NOT NULL default '0',
  `produ_status` varchar(100) NOT NULL default 'Pending',
  `producer_status` varchar(50) NOT NULL default '0',
  `producer_password` varchar(50) NOT NULL,
  PRIMARY KEY  (`producer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tbl_producerreg`
--

INSERT INTO `tbl_producerreg` (`producer_id`, `producer_name`, `producer_address`, `producer_email`, `producer_phno`, `place_id`, `producer_doj`, `producer_idproof`, `produ_status`, `producer_status`, `producer_password`) VALUES
(1, 'Dulquar Salman', 'Ernakulam', 'dqsalman@gmail.com', 9207236971, 3, '2022-05-12', 'http://localhost/Bioscoop/Project/api/Files/dq.jpg', 'Rejected', '2', 'dq@123'),
(2, 'Sunny Wayne', 'Ernakulam', 'sunnywayne@gmail.com', 9207236971, 3, '2022-05-13', 'http://localhost/Bioscoop/Project/api/Files/pr4.jpg', 'Accepted', '1', 'sunny@123'),
(3, 'Listin Stephen', 'Thodupuzha', 'listinstephen@gmail.com', 7306520298, 3, '2022-05-16', 'http://localhost/Bioscoop/Project/api/Files/listin-stephen.jpg', 'Accepted', '1', 'listin'),
(8, 'abin', 'Malayil', 'abinmalayil524@gmail.com', 99999999, 3, '2022-05-17', 'http://localhost/Bioscoop/Project/api/Files/7468400.jpg', 'Accepted', '1', 'abin');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE `tbl_review` (
  `review_id` int(11) NOT NULL auto_increment,
  `review_text` varchar(200) NOT NULL,
  PRIMARY KEY  (`review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `tbl_review`
--


-- --------------------------------------------------------

--
-- Table structure for table `tbl_rights`
--

CREATE TABLE `tbl_rights` (
  `right_id` int(11) NOT NULL auto_increment,
  `film_id` varchar(50) NOT NULL,
  `distributor_id` varchar(50) NOT NULL,
  `offerrate` varchar(50) NOT NULL,
  `right_screens` varchar(50) NOT NULL,
  `release_date` varchar(50) NOT NULL,
  `right_status` int(11) NOT NULL default '0',
  PRIMARY KEY  (`right_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `tbl_rights`
--

INSERT INTO `tbl_rights` (`right_id`, `film_id`, `distributor_id`, `offerrate`, `right_screens`, `release_date`, `right_status`) VALUES
(9, '1', '4', '1000000', '200', '2022-10-28', 2),
(10, '5', 'null', '1000000', '200', '2022-02-20', 0),
(11, '6', 'null', '1000000', '200', '2022-05-23', 0),
(12, '6', 'null', '1000000', '200', '2022-05-23', 0),
(13, '6', '3', '1000000', '200', '2022-05-25', 1),
(14, '7', '4', '100000000', '500', '2022-05-25', 1),
(15, '22', '4', '10000000', '200', '2022-05-25', 1);

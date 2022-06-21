-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 21 juin 2022 à 12:34
-- Version du serveur : 8.0.28
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sellect`
--

-- --------------------------------------------------------

--
-- Structure de la table `contract`
--

DROP TABLE IF EXISTS `contract`;
CREATE TABLE IF NOT EXISTS `contract` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `actual_cost` int NOT NULL,
  `futur_cost` int DEFAULT NULL,
  `gain` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foreign_key` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `contributor`
--

DROP TABLE IF EXISTS `contributor`;
CREATE TABLE IF NOT EXISTS `contributor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `comment` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `notice`
--

DROP TABLE IF EXISTS `notice`;
CREATE TABLE IF NOT EXISTS `notice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Foreign_Key` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `partner`
--

DROP TABLE IF EXISTS `partner`;
CREATE TABLE IF NOT EXISTS `partner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `web_site` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phoneNumber` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(190) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `phoneNumber`, `email`, `password`, `role`) VALUES
(88, 'Pierre', 'Fabre', '0684758475', 'pierre@fabre.fr', '$2b$10$ofi4zSacjWOCjXjWbEDixeVKaEr8zp5Oekdf56y2.lvi6mq3edM/O', 'USER'),
(89, 'Audren', 'FLOCH', '06 72 37 11 66', 'a.floch@outlook.fr', '$2b$10$mOFmSOrwsQqfUG8egrkUXu2i1KOPOegUPKpWgZpaH03w3R9fLQi4q', 'ADMIN'),
(113, 'Damien', 'Lancel', '057688787', 'damien@lancel', '$2b$10$ZA6ZMcRQMFT8eBcgVe7aBujWkHNCUHuB4zMjt3ppA/Jlh4/ZLDoaS', 'USER'),
(114, 'Artemis', 'Fowl', '0787574763', 'artemis@fowl', '$2b$10$kt2Xd3Y5T2mo9iLpfN2UVufkLzxbLGPltTDpVTOBUtFf4LqxCD7zu', 'USER'),
(115, 'Timothée', 'Chalamet', '0665784567', 'tim@cham', '$2b$10$le.MtHb.7gsjkE.IWzN0POyK3I6HlSaEKJtZ1DWl6W0l2SqGEqyi2', 'USER'),
(116, 'Mathieu', 'Juchar', '074635345', 'math@juch.fr', '$2b$10$/UaGoG/da2.H/peSDaaHM.2ON7LTuVhcWNYzAwsqpek/Yy5otWx26', 'USER'),
(155, 'a', 'a', 'a', 'a@a', '$2b$10$dTQRspNyCiUgSOHk0wAbwOaatflW52mI0JCd4Bd8AsaqliotvDLK.', 'USER'),
(156, 'Jean', 'Truc', '0485764636', 'jean@truc.fr', '$2b$10$V0PDIfp84w3WL0aCeZ6yUuFpXoONn8F0gEZo1./.r1oPUJQFndm4G', 'USER'),
(157, 'Eléanore', 'Badin', '078675736', 'eleanore@badin.fr', '$2b$10$3pKqABADvfSWnotAkb2F9Ot7Li4BX3ezXo8xnpx7QXIKgjNyN1IpG', 'USER');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contract`
--
ALTER TABLE `contract`
  ADD CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `notice`
--
ALTER TABLE `notice`
  ADD CONSTRAINT `notice_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

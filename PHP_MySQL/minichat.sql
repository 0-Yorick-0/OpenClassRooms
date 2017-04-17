-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Lun 22 Août 2016 à 14:38
-- Version du serveur :  5.5.42
-- Version de PHP :  7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `minichat`
--

CREATE TABLE `minichat` (
  `ID` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `minichat`
--

INSERT INTO `minichat` (`ID`, `pseudo`, `message`, `date`) VALUES
(36, 'Cap''tain Crochet', 'Ca me gratte...', '2016-08-22 14:02:52'),
(37, 'Cap''tain Crochet', 'AÏE ! :''(', '2016-08-22 14:03:02'),
(38, 'Dark Vador', 'Fait chaud non ?', '2016-08-22 14:03:14'),
(39, 'Dark Vador', 'Je boirais bien un jus.', '2016-08-22 14:03:22'),
(40, 'Dark Vador', 'Avec une paille ... :(', '2016-08-22 14:03:30'),
(41, 'Terminator', 'J''ai oublié de prendre de la monnaie.', '2016-08-22 14:03:56'),
(42, 'Terminator', 'Je reviendrai', '2016-08-22 14:04:01'),
(43, 'Luke Skywalker', 'J''ai un peu perdu la main.', '2016-08-22 14:04:15'),
(44, 'Tintin', 'Sa mère lipopette !', '2016-08-22 14:06:06'),
(45, 'Inspecteur Flamby', 'Gogo gadget au mytho !', '2016-08-22 14:06:55'),
(46, 'Beethoven', 'Hein?!', '2016-08-22 14:23:10');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `minichat`
--
ALTER TABLE `minichat`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `minichat`
--
ALTER TABLE `minichat`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=47;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

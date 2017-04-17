-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 22 Août 2016 à 09:11
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tuto_mysql_openclassroom`
--

-- --------------------------------------------------------

--
-- Structure de la table `mini_chat_2`
--

CREATE TABLE `mini_chat_2` (
  `ID` int(11) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `mini_chat_2`
--

INSERT INTO `mini_chat_2` (`ID`, `auteur`, `message`, `date`) VALUES
(58, 'sebastien', 'il peut aussi retenir le peudo du dernier message', '2016-08-22 13:10:52'),
(57, 'sebastien', 'ce mini chat affiche les 5 derniers messages', '2016-08-22 13:07:37'),
(56, 'KEVIN', 'Aliquotiens ad si ponderum clivos.', '2016-08-22 13:03:35'),
(55, 'KEVIN', 'Mensis mittunt manu ad annua.', '2016-08-22 13:03:23'),
(54, 'KEVIN', 'Intellexisse quos quem quo fit tempus diligat posset putet referre.', '2016-08-22 13:03:02'),
(53, 'Loic', 'Vivere copiis vivere erunt ratione suspecta diligatur amicitiae locus ullo.', '2016-08-22 13:02:41'),
(52, 'SEBASTIEN', 'puis cliquez "Envoyez message"!', '2016-08-22 11:25:43'),
(51, 'Sebastien', 'Pour utiliser ce mini chat veuillez bien vérifier que les champs pseudo, et message son remplis', '2016-08-22 11:25:00'),
(50, 'Sebastien', 'Je suis le premier sur le mini chat!', '2016-08-20 09:45:11');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `mini_chat_2`
--
ALTER TABLE `mini_chat_2`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `mini_chat_2`
--
ALTER TABLE `mini_chat_2`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

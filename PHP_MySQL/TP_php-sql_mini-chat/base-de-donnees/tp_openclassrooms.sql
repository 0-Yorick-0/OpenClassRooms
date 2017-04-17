-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Client :  localhost:3306
-- Généré le :  Lun 22 Août 2016 à 13:07
-- Version du serveur :  5.5.49-log
-- Version de PHP :  7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tp_openclassrooms`
--

-- --------------------------------------------------------

--
-- Structure de la table `billets`
--

CREATE TABLE IF NOT EXISTS `billets` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `contenu` text NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `billets`
--

INSERT INTO `billets` (`id`, `titre`, `contenu`, `auteur`, `date_creation`) VALUES
(1, 'Bienvenue sur mon blog !', 'Je vous souhaite à toutes et à tous la bienvenue sur mon blog qui parlera de... PHP bien sûr !', 'Moi', '2016-03-25 16:28:41'),
(2, 'Le PHP à la conquête du monde !', 'C''est officiel, l''éléPHPant a annoncé à la radio hier soir "J''ai l''intention de conquérir le monde !".\r\nIl a en outre précisé que le monde serait à sa botte en moins de temps qu''il n''en fallait pour dire "éléPHPant". Pas dur, ceci dit entre nous...', 'Lui', '2016-03-27 18:31:11'),
(5, 'Un nouveau post', 'Nec minus feminae quoque calamitatum participes fuere similium. nam ex hoc quoque sexu peremptae sunt originis altae conplures, adulteriorum flagitiis obnoxiae vel stuprorum. inter quas notiores fuere Claritas et Flaviana, quarum altera cum duceretur ad mortem, indumento, quo vestita erat, abrepto, ne velemen quidem secreto membrorum sufficiens retinere permissa est. ideoque carnifex nefas admisisse convictus inmane, vivus exustus est.', 'Moi', '2016-04-27 18:12:11'),
(6, 'Bonjour à tous', 'Quid enim tam absurdum quam delectari multis inanimis rebus, ut honore, ut gloria, ut aedificio, ut vestitu cultuque corporis, animante virtute praedito, eo qui vel amare vel, ut ita dicam, redamare possit, non admodum delectari? Nihil est enim remuneratione benevolentiae, nihil vicissitudine studiorum officiorumque iucundius.', 'Nectar', '2016-05-04 12:12:11'),
(7, 'Une chose importante', 'Alii nullo quaerente vultus severitate adsimulata patrimonia sua in inmensum extollunt, cultorum ut puta feracium multiplicantes annuos fructus, quae a primo ad ultimum solem se abunde iactitant possidere, ignorantes profecto maiores suos, per quos ita magnitudo Romana porrigitur, non divitiis eluxisse sed per bella saevissima, nec opibus nec victu nec indumentorum vilitate gregariis militibus discrepantes opposita cuncta superasse virtute.', 'Damien', '2016-05-09 08:30:51'),
(8, 'Hey mon ami !', 'Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat, ad praetorium cum pompa sollemni perrexit morbosque diu causatus nec regiam introiit nec processit in publicum, sed abditus multa in eius moliebatur exitium addens quaedam relationibus supervacua, quas subinde dimittebat ad principem.', 'Nectar', '2016-06-05 17:01:12');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE IF NOT EXISTS `commentaires` (
  `id` int(11) NOT NULL,
  `id_billet` int(11) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `commentaire` text NOT NULL,
  `date_commentaire` datetime NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `id_billet`, `auteur`, `commentaire`, `date_commentaire`) VALUES
(1, 1, 'M@teo21', 'Un peu court ce billet !', '2010-03-25 16:49:53'),
(2, 1, 'Maxime', 'Oui, ça commence pas très fort ce blog...', '2010-03-25 16:57:16'),
(3, 1, 'MultiKiller', '+1 !', '2010-03-25 17:12:52'),
(4, 7, 'John', 'Preum''s !', '2010-03-27 18:59:49'),
(5, 2, 'Maxime', 'Excellente analyse de la situation !\r\nIl y arrivera plus tôt qu''on ne le pense !', '2010-03-27 22:02:13'),
(6, 5, 'Maxime', 'Excellente analyse de la situation !\r\nIl y arrivera plus tôt qu''on ne le pense !', '2010-03-27 22:02:13'),
(7, 7, 'Maxime', 'Oui, ça commence pas très fort ce blog...', '2010-03-25 16:57:16'),
(8, 8, 'Maxime', 'Oui, ça commence pas très fort ce blog...', '2010-03-25 16:57:16'),
(9, 5, 'John', 'Preum''s !', '2010-03-27 18:59:49'),
(10, 6, 'Maxime', 'Oui, ça commence pas très fort ce blog...', '2010-03-25 16:57:16'),
(11, 7, 'Maxime', 'Oui, ça commence pas très fort ce blog...', '2010-03-25 16:57:16'),
(12, 8, 'MultiKiller', '+1 !', '2010-03-25 17:12:52');

-- --------------------------------------------------------

--
-- Structure de la table `minichat`
--

CREATE TABLE IF NOT EXISTS `minichat` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `date_ajout` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `minichat`
--

INSERT INTO `minichat` (`id`, `pseudo`, `message`, `date_ajout`) VALUES
(1, 'damien', 'Alii nullo quaerente vultus severitate adsimulata patrimonia.\r\nSua in inmensum extollunt, cultorum ut puta feracium multiplicantes annuos fructus.\r\nQuae a primo ad ultimum solem se abunde iactitant possidere, ignorantes profecto maiores suos.', '2016-08-21 14:27:34'),
(2, 'angelique', 'tu as tappé n''importe quoi !', '2016-08-21 16:46:23'),
(3, '&lt;p&gt;damien&lt;/p&gt;', '&lt;p&gt; test secu &lt;/p&gt;', '2016-08-22 02:13:18'),
(4, 'damien', ' test secu ', '2016-08-22 06:21:22'),
(5, 'damien', 'je teste toujours', '0000-00-00 00:00:00'),
(6, 'Damein', 'teste date et heure', '0000-00-00 00:00:00'),
(7, 'damien', 'Ajout de l''heure', '2016-08-22 12:53:57'),
(8, 'damien', 'Oportunum est, ut arbitror, explanare nunc', '2016-08-22 12:57:40'),
(9, 'Damien', 'nec enim super hoc ulla documentorum rata est fides.', '2016-08-22 12:58:28'),
(10, 'Angelique', 'Mensarum enim voragines et varias voluptatum', '2016-08-22 14:28:56'),
(11, 'damien', 'praetermitto illuc transiturus quod quidam per ampla spatia urbis subversasque', '2016-08-22 14:31:20'),
(12, 'damien', 'test cookie', '2016-08-22 14:32:03'),
(13, 'Regis', 'test cookie 2', '2016-08-22 14:32:17'),
(14, 'Coralie', 'Dernier teste avant envoi !', '2016-08-22 14:51:53'),
(15, 'Gerard', 'Promis... c''est le dernier !', '2016-08-22 14:58:36'),
(16, 'damien', 'et non il en reste toujours un !', '2016-08-22 15:02:25');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `billets`
--
ALTER TABLE `billets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `minichat`
--
ALTER TABLE `minichat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `billets`
--
ALTER TABLE `billets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `minichat`
--
ALTER TABLE `minichat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

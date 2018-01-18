-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Creato il: Gen 18, 2018 alle 09:26
-- Versione del server: 5.6.35
-- Versione PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `resources`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `employement`
--

CREATE TABLE `employement` (
  `id_r` int(11) NOT NULL,
  `id_p` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name_project` varchar(45) DEFAULT NULL,
  `start_project` date DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `nsenior` int(3) DEFAULT NULL,
  `njunior` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `project`
--

INSERT INTO `project` (`id`, `name_project`, `start_project`, `deadline`, `status`, `nsenior`, `njunior`) VALUES
(1, 'Prova', '2018-01-01', '2018-01-15', 'Delivery', 3, 3),
(6, 'prova 4', '3005-07-03', '3005-07-03', 'Evaluation', 4, 5),
(7, 'prova10', '0000-00-00', '2122-09-20', 'Design', 8, 8),
(9, 'tre', '2009-02-03', '2009-02-03', 'Development', 3, 3),
(10, 'vxv', '2009-02-03', '2009-02-03', 'Design', 6, 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `resource`
--

CREATE TABLE `resource` (
  `id` int(11) NOT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `hired` date DEFAULT NULL,
  `assigned` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `resource`
--

INSERT INTO `resource` (`id`, `surname`, `name`, `type`, `hired`, `assigned`) VALUES
(1, 'Lisci', 'nicola', 'senior', '3234-08-31', 0),
(27, 'Boi', 'Mauro', 'dev', '1973-11-26', 0),
(28, 'Cabras', 'Matteo', 'junior', '2018-01-12', 0),
(30, 'Scalas', 'Simone', 'Senior', '2018-01-08', 0),
(32, 'rererereerer', 'wqqwwqqw', 'junior', '3225-08-31', 0),
(37, 'tre', 'tre', 'senior', '2003-12-12', 0),
(39, 'cxx', 'cxx', 'junior', '0000-00-00', 0);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `employement`
--
ALTER TABLE `employement`
  ADD PRIMARY KEY (`id_r`,`id_p`),
  ADD UNIQUE KEY `id_idx` (`id_p`,`id_r`) USING BTREE;

--
-- Indici per le tabelle `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `resource`
--
ALTER TABLE `resource`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT per la tabella `resource`
--
ALTER TABLE `resource`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `employement`
--
ALTER TABLE `employement`
  ADD CONSTRAINT `employement_ibfk_1` FOREIGN KEY (`id_r`) REFERENCES `resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id` FOREIGN KEY (`id_p`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

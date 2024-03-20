-- Progettazione Web 
DROP DATABASE if exists snake; 
CREATE DATABASE snake; 
USE snake; 
-- MySQL dump 10.13  Distrib 5.7.28, for Win64 (x86_64)
--
-- Host: localhost    Database: snake
-- ------------------------------------------------------
-- Server version	5.7.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `mode` varchar(10) NOT NULL,
  `score` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,'cleverline','obstacles',40),(2,'cleverline','classic',61),(3,'cleverline','classic',126),(5,'cleverline','classic',389),(6,'cleverline','classic',137),(13,'zia_ubi','classic',39),(15,'zia_ubi','classic',283),(16,'zia_ubi','classic',44),(17,'zia_ubi','classic',158),(18,'zia_ubi','classic',444),(20,'gianma23','classic',59),(23,'cleverline','obstacles',135),(24,'cleverline','obstacles',158),(27,'cleverline','obstacles',54),(30,'cleverline','classic',96),(31,'cleverline','obstacles',41),(33,'cleverline','obstacles',88),(36,'cleverline','obstacles',41),(40,'cleverline','obstacles',112),(41,'cleverline','obstacles',127),(43,'cleverline','classic',148),(44,'cleverline','classic',134),(47,'cleverline','classic',192),(51,'cleverline','classic',70),(54,'zia_ubi','obstacles',25),(55,'cleverline','warped',147),(57,'cleverline','warped',293),(59,'cleverline','obstacles',103),(60,'zia_ubi','warped',220),(63,'zia_ubi','obstacles',51),(64,'zia_ubi','classic',237),(66,'zia_ubi','warped',188),(67,'cleverline','warped',60),(68,'gianma23','warped',69),(69,'cleverline','classic',140),(70,'namaWho01','warped',405),(82,'namaWho01','obstacles',78),(84,'namaWho01','obstacles',21),(85,'namaWho01','obstacles',49),(86,'namaWho01','obstacles',59),(87,'cleverline','warped',149),(88,'namaWho01','warped',64),(89,'namaWho01','warped',26),(90,'admin1','warped',263),(91,'admin1','obstacles',87),(92,'admin1','obstacles',49),(93,'admin1','obstacles',6),(95,'admin1','obstacles',12),(96,'admin1','obstacles',152),(97,'admin1','obstacles',54),(98,'admin1','obstacles',182),(99,'admin1','obstacles',24),(100,'admin1','classic',172),(101,'admin1','classic',249),(102,'admin1','classic',157);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Admin','Admin','admin1','$2y$10$gSNV1zCBZa6qLOJldZ4RE.Ge2GmIq7U4kwOhFqJudSUjt8uTPSEMW','admin@admin.it'),('Alessio','Franchini','cleverline','$2y$10$AFmLydAoPhC8fcba0nQzb.J3bKxdePKowyXGlTHT9P4DbXz4XCwy6','ale.fra111@gmial.it'),('Gianma','Saggini','gianma23','$2y$10$SoGR0i5ZMbdKTNthR4ywnOCDU.jsuTwmE1yO2g.KryzD1euSDvERq','gian.sag@gmail.com'),('Daniel','Namaki','namaWho01','$2y$10$d4DGGCP3YGGW/hEbceEp8OO.W8eAUy61sZ6V9JV6P3Dc/.EMVK59O','nama.who@yahoo.it'),('Niccolo','Settimelli','niccosetti','$2y$10$.GW6Ef5KgqQ/9EsPyaBxB.LwjMpgJh2snYl9qpgd8Q9VPntbEBT5m','niccolo.setti@gmail.com'),('Cristina','Lombardo','zia_ubi','$2y$10$ICpDUXSvrUrLiJ7JRy8jSOdArCWvb0Yjo3rWoaz11VSsDhp.hRsna','w+email@mail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-20 23:26:45

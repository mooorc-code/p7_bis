-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `groupomania`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `groupomania` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `groupomania`;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `postId` int DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`userId`),
  KEY `message_id` (`postId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (9,22,23,'blabla test 6',NULL,NULL),(15,NULL,NULL,NULL,NULL,NULL),(16,NULL,NULL,NULL,NULL,NULL),(18,26,70,'blabla',NULL,NULL),(19,26,70,'blabla',NULL,NULL),(20,NULL,NULL,NULL,NULL,NULL),(21,NULL,NULL,NULL,NULL,NULL),(22,NULL,NULL,NULL,NULL,NULL),(23,NULL,89,NULL,NULL,NULL),(24,26,89,'tout nouveau commentaire',NULL,NULL),(25,26,89,'encore un ',NULL,NULL),(26,26,89,'encore un ',NULL,NULL),(27,26,88,'encore une ',NULL,NULL),(28,26,86,'encore une blague ',NULL,NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `publication` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_index_1` (`id`),
  KEY `user_id` (`userId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (23,26,'text cool 555 ','image cool 1',NULL,NULL),(40,26,'\"fgdfgdfdfd3\"',NULL,NULL,NULL),(41,26,'\"fgdfgdfdfd3\"',NULL,NULL,NULL),(42,26,'\"fgdfgdfdfd3\"','http://localhost:5000/images/batte.png1647257975235.png',NULL,NULL),(43,26,'\"fgdfgdfdfd3\"','http://localhost:5000/images/batte.png1647258068598.png',NULL,NULL),(44,26,'gilg','http://localhost:5000/images/blablasuperfichier1647258727798.jpg',NULL,NULL),(45,26,'dfgdsfg','http://localhost:5000/images/blablasuperfichier1647853635693.jpg',NULL,NULL),(46,26,'\"fgdfgdfdfd3\"','http://localhost:5000/images/batte.png1647854431780.png',NULL,NULL),(47,26,'fgdsfgdfg','http://localhost:5000/images/blablasuperfichier1647854569544.jpg',NULL,NULL),(48,26,'n,bv,n','http://localhost:5000/images/blablasuperfichier1647854758217.jpg',NULL,NULL),(49,26,'dfgdsfg','http://localhost:5000/images/blablasuperfichier1647855130563.jpg',NULL,NULL),(50,26,'fgdfgdfgs','http://localhost:5000/images/blablasuperfichier1647855216345.jpg',NULL,NULL),(51,26,'gh','http://localhost:5000/images/blablasuperfichier1647855427392.jpg',NULL,NULL),(52,26,'ztyrtyretyery','http://localhost:5000/images/blablasuperfichier1647855538261.jpg',NULL,NULL),(53,26,'dfgdfg','http://localhost:5000/images/blablasuperfichier1647855661536.jpg',NULL,NULL),(54,26,'\"fgdfgdfdfd3\"','http://localhost:5000/images/batte.png1647855750801.png',NULL,NULL),(55,26,'','http://localhost:5000/images/blablasuperfichier1647855866162.jpg',NULL,NULL),(56,26,'qdsfqsdf','http://localhost:5000/images/blablasuperfichier1647855874031.jpg',NULL,NULL),(57,26,'','http://localhost:5000/images/blablasuperfichier1647856288497.jpg',NULL,NULL),(58,26,'','http://localhost:5000/images/blablasuperfichier1648027266881.jpg',NULL,NULL),(59,26,'','http://localhost:5000/images/blablasuperfichier1648027718259.jpg',NULL,NULL),(60,26,'','http://localhost:5000/images/blablasuperfichier1648030326045.jpg',NULL,NULL),(61,26,'','http://localhost:5000/images/blablasuperfichier1648030680356.png',NULL,NULL),(62,26,'','http://localhost:5000/images/blablasuperfichier1648032431530.jpg',NULL,NULL),(63,26,'','http://localhost:5000/images/blablasuperfichier1648032864646.jpg',NULL,NULL),(64,26,'','http://localhost:5000/images/blablasuperfichier1648033050440.jpg',NULL,NULL),(65,26,'','http://localhost:5000/images/blablasuperfichier1648033640501.jpg',NULL,NULL),(66,26,'','http://localhost:5000/images/28041884fd18a732f09a17628a2975d4.jpg1648033743774.jpg',NULL,NULL),(67,26,'','http://localhost:5000/images/28041884fd18a732f09a17628a2975d4.jpg1648033848897.jpg',NULL,NULL),(68,26,'','http://localhost:5000/images/28041884fd18a732f09a17628a2975d4.jpg1649060829258.jpg',NULL,NULL),(69,26,'','http://localhost:5000/images/Annotation_2022-02-11_075512.jpg1649060931956.jpg',NULL,NULL),(70,26,'\"fgsdfg\"','http://localhost:5000/images/245849286_2011686895667053_2448997366139449572_n.jpg1649063438345.jpg',NULL,NULL),(71,26,'','http://localhost:5000/images/Annotation_2022-02-11_075512.jpg1649069269990.jpg',NULL,NULL),(72,26,'','http://localhost:5000/images/Annotation_2021-10-05_124856.jpg1649667120267.jpg',NULL,NULL),(73,26,'','http://localhost:5000/images/28041884fd18a732f09a17628a2975d4.jpg1649686960866.jpg',NULL,NULL),(74,26,'','http://localhost:5000/images/28041884fd18a732f09a17628a2975d4.jpg1649686981537.jpg',NULL,NULL),(75,26,'','http://localhost:5000/images/28041884fd18a732f09a17628a2975d4.jpg1649687035707.jpg',NULL,NULL),(76,26,'','http://localhost:5000/images/277778535_4971535416263871_1318272816057686070_n.jpg1649688193123.jpg',NULL,NULL),(77,26,'','http://localhost:5000/images/277778535_4971535416263871_1318272816057686070_n.jpg1649688269303.jpg',NULL,NULL),(78,26,'','http://localhost:5000/images/277778535_4971535416263871_1318272816057686070_n.jpg1649688442925.jpg',NULL,NULL),(79,26,'','http://localhost:5000/images/277778535_4971535416263871_1318272816057686070_n.jpg1649688479961.jpg',NULL,NULL),(80,26,'','http://localhost:5000/images/274810832_5324988564191527_8146074657045192912_n.jpg1649692138160.jpg',NULL,NULL),(81,26,'','http://localhost:5000/images/273714033_3116667308662010_6398147832643724326_n.jpg1650272134064.jpg',NULL,NULL),(82,26,'','http://localhost:5000/images/273714033_3116667308662010_6398147832643724326_n.jpg1650272176868.jpg',NULL,NULL),(83,26,'','http://localhost:5000/images/245849286_2011686895667053_2448997366139449572_n.jpg1650283500253.jpg',NULL,NULL),(84,26,'','http://localhost:5000/images/273935537_2092040564295602_6261127143031070910_n.jpg1650290366303.jpg',NULL,NULL),(85,26,'','http://localhost:5000/images/274810832_5324988564191527_8146074657045192912_n.jpg1650290564704.jpg',NULL,NULL),(86,26,'','http://localhost:5000/images/274647233_2100012676831724_686167451250140711_n.jpg1650294375867.jpg',NULL,NULL),(87,26,'','http://localhost:5000/images/274810832_5324988564191527_8146074657045192912_n.jpg1650294563111.jpg',NULL,NULL),(88,26,'cdwvcxvbvb,gd nouveau ','http://localhost:5000/images/274810832_5324988564191527_8146074657045192912_n.jpg1650294638530.jpg',NULL,NULL),(89,26,'sdfsqdfsfd','http://localhost:5000/images/274810832_5324988564191527_8146074657045192912_n.jpg1650295775690.jpg',NULL,NULL),(90,26,'blablabla polignac','http://localhost:5000/images/Annotation_2022-02-11_075512.jpg1650726994818.jpg',NULL,NULL),(91,26,'gnoufgnouf à la plage','http://localhost:5000/images/Annotation_2022-02-11_075512.jpg1650732860114.jpg',NULL,NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `poste` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` longblob,
  `admin` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_index_0` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jean@michel.fr',NULL,NULL,NULL,'$2b$10$VxpFS6r4btyNTY2nc8Ugq.qHp7zvFaEoxRmIihMHa69gqKvZbEDMC',NULL,NULL,NULL,NULL),(5,'jean2@michel.fr',NULL,NULL,NULL,'$2b$10$ulU/O.1fSo3OeC1BAezvXemptSIWRG81VWuXbKiBcJLTolUmaSJfi',NULL,NULL,NULL,NULL),(7,'jean-midu12@michel.fr','michel','jean','dev','$2b$10$xrYYXE.50xKn85l3kFuApenhdUx86uKwtIlmicNtXsYgFhVRFGkme',NULL,NULL,NULL,NULL),(8,'jean-mi@michel.fr','michel','jean','dev','$2b$10$GYRmm1CKo1uDFgtctsx.COU.4G5OxklB9y/Hbxsb.oCrQkv3t.Pei',NULL,NULL,NULL,NULL),(14,'jmi@michel.fr','michel','jean','dev','$2b$10$tplGzFzM9s6XwY1EaT0MoePVSvH.31W3Fe.rrmSvxM9dpHs5sDAxW',_binary 'photo',NULL,NULL,NULL),(15,'tototiti@michel.fr','michel','jean','dev','$2b$10$YAb0FcWhHJ.Fuug6xm..bekhD9kpmYo/GdSwf2HHwsr8zW0bY709a',_binary 'photo',NULL,NULL,NULL),(21,'jeanmichel@exemple.fr','michel','jean','dev','$2b$10$LnRKBtarTHysm9SK65/pzOe0fEBD9c18NZQ3t0Hq6D69g8hQznmrC',_binary 'photo',NULL,NULL,NULL),(22,'johndoe1@exemple.fr','doe','john','super developpeur','$2b$10$EUiS2PYLdZbKQkdp68.WcemTW3SvHmpmLc36.X6AX5mYs3nywZZRu',_binary 'photo',NULL,NULL,NULL),(26,'','doe','john','','','',NULL,NULL,NULL),(27,'admin@exemple.fr','admin','admin','admin','$2b$10$4V0CAwRLnD7LXOeclzfyx.T39dK9phmOf.sY3fJ4S.qEMGoxyT8m.',_binary 'admin',1,NULL,NULL),(28,'test3@exemple.fr','doe','john','dev','$2b$10$HH3H.l0Ze7d4MSw4cskiH.ZpHElm5WqQYSIL.TAOKX6b12nrm4ykW',_binary 'photo',0,NULL,NULL),(29,'marctruc4@exemple.fr','doe','john','developpeur','$2b$10$PMcrg1P0C7LE3McHsrqkQuJ8pSOpF4T.XPN0DE4vNFh/h2sqK0ESC',_binary 'photo',0,NULL,NULL),(30,'marctruc4@exemple.ffgdsfgr','doe','john','dev','$2b$10$28nq.OxlzxGIQxKzW.TPhesZLsaCUGq4Y1E2RdME.dDlqWlcSKbtK',_binary 'photo',0,NULL,NULL),(31,'marc\'truc4@exemple.fr','doe','john','dev','$2b$10$3IDs/TO7/plHxY11OsXEiuL4vJiWj.xbM1./5jj6YdvhVhEpNTOu2',_binary 'photo',0,NULL,NULL),(34,'marctruc@exemple.fr','doe','john','dev','$2b$10$3knUtj8tbceq8khTXpCiteVqYPBb8Vscjz1Eac78RkXiMD2Xkc7q.',_binary 'photo',0,NULL,NULL),(36,'sdfgg@sdfsf.fr','qsdfqdsf','qsdfsqdfq','dsfqsdf','$2b$10$FmORpj1kpQebkiSVcRlI3uYJct0q8uIYU/21iZl2EXAOqDQ.9qJfW',_binary 'qsdfsdf',0,NULL,NULL),(37,'qsdf@exemple.fr','qdsfg','qsdfsdf','df','$2b$10$pWIIE0/epsXwNUgYz31HQOHuYMBDL3049.4ijyYWvbiLNyy3QBIl2',_binary 'sdfgdfg',0,NULL,NULL),(38,'test@dfjkhqdsf.fr','kjdflkjsdf','fdjklmj','fkgjg','$2b$10$4BaI0jYgnVslxHxQJLZSSOGCGKRSfUOZW6y4Sx4FCPbWzR95XDh16',_binary 'dsfkj',0,NULL,NULL),(39,'test@dfgjkh.fr','fdgg','dgdfsg','fqsdf','$2b$10$umBXFW5Z1NBe/67VFjLdYOvBo6MRWCUo7vXIJhvSOcxw./t5p1SXW',_binary 'sdfssdf',0,NULL,NULL),(40,'fqsfdsdf@exemple.fr','fdgfg','qsdsdf','dqfklj','$2b$10$VAbyfaskkWP84hsBnDV/P.ztACrKSRC8qFwU2wWfEZhuJMtCB0vdK',_binary 'qsdf',0,NULL,NULL),(41,'fhghj@exdkj.fr','qdsfsdf','sdfsqdf','fqsdf','$2b$10$ilD/So4MEzgpV2.1ry9XnO7y2.gyCjCAbCRM6hpi8FkcBS8Xcul0q',_binary 'qsdfsdf',0,NULL,NULL),(42,'test545@exemple.fr','sdfjh','dfkgk','jshj','$2b$10$WAXdthYq.qFqC/lz7m7xCuJrq11.NPGCyf.kCmcKQ9RLUFzCPSs4.',_binary 'dfjlkrf',0,NULL,NULL),(43,'fgsd@exemple.fr','dsfgdfgdfg','dfgdfg','fdgsfgdfg','$2b$10$5d4VtxX3b6TAu3/wOaBIdOv4NSnn7P8vj3BGGE8ncfIXbLH92ZjS6',_binary 'dsfgsdfg',0,NULL,NULL),(44,'johndoe10@exemple.fr','doe','john','dev','$2b$10$k.fPtjTORgg2pwINnN6UnOSDaO7td9g6qf3On8SUr71lP8VvuLyQ6',_binary 'photo',0,NULL,NULL),(46,'johndoe667@exemple.fr','doe','john','dev','$2b$10$MNsWPSp.RfZGpUxlCgRRUekY3ooaE388k82HkBEv6dEWZ0rZPfqhq',_binary 'photo',0,NULL,NULL),(47,'johndoe221@exemple.fr','toto','titi','devgrowl','$2b$10$ah27yvSgcoGq6IrfPqL0YeM/z6ARi8ziSef66Kz/Ao9KJ48LwLc5y','',0,NULL,NULL),(48,'johndoe254@exemple.fr','toto','titi','devgrowl','$2b$10$AiRPpXmmW7E5HSRoZyu60e0PXOHZ7x7Z5bxqwHtNg.77AGvgKFv9C','',0,NULL,NULL),(49,'johndoe21216@exemple.fr','toto','titi','dev','$2b$10$k.ToruFW/O8cqh85I0goheSASO/oZlZe28bCGzkHSXnFmoCdcxKHG','',0,NULL,NULL),(50,'johndoe2dsf@exemple.fr','toto','titi','dev','$2b$10$TjhbLyCiVRppObXxf/I6au/OgFNULLKLNXwVD96aX/xh/VJ2tPFFO','',0,NULL,NULL),(51,'johndoe145@exemple.fr','toto','titi','dev','$2b$10$KieQmLNLhR52nK2Qe0OBwerNBxfexp2dIFrBxSdOdGLFHiqHIG6E2','',0,NULL,NULL),(53,'random@exemple.fr','random','random','dev','$2b$10$ClM4lm/Rx9qhOKddUR5IEOI9uwloA4GRgWyTM3tk54FYHpjz0UmtW','',0,NULL,NULL),(54,'random2@exemple.fr','random','random','random','$2b$10$O5quA0DGQRnt1CZlt8Gi6u7Uis6bFdAgZ9mgio1phqDeqpzMssgn2','',0,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03 13:38:30

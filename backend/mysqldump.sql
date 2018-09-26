/*
 Navicat MySQL Data Transfer

 Source Server         : my vps
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : 173.82.245.98:3306
 Source Schema         : lojinhadoze

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 26/09/2018 16:16:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
BEGIN;
INSERT INTO `category` VALUES (1, 'Cavalo 1', 'cavalo,animal de carga', 'Cavalos');
INSERT INTO `category` VALUES (2, 'Cavalo 2', 'cavalo,animal de carga', 'Cavalos');
INSERT INTO `category` VALUES (3, 'Cavalo 3', 'cavalo,animal de carga', 'Cavalos');
INSERT INTO `category` VALUES (4, 'Cavalo 4', 'cavalo,animal de carga', 'Cavalos');
COMMIT;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(65) NOT NULL AUTO_INCREMENT,
  `user_id` int(65) DEFAULT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `timestamp` timestamp(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(65) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `features` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
BEGIN;
INSERT INTO `product` VALUES (1, 'Smartphone LG K10 Pro Dual Chip Android 7.0 Nougat Tela 5.7\" Octacore 32GB 4G Wi-Fi Câmera 13MP - Titânio', 'Surpreenda-se com o Smartphone LG X Cam. Equipado com as tecnologias mais recentes do mercado, ele conta com Dual Chip, processador Octa Core 1.1 GHz, Android 6.0 Marshmallow, tela 5.2\", memória interna de 16GB, conectividade 4G e com as câmeras de 13MP e 8MP com 120 graus de ângulo de visão, que são perfeitas para eternizar todos os seus momentos especiais', 'https://images-americanas.b2w.io/produtos/01/00/item/132177/6/132177650_1GG.png', '1000', '1|2', 'Novo|bla bla');
INSERT INTO `product` VALUES (2, 'Smart TV LED 40\" Philco PTV40E21DSWNC Full HD com Conversor Digital 2 HDMI 2 USB Wi-Fi 60Hz - Champagne', 'Ter uma TV de tela grande em casa é muito bom, não é mesmo? Ainda mais quando ela conta com recursos modernos, que proporcionam conforto e bons momentos de entretenimento para quem está assistindo. A Smart TV LED 40\" Philco Full HD é assim, ela vai te proporcionar maior nitidez, clareza e definição, para você assistir e curtir ao máximo seus programas, filmes e series preferidos. ', 'https://images-americanas.b2w.io/produtos/01/00/item/133256/7/133256704_1GG.jpg', '1250', '2|3', 'blabla|novo');
INSERT INTO `product` VALUES (3, 'Smartphone LG K10 Pro Dual Chip Android 7.0 Nougat Tela 5.7\" Octacore 32GB 4G Wi-Fi Câmera 13MP - Titânio', 'Surpreenda-se com o Smartphone LG X Cam. Equipado com as tecnologias mais recentes do mercado, ele conta com Dual Chip, processador Octa Core 1.1 GHz, Android 6.0 Marshmallow, tela 5.2\", memória interna de 16GB, conectividade 4G e com as câmeras de 13MP e 8MP com 120 graus de ângulo de visão, que são perfeitas para eternizar todos os seus momentos especiais', 'https://images-americanas.b2w.io/produtos/01/00/item/132177/6/132177650_1GG.png', '999', '3|4', 'oioioioi|adsda');
INSERT INTO `product` VALUES (4, 'Smartphone LG K10 Pro Dual Chip Android 7.0 Nougat Tela 5.7\" Octacore 32GB 4G Wi-Fi Câmera 13MP - Titânio', 'Surpreenda-se com o Smartphone LG X Cam. Equipado com as tecnologias mais recentes do mercado, ele conta com Dual Chip, processador Octa Core 1.1 GHz, Android 6.0 Marshmallow, tela 5.2\", memória interna de 16GB, conectividade 4G e com as câmeras de 13MP e 8MP com 120 graus de ângulo de visão, que são perfeitas para eternizar todos os seus momentos especiais', 'https://images-americanas.b2w.io/produtos/01/00/item/132177/6/132177650_1GG.png', '3000', '1|', 'asdasd|ffsdgdsgfd');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(65) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `social_id` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  `zip_number` varchar(255) DEFAULT NULL,
  `zip_additional` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'ze', 'ze@gmail.com', 'asenhadoze', NULL, '05336010', '479', 'bloco C apto 62');
INSERT INTO `users` VALUES (2, 'ze', 'ze@gmail.com', 'asenhadoze', NULL, '05336010', '479', 'bloco C apto 62');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

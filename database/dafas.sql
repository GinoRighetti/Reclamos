CREATE DATABASE dafas;
USE dafas;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `agencias`;
CREATE TABLE IF NOT EXISTS `agencias` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Agencia` int(11) NOT NULL,
  `Titular` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Direccion` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Localidad` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `CP` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Abreviatura` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Caracteristica` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Telefono` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Alternativos` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Alta` timestamp NULL DEFAULT NULL,
  `Baja` timestamp NULL DEFAULT NULL,
  `Id2` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=125 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

INSERT INTO `agencias` (`Id`, `Agencia`, `Titular`, `Direccion`, `Localidad`, `CP`, `Abreviatura`, `Caracteristica`, `Telefono`, `Alternativos`, `Alta`, `Baja`, `Id2`) VALUES
(7, 4, 'PATIÑO, Estela Gladis', 'Coronel Gil 108', 'Santa Rosa', '6300', 'SR', '02954', '414466', '458256/Fraga 420276/Gomez 433731/Hijo 15371499-15370987', NULL, NULL, 1),
(5, 1, 'MIEGLO DE MARTIN, Francisca', 'Oliver  409', 'Santa Rosa', '6300', 'SR', '02954', '412857', 'Hilda 15550993 / Casa 427439', NULL, '2015-09-30 03:00:00', 1),
(6, 3, 'OTIÑANO, Clara Zulema', 'Unanue 326', 'Santa Rosa', '6300', 'SR', '02954', '424720', 'Casa 428417 / Clara 15529591', NULL, NULL, 1),
(8, 5, 'BEDETTI, Luis Alberto', 'Lope de Vega 968', 'Santa Rosa', '6300', 'SR', '02954', '431486', 'Luis 15600429 / Julio 15586034 - 701146', NULL, NULL, 1),
(9, 7, 'RAMBUR, Juan Oscar', 'Ameghino 864', 'Santa Rosa', '6300', 'SR', '02954', '435116', 'Rambur 15545614 / 431677', NULL, NULL, 1),
(10, 8, 'ABRAM, Horacio Alberto', 'Gonzalez 791', 'Santa Rosa', '6300', 'SR', '02954', '419124', '418402', NULL, NULL, 1),
(11, 9, 'SCARPELLO, José', 'Av. San Martín 718', 'Santa Rosa', '6300', 'SR', '02954', '453171', 'Scarpello 15402992 / Marcela 15367892 - 561038', NULL, NULL, 1),
(12, 11, 'BAUMGERTNER, Ricardo Domingo', 'Márquez 2450', 'Santa Rosa', '6300', 'SR', '02954', '428188', 'Lucas 15619698 / Alina 15514189 / 458086', NULL, '2015-11-30 03:00:00', 1),
(13, 12, 'MATEOS DE MISKOF, Nélida Martina', 'Roque Saenz Peña 941', 'Santa Rosa', '6300', 'SR', '02954', '432767', 'Lorena 15479367 / Jimena 15633575', NULL, '2015-04-01 03:00:00', 1),
(14, 13, 'RAMBUR, José Alberto', 'Av. San Martín 498', 'Santa Rosa', '6300', 'SR', '02954', '455877', '455373', NULL, NULL, 1),
(15, 14, 'LINO, Sergio Daniel', 'H. Yrigoyen 172', 'Santa Rosa', '6300', 'SR', '02954', '414451', 'Lino 15468498 / Baba 15648933 - 410078', NULL, NULL, 1),
(16, 15, 'POLETTI, Carlos Julio', 'Almirante Brown 937', 'Santa Rosa', '6300', 'SR', '02954', '427403', '438357 / Carlitos 15394626 / Julio 15592456', NULL, NULL, 1),
(17, 16, 'LAUSIRICA, Claudia Leticia', 'Alvear 686', 'Santa Rosa', '6300', 'SR', '02954', '242727', 'Claudia 15339376 / Sole (Lun-Mar-Jue Tarde y Sab)15531655', NULL, NULL, 1),
(18, 17, 'GONZALEZ, Elida', 'Unanue  478', 'Santa Rosa', '6300', 'SR', '02954', '411711', '430696 / Mariana 15630975 / Sardiña 15540810', NULL, NULL, 1),
(19, 18, 'ARCHIERI, Juan Ignacio', 'Hilario Lagos  409', 'Santa Rosa', '6300', 'SR', '02954', '422340', 'Nora 416703 Casa', NULL, '2013-12-31 03:00:00', 1),
(20, 19, 'EYHERAMONHO DE EVANGELISTA, María Elisa', 'Coronel Gil 574', 'Santa Rosa', '6300', 'SR', '02954', '422878', 'Marita 15518395 / Casa 562977', NULL, NULL, 1),
(21, 20, 'MISULA, Héctor Miguel', '9 de Julio 72', 'Santa Rosa', '6300', 'SR', '02954', '414932', '428115 - 410115 / 15662372', NULL, NULL, 1),
(22, 21, 'MARANO, Juan Carlos', 'Av. Luro 1490', 'Santa Rosa', '6300', 'SR', '02954', '563321', 'Casa 425751 /Lucas 15502330 / Carina 15604983', NULL, NULL, 1),
(23, 22, 'ALEM, María de los Angeles', 'Av. Luro 101', 'Santa Rosa', '6300', 'SR', '02954', '415671', 'María 15683315 / Casa 413455', NULL, NULL, 1),
(24, 23, 'SAN SEBASTIAN, Luis', 'Av San Martin (O) 82', 'Santa Rosa', '6300', 'SR', '02954', '417808', '416319', NULL, NULL, 1),
(25, 24, 'PULMANN, Nélida Esther', 'Pasteur 501', 'Santa Rosa', '6300', 'SR', '02954', '414924', '15625616', NULL, NULL, 1),
(26, 25, 'SALAS, Jorge Francisco', 'Almirante Brown 578', 'Santa Rosa', '6300', 'SR', '02954', '436908', 'TMañ Valeria 15656806 / TT Silvina 15477537  German 455675', NULL, '2014-11-01 03:00:00', 1),
(27, 26, 'LLANOS, Roberto Hugo', 'Pueyrredón  481', 'Santa Rosa', '6300', 'SR', '02954', '418421', 'Marta 15628382 / Casa 385420', NULL, NULL, 1),
(28, 27, 'CAMPO NEVEU, Blanca Nieves', 'Alvear 272', 'Santa Rosa', '6300', 'SR', '02954', '426991', 'Oscar 15364519 / Blanca 455174', NULL, NULL, 1),
(29, 28, 'MOLINARI, Sandro César ', 'Av. España 5', 'Santa Rosa', '6300', 'SR', '02954', '389431', 'Darío 15532205 y 389428 / (02302) 15478840 ', NULL, NULL, 1),
(30, 29, 'FERREYRA, Norberto Oscar', 'Unanue 644', 'Santa Rosa', '6300', 'SR', '02954', '426148', 'Matias 1536-8806 / Ferreyra 1532-8229 /Paula 1568-6207 /Lorena 1567-5439 / Sra1554-5923', NULL, NULL, 1),
(31, 30, 'MOLINARI,  Francisco Huvert', 'Trenel 1817', 'Santa Rosa', '6300', 'SR', '02954', '421105', 'Belén 15641393 / Marcelo 15320226', NULL, NULL, 1),
(32, 31, 'MOLINARI, Antonio César', 'Calle 10 803', 'General Pico', '6360', 'GP', '02302', '424352', 'Sandro (02302)15693218 - (02302)422625', NULL, NULL, 2),
(33, 32, 'SANCHEZ, Alberto Raúl', 'Calle 19 1110', 'General Pico', '6360', 'GP', '02302', '426285', '(02302) 15608420', NULL, NULL, 2),
(34, 33, 'PONZIO, Lydia', 'Calle 13 1175', 'General Pico', '6360', 'GP', '02302', '421870', 'Lydia (02302) 15441791 - 424467 / Laura (02302) 15542584', NULL, '2015-06-01 03:00:00', 2),
(35, 38, 'LIBE, Alejandra Elba', 'Calle 13  658', 'General Pico', '6360', 'GP', '02302', '432402', 'Lidia (02302)15644489', NULL, NULL, 2),
(36, 39, 'GARCIA MOSMANN, Adrián', 'Calle 10 545', 'General Pico', '6360', 'GP', '02302', '323220', 'Valeria (02302)15308475 / Adrian (02302)15460369', NULL, NULL, 2),
(37, 41, 'VALENTINI, Osvaldo Rodolfo', 'Calle 20 (Belgrano) 769', 'General Pico', '6360', 'GP', '02302', '421441', '435968 / (2302) 15311311', NULL, NULL, 2),
(38, 45, 'URSINO, Guillermo Oscar', 'Calle 1 1076', 'General Pico', '6360', 'GP', '02302', '423484', 'Casa 433206 - (02302)15608752', NULL, NULL, 2),
(39, 46, 'GIANFORTE, Javier Eduardo', 'General Campos  685', 'General Acha', '8200', 'GA', '02952', '432446', 'Ag. 15520530 / Garro 15468275', NULL, NULL, 4),
(40, 47, 'CELESIA, Pablo Ernesto', 'Balcarce 986', 'General Acha', '8200', 'GA', '02952', '412708', 'Crist 432135-15376882 / Pablo 15674897 / M. Rosa 15374766', NULL, NULL, 4),
(41, 48, 'ORTIZ, Norma Zulema', 'Balcarce 46', 'General Acha', '8200', 'GA', '02952', '432182', 'Norma (02954) 15632919 / Diego 15613258', NULL, NULL, 4),
(42, 49, 'PACHECO, Gabriela Roxana', 'España 920', 'Eduardo Castex', '6380', 'EC', '02334', '443552', 'Bibi (02334) 15408086 / Rusa (02302) 15696717', NULL, NULL, 4),
(43, 50, 'RIERA, Darío Rubén', 'Estrada  945', 'Eduardo Castex', '6380', 'EC', '02334', '442813', 'Dario (02334) 15404298', NULL, NULL, 4),
(44, 52, 'FERNANDEZ, Lidia Noemí', 'Roque Saenz Peña 1277', 'Toay', '6303', 'Toay', '02954', '492269', '492275 / Mono 15680360 / Señora 15547970', NULL, NULL, 4),
(45, 53, 'FORNERON, Nydia Edith', 'España 931', 'General Acha', '8200', 'GA', '02952', '432418', 'Silvana (02954) 15647373 / Ricardo (02952) 15402701', NULL, NULL, 4),
(46, 54, 'ALVAREZ DE GAVOTTI, Ethel Teresa', 'España 1687', 'Realico', '6200', 'Rea', '02331', '462326', 'Norma 02302 15591345 -462536 / (02302) 15463497', NULL, NULL, 4),
(47, 55, 'MARTIN DE BERTONE, María Cristina', 'Av. Mullally 1366', 'Realico', '6200', 'Rea', '02331', '462633', 'Ag. (02302)15563825 / Juan Carlos (02302)15690990-536577', NULL, NULL, 4),
(48, 56, 'RE, Pablo', '2 de Marzo  1736', 'Realico', '6200', 'Rea', '02331', '462324', '463130 /Marisa (02302)15558128 /Carla (02302)15587595', NULL, '2013-09-01 03:00:00', 4),
(49, 58, 'CESTINO, Hernán Jacinto Joaquín', 'San Martín 420', 'Intendente Alvear', '6221', 'IA', '02302', '481366', '15509508 / Cristian () 15455840 / Hernán () 15643602', NULL, NULL, 4),
(50, 60, 'FERNANDEZ, Daniel Dante', 'H. Yrigoyen 1175', 'Eduardo Castex', '6380', 'EC', '02334', '442282', '(02334)15485467P - 68H / (02334)15485416 / Hija 15684286', NULL, NULL, 4),
(51, 62, 'SUAREZ, Sara Elvira', 'España 790', 'General Acha', '8200', 'GA', '02952', '412320', 'Claudio 15673901 /(02954) 15641800-15593520 /Favio 436369', NULL, NULL, 4),
(52, 63, 'SCHMIEDT, Fernando Daniel', '25 de Mayo 250', 'Alpachiri', '6309', 'Alp', '02953', '497303', 'Hija 15663067 / Fernando 15540443', NULL, NULL, 4),
(53, 64, 'HABERKORN, Carlos José María', 'Santa Fé  185', 'Alpachiri', '6309', 'Alp', '02953', '497497', 'Celeste 15511157 / 497409 / José María 15558845', NULL, NULL, 4),
(54, 65, 'SANCHEZ, Jorge Oscar', 'Santa Fé  469', 'Macachin', '6307', 'Mac', '02953', '452045', 'Nico 1536-8220', NULL, NULL, 4),
(55, 66, 'MULLER, Julio', 'Belgrano 357', 'Doblas', '6305', 'Dob', '02953', '492099', 'Soledad 492098 / 15602603', NULL, NULL, 4),
(56, 67, 'TORREJON, Dante Hugo', 'Leandro N. Alem 847', 'Trenel', '6307', 'Tre', '02302', '499203', '(02302) 15582875', NULL, NULL, 4),
(57, 68, 'GELOS, Carlos Antonio', 'Estrada  543', 'Anguil', '6326', 'Ang', '02954', '495048', 'Lorena (Empleada) 15318109 / Ag 15549069', NULL, '2015-02-01 03:00:00', 4),
(58, 69, 'MAIOLA, Nélida Margarita', 'Roca  582', 'Quemu Quemu', '6333', 'QQ', '02333', '442595', 'Nélida (02302) 15418405 / 15149086', NULL, NULL, 4),
(59, 70, 'SOSA, Lilian y MULLER, María', 'España 346', 'General Campos', '6309', 'GC', '02953', '491007', 'Lilian (02953) 15410294 / Marianela TT 02954 15681158', NULL, NULL, 4),
(60, 71, 'LUJAN, Cristina y LUJAN, Oscar', 'Rivadavia 315', 'Caleufu', '6387', 'C', '02335', '450162', '(02302) 15444507', NULL, NULL, 4),
(61, 73, 'WILHELM, Dante Omar', 'San Martín y Zeballos', 'Bernasconi', '8204', 'Ber', '02925', '499409', '(0291) 154746072 / Casa (02925) 499254', NULL, NULL, 4),
(62, 74, 'GUEVARA, Juan Carlos', 'Zeballos 67', 'Bernasconi', '8204', 'Ber', '02925', '499498', '499596 / 15590098', NULL, NULL, 4),
(63, 75, 'HERNANDEZ, Luis Héctor', 'San Martín 154', 'Jacinto Arauz', '8208', 'JA', '02925', '493254', 'Casa 493225 / (0291)154026872-154366764 / Vendedor Garcia (0291)154141960', NULL, NULL, 4),
(64, 76, 'RODRIGUEZ, Horacio Dante', 'J.B. Bianchi N° 177', 'Santa Isabel', '6323', 'SI', '02338', '493044', 'Estela15691249/Horacio15631557/VAChumy493155-15572756', NULL, NULL, 4),
(65, 77, 'SUAREZ, Horacio Oscar', 'San Martín 175', 'General San Martin', '8206', 'GSM', '02925', '497499', '(0291) 154162636', NULL, NULL, 4),
(66, 78, 'FERNANDEZ, Ariel Adolfo', 'España 255', 'Lonquimay', '6352', 'Lon', '02954', '494522', '494362 / Checho 15552795', NULL, NULL, 4),
(67, 79, 'BENVENUTTO, Nirma Angélica', 'Malvinas Argentinas 220', 'Miguel Riglos', '6301', 'MR', '02953', '498183', 'Roxana 15440989 / Regino 15530851 / Dani 15692807 / Patri 15510065', NULL, '2015-06-01 03:00:00', 4),
(68, 80, 'ARNAUDO, Héctor José', 'Sgto. Cabral 263', 'La Maruja', '6385', 'LM', '02335', '499272', 'Pepe(02302) 15413866 /Hija (02302) 15487445', NULL, NULL, 4),
(69, 81, 'IBARRA, María Teresa', 'Don Bosco 1366', 'Colonia Baron', '6315', 'CB', '02333', '476504', 'Ofelia (02302) 15441215 / Estela (02302) 15610481 / M. Teresa (02302) 15413481', NULL, NULL, 4),
(70, 82, 'AMBROSIO, Jorge Angel', 'Gdor. Nuñez  294', 'Colonia Baron', '6315', 'CB', '02333', '476230', 'Jorge (02302)15623789 / Lorena (02302)15606350 / Nilda (02302)15623669  / Patricia (02954)15468639', NULL, NULL, 4),
(71, 84, 'MIGUEL, Eloisa Benita', 'Moreno  537', 'Ingeniero Luiggi', '6205', 'IL', '02335', '472137', '(02302) 15516908 / Lorena 15453819', NULL, '2013-12-31 03:00:00', 4),
(72, 85, 'SALVADORI, Lucia Esther', 'M. Moreno  304', 'Ingeniero Luiggi', '6205', 'IL', '02335', '472068', '(02302) 15594336 / (02302) 15415174 / Miguel 15565724', NULL, NULL, 4),
(73, 86, 'GUTIERREZ, Rubén Horacio', 'Calle 19 347', 'Embajador Martini', '6203', 'EM', '02335', '495198', '(02302) 15511945', NULL, NULL, 4),
(74, 87, 'FERRARI, Oscar Máximo', 'Av. Zeballos 525', 'Guatrache', '6311', 'Gua', '02924', '492806', 'Gustavo (02923)15692927', NULL, '2014-04-01 03:00:00', 4),
(75, 88, 'KLUG, Emilio Daniel', 'Av. Zeballos 237', 'Guatrache', '6311', 'Gua', '02924', '492529', '492503 / (02923) 15483300', NULL, NULL, 4),
(76, 89, 'VOLA, Omar Alberto', 'Libertad  321', 'Parera', '6213', 'Par', '02331', '497336', 'Omar (02302) 15536955 / José (02302) 15459518 / 497164', NULL, NULL, 4),
(77, 91, 'DIAZ, Norberto', '9 de Julio 124', 'Santa Rosa', '6300', 'SR', '02954', '414221', 'Diaz 15306557 y 410338 / Laura 563113 y 15519269', NULL, NULL, 1),
(78, 92, 'GESUALDI, Luis Alberto', 'Calle 17 548', 'Victorica', '6319', 'Vic', '02338', '432474', 'Nestor 15444010 / Luis 15630067', NULL, NULL, 4),
(79, 93, 'ALONSO, Angel Rodolfo', 'Calle 15  1104', 'Victorica', '6319', 'Vic', '02338', '432470', '432197/Ag 15605326 /Adriana 15444312/Elizabeth 15575950', NULL, NULL, 4),
(80, 94, 'PULCHINI, Noemí Liliana', 'Eduardo Castex 50', '25 de Mayo', '8201', '25M', '0299', '4948270', '4949076/Ag ()155072570/Daiana ()155932024/ Luis ()154017021/Marcelo ()155281515', NULL, NULL, 4),
(81, 95, 'ARCURI, Patricia de los Angeles', 'San Martín 632', '25 de Mayo', '8201', '25M', '0299', '4948044', 'Patricia 15594151 / Empleada Eva (0299) 155352617', NULL, NULL, 4),
(82, 96, 'CASES, Francisco Rosario', 'España 286', 'Winifreda', '6313', 'Win', '02333', '497641', 'Mdm 497372/ Lona (02302) 15535500 /Liliana (02302)15483538', NULL, '2015-09-01 03:00:00', 4),
(83, 97, 'ABA, Horacio Gabriel', 'Sarmiento 468', 'Bernardo Larroude', '6220', 'BL', '02302', '492171', 'Aba (02302) 15623950', NULL, NULL, 4),
(84, 98, 'TOMASELLI, Pablo Darío', 'Calle 7 Oeste 918', 'General Pico', '6360', 'GP', '02302', '430496', 'Pablo 430496 - Tomaselli Padre 424767 – Mabel 15517911', NULL, NULL, 2),
(85, 99, 'FERNANDEZ, Fernando Javier', 'Calle 17 735', 'General Pico', '6360', 'GP', '02302', '421664', '15690136', NULL, NULL, 2),
(86, 100, 'ROMERO, Clara Ester', 'San Martín 445', 'Rancul', '6214', 'Ran', '02331', '', 'Clara (02302) 15698581 - (02302) 15613889', NULL, NULL, 4),
(87, 101, 'MATTIO, Omar Ramón', 'Pedro Monmany  471', 'Alta Italia', '6207', 'AI', '02302', '491254', 'Mattio (02302)15572030  /Erika ()15647716', NULL, NULL, 4),
(88, 102, 'GIRAUDO, Ricardo Alberto', 'España 168', 'Arata', '6385', 'Ara', '02335', '498129', 'Casa 498086 /Diana(02302)15201141/ Zurdo(02302)15595626', NULL, NULL, 4),
(89, 103, 'LECEA, Manuel René', 'Unanue 1584', 'Santa Rosa', '6300', 'SR', '02954', '771611', 'Sergio 15605779 / German 15442282', NULL, NULL, 1),
(90, 104, 'TAMAME, Gustavo Gerardo', 'Belgrano 228', 'Catrilo', '6330', 'Cat', '02954', '491655', '15641549  491190 / 15662875', NULL, NULL, 4),
(91, 105, 'ESCUDERO, Claudio Osman', 'Catamarca  604', 'Santa Rosa', '6300', 'SR', '02954', '414812', 'Irma 15594459 / Claudio 15544101', NULL, NULL, 1),
(92, 106, 'MERIANO, Perla Beatriz', 'Av. Sarmiento 581', 'Intendente Alvear', '6221', 'IA', '02302', '481137', 'Ag 15545921-481823/Anibal 15445963', NULL, NULL, 4),
(93, 107, 'SCHNEIDER, Oscar Alberto', 'España y 25 de Mayo', 'General San Martin', '8206', 'GSM', '02925', '497025', 'Marta (0291)156483226', NULL, '2015-04-30 03:00:00', 4),
(94, 108, 'PAEZ, Mario Armando', 'Parodi  293', 'Macachin', '6307', 'Mac', '02953', '453041', 'Mario 15607720 - 452987 / Rolón (02953) 494085', NULL, NULL, 4),
(95, 110, 'DAMIANI,  Roberto Sergio', '25 de Mayo 362', 'Santa Rosa', '6300', 'SR', '02954', '387333', '414747/Darío 15469232/Dam 15469614 421071/Ivana 15328100', NULL, NULL, 1),
(96, 111, 'MARTINEZ, Rubén Clemente', 'Amaya S/N', 'Uriburu', '6354', 'Uri', '02954', '493153', 'Local 493160 / Particular 493012 - 15661916', NULL, NULL, 4),
(97, 112, 'COLUSSI, Oscar Alfredo', 'Calle 25 1420', 'General Pico', '6360', 'GP', '02302', '435178', '15300405 / 15488063 / Casa (02302) 432424', NULL, NULL, 2),
(98, 113, 'GONZALEZ, Sergio Omar', 'Av. Libertador 950', 'La Adela', '8138', 'LA', '02931', '431787', '430698 / (02920) 15555564 / Fax Comisaría 432607', NULL, NULL, 4),
(99, 114, 'MEDINA, Oscar Alfredo', 'Calle 21  1725', 'General Pico', '6360', 'GP', '02302', '425093', '(2302) 15614610', NULL, NULL, 2),
(100, 115, 'MALTAGLIATTI, Eddy María', 'Calle 13 Oeste 202', 'General Pico', '6360', 'GP', '02302', '428442', '(02302) 15308246 / Quinteros (02302) 15515567', NULL, NULL, 2),
(101, 117, 'CARINGELLA, Alejandro Leonardo', '9 de Julio 425', 'Toay', '6303', 'Toay', '02954', '498215', 'Valeria 15559742-498530/ Caringela 15699385', NULL, NULL, 4),
(102, 118, 'MORENO, Daniel Francisco Fabián', 'España 87', 'Trenel', '6369', 'Tre', '02302', '499737', 'Juan Pablo (02302)15447961/Dani (02302)15441611', NULL, NULL, 4),
(103, 120, 'PIÑEIRO, Roberto Oscar', 'Calle 13  1382', 'General Pico', '6360', 'GP', '02302', '431854', 'María (02302) 15519763', NULL, NULL, 2),
(104, 121, 'VICENTE FERNANDEZ, César Pablo', '25 de Mayo 578', 'Intendente Alvear', '6221', 'IA', '02302', '481245', '482270 (02302)15301257 Fax 482270 /Mamá (02302)15532047', NULL, NULL, 4),
(105, 122, 'URRUTIA, Carlos Alberto', '25 de Mayo 407', 'Santa Rosa', '6300', 'SR', '02954', '387990', '430945 / 15614301', NULL, NULL, 1),
(106, 124, 'MAGGIONI, Lucio Omar', 'Belgrano', 'Puelen', '8307', 'Pue', '02338', '495020', 'Magio (0299) 154196940 / Sra (0299) 155124849', NULL, NULL, 4),
(107, 125, 'DELFINO, Santiago Antonio', 'Viale 92', 'Catrilo', '6330', 'Cat', '02954', '491666', '491626 /Delfino 15645637 /Laura 15312562 /15615097', NULL, NULL, 4),
(108, 126, 'BRUNO, Nélida Ines', 'Independencia 1030', 'Eduardo Castex', '6380', 'EC', '02334', '445275', 'Emi (02334)15486086 / Nelida (02334)15412572', NULL, '2015-07-01 03:00:00', 4),
(109, 127, 'ENSE, Bibiana Noemí', 'Libertador 789', 'Rolon', '6306', 'Rol', '02953', '494008', 'Casa 494081 Bibi 15579337 y 15401360 /Rubén 15575802', NULL, NULL, 4),
(110, 128, 'BAUDINO, Rodrigo Martín', 'Av. San Martín 44', '25 de Mayo', '8201', '25M', '0299', '4948120', 'Mdm 4948449  /Rodrigo (0299)156038733 /Eli (0299)155559267', NULL, NULL, 4),
(111, 18, 'PEREZ, Nora Analía', 'Hilario Lagos 409', 'Santa Rosa', '6300', 'SR', '02954', '422340', 'Casa 416703 / Miguel (esposo) 15645241', '2014-01-06 03:00:00', NULL, 1),
(112, 84, 'CURBELO, Alcira', 'Moreno 537', 'Ingeniero Luiggi', '6205', 'IL', '02335', '471121', 'Alcira (02302) 15628557 - Jorge (02302) 15571778', '2014-02-25 03:00:00', NULL, 4),
(113, 12, 'FRANK, Mirta Lorena', 'Roque Saenz Peña 941', 'Santa Rosa', '6300', 'SR', '02954', '424094', 'Lorena 15479367 / Jimena 15633575', '2015-06-22 03:00:00', NULL, 1),
(114, 126, 'JUAREZ, Sergio Emanuel', 'Independencia 1030', 'Eduardo Castex', '6380', 'EC', '02334', '445275', 'Emi (02334)15486086 / Nelida (02334)15412572', '2015-07-01 03:00:00', NULL, 4),
(115, 96, 'DELARADA, Enzo Damian', 'España 286', 'Winifreda', '6313', 'Win', '02333', '497641', 'Mdm 497372/ Lona (02302) 15535500 /Liliana (02302)15483538', '2015-09-01 03:00:00', NULL, 4),
(116, 1, 'MARTIN, Hilda Mabel', 'Oliver  409', 'Santa Rosa', '6300', 'SR', '02954', '412857', 'Hilda 15550993 / Casa 427439', NULL, NULL, 1),
(117, 25, 'DALLE CARBONARE, Carola Lorena', 'Almirante Brown 578', 'Santa Rosa', '6300', 'SR', '02954', '436908', 'TMañ Valeria 15656806 / TT Silvina 15477537  German 455675', '2014-11-01 03:00:00', NULL, 1),
(118, 33, 'CISNEROS, María Laura', 'Calle 13 1175', 'General Pico', '6360', 'GP', '02302', '421870', 'Lydia (02302) 15441791 - 424467 / Laura (02302) 15542584', '2015-06-01 03:00:00', NULL, 2),
(119, 56, 'RE, Marisa Edith', '2 de Marzo  1736', 'Realico', '6200', 'Rea', '02331', '462324', '463130 /Marisa (02302)15558128 /Carla (02302)15587595', '2013-09-02 03:00:00', NULL, 4),
(120, 68, 'GELOS, Cristian Fabián', 'Estrada  543', 'Anguil', '6326', 'Ang', '02954', '495048', 'Lorena (Empleada) 15318109 / Ag 15549069', '2015-02-01 03:00:00', NULL, 4),
(121, 79, 'GÓMEZ, Regino Ángel', 'Malvinas Argentinas 220', 'Miguel Riglos', '6301', 'MR', '02953', '498183', 'Roxana 15440989 / Regino 15530851 / Dani 15692807 / Patri 15510065', '2015-06-01 03:00:00', NULL, 4),
(122, 87, 'EBERLE, Gustavo Fernando', 'Av. Zeballos 525', 'Guatrache', '6311', 'Gua', '02924', '492806', 'Gustavo (02923)15692927', '2014-04-01 03:00:00', NULL, 4),
(123, 107, 'ZICKERT, Marta Graciela', 'España y 25 de Mayo', 'General San Martin', '8206', 'GSM', '02925', '497025', 'Marta (0291)156483226', '2015-05-01 03:00:00', NULL, 4),
(124, 11, 'BAUMGERTNER, Alina', 'Márquez 2450', 'Santa Rosa', '6300', 'SR', '02954', '428188', 'Lucas 15619698 / Alina 15514189 / 458086', '2015-12-01 03:00:00', NULL, 1);



DROP TABLE IF EXISTS `logueos`;
CREATE TABLE IF NOT EXISTS `logueos` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Id_Usuario` bigint(20) NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `IP` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


DROP TABLE IF EXISTS `reclamos`;
CREATE TABLE IF NOT EXISTS `reclamos` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `Contacto` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Id_tjs` bigint(20) NOT NULL,
  `Problema` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Observaciones` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `Id_Usuario` bigint(20) NOT NULL,
  `Estado` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;



INSERT INTO `reclamos` (`Id`, `Fecha`, `Contacto`, `Id_tjs`, `Problema`, `Observaciones`, `Id_Usuario`, `Estado`) VALUES
(1, '2020-12-29 12:43:58', 'Agenciero', 1, 'No prende', 'Llamar a este numero', 1, 1),
(2, '2020-12-29 12:44:52', 'Agenciero', 1, 'No prende', 'Llamar a este numero', 1, 1),
(3, '2020-12-29 12:45:42', 'Empleado', 1, 'No toma señal', 'Llamar en 15 minutos', 1, 1);



DROP TABLE IF EXISTS `soluciones`;
CREATE TABLE IF NOT EXISTS `soluciones` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `Solucion` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Id_Usuario` bigint(20) NOT NULL,
  `Derivacion` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Estado` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;



DROP TABLE IF EXISTS `tjs`;
CREATE TABLE IF NOT EXISTS `tjs` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Agencia` int(11) NOT NULL,
  `Subagencia` int(11) NOT NULL,
  `Maquina` int(11) NOT NULL,
  `Nombre` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Apellido` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `TipoDocumento` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Documento` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Direccion` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `DetalleDireccion` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Localidad` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Rubro` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Email` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Telefono` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Telefono2` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Solicitud` timestamp NULL DEFAULT NULL,
  `Alta` timestamp NULL DEFAULT NULL,
  `Baja` timestamp NULL DEFAULT NULL,
  `Modem` tinyint(1) NOT NULL,
  `Antena` tinyint(1) NOT NULL,
  `GPRS` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;



DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Apellido` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Email` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Usuario` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Clave` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `Alta` timestamp NULL DEFAULT NULL,
  `Baja` timestamp NULL DEFAULT NULL,
  `Condicion` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;



INSERT INTO `usuarios` (`Id`, `Nombre`, `Apellido`, `Email`, `Usuario`, `Clave`, `Alta`, `Baja`, `Condicion`) VALUES
(1, 'Gino', 'Righetti', 'gr@hotmail.com', 'gr', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2', '2020-07-26 15:45:58', NULL, 1),
(2, 'Gino', 'Righetti', 'gino@hotmail.com', 'gino', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2', '2020-07-30 03:20:09', NULL, 1),
(3, 'Gino', 'Righetti', 'gar@hotmail.com', 'GAR', 'dc849cfe4ff5f53d917256a7e7f3462c7ea67e0072fbae46b3880ab0f8ef7cedecf0d4d8176b807e44980794f5c3e7fdbf6065109fd95bd6b0e8bceb0553c099', '2020-12-19 03:16:58', NULL, 1);


-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: dong
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

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
-- Table structure for table `Persons`
--

DROP TABLE IF EXISTS `Persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Persons` (
  `ID` int NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Persons`
--

LOCK TABLES `Persons` WRITE;
/*!40000 ALTER TABLE `Persons` DISABLE KEYS */;
INSERT INTO `Persons` VALUES (1,'Dong','Yier',23),(2,'YYier','DDong',23),(5,'YYier','DDong',23);
/*!40000 ALTER TABLE `Persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warning`
--

DROP TABLE IF EXISTS `warning`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warning` (
  `id` int NOT NULL,
  `label_Chinese` varchar(255) DEFAULT NULL,
  `label_English` varchar(255) DEFAULT NULL,
  `function_name` varchar(255) DEFAULT NULL,
  `function_Chinese` varchar(255) DEFAULT NULL,
  `function_English` varchar(255) DEFAULT NULL,
  `group_label_Chinese` varchar(255) DEFAULT NULL,
  `group_label_English` varchar(255) DEFAULT NULL,
  `machine_obj_Chinese` varchar(255) DEFAULT NULL,
  `machine_obj_English` varchar(255) DEFAULT NULL,
  `value` int DEFAULT '0',
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warning`
--

LOCK TABLES `warning` WRITE;
/*!40000 ALTER TABLE `warning` DISABLE KEYS */;
INSERT INTO `warning` VALUES (0,'系统启动','SYSTEM START0UP','cb_gp_powerup_function','功能: 控制柜启动','FUNCTION: CABINET AT START0UP','电控柜公共组件','COMMON CABINET GROUPS','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(1,'警告：储存器内的数据被删除','WARNING: MEMORIZED DATA CANCELLED','cb_gp_powerup_function','功能: 控制柜启动','FUNCTION: CABINET AT START0UP','电控柜公共组件','COMMON CABINET GROUPS','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(2,'与YB511电控柜通讯故障','DOWNSTREAM COMMUNICATION FAULT 0 YB511','cb_main_support_function','控制柜辅助功能','CABINET SUPPORT FUNCTION','电控柜主组件','MAIN CABINET GROUP','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(3,'故障：看门狗监视器Ｋ３','BREAKDOWN: WATCHDOW MONITOR K3','cb_main_support_function','控制柜辅助功能','CABINET SUPPORT FUNCTION','电控柜主组件','MAIN CABINET GROUP','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(4,'防护罩继电器  ２Ｋ２０失效','RELAY FAULT 2K20  GUARD','cb_gp_xx_sg_safety_guard_line_function','0','0','电控柜主组件','MAIN CABINET GROUP','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(5,'铝箔纸装载机于自动方式','FOIL REEL LOADER IN AUTOMATIC MODE','cs_motor_management_function','功能: 铝箔纸装载机电机','FUNCTION: FOIL REEL LOADER MOTOR','电机部件','MOTORIZATION GROUP','铝箔纸装载','cs_main_machine',0,'2022-06-30 15:26:57'),(6,'铝箔纸装载机于手动方式','FOIL REEL LOADER IN MANUAL MODE','cs_motor_management_function','功能: 铝箔纸装载机电机','FUNCTION: FOIL REEL LOADER MOTOR','电机部件','MOTORIZATION GROUP','铝箔纸装载','cs_main_machine',0,'2022-06-30 15:26:57'),(7,'伺服停机','SERVICE STOP','cs_motor_service_stop_function','功能: 伺服停机','FUNCTION: SERVICE STOP','电机部件','MOTORIZATION GROUP','铝箔纸装载','cs_main_machine',0,'2022-06-30 15:26:57'),(8,'铝箔纸凸轮轴循环终点无','FOIL CAM AXIS: NO END0OF0CYCLE','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(9,'铝箔纸卷锁定装置不能开启','NO UNLOCK FOR FOIL REEL DRUM','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(10,'铝箔纸凸轮轴循环中点无','FOIL CAM AXIS: NO MID0CYCLE','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(11,'铝箔纸鼓轮未转动','FOIL DRUM NOT TURNING','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(12,'铝箔纸预松卷电机扭钜输出过载','OVERLOAD OF MOTOR TORQUE OUTPUT OF FOIL','xx_foil_preunwinding_function','功能: 铝箔纸预展开','FUNCTION: FOIL PRE0UNWINDING','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(13,'上槽重复小包／排除堵塞','UPPER BEAM RETREAT PACKET/EXTRACTION JAM','xx_beam_upper_packet_pos_function','上槽小包控制功能','UPPER BEAM PACKET CONTROL FUNCTION','梁架组件','CONVEYOR GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(14,'上槽入口处的小包检测无效','UPPER BEAM ENTRANCE PACK CONTR. INEFF.','xx_beam_upper_packet_pos_function','上槽小包控制功能','UPPER BEAM PACKET CONTROL FUNCTION','梁架组件','CONVEYOR GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(15,'商标纸无印刷','NO PRINT ON BLANKS','xx_blank_1drum_print_check_function','功能: 盒片印刷检测','FUNCTION: BLANK PRINT CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(16,'故障：商标纸印刷检测','FAIL: BLANK PRINT CHECK','xx_blank_1drum_print_check_function','功能: 盒片印刷检测','FUNCTION: BLANK PRINT CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(17,'鼓轮2 上无商标纸　　','NO BLANK ON 2ND DRUM','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(18,'鼓轮2 上商标纸错位：延缓　　','BAD BLANK POSITION ON 2ND DRUM: LATE','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(19,'故障：鼓轮2 上商标纸的存在','FAULT: BLANK PRESENCE ON 2ND DRUM','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(20,'鼓轮2 上商标纸的存在：内侧检测故障','2ND DRUM BLANK PRESENCE: INNER CHK FAULT','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(21,'鼓轮2 上商标纸未对直','DISALIGNED BLANK ON 2ND DRUM','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(22,'鼓轮2 上商标纸错位：提前　　　　','BAD BLANK POSITION ON 2ND DRUM: EARLY','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(23,'鼓轮2 上商标纸的存在：外侧检测故障','2ND DRUM BLANK PRESENCE: OUTER CHK FAULT','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(24,'鼓轮3 上缺失第一前耳的检测    　','BLANKS WITH NO 1ST FRONT BLANK0EAR DRUM3','xx_blank_belt_front_flap_check_function','功能: 皮带上的前部盒片耳检测','FUNCTION: FRONT BLANK0EAR CHECK ON BELT','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(25,'鼓轮3 上无第二前耳的商标纸      　','BLANKS WITH NO 2ND FRONT BLANK0EAR DRUM3','xx_blank_belt_front_flap_check_function','功能: 皮带上的前部盒片耳检测','FUNCTION: FRONT BLANK0EAR CHECK ON BELT','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(26,'故障：鼓轮3 上前部商标纸耳检测','FAULT: FRONT BLANK0EAR CHECK 0 DRUM3','xx_blank_belt_front_flap_check_function','功能: 皮带上的前部盒片耳检测','FUNCTION: FRONT BLANK0EAR CHECK ON BELT','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(27,'鼓轮3 皮带上商标纸检测器：检测失效','BLANK PRES. ON 3RD D. BELT: INEFF. CHECK','xx_blank_belt_presence_check_function','皮带上盒片存在检测功能','BLANK PRESENCE ON BELT CHECK FUNCTION','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(28,'鼓轮3 皮带上缺商标纸','BLANK ABSENT ON 3RD DRUM BELT','xx_blank_belt_presence_check_function','皮带上盒片存在检测功能','BLANK PRESENCE ON BELT CHECK FUNCTION','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(29,'关闭商标纸部件停机','BLANK GROUP STOP BYPASS','xx_blank_checks_disable_function','功能: 关闭盒片部件停机','FUNCTION: BLANK GROUP STOP BYPASS','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(30,'商标纸胶缸啮合超时','ENGAGED BLANK GLUER TIME OUT','xx_blank_gluer_disengage_function','功能: 盒片涂胶器脱开','FUNCTION: BLANK GLUER RELEASE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(31,'未超时的涂胶器再联机','MISSED TIMEOUT GLUER RE0ENGAGE','xx_blank_gluer_motion_check_function','功能: 涂胶器转动检测','FUNCTION: GLUER ROTATION CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(32,'涂胶器转动／啮合时异常','MALFUNCTION ON ROTATION/GLUER ENGAGE','xx_blank_gluer_motion_check_function','功能: 涂胶器转动检测','FUNCTION: GLUER ROTATION CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(33,'盒片涂胶器不转动  BLANK','GLUER NOT TURNING','xx_blank_gluer_motion_check_function','功能: 涂胶器转动检测','FUNCTION: GLUER ROTATION CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(34,'输送器越过后退极限位置','TRANSLATOR OUT FROM BACK END OF RUN','xx_blank_stack_feed_cycle_function','功能: 盒片叠供料循环','FUNCTION: BLANK STACK FEED CYCLE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(35,'输送器越过前进极限位置','TRANSLATOR OUT FROM FORWARD END OF RUN','xx_blank_stack_feed_cycle_function','功能: 盒片叠供料循环','FUNCTION: BLANK STACK FEED CYCLE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(36,'输送器料库和钳子未停止','TRANSLATOR IN HOPPER, PINCERS NOT CLOSED','xx_blank_stack_feed_cycle_function','功能: 盒片叠供料循环','FUNCTION: BLANK STACK FEED CYCLE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57');
/*!40000 ALTER TABLE `warning` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-30 15:32:27

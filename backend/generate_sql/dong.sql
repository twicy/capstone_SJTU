/*warning id is just `alias` for warning type*/
/*schema*/
DROP TABLE IF EXISTS `warning`;
SET character_set_client = utf8mb4;
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

/*data*/
LOCK TABLES `warning` WRITE;
/*!40000 ALTER TABLE `warning` DISABLE KEYS */;
INSERT INTO `warning` VALUES (0,'系统启动','SYSTEM START0UP','cb_gp_powerup_function','功能: 控制柜启动','FUNCTION: CABINET AT START0UP','电控柜公共组件','COMMON CABINET GROUPS','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(1,'警告：储存器内的数据被删除','WARNING: MEMORIZED DATA CANCELLED','cb_gp_powerup_function','功能: 控制柜启动','FUNCTION: CABINET AT START0UP','电控柜公共组件','COMMON CABINET GROUPS','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(2,'与YB511电控柜通讯故障','DOWNSTREAM COMMUNICATION FAULT 0 YB511','cb_main_support_function','控制柜辅助功能','CABINET SUPPORT FUNCTION','电控柜主组件','MAIN CABINET GROUP','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(3,'故障：看门狗监视器Ｋ３','BREAKDOWN: WATCHDOW MONITOR K3','cb_main_support_function','控制柜辅助功能','CABINET SUPPORT FUNCTION','电控柜主组件','MAIN CABINET GROUP','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(4,'防护罩继电器  ２Ｋ２０失效','RELAY FAULT 2K20  GUARD','cb_gp_xx_sg_safety_guard_line_function','0','0','电控柜主组件','MAIN CABINET GROUP','主机电柜','cb_main_maCHine',0,'2022-06-30 15:26:57'),(5,'铝箔纸装载机于自动方式','FOIL REEL LOADER IN AUTOMATIC MODE','cs_motor_management_function','功能: 铝箔纸装载机电机','FUNCTION: FOIL REEL LOADER MOTOR','电机部件','MOTORIZATION GROUP','铝箔纸装载','cs_main_machine',0,'2022-06-30 15:26:57'),(6,'铝箔纸装载机于手动方式','FOIL REEL LOADER IN MANUAL MODE','cs_motor_management_function','功能: 铝箔纸装载机电机','FUNCTION: FOIL REEL LOADER MOTOR','电机部件','MOTORIZATION GROUP','铝箔纸装载','cs_main_machine',0,'2022-06-30 15:26:57'),(7,'伺服停机','SERVICE STOP','cs_motor_service_stop_function','功能: 伺服停机','FUNCTION: SERVICE STOP','电机部件','MOTORIZATION GROUP','铝箔纸装载','cs_main_machine',0,'2022-06-30 15:26:57'),(8,'铝箔纸凸轮轴循环终点无','FOIL CAM AXIS: NO END0OF0CYCLE','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(9,'铝箔纸卷锁定装置不能开启','NO UNLOCK FOR FOIL REEL DRUM','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(10,'铝箔纸凸轮轴循环中点无','FOIL CAM AXIS: NO MID0CYCLE','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(11,'铝箔纸鼓轮未转动','FOIL DRUM NOT TURNING','xx_foil_automatic_splice_function','功能: 铝箔纸自动更换','FUNCTION: AUTOMATIC FOIL CHANGE','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(12,'铝箔纸预松卷电机扭钜输出过载','OVERLOAD OF MOTOR TORQUE OUTPUT OF FOIL','xx_foil_preunwinding_function','功能: 铝箔纸预展开','FUNCTION: FOIL PRE0UNWINDING','铝箔纸组件','FOIL GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(13,'上槽重复小包／排除堵塞','UPPER BEAM RETREAT PACKET/EXTRACTION JAM','xx_beam_upper_packet_pos_function','上槽小包控制功能','UPPER BEAM PACKET CONTROL FUNCTION','梁架组件','CONVEYOR GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(14,'上槽入口处的小包检测无效','UPPER BEAM ENTRANCE PACK CONTR. INEFF.','xx_beam_upper_packet_pos_function','上槽小包控制功能','UPPER BEAM PACKET CONTROL FUNCTION','梁架组件','CONVEYOR GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(15,'商标纸无印刷','NO PRINT ON BLANKS','xx_blank_1drum_print_check_function','功能: 盒片印刷检测','FUNCTION: BLANK PRINT CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(16,'故障：商标纸印刷检测','FAIL: BLANK PRINT CHECK','xx_blank_1drum_print_check_function','功能: 盒片印刷检测','FUNCTION: BLANK PRINT CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(17,'鼓轮2 上无商标纸　　','NO BLANK ON 2ND DRUM','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(18,'鼓轮2 上商标纸错位：延缓　　','BAD BLANK POSITION ON 2ND DRUM: LATE','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(19,'故障：鼓轮2 上商标纸的存在','FAULT: BLANK PRESENCE ON 2ND DRUM','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(20,'鼓轮2 上商标纸的存在：内侧检测故障','2ND DRUM BLANK PRESENCE: INNER CHK FAULT','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(21,'鼓轮2 上商标纸未对直','DISALIGNED BLANK ON 2ND DRUM','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(22,'鼓轮2 上商标纸错位：提前　　　　','BAD BLANK POSITION ON 2ND DRUM: EARLY','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(23,'鼓轮2 上商标纸的存在：外侧检测故障','2ND DRUM BLANK PRESENCE: OUTER CHK FAULT','xx_blank_2drum_pres_align_function','功能: 鼓轮2上盒片存在与对直','FUNCT.: PRES./ALIGN 0 BLANKS 2ND DRUM','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(24,'鼓轮3 上缺失第一前耳的检测    　','BLANKS WITH NO 1ST FRONT BLANK0EAR DRUM3','xx_blank_belt_front_flap_check_function','功能: 皮带上的前部盒片耳检测','FUNCTION: FRONT BLANK0EAR CHECK ON BELT','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(25,'鼓轮3 上无第二前耳的商标纸      　','BLANKS WITH NO 2ND FRONT BLANK0EAR DRUM3','xx_blank_belt_front_flap_check_function','功能: 皮带上的前部盒片耳检测','FUNCTION: FRONT BLANK0EAR CHECK ON BELT','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(26,'故障：鼓轮3 上前部商标纸耳检测','FAULT: FRONT BLANK0EAR CHECK 0 DRUM3','xx_blank_belt_front_flap_check_function','功能: 皮带上的前部盒片耳检测','FUNCTION: FRONT BLANK0EAR CHECK ON BELT','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(27,'鼓轮3 皮带上商标纸检测器：检测失效','BLANK PRES. ON 3RD D. BELT: INEFF. CHECK','xx_blank_belt_presence_check_function','皮带上盒片存在检测功能','BLANK PRESENCE ON BELT CHECK FUNCTION','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(28,'鼓轮3 皮带上缺商标纸','BLANK ABSENT ON 3RD DRUM BELT','xx_blank_belt_presence_check_function','皮带上盒片存在检测功能','BLANK PRESENCE ON BELT CHECK FUNCTION','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(29,'关闭商标纸部件停机','BLANK GROUP STOP BYPASS','xx_blank_checks_disable_function','功能: 关闭盒片部件停机','FUNCTION: BLANK GROUP STOP BYPASS','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(30,'商标纸胶缸啮合超时','ENGAGED BLANK GLUER TIME OUT','xx_blank_gluer_disengage_function','功能: 盒片涂胶器脱开','FUNCTION: BLANK GLUER RELEASE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(31,'未超时的涂胶器再联机','MISSED TIMEOUT GLUER RE0ENGAGE','xx_blank_gluer_motion_check_function','功能: 涂胶器转动检测','FUNCTION: GLUER ROTATION CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(32,'涂胶器转动／啮合时异常','MALFUNCTION ON ROTATION/GLUER ENGAGE','xx_blank_gluer_motion_check_function','功能: 涂胶器转动检测','FUNCTION: GLUER ROTATION CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(33,'盒片涂胶器不转动  BLANK','GLUER NOT TURNING','xx_blank_gluer_motion_check_function','功能: 涂胶器转动检测','FUNCTION: GLUER ROTATION CHECK','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(34,'输送器越过后退极限位置','TRANSLATOR OUT FROM BACK END OF RUN','xx_blank_stack_feed_cycle_function','功能: 盒片叠供料循环','FUNCTION: BLANK STACK FEED CYCLE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(35,'输送器越过前进极限位置','TRANSLATOR OUT FROM FORWARD END OF RUN','xx_blank_stack_feed_cycle_function','功能: 盒片叠供料循环','FUNCTION: BLANK STACK FEED CYCLE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57'),(36,'输送器料库和钳子未停止','TRANSLATOR IN HOPPER, PINCERS NOT CLOSED','xx_blank_stack_feed_cycle_function','功能: 盒片叠供料循环','FUNCTION: BLANK STACK FEED CYCLE','盒片部件','BLANK GROUP','主机','xx_main_machine',0,'2022-06-30 15:26:57');
/*!40000 ALTER TABLE `warning` ENABLE KEYS */;
UNLOCK TABLES;

/*id also indicated time order*/
/*schema*/
DROP TABLE IF EXISTS `history`;
SET character_set_client = utf8mb4;
CREATE TABLE `history` (
  `id` int not NULL AUTO_INCREMENT,
  `warning_id` int NOT NULL,
  `value` int DEFAULT '0',
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


/*id also indicated time order*/
/*schema*/
DROP TABLE IF EXISTS `history_compare`;
SET character_set_client = utf8mb4;
CREATE TABLE `history_compare` (
  `id` int not NULL AUTO_INCREMENT,
  `warning_id` int NOT NULL,
  `value` int DEFAULT '0',
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  `if_newest` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



/*schema*/
DROP TABLE IF EXISTS `production`;
SET character_set_client = utf8mb4;
CREATE TABLE `production` (
  `id` int not NULL AUTO_INCREMENT,
  `label_Chinese` varchar(255) DEFAULT NULL,	
  `label_English` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*data*/
LOCK TABLES `production` WRITE;
INSERT INTO `production` (label_Chinese, label_English)
VALUES 
('手动排空的有效盒模',	'MANUALLY EMPTIED VALID POCKETS'),
('不进行生产时之机器转数',	'MACHINE CYCLES RUNNING EMPTY'),
('生产数据统计免除时之机器转数',	'MACHINE CYCLES WITH PROD. DATA DISABLED'),
('烟包实际产量',	'REAL PACKET PRODUCTION'),
('产品被剔除',	'REJECTED PRODUCTION'),
('下梁剔除的烟包',	'PACKETS REJECTED LOWER BEAM'),
('上梁剔除的烟包',	'PACKETS REJECTED UPPER BEAM'),
('第三轮烟包已剔除',	'PACKETS REJECTED AT 3RD WHEEL'),
('已使用盒片叠数',	'NUMBER OF BLANK STACKS USED'),
('已使用之铝箔纸卷数',	'NUMBER OF FOIL REELS USED'),
('已使用之内框纸卷数',	'NUMBER OF INNER0FRAME REELS USED'),
('盒片空白而剔除',	'REJECTS DUE TO BLANKS WITHOUT PRINT'),
('剔除：第二鼓轮上无盒片／不齐',	'REJECTION: NO BLANK/DISALIGN ON 2ND DRUM'),
('剔除：第三鼓轮上第一前盒片耳',	'REJECTS: 1ST FRONT BLANK0EAR DRUM3'),
('剔除：第三鼓轮上第二前盒片耳',	'REJECTS: 2ND FRONT BLANK0EAR DRUM3'),
('剔除：第三鼓轮上第一后盒片耳',	'REJECTS: 1ST REAR BLANK0EAR 0 DRUM3'),
('剔除：第三鼓轮上第二后盒片耳',	'REJECTS: 2ND REAR BLANK0EAR 0 DRUM3'),
('第三鼓轮皮带上缺盒片产生的剔除',	'REJECTS FOR BLANK ABS. ON 3RD DRUM BELT'),
('裹包时间过长而剔除',	'REJECTS DUE TO EXTENDED TIME FOR WRAP'),
('涂胶器接合超出相位的剔除',	'REJECTS FOR GLUER ENGAGE OUT OF PHASE'),
('盒片涂胶不全而剔除',	'REJECTS DUE TO INCOMPLETELY GLUED BLANKS'),
('高位出口电机复位引起的剔除次数',	'REJECTIONS FROM MOTOR HOMING 0 HIGH EXIT'),
('出口阻塞而剔除',	'REJECTIONS DUE TO EXIT JAM'),
('下部干燥通道剔除效用功能',	'EXTRA REJECTS AFTER WRAP WHEEL EMPTYING'),
('堵塞产生的下皮带剔除／马达故障',	'LOWER BELT REJECTS DUE TO JAM/MOTOR FAIL'),
('未要求的下梁烟包剔除',	'LOWER BEAM PACKET REJECTS NOT REQUESTED'),
('堵塞产生的上皮带剔除／马达故障',	'UPPER BELT REJECTS DUE TO JAM/MOTOR FAIL'),
('手动剔除：偏移的铝箔纸',	'MANUAL REJECTIONS 0 DISALIGNED FOIL'),
('推进器脱离而剔除',	'REJECTIONS DUE TO PUSHER RELEASE'),
('鼓轮上无存在内框纸时剔除物数量',	'NO.REJECTS DUE TO NO INNER0FRAME ON DRUM'),
('内框纸上存在带子的剔除',	'REJ. FOR TAPE PRESENCE ON INNERFRAME'),
('第二轮缺铝箔纸而产生的剔除',	'REJECTS DUE TO 2ND WHEEL FOIL ABSENCE'),
('第二轮铝箔纸不齐而产生的剔除',	'REJECTS DUE TO 2ND WHEEL FOIL MISALIGN.'),
('第三轮入口烟包阻塞而剔除',	'REJECT DUE TO 3RD WHEEL PACKET ENTRY JAM'),
('第三轮半环阻塞而剔除',	'REJECTS DUE TO 3RD WHEEL HALF0RING JAM'),
('第三轮缺内框纸而剔除', 'REJECT DUE TO 3RD WHEEL IN0FRAME ABSENCE'),
('第五轮缺盒片而剔除',	'REJECTS DUE TO NO 5TH WHEEL BLANK'),
('第五轮前缺盒片的剔除',	'BLANK REJECTS ABSENT FRONT IN 5TH WHEEL'),
('第五轮入口烟包阻塞而剔除',	'REJECTS: PACKET JAM AT 5TH WHEEL ENTRY'),
('第五轮缺铝箔纸而剔除',	'REJECTS: NO FOIL ON 5TH WHEEL'),
('第五轮折叠器打开产生的剔除',	'REJECTS FOR OPENING 5TH WHEEL FOLDERS'),
('第五轮缺内框纸产生的剔除', 'REJECT FOR ABSENCE INNER0FRAME 5TH WHEEL');
UNLOCK TABLES;




DROP TABLE IF EXISTS `consumption`;
SET character_set_client = utf8mb4;
CREATE TABLE `consumption` (
  `id` int not NULL AUTO_INCREMENT,
  `label_Chinese` varchar(255) DEFAULT NULL,
  `label_English` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*data*/
LOCK TABLES `consumption` WRITE;
INSERT INTO `consumption` (label_Chinese, label_English)
VALUES 
('烟支投入总数',	'SC: CIGARETTE FEED COUNT'),
('铝箔纸投入总张数',	'SC: FOIL UNWINDING COUNTT'),
('小盒片投入总张数',	'SC: BLANK SUCTION COUNT'),
('内框纸投入总张数',	'SC: INNER0FRAME SUCTION COUNT'),
('烟包实际产量',	'SC: REAL PACKET PRODUCTION'),
('产品被剔除',	'SC: REJECTED PRODUCTION'),
('4号轮剔除数',	'SC: PACKETS REJECTED AT 4TH WHEEL'),
('上/下梁架剔除数',	'SC: PACKETS REJECTED BEAM'),
('出口通道成像剔除数',	'SC: PACKETS REJECTED AT EXIT CHAN. PACKET VIS.'),
('每卷铝箔纸展开的张数',	'SC: FOIL REEL UNWINDING COUNT'),
('每卷内框纸展开的张数',	'SC: INNER0FRAME REEL UNWINDING COUNT'),
('每垛小盒片的张数',	'SC: XX BLANK STACK SUNCTION COUNT'),
('入口处盒模剔除的烟支消耗',	'SC:'),
('入口处盒模剔除的铝纸消耗',	'SC:'),
('3号轮剔除的烟支消耗',	'SC:'),
('3号轮剔除的铝纸消耗',	'SC:'),
('3号轮剔除的内框纸消耗',	'SC:'),
('3号轮剔除的商标纸消耗',	'SC:'),
('4号轮剔除的烟支消耗',	'SC:'),
('4号轮剔除的铝纸消耗',	'SC:'),
('4号轮剔除的内框纸消耗',	'SC:'),
('4号轮剔除的商标纸消耗',	'SC:'),
('上/下梁架剔除的烟支消耗',	'SC:'),
('上/下梁架剔除的铝纸消耗',	'SC:'),
('上/下梁架剔除的内框纸消耗',	'SC:'),
('上/下梁架剔除的商标纸消耗',	'SC:'),
('出口通道成像剔除的烟支消耗',	'SC:'),
('出口通道成像剔除的铝纸消耗',	'SC:'),
('出口通道成像剔除的内框纸消耗',	'SC:'),
('出口通道成像剔除的商标纸消耗',	'SC:'),
('推进器脱离而剔除',	'SC: REJECTIONS DUE TO PUSHER RELEASE'),
('盒模烟支侧面阻塞而剔除',	'SC: REJECTS DUE TO LATERAL BUNDLE JAMS'),
('盒模凌乱引起的剔除',	'SC: REJECTIONS DUE TO CIGARETTE BUNDLE JAM'),
('铝箔纸机组脱离而剔除',	'SC: REJECTS FOR FOIL GROUP DISENGAGE'),
('铝箔纸内侧迭接的剔除',	'SC: REJECTS FOR INSIDE FOIL SPLICE'),
('铝箔纸外侧迭接的剔除',	'SC: REJECTIONS DUE TO OUTER SIDE FOIL SPLICE'),
('光电探测器插件板无信号而剔除',	'SC: REJ.DUE TO OPT.SENS.BOARD SIGNALS FAIL'),
('光电探测器测出缺烟而剔除',	'SC: REJECTS DUE TO NO0CIG. FROM OPT.DETECTOR'),
('烟支空头而剔除',	'SC: REJECTIONS DUE TO LOOSE0END CIGARETTES'),
('手动剔除：偏移的铝箔纸',	'SC: MANUAL REJECTIONS 0 DISALIGNED FOIL'),
('空盒模产生的不期望的盒模剔除',	'SC: REJECTS FOR UNDES.POCK.FROM EMP. POCKETS'),
('盒片空白而剔除',	'SC: REJECTS DUE TO BLANKS WITHOUT PRINT'),
('剔除：第二鼓轮上无盒片／不齐',	'SC: REJECTION: NO BLANK/DISALIGN ON 2ND DRUM'),
('内框纸上存在带子的剔除',	'SC: REJ. FOR TAPE PRESENCE ON INNERFRAME'),
('第三轮缺拉片而剔除',	'SC: REJECT DUE TO 3RD WHEEL "PULL" ABSENCE'),
('第二轮缺铝箔纸而产生的剔除',	'SC: REJECTS DUE TO 2ND WHEEL FOIL ABSENCE'),
('第三轮入口烟包阻塞而剔除',	'SC: REJECT DUE TO 3RD WHEEL PACKET ENTRY JAM'),
('无请求第三轮剔除烟包',	'SC: PACKET REJECT AT 3RD WHEEL NOT REQUESTED'),
('鼓轮上无存在内框纸时剔除物数量',	'SC: NO.REJECTS DUE TO NO INNER0FRAME ON DRUM'),
('第三鼓轮皮带上缺盒片产生的剔除',	'SC: REJECTS FOR BLANK ABS. ON 3RD DRUM BELT'),
('无请求第四轮剔除烟包',	'SC: PACKET REJECT AT 4TH WHEEL NOT REQUESTED'),
('第三轮缺内框纸而剔除',	'SC: REJECT DUE TO 3RD WHEEL IN0FRAME ABSENCE'),
('第三轮半环阻塞而剔除',	'SC: REJECTS DUE TO 3RD WHEEL HALF0RING JAM'),
('涂胶器接合超出相位的剔除',	'SC: REJECTS FOR GLUER ENGAGE OUT OF PHASE'),
('盒片涂胶不全而剔除',	'SC: REJECTS DUE TO INCOMPLETELY GLUED BLANKS'),
('剔除：第三鼓轮上第一前盒片耳',	'SC: REJECTS: 1ST FRONT BLANK0EAR DRUM3'),
('剔除：第三鼓轮上第一后盒片耳',	'SC: REJECTS: 1ST REAR BLANK0EAR 0 DRUM3'),
('剔除：第三鼓轮上第二前盒片耳',	'SC: REJECTS: 2ND FRONT BLANK0EAR DRUM3'),
('剔除：第三鼓轮上第二后盒片耳',	'SC: REJECTS: 2ND REAR BLANK0EAR 0 DRUM3'),
('第四轮半环阻塞而剔除',	'SC: REJECTS DUE TO 4TH WHEEL HALF0RING JAM'),
('第四轮烟包不规则而剔除',	'SC: REJECTS: IRREGULAR PACKETS ON 4TH WHEEL'),
('第五轮前缺盒片的剔除',	'SC: BLANK REJECTS ABSENT FRONT IN 5TH WHEEL'),
('第五轮缺盒片而剔除',	'SC: REJECTS DUE TO NO 5TH WHEEL BLANK'),
('第五轮入口烟包阻塞而剔除',	'SC: REJECTS: PACKET JAM AT 5TH WHEEL ENTRY'),
('第五轮折叠器打开产生的剔除',	'SC: REJECTS FOR OPENING 5TH WHEEL FOLDERS'),
('第五轮缺铝箔纸而剔除',	'SC: REJECTS: NO FOIL ON 5TH WHEEL'),
('第五轮缺内框纸产生的剔除',	'SC: REJECT FOR ABSENCE INNER0FRAME 5TH WHEEL'),
('出口通道成像', '1#相机的剔除	SC: EXIT CHA. PACKET VISION 0 1# VIS. REJECT'),
('出口通道成像', '2#相机的剔除	SC: EXIT CHA. PACKET VISION 0 2# VIS. REJECT'),
('出口通道成像', '3#相机的剔除	SC: EXIT CHA. PACKET VISION 0 3# VIS. REJECT'),
('出口通道成像', '4#相机的剔除	SC: EXIT CHA. PACKET VISION 0 4# VIS. REJECT');
UNLOCK TABLES;
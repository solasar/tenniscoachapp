		// id to description map - key: our-id_customer-id_customer-table-name, value: text description
		var id_to_description_map = {};
		
		// coordinate to id map - key:  xcoordinate_ycoordinate_width_height_customer-table-name, value: our-id_customer-id
		var coordinate_to_id_map = {};
		
		
		///
		
		coordinate_to_id_map["85_110_123_110_Target1"] = "165_O";
		coordinate_to_id_map["209_110_123_110_Target1"] = "166_P";
		coordinate_to_id_map["85_110_50_110_Target2"] = "167_Q";
		coordinate_to_id_map["136_110_70_110_Target2"] = "168_R";
		coordinate_to_id_map["209_110_67_110_Target2"] = "169_S";
		coordinate_to_id_map["277_110_54_110_Target2"] = "170_T";
		coordinate_to_id_map["90_110_30_55_Target3"] = "153_7";
		coordinate_to_id_map["130_110_30_55_Target3"] = "154_8";
		coordinate_to_id_map["170_110_30_55_Target3"] = "155_9";
		coordinate_to_id_map["215_110_30_55_Target3"] = "156_10";
		coordinate_to_id_map["255_110_30_55_Target3"] = "157_11";
		coordinate_to_id_map["295_110_30_55_Target3"] = "158_12";
		coordinate_to_id_map["85_39_60_180_Target4"] = "162_L";
		coordinate_to_id_map["146_39_120_180_Target4"] = "163_M";
		coordinate_to_id_map["267_39_63_180_Target4"] = "164_N";
		coordinate_to_id_map["95_45_50_25_Target5"] = "147_1";
		coordinate_to_id_map["183_45_50_25_Target5"] = "148_2";
		coordinate_to_id_map["270_45_50_25_Target5"] = "149_3";
		coordinate_to_id_map["95_80_50_25_Target5"] = "150_4";
		coordinate_to_id_map["183_80_50_25_Target5"] = "151_5";
		coordinate_to_id_map["270_80_50_25_Target5"] = "152_6";
		coordinate_to_id_map["95_160_50_25_Target5"] = "159_13";
		coordinate_to_id_map["183_160_50_25_Target5"] = "160_14";
		coordinate_to_id_map["270_160_50_25_Target5"] = "161_15";
		coordinate_to_id_map["95_300_50_25_Location6"] = "94_G";
		coordinate_to_id_map["183_300_50_25_Location6"] = "95_H";
		coordinate_to_id_map["270_300_50_25_Location6"] = "96_I";
		coordinate_to_id_map["95_385_50_25_Location6"] = "91_D";
		coordinate_to_id_map["183_385_50_25_Location6"] = "92_E";
		coordinate_to_id_map["270_385_50_25_Location6"] = "93_F";
		coordinate_to_id_map["95_423_50_25_Location6"] = "88_A";
		coordinate_to_id_map["183_423_50_25_Location6"] = "89_B";
		coordinate_to_id_map["270_423_50_25_Location6"] = "90_C";
		coordinate_to_id_map["95_45_50_25_SinglesWinnerZone7"] = "177_7";
		coordinate_to_id_map["183_45_50_25_SinglesWinnerZone7"] = "178_8";
		coordinate_to_id_map["270_45_50_25_SinglesWinnerZone7"] = "179_9";
		coordinate_to_id_map["95_100_50_25_SinglesWinnerZone7"] = "180_10";
		coordinate_to_id_map["183_100_50_25_SinglesWinnerZone7"] = "181_11";
		coordinate_to_id_map["270_100_50_25_SinglesWinnerZone7"] = "182_12";
		coordinate_to_id_map["95_160_50_25_SinglesWinnerZone7"] = "183_13";
		coordinate_to_id_map["183_160_50_25_SinglesWinnerZone7"] = "184_14";
		coordinate_to_id_map["270_160_50_25_SinglesWinnerZone7"] = "185_15";
		coordinate_to_id_map["90_110_30_55_SinglesWinnerZone8"] = "171_1";
		coordinate_to_id_map["90_110_30_55_DoublesWinnerZone8"] = "199_1";
		coordinate_to_id_map["130_110_30_55_SinglesWinnerZone8"] = "172_2";
		coordinate_to_id_map["130_110_30_55_DoublesWinnerZone8"] = "200_2";
		coordinate_to_id_map["170_110_30_55_SinglesWinnerZone8"] = "173_3";
		coordinate_to_id_map["170_110_30_55_DoublesWinnerZone8"] = "201_3";
		coordinate_to_id_map["215_110_30_55_SinglesWinnerZone8"] = "174_4";
		coordinate_to_id_map["215_110_30_55_DoublesWinnerZone8"] = "202_4";
		coordinate_to_id_map["255_110_30_55_SinglesWinnerZone8"] = "175_5";
		coordinate_to_id_map["255_110_30_55_DoublesWinnerZone8"] = "203_5";
		coordinate_to_id_map["295_110_30_55_SinglesWinnerZone8"] = "176_6";
		coordinate_to_id_map["295_110_30_55_DoublesWinnerZone8"] = "204_6";
		coordinate_to_id_map["95_230_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "129_G";
		coordinate_to_id_map["183_230_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "130_H";
		coordinate_to_id_map["270_230_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "131_I";
		coordinate_to_id_map["95_335_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "126_D";
		coordinate_to_id_map["183_335_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "127_E";
		coordinate_to_id_map["270_335_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "128_F";
		coordinate_to_id_map["95_423_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "123_A";
		coordinate_to_id_map["183_423_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "124_B";
		coordinate_to_id_map["270_423_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "125_C";
		coordinate_to_id_map["331_10_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "136_5";
		coordinate_to_id_map["331_70_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "141_10";
		coordinate_to_id_map["331_180_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "146_15";
		coordinate_to_id_map["50_10_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "132_1";
		coordinate_to_id_map["50_70_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "137_6";
		coordinate_to_id_map["50_180_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "142_11";
		coordinate_to_id_map["95_10_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "133_2";
		coordinate_to_id_map["183_10_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "134_3";
		coordinate_to_id_map["270_10_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "135_4";
		coordinate_to_id_map["95_70_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "138_7";
		coordinate_to_id_map["183_70_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "139_8";
		coordinate_to_id_map["270_70_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "140_9";
		coordinate_to_id_map["95_180_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "143_12";
		coordinate_to_id_map["183_180_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "144_13";
		coordinate_to_id_map["270_180_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "145_14";
		coordinate_to_id_map["50_45_35_25_DoublesWinnerZone11"] = "205_7";
		coordinate_to_id_map["50_100_35_25_DoublesWinnerZone11"] = "210_12";
		coordinate_to_id_map["50_160_35_25_DoublesWinnerZone11"] = "215_17";
		coordinate_to_id_map["331_45_35_25_DoublesWinnerZone11"] = "209_11";
		coordinate_to_id_map["331_100_35_25_DoublesWinnerZone11"] = "214_16";
		coordinate_to_id_map["331_160_35_25_DoublesWinnerZone11"] = "219_21";
		coordinate_to_id_map["105_45_50_25_DoublesWinnerZone11"] = "206_8";
		coordinate_to_id_map["183_45_50_25_DoublesWinnerZone11"] = "207_9";
		coordinate_to_id_map["260_45_50_25_DoublesWinnerZone11"] = "208_10";
		coordinate_to_id_map["105_100_50_25_DoublesWinnerZone11"] = "211_13";
		coordinate_to_id_map["183_100_50_25_DoublesWinnerZone11"] = "212_14";
		coordinate_to_id_map["260_100_50_25_DoublesWinnerZone11"] = "213_15";
		coordinate_to_id_map["105_160_50_25_DoublesWinnerZone11"] = "216_18";
		coordinate_to_id_map["183_160_50_25_DoublesWinnerZone11"] = "217_19";
		coordinate_to_id_map["260_160_50_25_DoublesWinnerZone11"] = "218_20";
		coordinate_to_id_map["50_15_35_25_SinglesErrorZone12"] = "186_A";
		coordinate_to_id_map["105_15_50_25_SinglesErrorZone12"] = "187_B";
		coordinate_to_id_map["183_15_50_25_SinglesErrorZone12"] = "188_C";
		coordinate_to_id_map["260_15_50_25_SinglesErrorZone12"] = "189_D";
		coordinate_to_id_map["331_15_35_25_SinglesErrorZone12"] = "190_E";
		coordinate_to_id_map["50_220_35_25_SinglesErrorZone12"] = "196_K";
		coordinate_to_id_map["105_220_50_25_SinglesErrorZone12"] = "195_J";
		coordinate_to_id_map["183_220_50_25_SinglesErrorZone12"] = "194_I";
		coordinate_to_id_map["260_220_50_25_SinglesErrorZone12"] = "193_H";
		coordinate_to_id_map["331_220_35_25_SinglesErrorZone12"] = "192_G";
		coordinate_to_id_map["12_180_35_25_SinglesErrorZone12"] = "197_L";
		coordinate_to_id_map["370_180_35_25_SinglesErrorZone12"] = "191_F";
		coordinate_to_id_map["370_400_35_25_SinglesErrorZone12"] = "198_M";
		coordinate_to_id_map["12_15_35_25_DoublesErrorZone13"] = "220_A";
		coordinate_to_id_map["370_15_35_25_DoublesErrorZone13"] = "226_G";
		coordinate_to_id_map["50_15_35_25_DoublesErrorZone13"] = "221_B";
		coordinate_to_id_map["105_15_50_25_DoublesErrorZone13"] = "222_C";
		coordinate_to_id_map["183_15_50_25_DoublesErrorZone13"] = "223_D";
		coordinate_to_id_map["260_15_50_25_DoublesErrorZone13"] = "224_E";
		coordinate_to_id_map["331_15_35_25_DoublesErrorZone13"] = "225_F";
		coordinate_to_id_map["50_220_35_25_DoublesErrorZone13"] = "232_M";
		coordinate_to_id_map["105_220_50_25_DoublesErrorZone13"] = "231_L";
		coordinate_to_id_map["183_220_50_25_DoublesErrorZone13"] = "230_K";
		coordinate_to_id_map["260_220_50_25_DoublesErrorZone13"] = "229_J";
		coordinate_to_id_map["331_220_35_25_DoublesErrorZone13"] = "228_I";
		coordinate_to_id_map["12_180_35_25_DoublesErrorZone13"] = "233_N";
		coordinate_to_id_map["370_180_35_25_DoublesErrorZone13"] = "227_H";
		coordinate_to_id_map["370_400_35_25_DoublesErrorZone13"] = "234_O";
		
		///
	
		// Position Id
		var D_PositionBehindLeftBaseline_Location = "Behind Left Baseline";
		var D_PositionBehindCentreMark_Location = "Behind Centre Mark";
		var D_PositionBehindRightBaseline_Location = "Behind Right Baseline";
		var D_PositionInsideLeftServiceline_Location = "Inside Left Serviceline";
		var D_PositionInsideTServiceline_Location = "Inside T Serviceline";
		var D_PositionInsideRightServiceline_Location = "Inside Right Serviceline";
		var D_PositionBeyondLeftNetArea_Location = "Beyond Left Net Area";
		var D_PositionBeyondMiddleNetArea_Location = "Beyond Middle Net Area";
		var D_PositionBeyondRightNetArea_Location = "Beyond Right Net Area";
		var D_PositionLeftAndBehindCentreMark_Location = "Beyond Right Net Area";
		var D_PositionRightAndBehindCentreMark_Location = "Right And Behind Centre Mark";
		
		var D_PositionBehindBaselineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot = "Behind Baseline Left Area";
		var D_PositionBehindBaselineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot = "Behind Baseline Middle Area";
		var D_PositionBehindBaselineRightArea_PlayerPositionZoneOfWinnerOrErrorShot = "Behind Baseline Right Area";
		var D_PositionBetweenBaselineAndServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot = "Between Baseline And Serviceline Left Area";
		var D_PositionBetweenBaselineAndServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot = "Between Baseline And Serviceline Middle Area";
		var D_PositionBetweenBaselineAndServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot = "Between Baseline And Serviceline Right Area";
		var D_PositionInsideServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot = "Inside Serviceline Left Area";
		var D_PositionInsideServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot = "Inside Serviceline Middle Area";
		var D_PositionInsideServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot = "Inside Serviceline Right Area";
		
		var D_PositionBehindBaselineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = "Behind Baseline Left Of Doubles Alley";
		var D_PositionBehindBaselineLeftArea_OpponentPositionZoneWinnerOrErrorShot = "Behind Baseline Left Area";
		var D_PositionBehindBaselineMiddleArea_OpponentPositionZoneWinnerOrErrorShot = "Behind Baseline Middle Area";
		var D_PositionBehindBaselineRightArea_OpponentPositionZoneWinnerOrErrorShot = "Behind Baseline Right Area";
		var D_PositionBehindBaselineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = "Behind Baseline Right Of Doubles Alley";
		var D_PositionBetweenBaselineAndServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = "Between Baseline And Serviceline Left Of Doubles Alley";
		var D_PositionBetweenBaselineAndServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot = "Between Baseline And Serviceline Left Area";
		var D_PositionBetweenBaselineAndServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot = "Between Baseline And Serviceline Middle Area";
		var D_PositionBetweenBaselineAndServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot = "Between Baseline And Serviceline Right Area";
		var D_PositionBetweenBaselineAndServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = "Between Baseline And Serviceline Right Of Doubles Alley";
		var D_PositionInsideServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = "Inside Serviceline Left Of Doubles Alley";
		var D_PositionInsideServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot = "Inside Serviceline Left Area";
		var D_PositionInsideServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot = "Inside Serviceline Middle Area";
		var D_PositionInsideServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot = "Inside Serviceline Right Area";
		var D_PositionInsideServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = "Inside Serviceline Right Of Doubles Alley";

		// Target Id
		var D_TargetLeftBaseline = "Left Baseline";
		var D_TargetCentreMark = "Centre Mark";
		var D_TargetRightBaseline = "Right Baseline";
		var D_TargetLeftServiceline = "Left Serviceline";
		var D_TargetTServiceline = "T Serviceline";
		var D_TargetRightServiceline = "Right Serviceline";
		var D_TargetLeftAreaOfDeuceServiceBoxServeTarget = "Left Area Of Deuce Service Box Serve Target";
		var D_TargetMiddleAreaOfDeuceServiceBoxServeTarget = "Target Middle Area Of Deuce Service Box Serve Target";
		var D_TargetRightAreaOfDeuceServiceBoxServeTarget = "Right Area Of Deuce Service Box Serve Target";
		var D_TargetLeftAreaOfAdvantageServiceBoxServeTarget = "Left Area Of Advantage Service Box Serve Target";
		var D_TargetMiddleAreaOfAdvantageServiceBoxServeTarget = "Middle Area Of Advantage Service Box Serve Target";
		var D_TargetRightAreaOfAdvantageServiceBoxServeTarget = "Right Area Of Advantage Service Box Serve Target";
		var D_TargetBeyondLeftNetArea = "Beyond Left Net Area";
		var D_TargetBeyondMiddleNetArea = "Beyond Middle Net Area";
		var D_TargetBeyondRightNetArea = "Beyond Right Net Area";
		var D_TargetLeftZone = "Left Zone";
		var D_TargetMiddleZone = "Middle Zone";
		var D_TargetRightZone = "Right Zone";
		var D_TargetDeuceServiceBox = "Deuce Service Box";
		var D_TargetAdvantageServiceBox = "Advantage Service Box";
		var D_TargetLeftAreaOfDeuceServiceBoxServeZone = "Left Area Of Deuce Service Box Serve Zone";
		var D_TargetRightAreaOfDeuceServiceBoxServeZone = "Right Area Of Deuce Service Box Serve Zone";
		var D_TargetLeftAreaOfAdvantageServiceBoxServeZone = "Left Area Of Advantage Service Box Serve Zone";
		var D_TargetRightAreaOfAdvantageServiceBoxServeZone = "Right Area Of Advantage Service Box Serve Zone";

		// Zone Id
		var D_ZoneLeftAreaOfServiceBoxDeuce_SinglesWinnerZone = "Left Area Of Service Box Deuce";
		var D_ZoneMiddleAreaOfServiceBoxDeuce_SinglesWinnerZone = "Middle Area Of Service Box Deuce";
		var D_ZoneRightAreaOfServiceBoxDeuce_SinglesWinnerZone = "Right Area Of Service Box Deuce";
		var D_ZoneLeftAreaOfServiceBoxAdvantage_SinglesWinnerZone = "Left Area Of Service Box Advantage";
		var D_ZoneMiddleAreaOfServiceBoxAdvantage_SinglesWinnerZone = "Middle Area Of Service Box Advantage";
		var D_ZoneRightAreaOfServiceBoxAdvantage_SinglesWinnerZone = "Right Area Of Service Box Advantage";
		var D_ZoneLeftRearZone_SinglesWinnerZone = "Left Rear Zone";
		var D_ZoneMiddleRearZone_SinglesWinnerZone = "Middle Rear Zone";
		var D_ZoneRightRearZone_SinglesWinnerZone = "Right Rear Zone";
		var D_ZoneLeftMiddleZone_SinglesWinnerZone = "Left Middle Zone";
		var D_ZoneMiddleMiddleZone_SinglesWinnerZone = "Middle Middle Zone";
		var D_ZoneRightMiddleZone_SinglesWinnerZone = "Right Middle Zone";
		var D_ZoneBeyondLeftNetArea_SinglesWinnerZone = "Beyond Left Net Area";
		var D_ZoneBeyondMiddleNetArea_SinglesWinnerZone = "Beyond Middle Net Area";
		var D_ZoneBeyondRightNetArea_SinglesWinnerZone = "Beyond Right Net Area";
		
		var D_ZoneBeyondBaselineAndLeftSinglesLine_SinglesErrorZone = "Beyond Baseline And Left Singles Line";
		var D_ZoneBeyondBaselineLeftArea_SinglesErrorZone = "Beyond Baseline Left Area";
		var D_ZoneBeyondBaselineMiddleArea_SinglesErrorZone = "Beyond Baseline Middle Area";
		var D_ZoneBeyondBaselineRightArea_SinglesErrorZone = "Beyond Baseline Right Area";
		var D_ZoneBeyondBaselineAndRightSinglesLine_SinglesErrorZone = "Beyond Baseline And Right Singles Line";
		var D_ZoneRightOfRightSinglesLine_SinglesErrorZone = "Right Of Right Singles Line";
		var D_ZoneIntoNetRightDoublesAlley_SinglesErrorZone = "Into Net Right Doubles Alley";
		var D_ZoneIntoNetRightArea_SinglesErrorZone = "Into Net Right Area";
		var D_ZoneIntoNetMiddleArea_SinglesErrorZone = "Into Net Middle Area";
		var D_ZoneIntoNetLeftArea_SinglesErrorZone = "Into Net Left Area";
		var D_ZoneIntoNetLeftDoublesAlley_SinglesErrorZone = "Into Net Left Doubles Alley";
		var D_ZoneLeftOfLeftSinglesLine_SinglesErrorZone = "Left Of Left Singles Line";
		var D_ZoneOther_SinglesErrorZone = "Other";
		
		var D_ZoneLeftAreaOfServiceBoxDeuce_DoublesWinnerZone = "Left Area Of Service Box Deuce";
		var D_ZoneMiddleAreaOfServiceBoxDeuce_DoublesWinnerZone = "Middle Area Of Service Box Deuce";
		var D_ZoneRightAreaOfServiceBoxDeuce_DoublesWinnerZone = "Right Area Of Service Box Deuce";
		var D_ZoneLeftAreaOfServiceBoxAdvantage_DoublesWinnerZone = "Left Area Of Service Box Advantage";
		var D_ZoneMiddleAreaOfServiceBoxAdvantage_DoublesWinnerZone = "Middle Area Of Service Box Advantage";
		var D_ZoneRightAreaOfServiceBoxAdvantage_DoublesWinnerZone = "Right Area Of Service Box Advantage";
		var D_ZoneLeftAlleyRearZone_DoublesWinnerZone = "Left Alley Rear Zone";
		var D_ZoneLeftRearZone_DoublesWinnerZone = "Left Rear Zone";
		var D_ZoneMiddleRearZone_DoublesWinnerZone = "Middle Rear Zone";
		var D_ZoneRightRearZone_DoublesWinnerZone = "Right Rear Zone";
		var D_ZoneRightAlleyRearZone_DoublesWinnerZone = "Right Alley Rear Zone";
		var D_ZoneLeftAlleyMiddleZone_DoublesWinnerZone = "Left Alley Middle Zone";
		var D_ZoneLeftMiddleZone_DoublesWinnerZone = "Left Middle Zone";
		var D_ZoneMiddleMiddleZone_DoublesWinnerZone = "Middle Middle Zone";
		var D_ZoneRightMiddleZone_DoublesWinnerZone = "Right Middle Zone";
		var D_ZoneRightAlleyMiddleZone_DoublesWinnerZone = "Right Alley Middle Zone";
		var D_ZoneBeyondLeftNetAlleyArea_DoublesWinnerZone = "Beyond Left Net Alley Area";
		var D_ZoneBeyondLeftNetArea_DoublesWinnerZone = "Beyond Left Net Area";
		var D_ZoneBeyondMiddleNetArea_DoublesWinnerZone = "Beyond Middle Net Area";
		var D_ZoneBeyondRightNetArea_DoublesWinnerZone = "Beyond Right Net Area";
		var D_ZoneBeyondRightNetAlleyArea_DoublesWinnerZone = "Beyond Right Net Alley Area";
		
		var D_ZoneBeyondBaselineAndLeftDoublesLine_DoublesErrorZone = "Beyond Baseline And Left Doubles Line";
		var D_ZoneBeyondBaselineLeftAlleyArea_DoublesErrorZone = "Beyond Baseline Left Alley Area";
		var D_ZoneBeyondBaselineLeftArea_DoublesErrorZone = "Beyond Baseline Left Area";
		var D_ZoneBeyondBaselineMiddleArea_DoublesErrorZone = "Beyond Baseline Middle Area";
		var D_ZoneBeyondBaselineRightArea_DoublesErrorZone = "Beyond Baseline Right Area";
		var D_ZoneBeyondBaselineRightAlleyArea_DoublesErrorZone = "Beyond Baseline Right Alley Area";
		var D_ZoneBeyondBaselineAndRightDoublesLine_DoublesErrorZone = "Beyond Baseline And Right Doubles Line";
		var D_ZoneRightOfRightDoublesLine_DoublesErrorZone = "Right Of Right Doubles Line";
		var D_ZoneIntoNetRightDoublesAlley_DoublesErrorZone = "Into Net Right Doubles Alley";
		var D_ZoneIntoNetRightArea_DoublesErrorZone = "Into Net Right Area";
		var D_ZoneIntoNetMiddleArea_DoublesErrorZone = "Into Net Middle Area";
		var D_ZoneIntoNetLeftArea_DoublesErrorZone = "Into Net Left Area";
		var D_ZoneIntoNetLeftDoublesAlley_DoublesErrorZone = "Into Net Left Doubles Alley";
		var D_ZoneLeftOfLeftDoublesLine_DoublesErrorZone = "Left Of Left Doubles Line";
		var D_ZoneOther_DoublesErrorZone = "Other";
		
		
		// Position Id
		var PositionBehindLeftBaseline_Location = 88;
		id_to_description_map[PositionBehindLeftBaseline_Location+"_A_Location"] = D_PositionBehindLeftBaseline_Location;
		var PositionBehindCentreMark_Location = 89;
		id_to_description_map[PositionBehindCentreMark_Location+"_B_Location"] = D_PositionBehindCentreMark_Location;
		var PositionBehindRightBaseline_Location = 90;
		id_to_description_map[PositionBehindRightBaseline_Location+"_C_Location"] = D_PositionBehindRightBaseline_Location;
		var PositionInsideLeftServiceline_Location = 91;
		id_to_description_map[PositionInsideLeftServiceline_Location+"_D_Location"] = D_PositionInsideLeftServiceline_Location;
		var PositionInsideTServiceline_Location = 92;
		id_to_description_map[PositionInsideTServiceline_Location+"_E_Location"] = D_PositionInsideTServiceline_Location;
		var PositionInsideRightServiceline_Location = 93;
		id_to_description_map[PositionInsideRightServiceline_Location+"_F_Location"] = D_PositionInsideRightServiceline_Location;
		var PositionBeyondLeftNetArea_Location = 94;
		id_to_description_map[PositionBeyondLeftNetArea_Location+"_G_Location"] = D_PositionBeyondLeftNetArea_Location;
		var PositionBeyondMiddleNetArea_Location = 95;
		id_to_description_map[PositionBeyondMiddleNetArea_Location+"_H_Location"] = D_PositionBeyondMiddleNetArea_Location;
		var PositionBeyondRightNetArea_Location = 96;
		id_to_description_map[PositionBeyondRightNetArea_Location+"_I_Location"] = D_PositionBeyondRightNetArea_Location;
		var PositionLeftAndBehindCentreMark_Location = 97;
		id_to_description_map[PositionLeftAndBehindCentreMark_Location+"_J_Location"] = D_PositionLeftAndBehindCentreMark_Location;
		var PositionRightAndBehindCentreMark_Location = 98;
		id_to_description_map[PositionRightAndBehindCentreMark_Location+"_K_Location"] = D_PositionRightAndBehindCentreMark_Location;
		
		var PositionBehindBaselineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot = 123;
		id_to_description_map[PositionBehindBaselineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot+"_A_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionBehindBaselineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionBehindBaselineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot = 124;
		id_to_description_map[PositionBehindBaselineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot+"_B_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionBehindBaselineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionBehindBaselineRightArea_PlayerPositionZoneOfWinnerOrErrorShot = 125;
		id_to_description_map[PositionBehindBaselineRightArea_PlayerPositionZoneOfWinnerOrErrorShot+"_C_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionBehindBaselineRightArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot = 126;
		id_to_description_map[PositionBetweenBaselineAndServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot+"_D_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionBetweenBaselineAndServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot = 127;
		id_to_description_map[PositionBetweenBaselineAndServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot+"_E_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionBetweenBaselineAndServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot = 128;
		id_to_description_map[PositionBetweenBaselineAndServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot+"_F_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionBetweenBaselineAndServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionInsideServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot = 129;
		id_to_description_map[PositionInsideServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot+"_G_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionInsideServicelineLeftArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionInsideServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot = 130;
		id_to_description_map[PositionInsideServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot+"_H_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionInsideServicelineMiddleArea_PlayerPositionZoneOfWinnerOrErrorShot;
		var PositionInsideServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot = 131;
		id_to_description_map[PositionInsideServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot+"_H_PlayerPositionZoneOfWinnerOrErrorShots"] = D_PositionInsideServicelineRightArea_PlayerPositionZoneOfWinnerOrErrorShot;
		
		var PositionBehindBaselineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = 132;
		id_to_description_map[PositionBehindBaselineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot+"_1_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBehindBaselineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBehindBaselineLeftArea_OpponentPositionZoneWinnerOrErrorShot = 133;
		id_to_description_map[PositionBehindBaselineLeftArea_OpponentPositionZoneWinnerOrErrorShot+"_2_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBehindBaselineLeftArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBehindBaselineMiddleArea_OpponentPositionZoneWinnerOrErrorShot = 134;
		id_to_description_map[PositionBehindBaselineMiddleArea_OpponentPositionZoneWinnerOrErrorShot+"_3_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBehindBaselineMiddleArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBehindBaselineRightArea_OpponentPositionZoneWinnerOrErrorShot = 135;
		id_to_description_map[PositionBehindBaselineRightArea_OpponentPositionZoneWinnerOrErrorShot+"_4_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBehindBaselineRightArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBehindBaselineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = 136;
		id_to_description_map[PositionBehindBaselineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot+"_5_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBehindBaselineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = 137;
		id_to_description_map[PositionBetweenBaselineAndServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot+"_6_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBetweenBaselineAndServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot = 138;
		id_to_description_map[PositionBetweenBaselineAndServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot+"_7_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBetweenBaselineAndServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot = 139;
		id_to_description_map[PositionBetweenBaselineAndServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot+"_8_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBetweenBaselineAndServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot = 140;
		id_to_description_map[PositionBetweenBaselineAndServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot+"_9_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBetweenBaselineAndServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionBetweenBaselineAndServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = 141;
		id_to_description_map[PositionBetweenBaselineAndServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot+"_10_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionBetweenBaselineAndServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot;
		var PositionInsideServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = 142;
		id_to_description_map[PositionInsideServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot+"_11_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionInsideServicelineLeftOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot;
		var PositionInsideServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot = 143;
		id_to_description_map[PositionInsideServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot+"_12_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionInsideServicelineLeftArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionInsideServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot = 144;
		id_to_description_map[PositionInsideServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot+"_13_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionInsideServicelineMiddleArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionInsideServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot = 145;
		id_to_description_map[PositionInsideServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot+"_14_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionInsideServicelineRightArea_OpponentPositionZoneWinnerOrErrorShot;
		var PositionInsideServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot = 146;
		id_to_description_map[PositionInsideServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot+"_15_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = D_PositionInsideServicelineRightOfDoublesAlley_OpponentPositionZoneWinnerOrErrorShot;
	
		// Target Id
		var TargetLeftBaseline = 147;
		id_to_description_map[TargetLeftBaseline+"_1_Target"] = D_TargetLeftBaseline;
		var TargetCentreMark = 148;
		id_to_description_map[TargetCentreMark+"_2_Target"] = D_TargetCentreMark;
		var TargetRightBaseline = 149;
		id_to_description_map[TargetRightBaseline+"_3_Target"] = D_TargetRightBaseline;
		var TargetLeftServiceline = 150;
		id_to_description_map[TargetLeftServiceline+"_4_Target"] = D_TargetLeftServiceline;
		var TargetTServiceline = 151;
		id_to_description_map[TargetTServiceline+"_5_Target"] = D_TargetTServiceline;
		var TargetRightServiceline = 152;
		id_to_description_map[TargetRightServiceline+"_6_Target"] = D_TargetRightServiceline;
		var TargetLeftAreaOfDeuceServiceBoxServeTarget = 153;
		id_to_description_map[TargetLeftAreaOfDeuceServiceBoxServeTarget+"_7_Target"] = D_TargetLeftAreaOfDeuceServiceBoxServeTarget;
		var TargetMiddleAreaOfDeuceServiceBoxServeTarget = 154;
		id_to_description_map[TargetMiddleAreaOfDeuceServiceBoxServeTarget+"_8_Target"] = D_TargetMiddleAreaOfDeuceServiceBoxServeTarget;
		var TargetRightAreaOfDeuceServiceBoxServeTarget = 155;
		id_to_description_map[TargetRightAreaOfDeuceServiceBoxServeTarget+"_9_Target"] = D_TargetRightAreaOfDeuceServiceBoxServeTarget;
		var TargetLeftAreaOfAdvantageServiceBoxServeTarget = 156;
		id_to_description_map[TargetLeftAreaOfAdvantageServiceBoxServeTarget+"_10_Target"] = D_TargetLeftAreaOfAdvantageServiceBoxServeTarget;
		var TargetMiddleAreaOfAdvantageServiceBoxServeTarget = 157;
		id_to_description_map[TargetMiddleAreaOfAdvantageServiceBoxServeTarget+"_11_Target"] = D_TargetMiddleAreaOfAdvantageServiceBoxServeTarget;
		var TargetRightAreaOfAdvantageServiceBoxServeTarget = 158;
		id_to_description_map[TargetRightAreaOfAdvantageServiceBoxServeTarget+"_12_Target"] = D_TargetRightAreaOfAdvantageServiceBoxServeTarget;
		var TargetBeyondLeftNetArea = 159;
		id_to_description_map[TargetBeyondLeftNetArea+"_13_Target"] = D_TargetBeyondLeftNetArea;
		var TargetBeyondMiddleNetArea = 160;
		id_to_description_map[TargetBeyondMiddleNetArea+"_14_Target"] = D_TargetBeyondMiddleNetArea;
		var TargetBeyondRightNetArea = 161;
		id_to_description_map[TargetBeyondRightNetArea+"_15_Target"] = D_TargetBeyondRightNetArea;
		var TargetLeftZone = 162;
		id_to_description_map[TargetLeftZone+"_L_Target"] = D_TargetLeftZone;
		var TargetMiddleZone = 163;
		id_to_description_map[TargetMiddleZone+"_M_Target"] = D_TargetMiddleZone;
		var TargetRightZone = 164;
		id_to_description_map[TargetRightZone+"_N_Target"] = D_TargetRightZone;
		var TargetDeuceServiceBox = 165;
		id_to_description_map[TargetDeuceServiceBox+"_O_Target"] = D_TargetDeuceServiceBox;
		var TargetAdvantageServiceBox = 166;
		id_to_description_map[TargetAdvantageServiceBox+"_P_Target"] = D_TargetAdvantageServiceBox;
		var TargetLeftAreaOfDeuceServiceBoxServeZone = 167;
		id_to_description_map[TargetLeftAreaOfDeuceServiceBoxServeZone+"_Q_Target"] = D_TargetLeftAreaOfDeuceServiceBoxServeZone;
		var TargetRightAreaOfDeuceServiceBoxServeZone = 168;
		id_to_description_map[TargetRightAreaOfDeuceServiceBoxServeZone+"_R_Target"] = D_TargetRightAreaOfDeuceServiceBoxServeZone;
		var TargetLeftAreaOfAdvantageServiceBoxServeZone = 169;
		id_to_description_map[TargetLeftAreaOfAdvantageServiceBoxServeZone+"_S_Target"] = D_TargetLeftAreaOfAdvantageServiceBoxServeZone;
		var TargetRightAreaOfAdvantageServiceBoxServeZone = 170;
		id_to_description_map[TargetRightAreaOfAdvantageServiceBoxServeZone+"_T_Target"] = D_TargetRightAreaOfAdvantageServiceBoxServeZone;
	
		// Zone Id
		var ZoneLeftAreaOfServiceBoxDeuce_SinglesWinnerZone = 171;
		id_to_description_map[ZoneLeftAreaOfServiceBoxDeuce_SinglesWinnerZone+"_1_SinglesWinnerZone"] = D_ZoneLeftAreaOfServiceBoxDeuce_SinglesWinnerZone;
		var ZoneMiddleAreaOfServiceBoxDeuce_SinglesWinnerZone = 172;
		id_to_description_map[ZoneMiddleAreaOfServiceBoxDeuce_SinglesWinnerZone+"_2_SinglesWinnerZone"] = D_ZoneMiddleAreaOfServiceBoxDeuce_SinglesWinnerZone;
		var ZoneRightAreaOfServiceBoxDeuce_SinglesWinnerZone = 173;
		id_to_description_map[ZoneRightAreaOfServiceBoxDeuce_SinglesWinnerZone+"_3_SinglesWinnerZone"] = D_ZoneRightAreaOfServiceBoxDeuce_SinglesWinnerZone;
		var ZoneLeftAreaOfServiceBoxAdvantage_SinglesWinnerZone = 174;
		id_to_description_map[ZoneLeftAreaOfServiceBoxAdvantage_SinglesWinnerZone+"_4_SinglesWinnerZone"] = D_ZoneLeftAreaOfServiceBoxAdvantage_SinglesWinnerZone;
		var ZoneMiddleAreaOfServiceBoxAdvantage_SinglesWinnerZone = 175;
		id_to_description_map[ZoneMiddleAreaOfServiceBoxAdvantage_SinglesWinnerZone+"_5_SinglesWinnerZone"] = D_ZoneMiddleAreaOfServiceBoxAdvantage_SinglesWinnerZone;
		var ZoneRightAreaOfServiceBoxAdvantage_SinglesWinnerZone = 176;
		id_to_description_map[ZoneRightAreaOfServiceBoxAdvantage_SinglesWinnerZone+"_6_SinglesWinnerZone"] = D_ZoneRightAreaOfServiceBoxAdvantage_SinglesWinnerZone;
		var ZoneLeftRearZone_SinglesWinnerZone = 177;
		id_to_description_map[ZoneLeftRearZone_SinglesWinnerZone+"_7_SinglesWinnerZone"] = D_ZoneLeftRearZone_SinglesWinnerZone;
		var ZoneMiddleRearZone_SinglesWinnerZone = 178;
		id_to_description_map[ZoneMiddleRearZone_SinglesWinnerZone+"_8_SinglesWinnerZone"] = D_ZoneMiddleRearZone_SinglesWinnerZone;
		var ZoneRightRearZone_SinglesWinnerZone = 179;
		id_to_description_map[ZoneRightRearZone_SinglesWinnerZone+"_9_SinglesWinnerZone"] = D_ZoneRightRearZone_SinglesWinnerZone;
		var ZoneLeftMiddleZone_SinglesWinnerZone = 180;
		id_to_description_map[ZoneLeftMiddleZone_SinglesWinnerZone+"_10_SinglesWinnerZone"] = D_ZoneLeftMiddleZone_SinglesWinnerZone;
		var ZoneMiddleMiddleZone_SinglesWinnerZone = 181;
		id_to_description_map[ZoneMiddleMiddleZone_SinglesWinnerZone+"_11_SinglesWinnerZone"] = D_ZoneMiddleMiddleZone_SinglesWinnerZone;
		var ZoneRightMiddleZone_SinglesWinnerZone = 182;
		id_to_description_map[ZoneRightMiddleZone_SinglesWinnerZone+"_12_SinglesWinnerZone"] = D_ZoneRightMiddleZone_SinglesWinnerZone;
		var ZoneBeyondLeftNetArea_SinglesWinnerZone = 183;
		id_to_description_map[ZoneBeyondLeftNetArea_SinglesWinnerZone+"_13_SinglesWinnerZone"] = D_ZoneBeyondLeftNetArea_SinglesWinnerZone;
		var ZoneBeyondMiddleNetArea_SinglesWinnerZone = 184;
		id_to_description_map[ZoneBeyondMiddleNetArea_SinglesWinnerZone+"_14_SinglesWinnerZone"] = D_ZoneBeyondMiddleNetArea_SinglesWinnerZone;
		var ZoneBeyondRightNetArea_SinglesWinnerZone = 185;
		id_to_description_map[ZoneBeyondRightNetArea_SinglesWinnerZone+"_15_SinglesWinnerZone"] = D_ZoneBeyondRightNetArea_SinglesWinnerZone;
		
		var ZoneBeyondBaselineAndLeftSinglesLine_SinglesErrorZone = 186;
		id_to_description_map[ZoneBeyondBaselineAndLeftSinglesLine_SinglesErrorZone+"_A_SinglesErrorZone"] = D_ZoneBeyondBaselineAndLeftSinglesLine_SinglesErrorZone;
		var ZoneBeyondBaselineLeftArea_SinglesErrorZone = 187;
		id_to_description_map[ZoneBeyondBaselineLeftArea_SinglesErrorZone+"_B_SinglesErrorZone"] = D_ZoneBeyondBaselineLeftArea_SinglesErrorZone;
		var ZoneBeyondBaselineMiddleArea_SinglesErrorZone = 188;
		id_to_description_map[ZoneBeyondBaselineMiddleArea_SinglesErrorZone+"_C_SinglesErrorZone"] = D_ZoneBeyondBaselineMiddleArea_SinglesErrorZone;
		var ZoneBeyondBaselineRightArea_SinglesErrorZone = 189;
		id_to_description_map[ZoneBeyondBaselineRightArea_SinglesErrorZone+"_D_SinglesErrorZone"] = D_ZoneBeyondBaselineRightArea_SinglesErrorZone;
		var ZoneBeyondBaselineAndRightSinglesLine_SinglesErrorZone = 190;
		id_to_description_map[ZoneBeyondBaselineAndRightSinglesLine_SinglesErrorZone+"_E_SinglesErrorZone"] = D_ZoneBeyondBaselineAndRightSinglesLine_SinglesErrorZone;
		var ZoneRightOfRightSinglesLine_SinglesErrorZone = 191;
		id_to_description_map[ZoneRightOfRightSinglesLine_SinglesErrorZone+"_F_SinglesErrorZone"] = D_ZoneRightOfRightSinglesLine_SinglesErrorZone;
		var ZoneIntoNetRightDoublesAlley_SinglesErrorZone = 192;
		id_to_description_map[ZoneIntoNetRightDoublesAlley_SinglesErrorZone+"_G_SinglesErrorZone"] = D_ZoneIntoNetRightDoublesAlley_SinglesErrorZone;
		var ZoneIntoNetRightArea_SinglesErrorZone = 193;
		id_to_description_map[ZoneIntoNetRightArea_SinglesErrorZone+"_H_SinglesErrorZone"] = D_ZoneIntoNetRightArea_SinglesErrorZone;
		var ZoneIntoNetMiddleArea_SinglesErrorZone = 194;
		id_to_description_map[ZoneIntoNetMiddleArea_SinglesErrorZone+"_I_SinglesErrorZone"] = D_ZoneIntoNetMiddleArea_SinglesErrorZone;
		var ZoneIntoNetLeftArea_SinglesErrorZone = 195;
		id_to_description_map[ZoneIntoNetLeftArea_SinglesErrorZone+"_J_SinglesErrorZone"] = D_ZoneIntoNetLeftArea_SinglesErrorZone;
		var ZoneIntoNetLeftDoublesAlley_SinglesErrorZone = 196;
		id_to_description_map[ZoneIntoNetLeftDoublesAlley_SinglesErrorZone+"_K_SinglesErrorZone"] = D_ZoneIntoNetLeftDoublesAlley_SinglesErrorZone;
		var ZoneLeftOfLeftSinglesLine_SinglesErrorZone = 197;
		id_to_description_map[ZoneLeftOfLeftSinglesLine_SinglesErrorZone+"_L_SinglesErrorZone"] = D_ZoneLeftOfLeftSinglesLine_SinglesErrorZone;
		var ZoneOther_SinglesErrorZone = 198;
		id_to_description_map[ZoneOther_SinglesErrorZone+"_M_SinglesErrorZone"] = D_ZoneOther_SinglesErrorZone;
		
		var ZoneLeftAreaOfServiceBoxDeuce_DoublesWinnerZone = 199;
		id_to_description_map[ZoneLeftAreaOfServiceBoxDeuce_DoublesWinnerZone+"_1_DoublesWinnerZone"] = D_ZoneLeftAreaOfServiceBoxDeuce_DoublesWinnerZone;
		var ZoneMiddleAreaOfServiceBoxDeuce_DoublesWinnerZone = 200;
		id_to_description_map[ZoneMiddleAreaOfServiceBoxDeuce_DoublesWinnerZone+"_2_DoublesWinnerZone"] = D_ZoneMiddleAreaOfServiceBoxDeuce_DoublesWinnerZone;
		var ZoneRightAreaOfServiceBoxDeuce_DoublesWinnerZone = 201;
		id_to_description_map[ZoneRightAreaOfServiceBoxDeuce_DoublesWinnerZone+"_3_DoublesWinnerZone"] = D_ZoneRightAreaOfServiceBoxDeuce_DoublesWinnerZone;
		var ZoneLeftAreaOfServiceBoxAdvantage_DoublesWinnerZone = 202;
		id_to_description_map[ZoneLeftAreaOfServiceBoxAdvantage_DoublesWinnerZone+"_4_DoublesWinnerZone"] = D_ZoneLeftAreaOfServiceBoxAdvantage_DoublesWinnerZone;
		var ZoneMiddleAreaOfServiceBoxAdvantage_DoublesWinnerZone = 203;
		id_to_description_map[ZoneMiddleAreaOfServiceBoxAdvantage_DoublesWinnerZone+"_5_DoublesWinnerZone"] = D_ZoneMiddleAreaOfServiceBoxAdvantage_DoublesWinnerZone;
		var ZoneRightAreaOfServiceBoxAdvantage_DoublesWinnerZone = 204;
		id_to_description_map[ZoneRightAreaOfServiceBoxAdvantage_DoublesWinnerZone+"_6_DoublesWinnerZone"] = D_ZoneRightAreaOfServiceBoxAdvantage_DoublesWinnerZone;
		var ZoneLeftAlleyRearZone_DoublesWinnerZone = 205;
		id_to_description_map[ZoneLeftAlleyRearZone_DoublesWinnerZone+"_7_DoublesWinnerZone"] = D_ZoneLeftAlleyRearZone_DoublesWinnerZone;
		var ZoneLeftRearZone_DoublesWinnerZone = 206;
		id_to_description_map[ZoneLeftRearZone_DoublesWinnerZone+"_8_DoublesWinnerZone"] = D_ZoneLeftRearZone_DoublesWinnerZone;
		var ZoneMiddleRearZone_DoublesWinnerZone = 207;
		id_to_description_map[ZoneMiddleRearZone_DoublesWinnerZone+"_9_DoublesWinnerZone"] = D_ZoneMiddleRearZone_DoublesWinnerZone;
		var ZoneRightRearZone_DoublesWinnerZone = 208;
		id_to_description_map[ZoneRightRearZone_DoublesWinnerZone+"_10_DoublesWinnerZone"] = D_ZoneRightRearZone_DoublesWinnerZone;
		var ZoneRightAlleyRearZone_DoublesWinnerZone = 209;
		id_to_description_map[ZoneRightAlleyRearZone_DoublesWinnerZone+"_11_DoublesWinnerZone"] = D_ZoneRightAlleyRearZone_DoublesWinnerZone;
		var ZoneLeftAlleyMiddleZone_DoublesWinnerZone = 210;
		id_to_description_map[ZoneLeftAlleyMiddleZone_DoublesWinnerZone+"_12_DoublesWinnerZone"] = D_ZoneLeftAlleyMiddleZone_DoublesWinnerZone;
		var ZoneLeftMiddleZone_DoublesWinnerZone = 211;
		id_to_description_map[ZoneLeftMiddleZone_DoublesWinnerZone+"_13_DoublesWinnerZone"] = D_ZoneLeftMiddleZone_DoublesWinnerZone;
		var ZoneMiddleMiddleZone_DoublesWinnerZone = 212;
		id_to_description_map[ZoneMiddleMiddleZone_DoublesWinnerZone+"_14_DoublesWinnerZone"] = D_ZoneMiddleMiddleZone_DoublesWinnerZone;
		var ZoneRightMiddleZone_DoublesWinnerZone = 213;
		id_to_description_map[ZoneRightMiddleZone_DoublesWinnerZone+"_15_DoublesWinnerZone"] = D_ZoneRightMiddleZone_DoublesWinnerZone;
		var ZoneRightAlleyMiddleZone_DoublesWinnerZone = 214;
		id_to_description_map[ZoneRightAlleyMiddleZone_DoublesWinnerZone+"_16_DoublesWinnerZone"] = D_ZoneRightAlleyMiddleZone_DoublesWinnerZone;
		var ZoneBeyondLeftNetAlleyArea_DoublesWinnerZone = 215;
		id_to_description_map[ZoneBeyondLeftNetAlleyArea_DoublesWinnerZone+"_17_DoublesWinnerZone"] = D_ZoneBeyondLeftNetAlleyArea_DoublesWinnerZone;
		var ZoneBeyondLeftNetArea_DoublesWinnerZone = 216;
		id_to_description_map[ZoneBeyondLeftNetArea_DoublesWinnerZone+"_18_DoublesWinnerZone"] = D_ZoneBeyondLeftNetArea_DoublesWinnerZone;
		var ZoneBeyondMiddleNetArea_DoublesWinnerZone = 217;
		id_to_description_map[ZoneBeyondMiddleNetArea_DoublesWinnerZone+"_19_DoublesWinnerZone"] = D_ZoneBeyondMiddleNetArea_DoublesWinnerZone;
		var ZoneBeyondRightNetArea_DoublesWinnerZone = 218;
		id_to_description_map[ZoneBeyondRightNetArea_DoublesWinnerZone+"_20_DoublesWinnerZone"] = D_ZoneBeyondRightNetArea_DoublesWinnerZone;
		var ZoneBeyondRightNetAlleyArea_DoublesWinnerZone = 219;
		id_to_description_map[ZoneBeyondRightNetAlleyArea_DoublesWinnerZone+"_21_DoublesWinnerZone"] = D_ZoneBeyondRightNetAlleyArea_DoublesWinnerZone;
		
		
		var ZoneBeyondBaselineAndLeftDoublesLine_DoublesErrorZone = 220;
		id_to_description_map[ZoneBeyondBaselineAndLeftDoublesLine_DoublesErrorZone+"_A_DoublesErrorZone"] = D_ZoneBeyondBaselineAndLeftDoublesLine_DoublesErrorZone;
		var ZoneBeyondBaselineLeftAlleyArea_DoublesErrorZone = 221;
		id_to_description_map[ZoneBeyondBaselineLeftAlleyArea_DoublesErrorZone+"_B_DoublesErrorZone"] = D_ZoneBeyondBaselineLeftAlleyArea_DoublesErrorZone;
		var ZoneBeyondBaselineLeftArea_DoublesErrorZone = 222;
		id_to_description_map[ZoneBeyondBaselineLeftArea_DoublesErrorZone+"_C_DoublesErrorZone"] = D_ZoneBeyondBaselineLeftArea_DoublesErrorZone;
		var ZoneBeyondBaselineMiddleArea_DoublesErrorZone = 223;
		id_to_description_map[ZoneBeyondBaselineMiddleArea_DoublesErrorZone+"_D_DoublesErrorZone"] = D_ZoneBeyondBaselineMiddleArea_DoublesErrorZone;
		var ZoneBeyondBaselineRightArea_DoublesErrorZone = 224;
		id_to_description_map[ZoneBeyondBaselineRightArea_DoublesErrorZone+"_E_DoublesErrorZone"] = D_ZoneBeyondBaselineRightArea_DoublesErrorZone;
		var ZoneBeyondBaselineRightAlleyArea_DoublesErrorZone = 225;
		id_to_description_map[ZoneBeyondBaselineRightAlleyArea_DoublesErrorZone+"_F_DoublesErrorZone"] = D_ZoneBeyondBaselineRightAlleyArea_DoublesErrorZone;
		var ZoneBeyondBaselineAndRightDoublesLine_DoublesErrorZone = 226;
		id_to_description_map[ZoneBeyondBaselineAndRightDoublesLine_DoublesErrorZone+"_G_DoublesErrorZone"] = D_ZoneBeyondBaselineAndRightDoublesLine_DoublesErrorZone;
		var ZoneRightOfRightDoublesLine_DoublesErrorZone = 227;
		id_to_description_map[ZoneRightOfRightDoublesLine_DoublesErrorZone+"_H_DoublesErrorZone"] = D_ZoneRightOfRightDoublesLine_DoublesErrorZone;
		var ZoneIntoNetRightDoublesAlley_DoublesErrorZone = 228;
		id_to_description_map[ZoneIntoNetRightDoublesAlley_DoublesErrorZone+"_I_DoublesErrorZone"] = D_ZoneIntoNetRightDoublesAlley_DoublesErrorZone;
		var ZoneIntoNetRightArea_DoublesErrorZone = 229;
		id_to_description_map[ZoneIntoNetRightArea_DoublesErrorZone+"_J_DoublesErrorZone"] = D_ZoneIntoNetRightArea_DoublesErrorZone;
		var ZoneIntoNetMiddleArea_DoublesErrorZone = 230;
		id_to_description_map[ZoneIntoNetMiddleArea_DoublesErrorZone+"_K_DoublesErrorZone"] = D_ZoneIntoNetMiddleArea_DoublesErrorZone;
		var ZoneIntoNetLeftArea_DoublesErrorZone = 231;
		id_to_description_map[ZoneIntoNetLeftArea_DoublesErrorZone+"_L_DoublesErrorZone"] = D_ZoneIntoNetLeftArea_DoublesErrorZone;
		var ZoneIntoNetLeftDoublesAlley_DoublesErrorZone = 232;
		id_to_description_map[ZoneIntoNetLeftDoublesAlley_DoublesErrorZone+"_M_DoublesErrorZone"] = D_ZoneIntoNetLeftDoublesAlley_DoublesErrorZone;
		var ZoneLeftOfLeftDoublesLine_DoublesErrorZone = 233;
		id_to_description_map[ZoneLeftOfLeftDoublesLine_DoublesErrorZone+"_N_DoublesErrorZone"] = D_ZoneLeftOfLeftDoublesLine_DoublesErrorZone;
		var ZoneOther_DoublesErrorZone = 234;
		id_to_description_map[ZoneOther_DoublesErrorZone+"_O_DoublesErrorZone"] = D_ZoneOther_DoublesErrorZone;

		
		
		
		var canvas = document.getElementById("CanvasArea");
		var canvasContext = canvas.getContext("2d");
		canvas.addEventListener('click', drawShot, false);
		//drawTennisCourt();
		
		var zoneDrawNumberShowing = 0;
		var currentTableShowing = 0;
		
		// serve - 1
		function drawTargetGameServeZones1() {
			zoneDrawNumberShowing = 1;
			currentTableShowing = "Target";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// draw deuce
			canvasContext.fillText("Deuce - O",125,175);
			canvasContext.rect(85,110,123,110);
			//coordinate_to_id_map["85_110_123_110_Target1"] = "165_O";
			
			// draw advantage 
			canvasContext.fillText("Advantage - P",245,175);
			canvasContext.rect(209,110,123,110);
			//coordinate_to_id_map["209_110_123_110_Target1"] = "166_P";
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
			
		// serve zones - 2
		function drawTargetGameServeZones2() {
			zoneDrawNumberShowing = 2;
			currentTableShowing = "Target";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// draw vertical lines
			canvasContext.rect(135,110,1,110);
			canvasContext.rect(275,110,1,110);
			canvasContext.rect(205,110,1,110);
			
			// draw text
			canvasContext.fillText("Left", 100, 150);
			canvasContext.fillText("Deuce", 98, 170);
			canvasContext.rect(85,110,50,110);
			//coordinate_to_id_map["85_110_50_110_Target2"] = "167_Q";
			
			canvasContext.fillText("Right", 160, 150);
			canvasContext.fillText("Deuce", 158, 170);
			canvasContext.rect(136,110,70,110);
			//coordinate_to_id_map["136_110_70_110_Target2"] = "168_R";
			
			canvasContext.fillText("Left", 235, 150);
			canvasContext.fillText("Advantage", 220, 170);
			canvasContext.rect(209,110,67,110);
			//coordinate_to_id_map["209_110_67_110_Target2"] = "169_S";
			
			canvasContext.fillText("Right", 295, 150);
			canvasContext.fillText("Advantage", 285, 170);
			canvasContext.rect(277,110,54,110);
			//coordinate_to_id_map["277_110_54_110_Target2"] = "170_T";
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// serve targets - 3
		function drawTargetGameServeZones3() {		
			zoneDrawNumberShowing = 3;
			currentTableShowing = "Target";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// left zones
			canvasContext.rect(90,110,30,55);
			//coordinate_to_id_map["90_110_30_55_Target3"] = "153_7";
			canvasContext.fillText("7",100,140);
			canvasContext.rect(130,110,30,55);
			//coordinate_to_id_map["130_110_30_55_Target3"] = "154_8";
			canvasContext.fillText("8",140,140);
			canvasContext.rect(170,110,30,55);
			//coordinate_to_id_map["170_110_30_55_Target3"] = "155_9";
			canvasContext.fillText("9",180,140);
			
			// right zones
			canvasContext.rect(215,110,30,55);
			//coordinate_to_id_map["215_110_30_55_Target3"] = "156_10";
			canvasContext.fillText("10",225,140);
			canvasContext.rect(255,110,30,55);
			//coordinate_to_id_map["255_110_30_55_Target3"] = "157_11";
			canvasContext.fillText("11",265,140);
			canvasContext.rect(295,110,30,55);
			//coordinate_to_id_map["295_110_30_55_Target3"] = "158_12";
			canvasContext.fillText("12",305,140);
			
			// draw deuce
			canvasContext.fillText("Deuce",125,190);
			
			// draw advantage 
			canvasContext.fillText("Advantage",245,190);
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// area zones - 4
		function drawTargetGameTargetZones1() {
			zoneDrawNumberShowing = 4;
			currentTableShowing = "Target";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// draw vertical lines
			canvasContext.rect(145,40,1,180);
			canvasContext.rect(265,40,1,180);
			
			// draw text
			canvasContext.fillText("Left", 100, 70);
			canvasContext.rect(85,39,60,180);
			//coordinate_to_id_map["85_39_60_180_Target4"] = "162_L";
			canvasContext.fillText("Middle", 190, 70);
			canvasContext.rect(146,39,120,180);
			//coordinate_to_id_map["146_39_120_180_Target4"] = "163_M";
			canvasContext.fillText("Right", 290, 70);
			canvasContext.rect(267,39,63,180);
			//coordinate_to_id_map["267_39_63_180_Target4"] = "164_N";
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// all other targets - 5
		function drawTargetGameTargetZones2() {
			zoneDrawNumberShowing = 5;
			currentTableShowing = "Target";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// draw target 1
			canvasContext.rect(95,45,50,25);
//			coordinate_to_id_map["95_45_50_25_Target5"] = "147_1";
			canvasContext.fillText("1",115,60);
			
			// draw target 2
			canvasContext.rect(183,45,50,25);
//			coordinate_to_id_map["183_45_50_25_Target5"] = "148_2";
			canvasContext.fillText("2",203,60);
			
			// draw target 3
			canvasContext.rect(270,45,50,25);
//			coordinate_to_id_map["270_45_50_25_Target5"] = "149_3";
			canvasContext.fillText("3",290,60);
			
			// draw target 4
			canvasContext.rect(95,80,50,25);
//			coordinate_to_id_map["95_80_50_25_Target5"] = "150_4";
			canvasContext.fillText("4",115,95);
			
			// draw target 5
			canvasContext.rect(183,80,50,25);
//			coordinate_to_id_map["183_80_50_25_Target5"] = "151_5";
			canvasContext.fillText("5",203,95);
			
			// draw target 6
			canvasContext.rect(270,80,50,25);
//			coordinate_to_id_map["270_80_50_25_Target5"] = "152_6";
			canvasContext.fillText("6",290,95);
			
			// draw target 13
			canvasContext.rect(95,160,50,25);
//			coordinate_to_id_map["95_160_50_25_Target5"] = "159_13";
			canvasContext.fillText("13",115,175);
			
			// draw target 14
			canvasContext.rect(183,160,50,25);
//			coordinate_to_id_map["183_160_50_25_Target5"] = "160_14";
			canvasContext.fillText("14",203,175);
			
			// draw target 15
			canvasContext.rect(270,160,50,25);
//			coordinate_to_id_map["270_160_50_25_Target5"] = "161_15";
			canvasContext.fillText("15",290,175);

			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// player positions for shots - 6
		function drawTargetGamePositionZones() {
			zoneDrawNumberShowing = 6;
			currentTableShowing = "Location";
			canvasContext.beginPath();
			
			// draw position G
			canvasContext.rect(95,300,50,25);
//			coordinate_to_id_map["95_300_50_25_Location6"] = "94_G";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("G",115,315);
			canvasContext.font="10px";
			
			// draw position H
			canvasContext.rect(183,300,50,25);
//			coordinate_to_id_map["183_300_50_25_Location6"] = "95_H";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("H",203,315);
			canvasContext.font="10px";
			
			// draw position I
			canvasContext.rect(270,300,50,25);
//			coordinate_to_id_map["270_300_50_25_Location6"] = "96_I";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("I",290,315);
			canvasContext.font="10px";
			
			// draw position D
			canvasContext.rect(95,385,50,25);
//			coordinate_to_id_map["95_385_50_25_Location6"] = "91_D";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("D",115,400);
			canvasContext.font="10px";
			
			// draw position E
			canvasContext.rect(183,385,50,25);
//			coordinate_to_id_map["183_385_50_25_Location6"] = "92_E";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("E",203,400);
			canvasContext.font="10px";
			
			// draw position F
			canvasContext.rect(270,385,50,25);
//			coordinate_to_id_map["270_385_50_25_Location6"] = "93_F";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("F",290,400);
			canvasContext.font="10px";
			
			// draw position A
			canvasContext.rect(95,423,50,25);
//			coordinate_to_id_map["95_423_50_25_Location6"] = "88_A";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("A",115,438);
			canvasContext.font="10px";
			
			// draw position B
			canvasContext.rect(183,423,50,25);
//			coordinate_to_id_map["183_423_50_25_Location6"] = "89_B";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("B",203,438);
			canvasContext.font="10px";
			
			// draw position C
			canvasContext.rect(270,423,50,25);
//			coordinate_to_id_map["270_423_50_25_Location6"] = "90_C";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("C",290,438);
			canvasContext.font="10px";
			
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
	
		
		
		// singles winner zones - 7
		function drawMatchSinglesWinnerZones() {
			zoneDrawNumberShowing = 7;
			currentTableShowing = "SinglesWinnerZone";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// draw zone 7
			canvasContext.rect(95,45,50,25);
//			coordinate_to_id_map["95_45_50_25_SinglesWinnerZone7"] = "177_7";
			canvasContext.fillText("7",115,60);
			
			// draw zone 8
			canvasContext.rect(183,45,50,25);
//			coordinate_to_id_map["183_45_50_25_SinglesWinnerZone7"] = "178_8";
			canvasContext.fillText("8",203,60);
			
			// draw zone 9
			canvasContext.rect(270,45,50,25);
//			coordinate_to_id_map["270_45_50_25_SinglesWinnerZone7"] = "179_9";
			canvasContext.fillText("9",290,60);
			
			// draw zone 10
			canvasContext.rect(95,100,50,25);
//			coordinate_to_id_map["95_100_50_25_SinglesWinnerZone7"] = "180_10";
			canvasContext.fillText("10",115,115);
			
			// draw zone 11
			canvasContext.rect(183,100,50,25);
//			coordinate_to_id_map["183_100_50_25_SinglesWinnerZone7"] = "181_11";
			canvasContext.fillText("11",203,115);
			
			// draw zone 12
			canvasContext.rect(270,100,50,25);
//			coordinate_to_id_map["270_100_50_25_SinglesWinnerZone7"] = "182_12";
			canvasContext.fillText("12",290,115);
			
			// draw zone 13
			canvasContext.rect(95,160,50,25);
//			coordinate_to_id_map["95_160_50_25_SinglesWinnerZone7"] = "183_13";
			canvasContext.fillText("13",115,175);
			
			// draw zone 14
			canvasContext.rect(183,160,50,25);
//			coordinate_to_id_map["183_160_50_25_SinglesWinnerZone7"] = "184_14";
			canvasContext.fillText("14",203,175);
			
			// draw zone 15
			canvasContext.rect(270,160,50,25);
//			coordinate_to_id_map["270_160_50_25_SinglesWinnerZone7"] = "185_15";
			canvasContext.fillText("15",290,175);

			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// singles/doubles winning serve zones - 8
		function drawMatchSinglesDoublesWinningServeZones() {
			zoneDrawNumberShowing = 8;
			currentTableShowing = "SinglesWinnerZone";
			// add - currentTableShowing = "DoublesWinnerZone";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// left zones
			canvasContext.rect(90,110,30,55);
//			coordinate_to_id_map["90_110_30_55_SinglesWinnerZone8"] = "171_1";
//			coordinate_to_id_map["90_110_30_55_DoublesWinnerZone8"] = "199_1";
			canvasContext.fillText("1",100,140);
			canvasContext.rect(130,110,30,55);
//			coordinate_to_id_map["130_110_30_55_SinglesWinnerZone8"] = "172_2";
//			coordinate_to_id_map["130_110_30_55_DoublesWinnerZone8"] = "200_2";
			canvasContext.fillText("2",140,140);
			canvasContext.rect(170,110,30,55);
//			coordinate_to_id_map["170_110_30_55_SinglesWinnerZone8"] = "173_3";
//			coordinate_to_id_map["170_110_30_55_DoublesWinnerZone8"] = "201_3";
			canvasContext.fillText("3",180,140);
			
			// right zones
			canvasContext.rect(215,110,30,55);
//			coordinate_to_id_map["215_110_30_55_SinglesWinnerZone8"] = "174_4";
//			coordinate_to_id_map["215_110_30_55_DoublesWinnerZone8"] = "202_4";
			canvasContext.fillText("4",225,140);
			canvasContext.rect(255,110,30,55);
//			coordinate_to_id_map["255_110_30_55_SinglesWinnerZone8"] = "175_5";
//			coordinate_to_id_map["255_110_30_55_DoublesWinnerZone8"] = "203_5";
			canvasContext.fillText("5",265,140);
			canvasContext.rect(295,110,30,55);
//			coordinate_to_id_map["295_110_30_55_SinglesWinnerZone8"] = "176_6";
//			coordinate_to_id_map["295_110_30_55_DoublesWinnerZone8"] = "204_6";
			canvasContext.fillText("6",305,140);
			
			// draw deuce
			canvasContext.fillText("Deuce",125,190);
			
			// draw advantage 
			canvasContext.fillText("Advantage",245,190);
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// singles/doubles player position zones - 9
		function drawMatchSinglesDoublesPlayerPositionZones() {
			zoneDrawNumberShowing = 9;
			currentTableShowing = "PlayerPositionZoneOfWinnerOrErrorShots";
			canvasContext.beginPath();
			
			// draw position G
			canvasContext.rect(95,230,50,25);
//			coordinate_to_id_map["95_230_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "129_G";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("G",115,245);
			canvasContext.font="10px";
			
			// draw position H
			canvasContext.rect(183,230,50,25);
//			coordinate_to_id_map["183_230_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "130_H";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("H",203,245);
			canvasContext.font="10px";
			
			// draw position I
			canvasContext.rect(270,230,50,25);
//			coordinate_to_id_map["270_230_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "131_I";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("I",290,245);
			canvasContext.font="10px";
			
			// draw position D
			canvasContext.rect(95,335,50,25);
//			coordinate_to_id_map["95_335_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "126_D";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("D",115,350);
			canvasContext.font="10px";
			
			// draw position E
			canvasContext.rect(183,335,50,25);
//			coordinate_to_id_map["183_335_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "127_E";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("E",203,350);
			canvasContext.font="10px";
			
			// draw position F
			canvasContext.rect(270,335,50,25);
//			coordinate_to_id_map["270_335_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "128_F";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("F",290,350);
			canvasContext.font="10px";
			
			// draw position A
			canvasContext.rect(95,423,50,25);
//			coordinate_to_id_map["95_423_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "123_A";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("A",115,438);
			canvasContext.font="10px";
			
			// draw position B
			canvasContext.rect(183,423,50,25);
//			coordinate_to_id_map["183_423_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "124_B";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("B",203,438);
			canvasContext.font="10px";
			
			// draw position C
			canvasContext.rect(270,423,50,25);
//			coordinate_to_id_map["(270_423_50_25_PlayerPositionZoneOfWinnerOrErrorShots9"] = "125_C";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("C",290,438);
			canvasContext.font="10px";
			
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// singles/doubles opponent position zones - 10
		function drawMatchSinglesDoublesOpponentPositionZones() {
			zoneDrawNumberShowing = 10;
			currentTableShowing = "OpponentPositionZoneWhenWinnerOrErrorShotAttempted";
			canvasContext.beginPath();
			
			// draw position 5
			canvasContext.rect(331,10,35,25);
//			coordinate_to_id_map["331_10_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "136_5";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("5",348,25);
			canvasContext.font="10px";
			
			// draw position 10
			canvasContext.rect(331,70,35,25);
//			coordinate_to_id_map["331_70_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "141_10";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("10",348,85);
			canvasContext.font="10px";
			
			// draw position 15
			canvasContext.rect(331,180,35,25);
//			coordinate_to_id_map["331_180_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "146_15";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("15",348,195);
			canvasContext.font="10px";
			
			// draw position 1
			canvasContext.rect(50,10,35,25);
//			coordinate_to_id_map["50_10_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "132_1";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("1",60,25);
			canvasContext.font="10px";
			
			// draw position 6
			canvasContext.rect(50,70,35,25);
//			coordinate_to_id_map["50_70_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "137_6";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("6",60,85);
			canvasContext.font="10px";
			
			// draw position 11
			canvasContext.rect(50,180,35,25);
//			coordinate_to_id_map["50_180_35_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "142_11";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("11",60,195);
			canvasContext.font="10px";
			
			// draw position 2
			canvasContext.rect(95,10,50,25);
//			coordinate_to_id_map["95_10_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "133_2";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("2",115,25);
			canvasContext.font="10px";
			
			// draw position 3
			canvasContext.rect(183,10,50,25);
//			coordinate_to_id_map["183_10_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "134_3";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("3",203,25);
			canvasContext.font="10px";
			
			// draw position 4
			canvasContext.rect(270,10,50,25);
//			coordinate_to_id_map["270_10_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "135_4";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("4",290,25);
			canvasContext.font="10px";
			
			// draw position 7
			canvasContext.rect(95,70,50,25);
//			coordinate_to_id_map["95_70_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "138_7";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("7",115,85);
			canvasContext.font="10px";
			
			// draw position 8
			canvasContext.rect(183,70,50,25);
//			coordinate_to_id_map["183_70_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "139_8";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("8",203,85);
			canvasContext.font="10px";
			
			// draw position 9
			canvasContext.rect(270,70,50,25);
//			coordinate_to_id_map["270_70_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted"] = "140_9";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("9",290,85);
			canvasContext.font="10px";
			
			// draw position 12
			canvasContext.rect(95,180,50,25);
//			coordinate_to_id_map["95_180_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "143_12";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("12",115,195);
			canvasContext.font="10px";
			
			// draw position 13
			canvasContext.rect(183,180,50,25);
//			coordinate_to_id_map["183_180_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "144_13";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("13",203,195);
			canvasContext.font="10px";
			
			// draw position 14
			canvasContext.rect(270,180,50,25);
//			coordinate_to_id_map["270_180_50_25_OpponentPositionZoneWhenWinnerOrErrorShotAttempted10"] = "145_14";
			canvasContext.fillStyle = "#FF0000";
			canvasContext.fillText("14",290,195);
			canvasContext.font="10px";
			
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// doubles winner zones - 11
		function drawMatchDoublesWinnerZones() {
			zoneDrawNumberShowing = 11;
			currentTableShowing = "DoublesWinnerZone";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// draw zone 7
			canvasContext.rect(50,45,35,25);
//			coordinate_to_id_map["50_45_35_25_DoublesWinnerZone11"] = "205_7";
			canvasContext.fillText("7",65,60);
			
			// draw zone 12
			canvasContext.rect(50,100,35,25);
//			coordinate_to_id_map["50_100_35_25_DoublesWinnerZone11"] = "210_12";
			canvasContext.fillText("12",65,115);
			
			// draw zone 17
			canvasContext.rect(50,160,35,25);
//			coordinate_to_id_map["50_160_35_25_DoublesWinnerZone11"] = "215_17";
			canvasContext.fillText("17",65,175);
			
			// draw zone 11
			canvasContext.rect(331,45,35,25);
//			coordinate_to_id_map["331_45_35_25_DoublesWinnerZone11"] = "209_11";
			canvasContext.fillText("11",346,60);
			
			// draw zone 16
			canvasContext.rect(331,100,35,25);
//			coordinate_to_id_map["331_100_35_25_DoublesWinnerZone11"] = "214_16";
			canvasContext.fillText("16",346,115);
			
			// draw zone 21
			canvasContext.rect(331,160,35,25);
//			coordinate_to_id_map["331_160_35_25_DoublesWinnerZone11"] = "219_21";
			canvasContext.fillText("21",346,175);

			
			// draw zone 8
			canvasContext.rect(105,45,50,25);
//			coordinate_to_id_map["105_45_50_25_DoublesWinnerZone11"] = "206_8";
			canvasContext.fillText("8",125,60);
			
			// draw zone 9
			canvasContext.rect(183,45,50,25);
//			coordinate_to_id_map["183_45_50_25_DoublesWinnerZone11"] = "207_9";
			canvasContext.fillText("9",203,60);
			
			// draw zone 10
			canvasContext.rect(260,45,50,25);
//			coordinate_to_id_map["260_45_50_25_DoublesWinnerZone11"] = "208_10";
			canvasContext.fillText("10",280,60);
			
			// draw zone 13
			canvasContext.rect(105,100,50,25);
//			coordinate_to_id_map["105_100_50_25_DoublesWinnerZone11"] = "211_13";
			canvasContext.fillText("13",125,115);
			
			// draw zone 14
			canvasContext.rect(183,100,50,25);
//			coordinate_to_id_map["183_100_50_25_DoublesWinnerZone11"] = "212_14";
			canvasContext.fillText("14",203,115);
			
			// draw zone 15
			canvasContext.rect(260,100,50,25);
//			coordinate_to_id_map["260_100_50_25_DoublesWinnerZone11"] = "213_15";
			canvasContext.fillText("15",280,115);
			
			// draw zone 18
			canvasContext.rect(105,160,50,25);
//			coordinate_to_id_map["105_160_50_25_DoublesWinnerZone11"] = "216_18";
			canvasContext.fillText("18",125,175);
			
			// draw zone 19
			canvasContext.rect(183,160,50,25);
//			coordinate_to_id_map["183_160_50_25_DoublesWinnerZone11"] = "217_19";
			canvasContext.fillText("19",203,175);
			
			// draw zone 20
			canvasContext.rect(260,160,50,25);
//			coordinate_to_id_map["260_160_50_25_DoublesWinnerZone11"] = "218_20";
			canvasContext.fillText("20",280,175);

			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();
		}
		
		// singles error zones - 12
		function drawMatchSinglesErrorZones() {
			zoneDrawNumberShowing = 12;
			currentTableShowing = "SinglesErrorZone";
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			// draw zone A
			canvasContext.rect(50,15,35,25);
//			coordinate_to_id_map["50_15_35_25_SinglesErrorZone12"] = "186_A";
			canvasContext.fillText("A",65,30);
			
			// draw zone B
			canvasContext.rect(105,15,50,25);
//			coordinate_to_id_map["105_15_50_25_SinglesErrorZone12"] = "187_B";
			canvasContext.fillText("B",125,30);
			
			// draw zone C
			canvasContext.rect(183,15,50,25);
//			coordinate_to_id_map["183_15_50_25_SinglesErrorZone12"] = "188_C";
			canvasContext.fillText("C",203,30);
			
			// draw zone D
			canvasContext.rect(260,15,50,25);
//			coordinate_to_id_map["260_15_50_25_SinglesErrorZone12"] = "189_D";
			canvasContext.fillText("D",280,30);
			
			// draw zone E
			canvasContext.rect(331,15,35,25);
//			coordinate_to_id_map["331_15_35_25_SinglesErrorZone12"] = "190_E";
			canvasContext.fillText("E",346,30);
			
			
			// draw zone K
			canvasContext.rect(50,220,35,25);
//			coordinate_to_id_map["50_220_35_25_SinglesErrorZone12"] = "196_K";
			canvasContext.fillText("K",65,235);
			
			// draw zone J
			canvasContext.rect(105,220,50,25);
//			coordinate_to_id_map["105_220_50_25_SinglesErrorZone12"] = "195_J";
			canvasContext.fillText("J",125,235);
			
			// draw zone I
			canvasContext.rect(183,220,50,25);
//			coordinate_to_id_map["183_220_50_25_SinglesErrorZone12"] = "194_I";
			canvasContext.fillText("I",203,235);
			
			// draw zone H
			canvasContext.rect(260,220,50,25);
//			coordinate_to_id_map["260_220_50_25_SinglesErrorZone12"] = "193_H";
			canvasContext.fillText("H",280,235);
			
			// draw zone G
			canvasContext.rect(331,220,35,25);
//			coordinate_to_id_map["331_220_35_25_SinglesErrorZone12"] = "192_G";
			canvasContext.fillText("G",346,235);
			
			
			// draw zone L
			canvasContext.rect(12,180,35,25);
//			coordinate_to_id_map["12_180_35_25_SinglesErrorZone12"] = "197_L";
			canvasContext.fillText("L",27,195);
			
			// draw zone F
			canvasContext.rect(370,180,35,25);
//			coordinate_to_id_map["370_180_35_25_SinglesErrorZone12"] = "191_F";
			canvasContext.fillText("F",385,195);
			
			// draw zone M
			canvasContext.rect(370,400,35,25);
//			coordinate_to_id_map["370_400_35_25_SinglesErrorZone12"] = "198_M";
			canvasContext.fillText("M",385,415);
			
			
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();		
		}
		
		// doubles error zones - 13
		function drawMatchDoublesErrorZones() {
			zoneDrawNumberShowing = 13;
			currentTableShowing = "DoublesErrorZone";
			
			canvasContext.beginPath();
			
			canvasContext.fillStyle = "#FF0000";
			canvasContext.font="10px";
			
			
			// draw zone A
			canvasContext.rect(12,15,35,25);
//			coordinate_to_id_map["12_15_35_25_DoublesErrorZone13"] = "220_A";
			canvasContext.fillText("A",27,30);
			
			// draw zone G
			canvasContext.rect(370,15,35,25);
//			coordinate_to_id_map["370_15_35_25_DoublesErrorZone13"] = "226_G";
			canvasContext.fillText("G",385,30);
			
			// draw zone B
			canvasContext.rect(50,15,35,25);
//			coordinate_to_id_map["50_15_35_25_DoublesErrorZone13"] = "221_B";
			canvasContext.fillText("B",65,30);
			
			// draw zone C
			canvasContext.rect(105,15,50,25);
//			coordinate_to_id_map["105_15_50_25_DoublesErrorZone13"] = "222_C";
			canvasContext.fillText("C",125,30);
			
			// draw zone D
			canvasContext.rect(183,15,50,25);
//			coordinate_to_id_map["183_15_50_25_DoublesErrorZone13"] = "223_D";
			canvasContext.fillText("D",203,30);
			
			// draw zone E
			canvasContext.rect(260,15,50,25);
//			coordinate_to_id_map["260_15_50_25_DoublesErrorZone13"] = "224_E";
			canvasContext.fillText("E",280,30);
			
			// draw zone F
			canvasContext.rect(331,15,35,25);
//			coordinate_to_id_map["331_15_35_25_DoublesErrorZone13"] = "225_F";
			canvasContext.fillText("F",346,30);
			
			
			// draw zone M
			canvasContext.rect(50,220,35,25);
//			coordinate_to_id_map["50_220_35_25_DoublesErrorZone13"] = "232_M";
			canvasContext.fillText("M",65,235);
			
			// draw zone L
			canvasContext.rect(105,220,50,25);
//			coordinate_to_id_map["105_220_50_25_DoublesErrorZone13"] = "231_L";
			canvasContext.fillText("L",125,235);
			
			// draw zone K
			canvasContext.rect(183,220,50,25);
//			coordinate_to_id_map["183_220_50_25_DoublesErrorZone13"] = "230_K";
			canvasContext.fillText("K",203,235);
			
			// draw zone J
			canvasContext.rect(260,220,50,25);
//			coordinate_to_id_map["260_220_50_25_DoublesErrorZone13"] = "229_J";
			canvasContext.fillText("J",280,235);
			
			// draw zone I
			canvasContext.rect(331,220,35,25);
//			coordinate_to_id_map["331_220_35_25_DoublesErrorZone13"] = "228_I";
			canvasContext.fillText("I",346,235);
			
			
			// draw zone N
			canvasContext.rect(12,180,35,25);
//			coordinate_to_id_map["12_180_35_25_DoublesErrorZone13"] = "233_N";
			canvasContext.fillText("N",27,195);
			
			// draw zone H
			canvasContext.rect(370,180,35,25);
//			coordinate_to_id_map["370_180_35_25_DoublesErrorZone13"] = "227_H";
			canvasContext.fillText("H",385,195);
			
			// draw zone O
			canvasContext.rect(370,400,35,25);
//			coordinate_to_id_map["370_400_35_25_DoublesErrorZone13"] = "234_O";
			canvasContext.fillText("O",385,415);
			
			
			
			canvasContext.strokeStyle="#FF0000";
			canvasContext.stroke();
			canvasContext.closePath();		
		}
		
		////////// util functions //////////
		
		// get id description by (our id)
		function getIdDescriptionByOurId(ourId) {
			// e.g. - id to description map - key: our-id_customer-id_customer-table-name, value: text description
		
			for (var key in id_to_description_map) {
				var keySplit = key.split("_");
				
				if (keySplit[0]==ourId) {
					return id_to_description_map[key];
				}
			}
			return "None";
		}
		
		// get id description by (customer id) and table name + zoneDrawNumberShowing
		function getIdDescriptionByCustomerId(customerId, tableName) {
			// e.g. - id to description map - key: our-id_customer-id_customer-table-name, value: text description
		
			for (var key in id_to_description_map) {
				var keySplit = key.split("_");
				
				if (keySplit[1]==customerId && keySplit[2]==tableName) {
					return id_to_description_map[key];
				}
			}
			return "None";
		}

		// get (our id) by coordinates and table name + zoneDrawNumberShowing
		function getOurIdByCoordinates(xcoordinate, ycoordinate, tableName) {
			// coordinate to id map - key:  xcoordinate_ycoordinate_width_height_customer-table-name, value: our-id_customer-id
			
			for (var key in coordinate_to_id_map) {
				var keySplit = key.split("_");
				
				var x1 = parseInt(keySplit[0]);
				var x2 = x1+parseInt(keySplit[2]);
				var y1 = parseInt(keySplit[1]);
				var y2 = y1+parseInt(keySplit[3]);
				
				if (x1<xcoordinate && x2>xcoordinate && y1<ycoordinate && y2>ycoordinate && keySplit[4]==tableName) {
					return coordinate_to_id_map[key].split("_")[0];
				}
			}
			return "None";
		}

		// get (customer id) by coordinates and table name + zoneDrawNumberShowing
		function getCustomerIdByCoordinatesAndTableName(xcoordinate, ycoordinate, tableName) {
			// coordinate to id map - key:  xcoordinate_ycoordinate_width_height_customer-table-name, value: our-id_customer-id
			
			for (var key in coordinate_to_id_map) {
				var keySplit = key.split("_");
				
				var x1 = parseInt(keySplit[0]);
				var x2 = x1+parseInt(keySplit[2]);
				var y1 = parseInt(keySplit[1]);
				var y2 = y1+parseInt(keySplit[3]);
				
				if (x1<xcoordinate && x2>xcoordinate && y1<ycoordinate && y2>ycoordinate && keySplit[4]==tableName) {
					return coordinate_to_id_map[key].split("_")[1];
				}
			}
			return "None";
		}
		
		// get coordinates by (our id)
		function getCoordinatesByOurId(ourId) {
			// coordinate to id map - key:  xcoordinate_ycoordinate_width_height_customer-table-name, value: our-id_customer-id
			
			for (var key in coordinate_to_id_map) {
				var value = coordinate_to_id_map[key];				
				var valueSplit = value.split("_");
				var ourIdValue = parseInt(valueSplit[0]);
				
				if (ourId==ourIdValue) {
					var x = Math.round(  parseInt(key.split("_")[0]) + parseInt(key.split("_")[2])/2  );
					var y = Math.round(  parseInt(key.split("_")[1]) + parseInt(key.split("_")[3])/2  );
					
					return [x,y];
				}
			}
			return "None";
		}
		
		// get coordinates by (customer id) and table name + zoneDrawNumberShowing
		function getCoordinatesByCustomerIdAndTableName(customerId, tableName) {
			// coordinate to id map - key:  xcoordinate_ycoordinate_width_height_customer-table-name, value: our-id_customer-id
			
			for (var key in coordinate_to_id_map) {
				var value = coordinate_to_id_map[key];				
				var valueSplit = value.split("_");
				var customerIdValue = valueSplit[1];
				
				if (customerId==customerIdValue && tableName==key.split("_")[4]) {
					var x = Math.round(  parseInt(key.split("_")[0]) + parseInt(key.split("_")[2])/2  );
					var y = Math.round(  parseInt(key.split("_")[1]) + parseInt(key.split("_")[3])/2  );
					
					return [x,y];
				}
			}
			return "None";
		}
		
		// draw from to line by coordinates
		function drawFromToLineByCoordinates(xcoordinate1, ycoordinate1, xcoordinate2, ycoordinate2) {
			canvasContext.beginPath();
			canvasContext.lineWidth = 2;
			canvasContext.moveTo(xcoordinate1, ycoordinate1);
			canvasContext.lineTo(xcoordinate2, ycoordinate2);
			canvasContext.strokeStyle="#6C9EC9";
			canvasContext.stroke();
			canvasContext.lineWidth = 2;
			canvasContext.rect(xcoordinate2-10,ycoordinate2-10,20,20);
			canvasContext.stroke();
			canvasContext.lineWidth = 1;
			canvasContext.closePath();
		}
		
		// draw small circle by coordinates
		function drawSmallCircleByCoordinates(xcoordinate, ycoordinate) {
			canvasContext.beginPath();
			canvasContext.arc(xcoordinate,ycoordinate,5,0,2*Math.PI);
			canvasContext.fillStyle = 'blue';
			canvasContext.fill();
			canvasContext.closePath();
		}
		
		////////////////////
		
		//alert(getCoordinatesByOurId(88));
		
		function drawTennisCourt() {
			zoneDrawNumberShowing = 0;
			
			canvasContext.beginPath();

			// draw big orange rectangle
			canvasContext.fillStyle="#FCD5B8";
			canvasContext.fillRect(10,10,400,443);			
			
			// draw smaller green rectangle
			canvasContext.fillStyle="#D8E4C0";
			canvasContext.fillRect(50,40,317,380);
			
			// draw smaller green rectangle white border
			canvasContext.rect(50,40,317,380);
			
			// draw double inner lines white 
			canvasContext.rect(85,40,247,380);		
			
			// draw net line white
			canvasContext.fillStyle="#FFFFFF";
			canvasContext.fillRect(50,220,317,3);
			
			// draw top service line white
			canvasContext.fillRect(85,110,247,2);
			
			// draw center vertical line white
			canvasContext.fillRect(205,110,2,220);
			
			// draw bottom service line white
			canvasContext.fillRect(85,330,247,2);
			
			// draw top smaller center vertical line white
			canvasContext.fillRect(205,40,2,10);
			
			// draw bottom smaller center vertical line white
			canvasContext.fillRect(205,410,2,10);
			
			canvasContext.strokeStyle="#FFFFFF";
			canvasContext.stroke();
			canvasContext.closePath();
			
			// testing
			// none   - ID 0
			//drawMatchDoublesErrorZones();  - ID 1
			//drawMatchSinglesErrorZones();  - ID 2
			//drawMatchSinglesDoublesOpponentPositionZones();  - ID 3
			//drawMatchSinglesDoublesPlayerPositionZones();  - ID 4
			//drawMatchDoublesWinnerZones();  - ID 5
			//drawMatchSinglesWinnerZones();  - ID 6
			//drawMatchSinglesDoublesWinningServeZones();  - ID 7
			//drawTargetGameServeZones3();  - ID 8
			//drawTargetGameServeZones2();  - ID 9
			//drawTargetGameServeZones1();  - ID 10
			//drawTargetGameTargetZones2();  - ID 11
			//drawTargetGameTargetZones1();  - ID 12
			//drawTargetGamePositionZones();  - ID 13
		}
	
		var globalX = -1;
		var globalY = -1;
		var globalPlayerPosX = 160;
		var globalPlayerPosY = 420;
		var newClick = 0;
		var zoneDrawingShowing = 0;
		var drawMainShotLine = 1;
		
		function readClick() {
			newClick = 0;
			return [globalX, globalY];
		}
		
		
		var shotDescriptionDiv = document.getElementById("shot_clicked_description");
		
		
		function drawShot(event) {
			if(!event.hasOwnProperty('offsetX')) {
			    event.offsetX = event.layerX - event.currentTarget.offsetLeft;
			    event.offsetY = event.layerY - event.currentTarget.offsetTop;
			}
			 
			var xPos = event.offsetX;
			var yPos = event.offsetY;
			
			// alert(xPos+" - "+yPos);	
			globalX = xPos;
			globalY = yPos;
			newClick = 1;
			 
			drawTennisCourt();	
			
			if (zoneDrawingShowing == 1) {
				drawMatchDoublesErrorZones();
			} else if (zoneDrawingShowing == 2) {
				drawMatchSinglesErrorZones();
			} else if (zoneDrawingShowing == 3) {
				drawMatchSinglesDoublesOpponentPositionZones();
			} else if (zoneDrawingShowing == 4) {
				drawMatchSinglesDoublesPlayerPositionZones();
			} else if (zoneDrawingShowing == 5) {
				drawMatchDoublesWinnerZones();
			} else if (zoneDrawingShowing == 6) {
				drawMatchSinglesWinnerZones();
			} else if (zoneDrawingShowing == 7) {
				drawMatchSinglesDoublesWinningServeZones();
			} else if (zoneDrawingShowing == 8) {
				drawTargetGameServeZones3();
			} else if (zoneDrawingShowing == 9) {
				drawTargetGameServeZones2();
			} else if (zoneDrawingShowing == 10) {
				drawTargetGameServeZones1();
			} else if (zoneDrawingShowing == 11) {
				drawTargetGameTargetZones2();
			} else if (zoneDrawingShowing == 12) {
				drawTargetGameTargetZones1();
			} else if (zoneDrawingShowing == 13) {
				drawTargetGamePositionZones();
			}
			
			if (shotDescriptionDiv != undefined && zoneDrawingShowing != 0) {
				var table = currentTableShowing+zoneDrawNumberShowing;
				var idToGet = getOurIdByCoordinates(xPos, yPos, table);
				var descriptionToShow = getIdDescriptionByOurId(idToGet);
				shotDescriptionDiv.innerHTML = descriptionToShow;
			}
			
			if (drawMainShotLine) {
				if (xPos > 50 && xPos < 367 && yPos > 40 && yPos < 420) {
					canvasContext.beginPath();
					canvasContext.lineWidth = 2;
					canvasContext.moveTo(globalPlayerPosX, globalPlayerPosY);
					canvasContext.lineTo(xPos, yPos);
					canvasContext.strokeStyle="#6C9EC9";
					canvasContext.stroke();
					canvasContext.lineWidth = 2;
					canvasContext.rect(xPos-10,yPos-10,20,20);
					canvasContext.stroke();
					canvasContext.lineWidth = 1;
					canvasContext.closePath();
					drawSmallCircleByCoordinates(xPos,yPos);
				}			
			}
		}
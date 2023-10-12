//------------------------------------
const AUTO_NAMES = {    
"rmodx6": "BMW X6M Mod",
"rmodbugatti": "Bugatti La Voiture Noire",
"fx50s": "Infiniti FX 50S",
"rs7r": "Audi RS7 Sportback",
"ycaE60": "BMW M5 E60",
"vwtouareg": "Volkswagen Touareg",
"c63w205": "Mercedes-Benz C63 W205",
"amggtrr20": "Mercedes-Benz AMG GT-R Roadster",
"q820": "Audi Q8 2020",
"wraithb": "Rolls-Royce Wraith Black",
"uaz3159": "UAZ",
"gls63": "Mercedes-AMG GLS 63",
"rmodmi8lb": "BMW I8 Liberty Walk Roadster",
"g63pp": "Mercedes-Benz G63 Mansory",
"x7bmw": "BMW X7",
"lp700dmc": "Lamborghini Aventador Mansory",
"venatus": "Lamborghini URUS Mansory",
"bmwm8": "BMW M8 Competition",
"bmwm2": "BMW M2 Competition",
"manscull": "Rolls-Royce Cullinan Mansory",
"bmci": "BMW M5 F90",
"c63s": "Mercedes-Benz C63S Coupe AMG",
"e63amg": "Mercedes-Benz E63 AMG",
"rmodsian": "Lamborghini Sián",
"urus": "Lamborghini Urus",
"r820": "Audi R8 v10",
"19S650": "Mercedes-Benz Maybach S650",
"g63amg6x6": "Mercedes-Benz G63 Amg 6x6",
"cayenneturbo": "Porsche Cayenne Turbo S",
"a80": "Toyota Supra",
"w140": "Mercedes-Benz W140 AMG",
"bentaygast": "Bentley Bentayga",
"teslapd": "Tesla Model S",
"agerars": "Koenigsegg Agera RS",
"f8t": "Ferrari F8 Tributo",
"veneno": "Lamborghini Veneno",
"demon": "Dodge Challenger Demon",
"teslax": "Tesla Model X",
"f458": "Ferrari 458",
"evoque": "Range Rover Evoque",
"rsvr16": "Range Rover Sport SVR",
"rr12": "Range Rover Supercharged",
"mustangbkit": "Ford Mustang GT",
"gt17": "Ford GT",
"huayra": "Pagani Huayra",
"gto65": "Pontiac GTO 65",
"esv": "Cadillac Escalade",
"sti": "Subaru Impreza STI",
"lx2018": "Lexus LX570",
"polchiron": "Bugatti Chiron |Police",
"polgt17": "Ford GT | Police",
"g63amg6x6cop": "Mercedes-Benz G63 AMG 6x6 | Police",
"ghispo2": "Maserati Ghibli | Police",
"polgs350": "Lexus GS 350 | Police",
"mlbrabus": "Mercedes-Benz ML Brabus",
"18performante": "Lamborghini Huracan Performante",
"lada2107": "VAZ-2107",
"p1": "McLaren P1",
"720s": "McLaren 720S",
"srt8b": "Jeep SRT-8",
"slsamg": "Mercedes Benz SLS AMG",
"pol458": "Ferrari 458 Italia | Police",
"polrevent": "Lamborghini Reventon | Police",
"zl12017": "Chevrolet Camaro ZL1",
"tahoe": "Chevrolet Tahoe",
"x5e53": "BMW X5 E53",
"skyline": "Nissan Skyline GT-R R34",
"navigator": "Lincoln Navigator",
"ayxz": "Rolls-Royce Dawn ONYX",
"e34": "BMW M5 E34",
"m3e46": "BMW M3 E46",
"500gtrlam": "Lamborghini Diablo",
"mansm8": "BMW M8 Competition MANSAUG",
"pthrust": "Bike | Police",
"urban": "Lada Niva Urban",
"kalina": "Lada Kalina",
"e55w211": "Mercedes-Benz E320 W211",
"passat": "Volkswagen Passat B8",
"918": "Porsche 918 Spyder",
"boss302": "Ford Mustang Boss 302",
"cullinan": "Rolls-Royce Cullinan",
"18phantom": "Rolls-Royce Phantom",
"718caymans": "Porsche 718 Caymans",
"apriora": "Lada Priora",
"audir8lb": "Audi R8 V10 Liberty Walk",
"camry18": "Toyota Camry XSE 2018",
"demonhawk": "Jeep SRT-8 Demonhawk",
"gle": "Mercedes-Benz GLE",
"kiagt": "KIA Stinger GT",
"lc200": "Toyota Land Cruiser 200",
"m4f82": "BMW M4 F82",
"m4lb": "BMW M4 F82 Liberty Walk",
"panamera17turbo": "Porsche Panamera Turbo",
"x5m2016": "BMW X5M F85",
"rs62": "Audi RS6",
"c8": "Chevrolet Corvette",
"jp12": "Jeep Wrangler Rubicon",
"lanex400": "Mitsubishi Lancer X",
"lp570": "Lamborghini Gallardo",
"superb": "Skoda Superb",
"zim": "Gaz Zim",
"chironsport110": "Bugatti Chiron",
"amggtr": "Mercedes-Benz AMG GT R",
"ody18": "Honda Odyssey",
"amggt63s": "Mercedes-Benz AMG GT63S",
"as350": "Helicopter | Police",
"rmodf12tdf": "Ferrari F12 TDF",
"fbi458": "Ferrari 458 | FBI",
"fbiamggt": "Mercedes-Benz AMG GT | FBI",
"fbigs350": "Lexus GS350 | FBI",
"fbilp770": "Lamborghini Centenario | FBI",
"fc13": "Ferrari California",
"gtc4lusso": "Ferrari GTC4 Lusso",
"gurkha": "Bronevik | Police",
"jes": "Koenigsegg Jesko",
"laferrari": "Ferrari LaFerrari",
"newsvan": "News Van | News",
"pistaspider19": "Ferrari 488Pista Spider",
"pullman": "Mercedes-Benz Pullman",
"qrv": "Ford Explorer | EMS",
"gls": "Mercedes-Benz GLS",
"2018s63": "Mercedes-Benz S63 AMG",
"rmodrs7": "Audi RS7 Sportback 2010",
"2019m5": "BMW M5 F90 Competition",
"19g63": "Mercedes-Benz G63 AMG",
"19s63": "Mercedes-Benz s63 AMG Coupe",
"lamboreventon": "Lamborghini Reventon",
"divo": "Bugatti Divo",
"rrst": "Range Rover Hamman",
"xc60": "Volvo XC60",
"oka": "Oka",
"z4bmw": "BMW Z4",
"viper": "Dodge Viper",
"v250": "Mercedes-Benz V-Classe",
"velar": "Range Rover Velar",
"rs318": "Audi RS3 Sportback",
"lc500": "Lexus LC 500",
"rs5r": "Audi RS5-R",
"sq72016": "Audi SQ7",
"nismo20": "Nissan GTR Nismo 2020",
"911turbos": "Porsche 911 Turbo S",
"g65": "Mercedes-Benz G65",
"675ltsp": "McLaren 675LT Spider",
"bnt2018": "Bentley Continental GT",
"ferrari812": "Ferrari 812 Superfast",
"svj63": "Lamborghini Aventador SVJ",
"supersport": "Bugatti Veyron",
"bugatticentodieci": "Bugatti Centodieci 2020",
"600lt": "McLaren 600LT",

"fleet78": "Cadillac Fleetwood",
"fairlane66": "Ford Fairlane",
"brabus800": "Mercedes Benz E63 Brabus 800",
"bg700w": "Mercedes Benz G63 Brabus 700",
"812nlargo": "Ferrari 812 Nlargo",
"16charger": "Dodge Charger",
"evo9": "Mitsubishi EVO 9",
"clssuniversal": "Mercedes-Benz CLS",

//мотосалон
"Bmx": "BMX",
"Faggio2": "Faggio",
"Blazer": "Blazer",
"Enduro": "Enduro",
"Thrust": "Thrust",
"PCJ": "PCJ",
"Hexer": "Hexer",
"lectro": "Lectro",
"Nemesis": "Nemesis",
"Scorcher": "Scorcher",
"Double": "Double",
"Diablous": "Diablous",
"Cliffhanger": "Cliffhanger",
"Nightblade": "Nightblade",
"Vindicator": "Vindicator",
"Gargoyle": "Gargoyle",
"Sanchez2": "Sanchez",
"Akuma": "Akuma",
"Ratbike": "Ratbike",
"CarbonRS": "Carbon RS",
"Ruffian": "Ruffian",
"Hakuchou": "Hakuchou",
"Bati": "Bati",
"BF400": "BF400",
"Sanctus": "Sanctus",

"h2carb": "Kawasaki H2",
"r6": "Yamaha R6",
"gsx1000": "Suzuki GSX1000",
"cbr1000rrr": "Honda CBR1000RR",
"goldwing": "GoldWing",
"cb500x": "Honda CB500x",
"rmz2": "Suzuki RMZ2",

"shatoro": "Shatoro", //мастак

"xxxxx": "Mercedes-Benz X Classe 6X6", // админ авто

"j50": "Ferrari J50",
"ghost": "Rolls Royce Ghost",
"mig": "Ferrari Enzo",
"senna": "McLaren Senna",
"17m760i": "BMW 760i",
"19dbs": "Aston Martin DBS",
"ast": "Aston Martin Vanquish",
"vantage": "Aston Martin Vantage",
"db11": "Aston Martin DB11",
"aventadorishe": "Lamborghini Aventador ONYX",

"850": "BMW 850 SCI 1989",
"clssuniversal": "Mercedes-Benz CLS",
"lp610": "Lamborghini Huracan",
"m3e92": "BMW M3 e92",
"monza": "Ferrari Monza SP2",
"manspanam": "Panamera Sport Turismo Mansory",
"toros": "Toros",
}

//------------------------------------
exports.get = function (value) { return AUTO_NAMES[value] }


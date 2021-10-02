function loadTime(){
    var todayDay = new Date();
    var todayHours = todayDay.getHours();
    var todayMinutes = todayDay.getMinutes();
    
    var todaySeconds = todayDay.getSeconds();
    
    // var todayMinutes = 59;
    // var todayHours = 22;
    // var todaySeconds = 50;
    
    var pmAm = "am";
    if(todayHours - 12 >= 0) {
        pmAm = "pm";
    }
    var todayHoursTwelveHours = todayHours;
    if (todayHours - 12 > 0){
        todayHoursTwelveHours = todayHours - 12;
    }

    var pagiPetang = "pagi"
    if(todayHours == 12){
        pagiPetang = "tengah hari";
    }else if(todayHours > 12 && todayHours - 12 < 7){
        pagiPetang = "petang"
    }else if (todayHours > 12 && todayHours - 12 >= 7){
        pagiPetang = "malam";
    }

    


    var englishTimeMinutesArr = ["  ", "O-one", "O-two", "O-three", "O-four", "O-five", "O-six", "O-seven", "O-eight", "O-nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","forty","forty-one","forty-two","forty-three","forty-four","forty-five","forty-six","forty-seven","forty-eight","forty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine"," " ]

    var englishTimeHoursArr = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",]

    var malayTimeMinutesArr = [" ", "satu","dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "lapan belas", "sembilan belas", "dua puluh", "dua puluh satu", "dua puluh dua", "dua puluh tiga", "dua puluh empat", "dua puluh lima", "dua puluh enam", "dua puluh tujuh", "dua puluh lapan", "dua puluh sembilan", "tiga puluh", "tiga puluh satu", "tiga puluh dua", "tiga puluh tiga", "tiga puluh empat", "tiga puluh lima", "tiga puluh enam", "tiga puluh tujuh", "tiga puluh lapan", "tiga puluh sembilan", "empat puluh", "empat puluh satu", "empat puluh dua", "empat puluh tiga", "empat puluh empat", "empat puluh lima", "empat puluh enam", "empat puluh tujuh", "empat puluh lapan", "empat puluh sembilan", "lima puluh", "lima puluh satu", "lima puluh dua", "lima puluh tiga", "lima puluh empat", "lima puluh lima", "lima puluh enam", "lima puluh tujuh", "lima puluh lapan", "lima puluh sembilan", " "];

     document.getElementById("clockEnglishMinutesTen").innerHTML = englishTimeMinutesArr[todayMinutes];

    document.getElementById("clockEnglishHours").innerHTML = englishTimeMinutesArr[todayHours];

    console.log(todayMinutes)
    
    // numerical clock
    document.getElementById("numericalSecond").innerHTML = todaySeconds;
    document.getElementById("numericalMinute").innerHTML = todayMinutes;
    if (todayHours == 0){
        document.getElementById("numericalHour").innerHTML = "12";    
    }else{
        document.getElementById("numericalHour").innerHTML = todayHoursTwelveHours;
    }

    // english clock
    document.getElementById("clockEnglishMinutesTen").innerHTML = englishTimeMinutesArr[todayMinutes];

    if (todayHours == 0){
        document.getElementById("clockEnglishHours").innerHTML = englishTimeMinutesArr[12];    
    }else{
        document.getElementById("clockEnglishHours").innerHTML = englishTimeHoursArr[todayHours%12];
    }
    
    document.getElementById("amPmContainerWord").innerHTML = pmAm;

    // malay clock
    if (todayHours == 12){
        document.getElementById("clockMalayHours").innerHTML = "dua belas";
    }else if (todayHours == 0){
        document.getElementById("clockMalayHours").innerHTML = malayTimeMinutesArr[12];    
    }else{
        document.getElementById("clockMalayHours").innerHTML = malayTimeMinutesArr[todayHours %12];
    }
    
    document.getElementById("clockMalayMinutes").innerHTML = malayTimeMinutesArr[todayMinutes]
    document.getElementById("amPmContainerWordWord").innerHTML = pagiPetang;
    

    console.log(todayDay);


    setInterval(updateTime, 1000);

    function updateTime(){
        
        // for the numerical clock

        todaySeconds += 1;
        

        if (todaySeconds == 60){
            todaySeconds = 0;
            todayMinutes += 1
            
        }
        if(todayMinutes == 60){
            todayMinutes = 0;
            todayHours += 1;
        }
        
        if (todayHours == 24){
            todayHours = 0;
        }

        if (todayHours - 12 > 0){
        todayHoursTwelveHours = todayHours - 12;
        }else{
            todayHoursTwelveHours = todayHours;
        }

        if(todayHours - 12 >= 0) {
        pmAm = "pm";
        }else{
            pmAm = "am";
        }

        if(todayHours == 12){
            pagiPetang = "tengah hari";
        }else if(todayHours > 12 && todayHours - 12 < 7){
            pagiPetang = "petang"
        }else if (todayHours > 12 && todayHours - 12 >= 7){
            pagiPetang = "malam";
        }

        // numerical clock
        document.getElementById("numericalSecond").innerHTML = todaySeconds;
        document.getElementById("numericalMinute").innerHTML = todayMinutes;

        if (todayHours == 0){
        document.getElementById("numericalHour").innerHTML = "12";    
        }else{
            document.getElementById("numericalHour").innerHTML = todayHoursTwelveHours;
        }
        
        // console.log(todayHoursTwelveHours)
        document.getElementById("amPmContainer").innerHTML = pmAm;

        // English Clock
        document.getElementById("clockEnglishMinutesTen").innerHTML = englishTimeMinutesArr[todayMinutes];

        // document.getElementById("clockEnglishSeconds").innerHTML = englishTimeMinutesArr[todaySeconds];

        if (todayHours == 0){
        document.getElementById("clockEnglishHours").innerHTML = englishTimeMinutesArr[12];    
        }else{
            document.getElementById("clockEnglishHours").innerHTML = englishTimeHoursArr[todayHours%12];
        }

        document.getElementById("amPmContainerWord").innerHTML = pmAm;

        // console.log(pmAm)

        // Malay clock
        

        if (todayHours == 12){
            document.getElementById("clockMalayHours").innerHTML = "dua belas";
        }else if (todayHours == 0){
            document.getElementById("clockMalayHours").innerHTML = malayTimeMinutesArr[12];    
        }else{
            document.getElementById("clockMalayHours").innerHTML = malayTimeMinutesArr[todayHours %12];
        }

        document.getElementById("clockMalayMinutes").innerHTML = malayTimeMinutesArr[todayMinutes]
        document.getElementById("amPmContainerWordWord").innerHTML = pagiPetang;


    }
}
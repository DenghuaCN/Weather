var xhr = new XMLHttpRequest();
xhr.open("GET","https://weixin.jirengu.com/weather?key=study_javascript_in_jirengu.com",true);
xhr.send();

xhr.onreadystatechange = function () {
    var data;
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText)
        setData(data);
    }
}


function setData(data) {
    console.log(data);


    // 此刻湿度
    var nowHumidity = data["weather"][0]["now"]["humidity"];
    circleProgress(nowHumidity);    
    $("#brb-humidity-span").text(nowHumidity+"%").hide().fadeIn(1800);
    
    // 此刻温度
    var nowTemperature = data["weather"][0]["now"]["feels_like"];
    $(".bti-span").text(nowTemperature);  
    // 天气大图
    var bigText = data["weather"][0]["now"]["text"];
    var bigImgSrc = bigImg(bigText);
    $(".bti-bigLoading").hide();
    $(".bti-img").attr("src",bigImgSrc).show();

    // air-quality
    var airQuality = {
        pm25 : data["weather"][0]["now"]["air_quality"]["city"].pm25,
        pm10 : data["weather"][0]["now"]["air_quality"]["city"].pm10,
        co : data["weather"][0]["now"]["air_quality"]["city"].co,        
        so2 : data["weather"][0]["now"]["air_quality"]["city"].so2,        
        o3 : data["weather"][0]["now"]["air_quality"]["city"].o3,        
        quality : data["weather"][0]["now"]["air_quality"]["city"].quality
    }
    // pm25
    $(".baq-ul-li-pm25 p").text(airQuality.pm25);
    // pm10
    $(".baq-ul-li-pm10 p").text(airQuality.pm10);
    // co
    $(".baq-ul-li-co p").text(airQuality.co);
    // so2
    $(".baq-ul-li-so2 p").text(airQuality.so2);
    // o3
    $(".baq-ul-li-o3 p").text(airQuality.o3);
    // quality
    function airQualityFn(text) {

        if (text == "优") {
            return "./img/air-quality-icon/good.png";
        } else if (text == "良") {
            return "./img/air-quality-icon/common.png"
        } else if (test == "轻度污染" || test == "中度污染" || test == "重度污染" || test == "严重污染") {
            return "./img/air-quality-icon/bad.png";
        }
    }
    $(".baq-ulli-qualityImg").attr("src",airQualityFn(airQuality.quality));

    // feature
    var future = {
        0 : {
            week : data["weather"][0]["future"][0]["day"],
            low : data["weather"][0]["future"][0]["low"],
            high : data["weather"][0]["future"][0]["high"],
            text : data["weather"][0]["future"][0]["text"],
        },
        1 : {
            week : data["weather"][0]["future"][1]["day"],
            low : data["weather"][0]["future"][1]["low"],
            high : data["weather"][0]["future"][1]["high"],
            text : data["weather"][0]["future"][1]["text"],
        },
        2 : {
            week : data["weather"][0]["future"][2]["day"],
            low : data["weather"][0]["future"][2]["low"],
            high : data["weather"][0]["future"][2]["high"],
            text : data["weather"][0]["future"][2]["text"],
        },
        3 : {
            week : data["weather"][0]["future"][3]["day"],
            low : data["weather"][0]["future"][3]["low"],
            high : data["weather"][0]["future"][3]["high"],
            text : data["weather"][0]["future"][3]["text"],
        },
        4 : {
            week : data["weather"][0]["future"][4]["day"],
            low : data["weather"][0]["future"][4]["low"],
            high : data["weather"][0]["future"][4]["high"],
            text : data["weather"][0]["future"][4]["text"],
        },
        5 : {
            week : data["weather"][0]["future"][5]["day"],
            low : data["weather"][0]["future"][5]["low"],
            high : data["weather"][0]["future"][5]["high"],
            text : data["weather"][0]["future"][5]["text"],
        },
        6 : {
            week : data["weather"][0]["future"][6]["day"],
            low : data["weather"][0]["future"][6]["low"],
            high : data["weather"][0]["future"][6]["high"],
            text : data["weather"][0]["future"][6]["text"],
        }
    }

    function futureImg(text) {
        var text = text.split("/")[0];

        if (text == "多云") {
            return "./img/big-weather-icon/overcast.png";
        } else if (text == "阴") {
            return "./img/big-weather-icon/cloudy.png";
        } else if (text == "晴") {
            return "./img/big-weather-icon/sun.png";
        } else if (text == "小雨" || text == "阵雨") {
            return ".img/big-weather-icon/light-rain.png";
        } else if (text == "暴雨" || text == "大雨") {
            return ".img/big-weather-icon/heavy-rain.png";
        } else if (text == "雷电") {
            return ".img/big-weather-icon/thunder.png";
        } else if (text == "大风") {
            return ".img/big-weather-icon/gale.png";
        }
    }
    
    
    
    // 今天
    $(".wfr-ul-li:eq(0) .wfrli-week-span").text(future[0].week);
    $(".wfr-ul-li:eq(0) .wfrli-number-span").text(future[0].high);
    $(".wfr-ul-li:eq(0) .wfrli-img").attr("src",futureImg(future[0].text));


    // 第2天
    $(".wfr-ul-li:eq(1) .wfrli-week-span").text(future[1].week);
    $(".wfr-ul-li:eq(1) .wfrli-number-span").text(future[1].high);
    $(".wfr-ul-li:eq(1) .wfrli-img").attr("src",futureImg(future[1].text));
    
    
    // 第3天
    $(".wfr-ul-li:eq(2) .wfrli-week-span").text(future[2].week);
    $(".wfr-ul-li:eq(2) .wfrli-number-span").text(future[2].high);
    $(".wfr-ul-li:eq(2) .wfrli-img").attr("src",futureImg(future[1].text));
    
    
    // 第4天
    $(".wfr-ul-li:eq(3) .wfrli-week-span").text(future[3].week);
    $(".wfr-ul-li:eq(3) .wfrli-number-span").text(future[3].high);
    $(".wfr-ul-li:eq(3) .wfrli-img").attr("src",futureImg(future[3].text));
    
    
    // 第5天
    $(".wfr-ul-li:eq(4) .wfrli-week-span").text(future[4].week);
    $(".wfr-ul-li:eq(4) .wfrli-number-span").text(future[4].high);
    $(".wfr-ul-li:eq(4) .wfrli-img").attr("src",futureImg(future[4].text));
    
    
    // 第6天
    $(".wfr-ul-li:eq(5) .wfrli-week-span").text(future[5].week);
    $(".wfr-ul-li:eq(5) .wfrli-number-span").text(future[5].high);
    $(".wfr-ul-li:eq(5) .wfrli-img").attr("src",futureImg(future[5].text));
    
    
    // 第7天
    $(".wfr-ul-li:eq(6) .wfrli-week-span").text(future[6].week);
    $(".wfr-ul-li:eq(6) .wfrli-number-span").text(future[6].high);
    $(".wfr-ul-li:eq(6) .wfrli-img").attr("src",futureImg(future[6].text));
    
    
    // suggestion
    var suggestion = {
        dress : {
            brief : data["weather"][0]["today"]["suggestion"]["dressing"]["brief"],
            details : data["weather"][0]["today"]["suggestion"]["dressing"]["details"]
        },
        uv : {
            brief : data["weather"][0]["today"]["suggestion"]["uv"]["brief"],
            details : data["weather"][0]["today"]["suggestion"]["uv"]["details"]
        },
        car_washing : {
            brief : data["weather"][0]["today"]["suggestion"]["car_washing"]["brief"],
            details : data["weather"][0]["today"]["suggestion"]["car_washing"]["details"]
        },
        travel : {
            brief : data["weather"][0]["today"]["suggestion"]["travel"]["brief"],
            details : data["weather"][0]["today"]["suggestion"]["travel"]["details"]
        },
        flu : {
            brief : data["weather"][0]["today"]["suggestion"]["flu"]["brief"],
            details : data["weather"][0]["today"]["suggestion"]["flu"]["details"]
        },
        sport : {
            brief : data["weather"][0]["today"]["suggestion"]["sport"]["brief"],
            details : data["weather"][0]["today"]["suggestion"]["sport"]["details"]
        }
    }
    
    // dressing
    $(".ccu-libox:eq(0) .ccu-blod").text(suggestion.dress.brief);
    $(".ccu-libox:eq(0) .ccu-normal").text(suggestion.dress.details);
    // uv
    $(".ccu-libox:eq(1) .ccu-blod").text(suggestion.uv.brief);
    $(".ccu-libox:eq(1) .ccu-normal").text(suggestion.uv.details);
    // car-washing
    $(".ccu-libox:eq(2) .ccu-blod").text(suggestion.car_washing.brief);
    $(".ccu-libox:eq(2) .ccu-normal").text(suggestion.car_washing.details);
    // travel
    $(".ccu-libox:eq(3) .ccu-blod").text(suggestion.travel.brief);
    $(".ccu-libox:eq(3) .ccu-normal").text(suggestion.travel.details);
    // flu
    $(".ccu-libox:eq(4) .ccu-blod").text(suggestion.flu.brief);
    $(".ccu-libox:eq(4) .ccu-normal").text(suggestion.flu.details);
    // sport
    $(".ccu-libox:eq(5) .ccu-blod").text(suggestion.sport.brief);
    $(".ccu-libox:eq(5) .ccu-normal").text(suggestion.sport.details);
    
    
    
}



function bigImg(text) {

    if (text == "多云") {
        return "./img/big-weather-icon/overcast.png";
    } else if (text == "阴") {
        return "./img/big-weather-icon/cloudy.png";
    } else if (text == "晴") {
        return "./img/big-weather-icon/sun.png";
    } else if (text == "小雨" || text == "中雨") {
        return "./img/big-weather-icon/light-rain.png";
    } else if (text == "暴雨" || text == "大雨") {
        return "./img/big-weather-icon/heavy-rain.png";
    } else if (text == "雷电") {
        return "./img/big-weather-icon/thunder.png";
    } else if (text == "大风") {
        return "./img/big-weather-icon/gale.png";
    }
}

var binft = function (r) {
    var isTransparent = true;
    function getRandomColor() {
        if(isTransparent){
            isTransparent = false;
            //此处修改字体颜色,最后的 0 和 1 不要改
            return "rgba(255,255,255,0)"
        }else{
            isTransparent = true;
            return "rgba(255,255,255,1)"
        }
    }  
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var oneword = document.createElement("span");
            oneword.textContent = "_"; // 此处是末尾字符,如果想用光标样式可以改为"|"
            oneword.style.color = getRandomColor();
            n.appendChild(oneword);
        }
        return n
    }
    function i() {
        var t = wordList[c.skillI];
        c.step ? c.step-- : (c.step = refreshDelayTime, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = showTotalWordDelayTime) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % wordList.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(maxLength, maxLength + c.prefixP) : Math.min(maxLength, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    //此处改成你自己的诗词
    wordList = [ 
            "只给予你的晴天.",
            "因为夏日将终.",
        ].map(function (r) {
    return r + ""
    }),
    showTotalWordDelayTime = 2,
    refreshDelayTime = 1,
    maxLength = 1,
    d = 75,
    c = {
        text: "",
        prefixP: -maxLength,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: showTotalWordDelayTime,
        step: refreshDelayTime
    };
    i()
};
binft(document.getElementById('binft'));

var OriginTitle = document.title;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 你去哪了? 快回来!!!';
    }else {
        document.title = '(ฅ>ω<*ฅ) 你终于回来了 ~';
        setTimeout(function () {
            if(!document.hidden){
                document.title = OriginTitle;
            }
        }, 2000);
    }
});

function BackTOP() {
    $("#btn").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $("#btn").fadeIn(200);
            } else {
                $("#btn").fadeOut(200);
            }
        });
        $("#btn").click(function () {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
            return false;
        });
    });
    $(function () {
        $("#say").click(function () {
            $('body,html').animate({
                    scrollTop: $('html, body').get(0).scrollHeight
                },
                500);
            return false;
        });
    })
}

$('#readmode').click(function () {
        $('body').toggleClass('read-mode')
    })
    
function SiderMenu() {
    $('#main-container').toggleClass('open');
    $('.iconflat').css('width', '50px').css('height', '50px');
    $('.openNav').css('height', '50px');
    $('#main-container,#mo-nav,.openNav').toggleClass('open')
}

function switchNightMode() {
    $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($("body")), setTimeout(
        function () {
            (volantis.dark.mode == "dark") 
            ? 
            ($("html").addClass("DarkMode"),
            $('#modeicon').attr("xlink:href", "#icon-sun")) 
            : 
            ($("html").removeClass("DarkMode"),
            $('#modeicon').attr("xlink:href", "#icon-_moon")), 
            setTimeout(function () {
                $(".Cuteen_DarkSky").fadeOut(1e3, function () {
                    $(this).remove()
                })
            }, 2e3)
        }), 50
}

function checkNightMode() {
    if ($("html").hasClass("n-f")) {
        $("html").removeClass("day");
        $("html").addClass("DarkMode");
        $('#modeicon').attr("xlink:href", "#icon-sun")
        return;
    }
    if ($("html").hasClass("d-f")) {
        $("html").removeClass("DarkMode");
        $("html").addClass("day");
        $('#modeicon').attr("xlink:href", "#icon-_moon")
        return;
    }
    if (volantis.dark.mode == "dark") {
        $("html").addClass("DarkMode");
        $('#modeicon').attr("xlink:href", "#icon-sun")
    } else {
        $("html").removeClass("DarkMode");
        $('#modeicon').attr("xlink:href", "#icon-_moon")
    }
}
BackTOP();
volantis.dark.push(switchNightMode);
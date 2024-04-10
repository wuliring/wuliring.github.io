/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
document.addEventListener('DOMContentLoaded', function () {
    const jokeText = document.getElementById('joke-text');
    const jokeLink = document.getElementById('joke-link');
  
    // 当链接被点击时，调用笑话 API 并显示笑话
    jokeLink.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认行为（即跳转到链接指定的 URL）
  
        const apiUrl = 'https://v.api.aa1.cn/api/api-wenan-shenhuifu/index.php?aa1=json'; // 笑话 API 的 URL
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // 假设笑话内容在返回数据的 "result" 字段中
                const jokeContent = data[0].shenhuifu; // 获取笑话内容
                const jokeWithoutBr = jokeContent.replace(/<br>/g, ''); // 去除 <br> 标签
                jokeText.textContent = jokeWithoutBr; // 将笑话内容显示在页面上
            })
            .catch(error => {
                jokeText.textContent = '要不等两秒再试试-_-';
                console.error('Error fetching joke:', error);
            });
    });
});


function triggerPrank() {
    var prankPopup = document.getElementById("prank-popup");
    var prankImage = document.getElementById("prank-image");
    const scense = ["02977A3F7BABF21BF2426C02E5C81C5F.jpg", "0DF7B8D2291DB73E74EEB0FB1254BA70.jpg", "0E3F185B2D11B15EA45AC0409BDC70BD.jpg", "15F1294E52D2D8857160B4B5DDA0E01B.jpg",
        "19D5A370F76C032863355BFA0B33D65C.jpg", "20C53960B29DBB3BB311FD8C78A5709F.jpg",
        "24D3E988C238C6BDF18A3F51FDF0F9F0.jpg", "2522E84E93CBDA06C3F22E8DAD246428.jpg", "2E5F48FF52DE9A1B3AE27C1FD2526A87.jpg", "309244525B674AB2BA2EE300FD2AEBBB.jpg",
        "325F87458D1F15C198A37C0DF77C8AA0.jpg", "3765BDF7F41791E847D7F06AF7A3F614.jpg", "3B395DB35017421F85BCFDE664E44225.jpg", "3C1F5B27CD6A0D59190A1160B1053A12.jpg",
        "42BDC5A3A8AA921CD4AA111CA273EF1E.jpg", "43251009337125B42194EEF97F0A75FC.jpg", "45E7CFD685964059A72EF1736826CC8E.jpg", "46C1EDB72A148F21EF4BA4F865FCF06A.jpg",
        "483CECEAB69AD7E2BA93E938A72524DF.jpg", "4A71B37E55C5738A38B7B1D091F53FF6.jpg", "4DE96B3D49A1344AAEFF020735C588CC.jpg", "4F8BD0239F7838C55090AC47F44AA62A.jpg",
        "508ABC82E8D0F8747F60589090F56EAF.jpg", "58982AF98020C1A5C7A3FD4F6B65EF95.jpg", "59FAD2BE480BAF9E8A23AF7B97B1D8F7.jpg", "5D4773982956A1E2B53DE3FEFA4BE09F.jpg",
        "5D556D689076805A407CEA46960EFE32.jpg", "5F1E4474502181CAD5A8662F1DB58674.jpg", "612CBF825B77C97E5BFED1F5DA744D5E.jpg", "62B198AAB19B0DDB6BE19B9A1AF7B69D.jpg",
        "6A05916E0A32EA01E611E88269B1DF68.jpg", "6A1544563EED004F5902106582511026.jpg", "718BECBB644348696C53D615E2D86B86.jpg", "785E33D6592253DE8C02C691CA7AF3ED.jpg",
        "7890FFB3785E6645D87BA719DDFCB4E7.jpg", "7AF3B50BD98B481DFDA946FEB88F4480.jpg", "7F40EF0259AC2340FBB89CA3EE1159AE.jpg", "807C4DDC8595F5C84CE0AB7E8ED41B33.jpg",
        "832E2BC679083A884A3276C5575F9FE3.jpg", "841F659879777E0390F33C42F514CFD3.jpg", "848BB42A5B51B0F807CD21D6F6B646D6.jpg", "8A3BA8100C82F6CB60EE4E99DBBA1D2C.jpg",
        "A2838F88621C8D0AEDE5C23416983D9B.jpg", "B8EF272F5D7AD64A8E1A6AB58ECCF8A5.jpg", "B952C5672DD3E990CFCAF74DC59BF91C.jpg", "BF20A2676B0AB18EB1C28DACC3A2A9AD.jpg",
        "C115939049BBD1B1FF39C98A6C5BF3BD.jpg", "C22209D4C1C7B90FBFBBEC1CDC22D6E9.jpg", "C8158D04FE61F09F75FFCA9BFB6C623A.jpg", "D0BA0C71DD5F34B7D4E1B387649F8647.jpg",
        "D15F00D8D931D0ADE1A815A38648EBF9.jpg", "D9CF012E0C3AB3214A7D7856BCC19269.jpg", "DAFB253001700B6921331C6326DD590F.jpg", "DC4215E250661197E652CE14EF15FCE2.jpg",
        "DCE67FD91E2492C4868B902F8EA023EA.jpg", "E14E2B949A07C1E8E6B72850D3CCF101.jpg", "E576799A79133CCCF8654E700690D918.jpg", "E8923814E13AFA9D3C4EC0BEB92304CE.jpg",
        "E9D3E8529FE6C11993989FB6E47E5066.jpg", "E9F068825066DC7A84E6CAB18E835C6C.jpg", "EDB4CBA08E04361DE7B6913033A405CC.jpg", "F533E0DDDE52076832984C6EBAF0B7D9.jpg",
        "FA22BB761F03616F6592662320B8013A.jpg", "FA5EF517C6C0010617B60CC8B36C5144.jpg","9FCA5C502784DA6200EAF1837CD9454E.jpg","67C7A75DB0BC534F518529FAD2249781.jpg",
    ];

    // 生成随机数作为索引
    const randomIndex = Math.floor(Math.random() * scense.length);

    // 获取随机图片文件名
    const randomImage = scense[randomIndex];

    // 设置随机图片的URL
    prankImage.src = "./scense/"+randomImage;

    prankPopup.style.display = "block";
    prankPopup.addEventListener("animationend", function() {
        // 隐藏图片和玻璃罩
        prankPopup.style.display = "none";
    }, { once: true });
}
var pages = [
        
    'https://sliding.toys/mystic-square/8-puzzle/daily/',
    'https://longdogechallenge.com/',
    'https://maze.toys/mazes/mini/daily/',
    'https://optical.toys',
    'https://paint.toys/',
    'https://puginarug.com',
    'https://alwaysjudgeabookbyitscover.com',
    'https://clicking.toys/flip-grid/neat-nine/3-holes/',
    'https://weirdorconfusing.com/',
    'https://checkbox.toys/scale/',
    'https://memory.toys/classic/easy/',
    'https://binarypiano.com/',
    'https://mondrianandme.com/',
    'https://onesquareminesweeper.com/',
    'https://cursoreffects.com',
    'http://floatingqrcode.com/',
    'https://thatsthefinger.com/',
    'https://cant-not-tweet-this.com/',
    'http://heeeeeeeey.com/',
    'http://corndog.io/',
    'http://eelslap.com/',
    'http://www.staggeringbeauty.com/',
    'http://burymewithmymoney.com/',
    'https://smashthewalls.com/',
    'https://jacksonpollock.org/',
    'http://endless.horse/',
    'http://drawing.garden/',
    'https://www.trypap.com/',
    'http://www.republiquedesmangues.fr/',
    'http://www.movenowthinklater.com/',
    'https://sliding.toys/klotski/easy-street/',
    'https://paint.toys/calligram/',
    'https://checkboxrace.com/',
    'http://www.rrrgggbbb.com/',
    'http://www.koalastothemax.com/',
    'https://rotatingsandwiches.com/',
    'http://www.everydayim.com/',
    'http://randomcolour.com/',
    'http://maninthedark.com/',
    'http://cat-bounce.com/',
    'http://chrismckenzie.com/',
    'https://thezen.zone/',
    'http://ninjaflex.com/',
    'http://ihasabucket.com/',
    'http://corndogoncorndog.com/',
    'http://www.hackertyper.com/',
    'https://pointerpointer.com',
    'http://imaninja.com/',
    'http://www.partridgegetslucky.com/',
    'http://www.ismycomputeron.com/',
    'http://www.nullingthevoid.com/',
    'http://www.muchbetterthanthis.com/',
    'http://www.yesnoif.com/',
    'http://lacquerlacquer.com',
    'http://potatoortomato.com/',
    'http://iamawesome.com/',
    'https://strobe.cool/',
    'http://thisisnotajumpscare.com/',
    'http://doughnutkitten.com/',
    'http://crouton.net/',
    'http://corgiorgy.com/',
    'http://www.wutdafuk.com/',
    'http://unicodesnowmanforyou.com/',
    'http://chillestmonkey.com/',
    'http://scroll-o-meter.club/',
    'http://www.crossdivisions.com/',
    'http://tencents.info/',
    'https://boringboringboring.com/',
    'http://www.patience-is-a-virtue.org/',
    'http://pixelsfighting.com/',
    'http://isitwhite.com/',
    'https://existentialcrisis.com/',
    'http://onemillionlols.com/',
    'http://www.omfgdogs.com/',
    'http://oct82.com/',
    'http://chihuahuaspin.com/',
    'http://www.blankwindows.com/',
    'http://tunnelsnakes.com/',
    'http://www.trashloop.com/',
    'http://spaceis.cool/',
    'http://www.doublepressure.com/',
    'http://www.donothingfor2minutes.com/',
    'http://buildshruggie.com/',
    'http://buzzybuzz.biz/',
    'http://yeahlemons.com/',
    'http://wowenwilsonquiz.com',
    'https://thepigeon.org/',
    'http://notdayoftheweek.com/',
    'http://www.amialright.com/',
    'https://optical.toys/thatcher-effect/',
    'https://greatbignothing.com/',
    'https://zoomquilt.org/',
    'https://dadlaughbutton.com/',
    'https://remoji.com/',
    'http://papertoilet.com/',
    'https://loopedforinfinity.com/',
    'https://end.city/',
    'https://www.bouncingdvdlogo.com/',
    'https://clicking.toys/peg-solitaire/english/',
    'https://toms.toys',
  ];
  var link = document.getElementById("randomLink");

        // 为链接添加点击事件
        link.addEventListener("click", redirectToRandomPage);

        function redirectToRandomPage(event) {
            event.preventDefault(); // 阻止默认行为，避免页面跳转
            var randomIndex = Math.floor(Math.random() * pages.length);
            var randomPage = pages[randomIndex];
            window.open(randomPage, "_blank");
            
        }
// 为链接添加点击事件
document.getElementById("randomLink").onclick = redirectToRandomWebsite;
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
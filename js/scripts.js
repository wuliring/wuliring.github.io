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
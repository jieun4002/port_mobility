$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var swiper2 = new Swiper(".vertical", {
        centeredSlides: true,
        direction: "vertical",
        slidesPerView: 6,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});


// var Timer = document.getElementById('time span'); //스코어 기록창-분
// let time= 60000;
// let min=1;
// let sec=60;


// Timer = min + ":"+'00'; 

// function TIMER(){
//     PlAYTIME=setInterval(function(){
//         // $('.h span').text(Timer)
//         time=time-1000; //1초씩 줄어듦
//         console.log(time)
//         min=time/(60*1000); //초를 분으로 나눠준다.
//         console.log(min)
//     if(sec>0){ //sec=60 에서 1씩 빼서 출력해준다.
//             sec=sec-1;
//             Timer.value=Math.floor(min)+':'+sec; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.

//         }
//         if(sec===0){
//             time= 180000;
//             min=3;
//             // 0에서 -1을 하면 -59가 출력된다.
//             // 그래서 0이 되면 바로 sec을 60으로 돌려주고 value에는 0을 출력하도록 해준다.
//             sec=60;
//             Timer = Math.floor(min)+':'+'00'
//         }     
//         return;

//     },1000); //1초마다 
// }


// TIMER();
// setTimeout(function(){
//     setInterval(PlAYTIME);
// },60000);//3분이 되면 타이머를 삭제한다.
// // });




window.addEventListener('DOMContentLoaded', function () {

    // 고정된 상담신청하기
    let fixedContactButton = document.querySelector('.fixed-box .button'),
        fixedContact = document.querySelector('.fixed-inquiry'),
        fixedContactClose = document.querySelector('.fixed-inquiry .close-button');

    function clickConatctButton() {
        if (!fixedContact.classList.contains('active')) {
            fixedContact.classList.add('active')
        } else {
            fixedContact.classList.remove('active')
        }
    }

    function clickContactClose() {
        fixedContact.classList.remove('active')
    }

    // 타임딜
    let h1 = document.querySelector('#time .h .first'),
        h2 = document.querySelector('#time .h .last'),
        m1 = document.querySelector('#time .m .first'),
        m2 = document.querySelector('#time .m .last'),
        s1 = document.querySelector('#time .s .first'),
        s2 = document.querySelector('#time .s .last');

    function changeNumber(e) {
        return Number(e.innerText);
    }

    function timeOut() {
        if (changeNumber(s2) == 0) {
            s2.innerText = 9;
        } else {
            s2.innerText = changeNumber(s2) - 1;
        }

        if (changeNumber(s2) == 9) {
            s1.innerText = s1.innerText - 1;
        } else if (changeNumber(s1) == 0 && changeNumber(s2) == 0) {
            s1.innerText = 5;
            s2.innerText = 9;

            if (changeNumber(m2) > 0) {
                m2.innerText = changeNumber(m2) - 1;
            } else {
                m2.innerText = 9;

                if (changeNumber(m1) > 0) {
                    m1.innerText = changeNumber(m1) - 1;
                } else {
                    m1.innerText = 5;

                    if (changeNumber(h2) > 0) {
                        h2.innerText = changeNumber(h2) - 1;
                    } else {
                        h2.innerText = 9
                        if (changeNumber(h1) > 0) {
                            h1.innerText = changeNumber(h1) - 1;
                        } else {
                            h1.innerText = 9
                        }
                    }
                }
            }
        }
    }


    function init() {
        fixedContactButton.addEventListener('click', clickConatctButton);
        fixedContactClose.addEventListener('click', clickContactClose);
        setInterval(timeOut, 1000);
    }

    init()
})
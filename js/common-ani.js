window.addEventListener('DOMContentLoaded', function () {
    let scrollY,
        windowCenter = window.innerHeight / 2;
    let scrollAniElements = document.querySelectorAll('.scroll-ani'),
        elementRelativeTop,
        elementOffsetBottom,
        classCheck;
    let loadingElements = document.querySelectorAll('.loading-ani');
    let parallaxElements = document.querySelectorAll('.parallax-ani'),
        parallaxRelativeTop,
        parallaxRelativeBottom,
        parallaxOffsetTop,
        parallaxHeight,
        parallaxRatio,
        parallaxPersent;
    let categoryBtns = document.querySelectorAll('.category-button');

    function ourStoryFilterAniReset() {
        renderScreen();
    }

    function renderScreen() {
        let scaleStartValue = 1,
            scaleEndValue = 1.1,
            translateStartValue = 0,
            translateEndValue = 30,
            translate = Math.min(translateStartValue, translateEndValue - (translateEndValue * parallaxRatio));


        parallaxElements.forEach(function (element, i) {
            parallaxRelativeTop = (element.getBoundingClientRect().top).toFixed(1);
            parallaxRelativeBottom = (element.getBoundingClientRect().top + element.getBoundingClientRect().height).toFixed(1);
            parallaxOffsetTop = (element.getBoundingClientRect().top + scrollY).toFixed(1);

            parallaxHeight = element.getBoundingClientRect().height;
            // parallaxRatio = Number((parallaxRelativeTop / parallaxHeight).toFixed(3));
            parallaxRatio = parallaxRelativeTop / parallaxHeight;
            parallaxPersent = parallaxRatio * 100;
            if (parallaxRelativeTop < window.innerHeight && parallaxRelativeBottom > 0) {
                element.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.min(translateStartValue, Math.max(- element.getBoundingClientRect().height * .1, translateEndValue - (translateEndValue * parallaxRatio)))}, 0, 1) scale(1.2)`
            }
        })
    }


    function attrSet() {
        scrollY = window.scrollY || window.pageYOffset;
    }

    function scrollAni() {
        scrollAniElements.forEach(function (element, i) {
            elementRelativeTop = element.getBoundingClientRect().top;
            elementOffsetBottom = element.getBoundingClientRect().top + scrollY + element.getBoundingClientRect().height;
            classCheck = element.classList.contains('ani-active');
            // if (elementRelativeTop < windowCenter && elementRelativeTop > 0) {
            if (elementRelativeTop < windowCenter) {
                if (!classCheck) {
                    element.classList.add('ani-active')
                }
            } else if (scrollY > elementOffsetBottom) {
                element.classList.remove('ani-active')
            }
        })
    }

    function loadingAni() {
        loadingElements.forEach(function (element, i) {
            element.classList.add('ani-active')
        })
    }

    function init() {
        attrSet()
        scrollAni()
        renderScreen()
        categoryBtns.forEach(function (element, i) {
            element.addEventListener('click', ourStoryFilterAniReset)
        })
        loadingAni()
    }
    init()

    window.addEventListener('scroll', attrSet);
    window.addEventListener('scroll', scrollAni);
    window.addEventListener('scroll', renderScreen);
})

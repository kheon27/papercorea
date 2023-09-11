


document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    
    scrollToTopButton.addEventListener("click", function() {
        // 스크롤 맨 위로 이동
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

$(function(){
    // 스크롤 시 header fade-in
   
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("#header").removeClass("deactive");
                    $("#header").addClass("active");
                  }else{
            $("#header").removeClass("active");
                    $("#header").addClass("deactive");
           
        }
    })

});

/*
const menu = document.querySelector('# header .gnb>li>a');
const menuHeight = menu.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > menuHeight) {
    menu.classList.add('ab');
  } else {
    menu.classList.remove('ab');
  }
});

*/

// 한글 / 영문 변환
const lanKor = document.querySelector(".lan-kor");
const lanEng = document.querySelector(".lan-eng");
const goNumList = document.querySelectorAll(".main_slider_in_list button");

lanKor.addEventListener("click", () => {
	lanKor.style.color = "#000000";
	lanEng.style.color = "#75777a";
});

lanEng.addEventListener("click", () => {
	lanEng.style.color = "#000000";
	lanKor.style.color = "#75777a";
});

setInit();

function setInit() {
	lanKor.style.color = "#000000";
	goNumList[0].style.color = "#2a5f9c";
}

// main_slider 부분
var slider_swiper = new Swiper(".secondSwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	navigation: {
	  nextEl: ".slider_next",
	  prevEl: ".slider_prev",
	},
});

/* 새로 추가 된 부분 */
slider_swiper.on('transitionEnd', function() {
	console.log('now index :::', slider_swiper.realIndex);
	initGoNumButtonColor();
	goNumList[slider_swiper.realIndex].style.color = "#0b60a1";
});
/* 새로 추가 된 부분 */

goNumList.forEach((goNumBtn, idx) => {
	goNumBtn.addEventListener("click", () => {
		initGoNumButtonColor();
		goNumBtn.style.color = "#0b60a1";
		slider_swiper.slideTo(idx, 1000, false)
	});
});

function initGoNumButtonColor() {
	goNumList.forEach((btn) => {
		btn.style.color = "#222";
	});
}

// main_story 부분
var story_swiper = new Swiper(".main_story_right", {
	spaceBetween: 0,
    slidesPerView: 1,
	navigation: {
	  nextEl: ".story_next",
	  prevEl: ".story_prev",
	},
	breakpoints: {
        1600: {    
            spaceBetween: 80,
            slidesPerView: 2,
        },
        1200: {    
            spaceBetween: 50,
            slidesPerView:2,
        },
        768: {    
            spaceBetween: 30,
            slidesPerView:1,
        },
        575: {    
            spaceBetween: 30,
            slidesPerView:1,
        }
    }
	// breakpoints: {
	// 	// when window width is >= 1200px
    //     // 1200: {
    //     //     spaceBetween: 80,
    //     //     slidesPerView: 2,
    //     // },
	// 	1330: {
    //         // spaceBetween: 80,
    //         slidesPerView: 1,
    //     },
	// 	// when window width is >= 768px
    //     768: {    
    //         spaceBetween: 50,
    //         slidesPerView: 1,
    //     },
	// 	// when window width is >= 575px
    //     575: {    
    //         spaceBetween: 0,
    //         slidesPerView: 1,
    //     }
    // }
});

// family site select
const selectFamilySite = document.querySelector(".family_site");

function selectSite() {
	var option_value = selectFamilySite.options[selectFamilySite.selectedIndex].value;
	
	switch(option_value) {
		case "site1_value":
			// 1번 사이트
			location.href = "#";
			break;
		case "site2_value":
			// 2번 사이트
			location.href = "#";
			break;
		case "site3_value":
			// 3번 사이트
			location.href = "#";
			break;
		default:
			break;
	}
}





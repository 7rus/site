// JSON Document
var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "Мебель",
                headlineSecondLine: "под заказ",
                sublineFirstLine: "Качественно",
                sublineSecondLine: "Быстро",
                bgImg: "ass/pic/slide-1.jpg",
                rectImg: "ass/pic/slide-1.jpg",
				button: "Мебель для дома"
            },
            {
                headlineFirstLine: "Мебель",
                headlineSecondLine: "для офиса",
                sublineFirstLine: "Креативно",
                sublineSecondLine: "Удобно",
                bgImg: "ass/pic/slide-2.jpg",
                rectImg: "ass/pic/slide-2.jpg",
				button: "Для офиса"
            },
            {
                headlineFirstLine: "Мебель",
                headlineSecondLine: "для террас",
                sublineFirstLine: "Практичнось",
                sublineSecondLine: "Долговечность",
                bgImg: "ass/pic/slide-3.jpg",
                rectImg: "ass/pic/slide-3.jpg",
				button: "Для улицы"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})
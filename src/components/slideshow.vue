<template>
  <div>
    <section>
      <section class="shik-mt-slider">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-3 shik-category-box">
              <div class="shik-category">
                <!-- Title Category in Content-->
                <div class="shik-category-title" style="margin-top:10px;">
                  <span>Kategori</span>
                  <a href="/kategori-lainnya" class="shik-see-all">
                    Lihat Semua
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJZSURBVHgB7ZhPaxNBGMaf2U1ibGmwXgRFydGDoAjViwhCYhuD6BcQi3jw0Jv4BfwAXj2I/28FoTa1u9umFARvvYjiSXDVW2/aS5s2nb6btnQJM5NssjMNdH6HsOR9CO+z87yT3QEsFovFcpRhMMHs7BCGsvfAWBbrzRqq1d9ICf0G5ucLyDkf6Kq0902ITX4DlUqIFHCgm5zzEQfNRxSRZcvwvCJSQO8KBDNn4eb/SKqprITeFXCG/4PzhqSaykroNVAu/wNnDxWKvk3on4GbE+8BPklXTYmiLxP6DUSUKm/BmlPQYMLM/8A+S58egbvPFYrEg23WQMRi8ACMv1QoEpkwE6E45fFXac6EeQMR0Uxw/kSh6NqE+QjFqXv3qYU3CkXHOIkN1GpncDzzjsrnSaF3lThG6HNYoVCaEBtY8l/TD09icAjRXL+O8bt/2wviu8spg4NFEW7usahwOEPcC4wJexUbYPiFwWIVDTwTFcQGGvwpmfiOwSAEthMO8T4rK1msfXOhi8bpy3C5T1cjEkWP26gJguACnO0vlO2CRLFKzV/t9EhxOENc98Y6Nq+ITRzzBnz/Ir3kBIrmw9adL936gS4wa6BeH6PMf6bgjkoUiR+nzRlY9K4BWzMdYlNN+pJvZoh9/woyFBvwExJF2Gq+y9jE0W9gYeESHL6sbL6P4xW9BqanczhZiM6FTkkUfZ8N6Z2BwrFzkDffU+bb0Wtg4s5PWuOvgkrY2ud7yHw7+nehLXabPuMmdmOTQvMRZnahublR5DNTdLvy2OAv0jqZtlgsFotlB3yFzMuerXfGAAAAAElFTkSuQmCC"
                      class="shik-arrow"
                    />
                  </a>
                </div>

                <ul class="shik-category-items">
                  <li v-for="(item, index) in items" :key="index">
                    <span>
                      <img src="../assets/images/roti 1.png" class="shik-w25" />
                      {{ item.category_category }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-md-9">
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                img-width="1024"
                img-height="480"
              >
                <b-carousel-slide
                  caption="First slide"
                  img-src="https://picsum.photos/1024/480/?image=10"
                ></b-carousel-slide>
                <b-carousel-slide
                  caption="Second Slide"
                  img-src="https://picsum.photos/1024/480/?image=12"
                ></b-carousel-slide>
                <b-carousel-slide
                  caption="Third Slide"
                  img-src="https://picsum.photos/1024/480/?image=22"
                ></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      lengkapiProfile: false,
      slide: 0,
      carousel: [],
      sliding: null,
      type: "",
      loadingCarousel: true,
      items: [
        {
          category_category: "Biskuit dan Snack",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Minuman",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Permen dan Coklat",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Es krim",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Keju",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Air Minerall",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Roti",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Vitamin",
          category_image: "../assets/images/roti 1.png",
        },
        {
          category_category: "Susu",
          category_image: "../assets/images/roti 1.png",
        },
      ],
      loading: true,
    };
  },

  mounted() {
    this.slideType();
    this.checkIsBuyer();
    this.getCategories();
  },

  methods: {
    async getSlideShow() {},
  },
};
</script>

<style scoped>
.container {
  margin-top: -6rem;
  margin-bottom: 20px;
}
.image {
  border-radius: 0px;
  height: 100%;
  background-size: cover;
  background-color: #00d1c7;
}
.shik-mt-slider {
  z-index: 0;
  margin-top: 140px;
}
.shik-category {
  height: 380px;
  width: 100%;
  display: block;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgb(255, 255, 255);
}
.shik-category-box {
  z-index: 110;
  pointer-events: all;
}
.shik-category-title {
  height: 36px;
  line-height: 36px;
  padding: 0 20px;
  font-weight: 700;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.shik-category-item {
  padding: 1px 5px 0 17px;
  margin: -1px 0 0;
  width: 100%;
  overflow: hidden;
  box-sizing: content-box;
}
.shik-category-items > li {
  min-height: 35px;
  margin-right: 34px;
  margin-left: 21px;
  padding: 0 14px 0 0;
  line-height: 37px;
  list-style: none;
  border-bottom: none;
  position: relative;
  text-align: left;
}
.shik-category-items > li a {
  color: inherit;
  display: block;
  z-index: 110;
  width: 250px;
}

.shik-category-title .shik-see-all {
  font-weight: 400;
  float: right;
  color: #00cfc5;
  text-decoration: none;
}
.shik-w25 {
  width: 25px;
  margin-right: 5px;
}
.shik-arrow {
  height: 20px;
  margin-left: 5px;
}
</style>

<template>
  <section class="section-general mb-4">
    <div class="container">
      <div class="row mb-3">
        <div class="col-lg-6 col-6 text-left">
          <p class="fs-20-b">Berita Terbaru</p>
        </div>
        <div class="col-lg-6 col-6 text-right">
          <span class="fs-14 color-main text-link">
            Lainnya
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJZSURBVHgB7ZhPaxNBGMaf2U1ibGmwXgRFydGDoAjViwhCYhuD6BcQi3jw0Jv4BfwAXj2I/28FoTa1u9umFARvvYjiSXDVW2/aS5s2nb6btnQJM5NssjMNdH6HsOR9CO+z87yT3QEsFovFcpRhMMHs7BCGsvfAWBbrzRqq1d9ICf0G5ucLyDkf6Kq0902ITX4DlUqIFHCgm5zzEQfNRxSRZcvwvCJSQO8KBDNn4eb/SKqprITeFXCG/4PzhqSaykroNVAu/wNnDxWKvk3on4GbE+8BPklXTYmiLxP6DUSUKm/BmlPQYMLM/8A+S58egbvPFYrEg23WQMRi8ACMv1QoEpkwE6E45fFXac6EeQMR0Uxw/kSh6NqE+QjFqXv3qYU3CkXHOIkN1GpncDzzjsrnSaF3lThG6HNYoVCaEBtY8l/TD09icAjRXL+O8bt/2wviu8spg4NFEW7usahwOEPcC4wJexUbYPiFwWIVDTwTFcQGGvwpmfiOwSAEthMO8T4rK1msfXOhi8bpy3C5T1cjEkWP26gJguACnO0vlO2CRLFKzV/t9EhxOENc98Y6Nq+ITRzzBnz/Ir3kBIrmw9adL936gS4wa6BeH6PMf6bgjkoUiR+nzRlY9K4BWzMdYlNN+pJvZoh9/woyFBvwExJF2Gq+y9jE0W9gYeESHL6sbL6P4xW9BqanczhZiM6FTkkUfZ8N6Z2BwrFzkDffU+bb0Wtg4s5PWuOvgkrY2ud7yHw7+nehLXabPuMmdmOTQvMRZnahublR5DNTdLvy2OAv0jqZtlgsFotlB3yFzMuerXfGAAAAAElFTkSuQmCC"
              class="shik-arrow"
              style="
          height: 20px;"
            />
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3" v-for="(item, index) in dataNews" :key="index">
          <nuxt-link
            :to="{
            name : 'berita-detail',
            query: { id : item.news_id }
          }"
          >
            <div class="berita-box">
              <div style="height: 120px;" class="mb-3">
                <img :src="item.news_image" />
              </div>
              <div class="berita-inner text-left">
                <p class="fs-16-b text-truncate-multi">{{ item.news_title }}</p>
                <p class="fs-12 text-truncate-multi">
                  <span v-html="item.news_description"></span>
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataNews: [
        {
          news_title: "Title 1",
          news_image: "https://placekitten.com/380/200",
          news_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          news_title: "Title 2",
          news_image: "https://placekitten.com/380/200",
          news_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          news_title: "Title 3",
          news_image: "https://placekitten.com/380/200",
          news_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          news_title: "Title 4",
          news_image: "https://placekitten.com/380/200",
          news_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };
  },
};
</script>

<style>
.text-truncate-multi {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 60px;
  margin: 0 auto;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.section-general[data-v-54d3a52e] {
  margin-top: -20px;
}
</style>

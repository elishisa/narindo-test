<template>
  <div class="top_nav">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-6">
          <div class="top_nav_left">
            <a @click="isShowDownload = !isShowDownload" class="text-link-white">
              Download
              <i class="fa fa-angle-down"></i>
            </a>
            <div
              v-if="isShowDownload"
              class="download-box download"
              style="display: block; position: absolute; top: 28px; width: 130px; left: 0px; z-index: 20;"
            >
              <a href="#" target="_blank">
                <i class="fab fa-google-play"></i> Playstore
              </a>
              <br />
              <a href="#" target="_blank">
                <i class="fab fa-apple"></i> Appstore
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-6 text-right">
          <div class="top_nav_right">
            <a class="text-link-white">Tentang Kami</a>
            &nbsp;
            <a class="text-link-white">Bantuan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowDownload: false,
    };
  },
};
</script>

<style>
.download a {
  color: #ffffff;
  text-align: left;
}
.download:hover {
  color: #ffffff;
}
.text-link-white {
  color: #ffffff;
  margin-left: -28rem;
}
.text-link-white:hover {
  color: #e6faf9;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 10;
}
</style>

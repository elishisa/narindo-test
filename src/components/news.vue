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
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
      <newList />
    </div>
  </section>
</template>

<script>
import newList from "../components/newlist";

export default {
  components: { newList },
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
</style>

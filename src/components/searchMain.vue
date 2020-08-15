<template>
  <div>
    <form @submit.prevent autocomplete="off">
      <div class="shik-border rounded-pill" id="overlay">
        <div class="input-group">
          <b-form-input
            type="text"
            placeholder="Cari Produk / Toko"
            class="form-control search border-0 grey-text shik-fz"
          />
          <div class="input-group-append">
            <button id="button-addon1" type="submit" class="btn btn-search text-primary bg-light">
              <img src="../assets/images/search.png" style="width: 15px" title="Notifikasi" />
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search",

  data() {
    return {};
  },
};
</script>

<style scoped>
.search-suggestions {
  background-color: white;
  border: solid #b0b0b0 0.5px;
  border-radius: 0px 0px 8px 8px;
  max-height: 500px;
  overflow-y: scroll;
  padding: 20px;
  position: absolute;
  top: 63px;
  width: 150%;
  z-index: 100;
}
.search-suggestions::-webkit-scrollbar {
  width: 5px;
}
.search-suggestions::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 8px;
}
.search-suggestions::-webkit-scrollbar-thumb {
  background: rgb(200, 200, 200);
  border-radius: 8px;
}
.search-suggestions::-webkit-scrollbar-thumb:hover {
  background: rgb(180, 180, 180);
}
.search-suggestions-list {
  cursor: pointer;
  padding: 5px;
}
.search-suggestions-list:hover {
  background-color: #e6e6e6;
}
.shik-border {
  display: flex;
  -webkit-box-flex: inherit;
  flex-grow: inherit;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
  height: 35px;
  background-color: rgb(255, 255, 255);
  flex-direction: row-reverse;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 280ms ease 0s;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(229, 231, 233);
  border-image: initial;
}
.shik-cover-layer {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: fixed;
  min-height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.498039);
  z-index: 1;
  display: block;
  -webkit-animation: cd-fade-in 0.3s;
  animation: cd-fade-in 0.3s;
}
.shik-hide {
  display: none !important;
}
.shik-fz {
  font-size: 0.9em !important;
}
.shik-min {
  margin-top: -7px;
}
</style>

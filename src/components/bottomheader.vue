<template>
  <div class="main_nav_container">
    <div class="container">
      <div class="row">
        <div v-if="isShowSearch" class="search-mobile-box shik-db">
          <div class="row">
            <div class="col-lg-12">
              <search />
            </div>
          </div>
        </div>

        <!-- LOGO START -->
        <div class="col-lg-2 col-md-7 col-sm-7 col-7 text-right">
          <div class="logo_container">
            <img src="../assets/images/logo-1.jpg" style="width: 60px;" />
          </div>
        </div>
        <!-- LOGO END -->

        <!-- SEARCH BOX START -->
        <div class="col-lg-6 search-main-gada">
          <!-- Call component search-->
          <div class="mt-4">
            <search />
          </div>
        </div>
        <!-- SEARCH BOX END -->

        <!-- ACCOUNT USER START -->
        <div class="col-lg-4 col-md-3 col-sm-3">
          <div class="row">
            <!-- NAVBAR DROPDOWN START -->
            <nav class="navbar navbar_user col-md-7 d-none d-lg-block pt-3">
              <ul class="mt-1">
                <!-- NAVBAR DROPDOWN DAFTAR TRANSAKSI START -->
                <li class="dropdown checkout">
                  <a href>
                    <i class="fa" aria-hidden="true">
                      <img
                        src="../assets/images/icon-transaction.png"
                        style="width: 24px"
                        title="Daftar Transaksi"
                      />
                    </i>
                    <span id="checkout_items" class="checkout_items">10</span>
                    <!-- <span v-else id="checkout_items" class="checkout_items">0</span> -->
                  </a>
                  <ul class="dropdown-menu ml-min100">
                    <li style="width: 200px;">
                      <div class="row">
                        <div @click="goToTransaksiBeli" class="col-lg-12" style="cursor: pointer">
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="fs-16">Transaksi Beli</p>
                            </div>
                            <div class="col-lg-4">
                              <p class="color-main font-weight-bold text-right"></p>
                            </div>
                          </div>
                        </div>

                        <div
                          @click="showModalBelumTerdaftarBeli"
                          class="col-lg-12"
                          style="cursor: pointer"
                        >
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="fs-16">Transaksi Beli</p>
                            </div>
                            <div class="col-lg-4">
                              <p class="color-main font-weight-bold text-right">20</p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div style="border-top: 0.5px solid #EBEBEB;">&nbsp;</div>
                        </div>

                        <!--JIKA SUDAH REGISTRASI JUAL DAN BELI-->
                      </div>
                      <div class="row">
                        <div @click="goToTransaksiJual" class="col-lg-12" style="cursor: pointer">
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="fs-16">Transaksi Jual</p>
                            </div>
                            <div class="col-lg-4">
                              <p class="color-main font-weight-bold text-right">10</p>
                            </div>

                            <div class="col-lg-12">
                              <div style="border-top: 0.5px solid #EBEBEB;">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- END -->

                      <!--BELUM REGISTRASI JUAL-->
                      <div class="row">
                        <div
                          @click="showModalBelumTerdaftar"
                          class="col-lg-12"
                          style="cursor: pointer"
                        >
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="fs-16">Transaksi Jual</p>
                            </div>
                            <div class="col-lg-4">
                              <p class="color-main font-weight-bold text-right">10</p>
                            </div>

                            <div class="col-lg-12">
                              <div style="border-top: 0.5px solid #EBEBEB;">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--SEDANG VERIFIKASI-->
                      <div class="row">
                        <div
                          @click="showModalSedangVerif"
                          class="col-lg-12"
                          style="cursor: pointer"
                        >
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="fs-16">Transaksi Jual</p>
                            </div>
                            <div class="col-lg-4">
                              <p class="color-main font-weight-bold text-right">8</p>
                            </div>

                            <div class="col-lg-12">
                              <div style="border-top: 0.5px solid #EBEBEB;">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--END-->
                      <!--BELUM REGISTRASI BELI-->
                      <div class="row">
                        <div
                          @click="showModalBelumTerdaftarBeli"
                          class="col-lg-12"
                          style="cursor: pointer"
                        >
                          <div class="row">
                            <div class="col-lg-8">
                              <p class="fs-16">Transaksi Jual</p>
                            </div>
                            <div class="col-lg-4">
                              <p class="color-main font-weight-bold text-right">10</p>
                            </div>

                            <div class="col-lg-12">
                              <div style="border-top: 0.5px solid #EBEBEB;">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--END-->
                    </li>
                    <li>
                      <div class="row">
                        <div
                          @click="goToRiwayatTransaksi"
                          class="col-lg-12"
                          style="cursor: pointer"
                        >
                          <div class="row">
                            <div class="col-lg-12">
                              <p class="fs-16">Riwayat Transaksi</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <!-- NAVBAR DROPDOWN DAFTAR TRANSAKSI END -->
                <!-- NAVBAR DROPDOWN KERANJANG START -->
                <li class="dropdown checkout">
                  <a
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa" aria-hidden="true">
                      <img
                        src="../assets/images/shopping-cart-grey 1.png"
                        style="width: 22px"
                        title="Keranjang"
                      />
                    </i>
                    <!-- <i class="fas fa-shopping-cart color-grey" style="font-size: 25px"></i> -->
                    <span id="checkout_items" class="checkout_items">2</span>
                  </a>
                  <ul
                    class="dropdown-menu"
                    style="margin-left: -200px;"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li style="width: 400px;">
                      <div class="row">
                        <div class="col-lg-8">
                          <p class="font-weight-bold fs-16-b">Barang di dalam keranjang</p>
                        </div>
                        <div class="col-lg-4">
                          <p class="color-main font-weight-bold text-right">2 item</p>
                        </div>

                        <div class="col-lg-12">
                          <div style="border-bottom: 0.5px solid #EBEBEB;"></div>
                        </div>

                        <div class="col-lg-12">
                          <div class="body-notif">
                            <div class="row p-3">
                              <div class="col-lg-2">
                                <p class="font-weight-bold mt-4">100 x</p>
                              </div>
                              <div class="col-lg-3 text-left">
                                <img src="../assets/images/image 129.png" height="70" width="60" />
                              </div>
                              <div class="col-lg-7">
                                <p>Gula</p>
                                <p class="font-weight-bold">Rp 5.000.000</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div style="border-top: 0.5px solid #EBEBEB;">&nbsp;</div>
                        </div>

                        <div class="col-lg-6">
                          <p class="font-weight-bold">Total Harga</p>
                        </div>
                        <div class="col-lg-6">
                          <p class="font-weight-bold fs-16 color-orange text-right">Rp 5.000.000,00</p>
                        </div>

                        <div class="col-lg-12">
                          <div class="text-right">
                            <button
                              @click="$router.push('/keranjang')"
                              class="btn btn-main"
                              style="  color: #fff;
  background-color: #00bcb8;
  border-color: #00bcb8;
  margin: auto;
  cursor: pointer;"
                            >Lihat Keranjang</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <!-- NAVBAR DROPDOWN KERANJANG END -->
                <!-- NAVBAR DROPDOWN NOTIFIKASI START -->
                <li class="dropdown checkout">
                  <a
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa" aria-hidden="true">
                      <img
                        src="../assets/images/bell-grey.png"
                        style="width: 20px"
                        title="Notifikasi"
                      />
                    </i>

                    <span id="checkout_items" class="checkout_items">9+</span>
                  </a>
                  <ul
                    class="dropdown-menu"
                    style="margin-left: -140px;"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li style="width: 300px;">
                      <div class="header-kota">
                        <div class="row">
                          <div class="col-lg-7">
                            <p class="font-weight-bold fs-16-b">Notifikasi</p>
                          </div>
                          <div class="col-lg-5">
                            <p class="color-main font-weight-bold text-right">9+ notifikasi</p>
                          </div>
                        </div>
                      </div>

                      <div class="body-notif">
                        <div class="row" style="width: 100%">
                          <div class="notif-control">
                            <div class="col-lg-12 p-notif-content notif-display">
                              <!-- <img
                                  :src="`${$store.getters.assetsPath}images/icon/ic_notif_content.png`"
                                  class="img-h-30"
                                  style="margin-right: 10px"
                              />-->
                              <p class="font-weight-bold">
                                Notif Subject
                                <br />
                                <span class="color-grey font-weight-normal fs-12">Penjelasan</span>
                                <br />
                                <span class="color-grey font-weight-normal fs-12">24 Agustus 2020</span>
                              </p>
                            </div>
                            <div class="col-lg-12">
                              <div class="only-underline-space"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="footer-kota">
                        <div class="row">
                          <div class="col-lg-12 text-right">
                            <div class="col-lg-12">
                              <div class="mb-3"></div>
                            </div>
                            <div class="text-right">
                              <button
                                class="btn btn-main"
                                style="  color: #fff;
  background-color: #00bcb8;
  border-color: #00bcb8;
  margin: auto;
  cursor: pointer;"
                              >Buka Notifikasi</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <!-- NAVBAR DROPDOWN NOTIFIKASI END -->
              </ul>
            </nav>
            <!-- NAVBAR DROPDOWN END -->
            <!-- Line --->
            <div class="css-1v8b07p ml-4 d-none d-lg-block"></div>
            <!-- Responsive -->
            <div class="activity-menu-mobile">
              <!-- NAVBAR DROPDOWN START -->
              <nav class="navbar">
                <ul class="navbar_user" style="display: inline-flex; padding: 10px 20px 10px 10px;">
                  <!-- NAVBAR DROPDOWN KERANJANG START -->
                  <li class="dropdown checkout">
                    <i class="fa" aria-hidden="true">
                      <!-- <img
                          :src="`${$store.getters.assetsPath}images/icon/ic_cart.svg`"
                          style="width: 32px"
                          title="Keranjang"
                      />-->
                    </i>
                    <!-- <i class="fas fa-shopping-cart color-grey" style="font-size: 25px"></i> -->
                    <span id="checkout_items" class="checkout_items">{{ 10 }}</span>
                  </li>
                  <!-- NAVBAR DROPDOWN NOTIFIKASI START -->
                  <li class="dropdown checkout">
                    <i class="fa" aria-hidden="true">
                      <!-- <img
                          :src="`${$store.getters.assetsPath}images/icon/ic_notif.svg`"
                          style="width: 28px"
                          title="Notifikasi"
                      />-->
                    </i>
                    <!-- <i class="fas fa-bell color-grey" style="font-size: 25px;"></i> -->

                    <span id="checkout_items" class="checkout_items">9+</span>
                  </li>
                  <!-- NAVBAR DROPDOWN SEARCH START -->
                  <li class="dropdown checkout">
                    <a @click="isShowSearch = !isShowSearch">
                      <i class="fas fa-search color-grey" style="font-size: 20px;"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <button
              id="button-main"
              class="btn btn-main-2"
              style="  color: #fff;
  background-color: #00bcb8;
  border-color: #00bcb8;
  margin: auto;
  cursor: pointer;"
            >LOGIN</button>
            &nbsp;
            <!-- <button
                  @click="() => showModal('modal-register-post-phone-number')"
                  class="btn btn-main"
            >DAFTAR</button>-->
          </div>
        </div>
        <!-- ACCOUNT USER END -->
      </div>
    </div>
    <!-- MODAL CHECK USER STATUS -->
    <!-- -->
  </div>
</template>

<script>
import search from "@/components/searchMain";

// import { stat } from 'fs';

export default {
  components: {
    search,
  },

  props: { search: String },

  data() {
    return {
      isShowSearch: false,
      popoverShow: false,
      pesananBaruCount: null,
      pengirimanCount: null,
      komplainBeliCount: null,
      komplainCount: null,
      pengirimanBeliCount: null,
      dataKomplain: null,
      belumBayarCount: null,
      data: [],
      loadData: true,
      notifCount: null,
      popoverShow2: false,
      posts: [],
      errors: [],
      countList: 0,
      cart: [],
      totalPrice: 0,
      userName: null,
      totalNotification: [],
      unreadNotif: 0,
      nik: null,
      statusJual: null,
    };
  },
};
</script>

<style>
.btn-main-2 {
  color: #fff;
  background-color: #00bcb8;
  border-color: #00bcb8;
  margin: auto;
  cursor: pointer;
}
.cart {
  position: absolute;
  top: 7em;
  right: 0.8em;
}
.ml-min100 {
  margin-left: -100px;
}
/* .popover {
  width: 100% !important;
  max-width: 800px;
} */
#my-container {
  width: 200px !important;
}
a,
a:hover {
  text-decoration: none;
}
#top-nav {
  min-height: 50px;
}
#top-nav ul {
  background-color: #ffffff;
  list-style: none;
}
#top-nav ul li {
  list-style: none;
  display: inline-block;
}
#top-nav ul li a {
  display: block;
  color: #1a1a1a;
  /* padding: 10px 20px; */
}
#top-nav ul li a:hover {
  background-color: rgb(255, 255, 255);
}
/* Dropdown */
li.dropdown {
  position: relative;
  list-style: none;
}
ul.dropdown-menu {
  position: absolute;
  margin-top: 20px;
  border-radius: 0px 0px 8px 8px;
  padding: 20px 15px 20px 15px;
}
ul.dropdown-menu li {
  display: block !important;
  /* white-space: nowrap; */
}
/* Sub Dropdown */
ul.dropdown-menu ul.dropdown-menu {
  /* left: 100%; */
  top: 50px;
  background-color: rgb(255, 255, 255) !important;
}
/* Display none by Default */
ul.dropdown-menu {
  display: none;
}
.shik-mb {
  padding-bottom: 0px !important;
}
.p-notif-content {
  padding-top: 10px;
  margin-left: 7px;
}
.new-notif {
  background-color: #e6faf9;
}
.notif-display {
  display: inline-flex;
}
.selected {
  background-color: rgb(243, 243, 243);
}
.notif-unred {
  background-color: #f1fdfc;
}
.notif-control {
  cursor: pointer;
}
.notif-control:hover {
  background-color: #f2f2f2;
  transition: all 0.3s ease;
}
.css-1v8b07p {
  width: 1.2px;
  min-width: 1.2px;
  height: 27px;
  background: rgb(224, 224, 224);
  margin: 0px 0px 0px -5px;
  margin-top: 28px;
}
.ic-log {
  width: 18px;
  margin-right: 8px;
}
.ic-log1 {
  width: 25px;
  margin-right: 5px;
}
.ml-min4 {
  margin-left: -4em;
}
.shik-w-mb {
  width: 200px;
  margin-bottom: -23px;
}
.shik-ml-t {
  margin-left: -37px;
  top: 31px;
}
.shik-db {
  display: block;
  position: absolute;
  top: 80px;
  padding: 10px;
  width: 100%;
  z-index: 200;
}
.header-user-content {
  padding-top: 25px;
}
</style>
<template>
  <section>
    <div class="container">
      <!-- -->
      <div class="row">
        <!-- MENU BELI -->
        <div class="col-lg-2 col-md-3">
          <nuxt-link to="/beli">
            <div class="card-menu-box">
              <img src="../assets/images/image 68.png" height="100px" />

              <div class="login-inner">
                <p class="fs-20">Beli</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <!-- -->
        <!-- MENU JUAL -->
        <div class="col-lg-2 col-md-3" v-if="statusBeli === 0">
          <div
            class="card-menu-box"
            @click="$bvModal.show('modal-check-user-status-is-buyer')"
            style="cursor: pointer;"
          >
            <img src="../assets/images/image 68.png" height="100px" />
            <div class="login-inner">
              <p class="fs-20">Jual</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3" v-else-if="statusJual === 0">
          <div
            class="card-menu-box"
            @click="$bvModal.show('modal-check-user-status-is-verified')"
            style="cursor: pointer;"
          >
            <img
              :src="`${$store.getters.assetsPath}images/ilustrasi/il_menu_jual.png`"
              height="100px"
            />
            <div class="login-inner">
              <p class="fs-20">Jual</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3" v-else-if="statusJual === 1">
          <nuxt-link to="/jual">
            <div class="card-menu-box">
              <img src="../assets/images/image 68.png" height="100px" />
              <div class="login-inner">
                <p class="fs-20">Jual</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-2 col-md-3" v-else>
          <div
            class="card-menu-box"
            @click="$bvModal.show('modal-check-user-status-is-seller')"
            style="cursor: pointer;"
          >
            <img src="../assets/images/image 68.png" height="100px" />
            <div class="login-inner">
              <p class="fs-20">Jual</p>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- MENU VOUCHER -->
        <div class="col-lg-2 col-md-3">
          <nuxt-link to="/voucher">
            <div class="card-menu-box">
              <img src="../assets/images/image 68.png" height="100px" />

              <div class="login-inner">
                <p class="fs-20">Voucher</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <!-- -->
        <!-- MENU PROMOSI -->
        <div class="col-lg-2 col-md-3">
          <nuxt-link to="/promosi">
            <div class="card-menu-box">
              <img src="../assets/images/image 68.png" height="100px" />

              <div class="login-inner">
                <p class="fs-20">Promo</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <!-- -->
        <!-- MENU CHAT -->
        <div class="col-lg-2 col-md-3">
          <nuxt-link to="/chat">
            <div class="card-menu-box">
              <img src="../assets/images/image 68.png" height="100px" />

              <div class="login-inner">
                <p class="fs-20">Chat</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <!-- -->
        <!-- MENU BANTUAN -->
        <div class="col-lg-2 col-md-3">
          <div class="card-menu-box">
            <img src="../assets/images/image 68.png" height="100px" />

            <div class="login-inner">
              <p class="fs-20">Bantuan</p>
            </div>
          </div>
        </div>
        <!-- -->
      </div>
    </div>
  </section>
</template>
<template>
  <footer id="footer-content" style="background: #E2F1EE;">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h4 class="font-weight-bold mb-3">PT Narindo Solusi Telekomunikasi</h4>
          <h5 class="font-weight-bold">Bussines Office</h5>
          <p class="mb-4">
            JL. Boulevard Raya
            <br />Graha Boulevard C-12
            <br />Kelapa Gading
            Jakarta Utara 14240
          </p>
        </div>
        <div class="col-lg-4">
          <!-- <div class=""> -->
          <div class="mb-4">
            <p class="fs-20-b mb-2">Info Narindo</p>
            <ul class="footer_nav">
              <li>
                <a href="http://www.narindo.com/" target="_blank">Tentang Kami</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="fs-20-b mb-2">Pusat Bantuan</p>
            <ul class="footer_nav">
              <li>
                <a href="http://www.narindo.com/" target="_blank">Tentang Kami</a>
              </li>
            </ul>
            <p class>
              <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp; info@narindo.com
            </p>
            <p class>
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;
              +6221 29450989
            </p>
            <p class="mb-4">
              <i class="fab fa-whatsapp" aria-hidden="true"></i>&nbsp;&nbsp; +62 81806500100
            </p>
          </div>
        </div>
        <div>
          <div class="col-sm-12">
            <h2>Search and add a pin</h2>
            <label>
              <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
              <button @click="addMarker">Add</button>
            </label>
            <br />
            <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>
          <br />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
    };
  },
  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style scoped>
a .color-sosmed {
  color: #000;
  font-size: 20px;
}

h2 {
  display: none;
}
</style>

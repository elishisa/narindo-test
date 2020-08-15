<template>
  <section id="main-dashboard">
    <div class="container">
      <div class="row menu-tabs">
        <div class="col-lg-12">
          <div class="under-line">
            <div class="done-control" @click="click1()">
              <a href="#" class="text-decoration">
                <span v-if="active" class="menu-under-line">
                  <strong>Overview</strong>
                </span>
                <span v-else class="menu-under-line-non">Overview</span>
              </a>
            </div>
            <div class="done-control" @click="click2()">
              <a href="#" class="text-decoration" to="/daftar-transaksi/dikirim">
                <span v-if="active2" class="menu-under-line">
                  <strong>Access</strong>
                </span>
                <span v-else class="menu-under-line-non">Access</span>
              </a>
            </div>
            <div class="done-control" @click="click3()">
              <a href="#" class="text-decoration" to="/daftar-transaksi/Networks">
                <span v-if="active3" class="menu-under-line">
                  <strong>Networks</strong>
                </span>
                <span v-else class="menu-under-line-non">Networks</span>
              </a>
            </div>
            <div class="done-control" @click="click4()">
              <a href="#" class="text-decoration" to="/daftar-transaksi/Security Group">
                <span v-if="active4" class="menu-under-line">
                  <strong>Security Group</strong>
                </span>
                <span v-else class="menu-under-line-non">Security Group</span>
              </a>
            </div>
            <div class="done-control" @click="click5()">
              <a href="#" class="text-decoration">
                <span v-if="active5" class="menu-under-line">
                  <strong>Volumes</strong>
                </span>
                <span v-else class="menu-under-line-non">Volumes</span>
              </a>
            </div>
            <div class="done-control" @click="click6()">
              <a href="#nav-profile" class="text-decoration">
                <span v-if="active6" class="menu-under-line">
                  <strong>Snapshots</strong>
                </span>
                <span v-else class="menu-under-line-non">Snapshots</span>
              </a>
            </div>
            <div class="done-control" @click="click7()">
              <a href="#nav-home" class="text-decoration">
                <span v-if="active7" class="menu-under-line">
                  <strong>Operations</strong>
                </span>
                <span v-else class="menu-under-line-non">Operations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12" style="font-size:16px; margin-bottom:20px;">
          <strong>Networks</strong>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12" style="font-size:14px; margin-bottom:20px;">
          <strong>Attach Networks</strong>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9">
          <form>
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Network 2</option>
                <option>Publik Network</option>
                <option>Network 1</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col-lg-3">
          <button type="button" class="btn btn-attach">Attach</button>
        </div>
      </div>

      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Network Name</th>
                <th scope="col">Subnet</th>
                <th scope="col">External Connection</th>
                <th scope="col">Private IP</th>
                <th scope="col">Public IP</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Public Network</th>
                <td>192.168.0.0/20</td>
                <td>Public</td>
                <td>192.168.0.13</td>
                <td>192.168.0.13</td>
                <td class="actions">
                  <img @click="isShowDownload = !isShowDownload" src />
                  <div
                    v-if="isShowDownload"
                    class="download-box download"
                    style="position: absolute;  width: 200px; right: 0px; z-index: 20;"
                  >
                    <tr>
                      <td type="button">
                        <img src /> Network
                      </td>
                    </tr>
                    <tr>
                      <td type="button" id="show-btn" @click="showModal">
                        <img src />Remove Public IP
                      </td>
                    </tr>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Network1</th>
                <td>192.168.0.0/20</td>
                <td>Public</td>
                <td>192.168.0.13</td>
                <td></td>
                <td class="actions">
                  <img @click="isShowDownload = !isShowDownload" src />
                  <div
                    v-if="isShowDownload"
                    class="download-box download"
                    style="position: absolute;  width: 200px; right: 0px; z-index: 20;"
                  >
                    <tr>
                      <td type="button">
                        <img src /> Network
                      </td>
                    </tr>
                    <tr>
                      <td type="button" id="show-btn" @click="showModal">
                        <img src />Remove Public IP
                      </td>
                    </tr>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Network Name</th>
                <th scope="col">Subnet</th>
                <th scope="col">External Connection</th>
                <th scope="col">Private IP</th>
                <th scope="col">Public IP</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Public Network</th>
                <td>192.168.0.0/20</td>
                <td>Public</td>
                <td>192.168.0.13</td>
                <td>192.168.0.13</td>
                <td class="actions">
                  <img @click="isShowDownload = !isShowDownload" src />
                  <div
                    v-if="isShowDownload"
                    class="download-box download"
                    style="position: absolute;  width: 200px; right: 0px; z-index: 20;"
                  >
                    <tr>
                      <td type="button">
                        <img src /> Network
                      </td>
                    </tr>
                    <tr>
                      <td type="button" id="show-btn" @click="showModal">
                        <img src />Remove Public IP
                      </td>
                    </tr>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Network1</th>
                <td>192.168.0.0/20</td>
                <td>Public</td>
                <td>192.168.0.13</td>
                <td></td>
                <td class="actions">
                  <img @click="isShowDownload = !isShowDownload" src />
                  <div
                    v-if="isShowDownload"
                    class="download-box download"
                    style="position: absolute;  width: 200px; right: 0px; z-index: 20;"
                  >
                    <tr>
                      <td type="button">
                        <img src /> Network
                      </td>
                    </tr>
                    <tr>
                      <td type="button" id="show-btn" @click="showModal">
                        <img src />Remove Public IP
                      </td>
                    </tr>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <b-modal ref="my-modal" hide-footer>
      <div class="d-block text-center">
        <div>
          <strong>Detach Network</strong>
        </div>
        <p>Detaching network interface with Public IP will detach network interface and permanently remove the associated Public IP. You will get no refund for your previous payment of Public IP.</p>
      </div>
      <div class="row">
        <div class="col-lg-6 text-right">
          <b-button @click="hideModal" style="background-color:#F0F4F9; color:#939EAB">Cancel</b-button>
        </div>
        <div class="col-lg-6">
          <b-button style="background-color:#01A19A; color:#354052">Detach</b-button>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,
      url: "../assets/action-green.png",
      isShowDownload: false,
    };
  },

  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    click1() {
      this.active = true;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
      this.active6 = false;
      this.active7 = false;
    },
    click2() {
      this.active = false;
      this.active2 = true;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
      this.active6 = false;
      this.active7 = false;
    },
    click3() {
      this.active = false;
      this.active2 = false;
      this.active3 = true;
      this.active4 = false;
      this.active5 = false;
      this.active6 = false;
      this.active7 = false;
    },
    click4() {
      this.active = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = true;
      this.active5 = false;
      this.active6 = false;
      this.active7 = false;
    },
    click5() {
      this.active = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = true;
      this.active6 = false;
      this.active7 = false;
    },
    click6() {
      this.active = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
      this.active6 = true;
      this.active7 = false;
    },
    click7() {
      this.active = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
      this.active6 = false;
      this.active7 = true;
    },
  },
};
</script>

<style scoped>
.btn-attach {
  background-color: #01a19a;
  color: #fff;
}
section {
  margin-left: 40px;
  margin-right: 40px;
}
tr {
  border-bottom: solid 1px #e6eaee;
}
.container {
  border: solid 1px #e6eaee;
}
.title-transaction-list {
  font-weight: bold;
  padding-bottom: 30px;
  font-size: 20px;
}
.under-line {
  border-bottom: 1px solid rgb(235, 233, 233);
  padding-bottom: 13px;
  color: #00d1c7;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
  text-align: left;
  /* cursor: pointer; */
}
.menu-margin-control {
  margin-right: -40px;
}
.menu-under-line {
  border-bottom: 3px solid #01a19a;
  font-weight: bold;
  padding: 0 15px 15px 15px;
  color: #354052;
  font-size: 16px;
}
.menu-under-line-non {
  /* border-bottom: 3px solid transparent; */
  font-weight: normal;
  padding: 0 15px 15px 15px;
  color: #6c6c6c;
  font-size: 16px;
}
.menu-under-line-non:hover {
  /* border-bottom: 1px solid black; */
  padding-bottom: 14px;
}
.done-control {
  padding-right: 0px;
  padding-left: 0px;
  display: inline-block;
}
.total-notifications {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00d1c7;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.box-transaction-list {
  border-radius: 5px;
  padding: 15px;
  width: 88%;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 5px 12px 0px rgba(201, 201, 201, 0.73);
  -moz-box-shadow: 0px 5px 12px 0px rgba(201, 201, 201, 0.73);
  box-shadow: 0px 5px 12px 0px rgba(201, 201, 201, 0.73);
}
.top-list-control {
  padding-left: 0px;
}
.order-detail {
  text-align: left;
}
.order-id {
  color: rgb(0, 188, 184);
  font-weight: bold;
}
.order-status {
  font-weight: bold;
}
.button-detail-transaction {
  border: 1px solid rgb(0, 188, 184);
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin-left: -10px;
  margin-right: 10px;
  color: rgb(0, 188, 184);
  cursor: pointer;
}
.button-detail-transaction:hover {
  border: 1px solid rgb(0, 188, 184);
  border-radius: 5px;
  background-color: rgb(0, 188, 184);
  padding: 10px;
  text-align: center;
  margin-left: -10px;
  margin-right: 10px;
  color: white;
  cursor: pointer;
}
.download a {
  color: #0000;
}
.download:hover {
  color: #ac3737;
}
.text-link-white {
  color: #000;
}
.text-link-white:hover {
  color: #000;
}
.button-detail-transaction-margin {
  margin-left: 25px;
}
.button-detail-transaction-margin:hover {
  margin-left: 25px;
}
.button-word-control {
  padding: 0px;
}
.text-decoration {
  text-decoration: none;
  color: #919191;
}
</style>

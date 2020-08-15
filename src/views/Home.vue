<template>
  <div class="home">
    <upperHeader />
    <bottomHeader />
    <Main />
    <upperFooter />
    <bottomfooter />
  </div>
</template>

<script>
// @ is an alias to /src
import upperHeader from "@/components/upperheader";
import bottomHeader from "@/components/bottomheader";
import Main from "@/components/Main";
import upperFooter from "@/components/upperfooter";
import bottomfooter from "@/components/bottomfooter";

export default {
  name: "Home",
  components: {
    upperHeader,
    bottomHeader,
    Main,
    upperFooter,
    bottomfooter,
  },
};
</script>

<template>
  <Layout v-if="user">
    <div class="flex items-center w-full pb-2 mt-12 border-b border-gray-300">
      <div class="w-full">
        <h1 class="text-2xl font-medium font-poppins">
          Welcome, <span class="gradient-text">{{ user.name }}!</span>
        </h1>
        <p>Thanks for coming to visit my portfolio. Keep going!</p>
      </div>
    </div>
    <div class="flex w-full mt-6">
      <div
        class="text-[2.5rem] font-poppins w-full h-fit gap-x-5 flex gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg">
        <div class="w-[40%]">
          <div class="pb-6 border-b border-gray-300">
            <p>Hi, there!</p>
            <p>I'm <span class="gradient-text">Slobodan Perišić.</span></p>
            <p>Frontend developer</p>
          </div>
          <div class="mt-6 text-[1rem] font-poppins">
            <p class="">
              I'm Frontend developer with 2 years professional experience.
            </p>
            <p class="my-4">
              Over the last years, I have successfuly participated in a lot of
              project coding highly functionl interace for a web, desktop, and
              mobile applications across multiple industries.
            </p>
            <p class="mt-4">Need any help?</p>
          </div>
          <div class="flex gap-x-3">
            <div class="mt-4">
              <Button name="Let's talk!"
                color="text-blue-800 border-blue-800 border hover:text-white hover:bg-blue-800 font-poppins" />
            </div>
            <div class="mt-4">
              <Button name="Download rasume"
                color="bg-blue-800 border-blue-800 border text-white hover:bg-blue-900 font-poppins" />
            </div>
          </div>
        </div>
        <div class="w-[60%] h-[500px]">
          <img class="object-cover w-full h-full" src="../assets/images/registar/developer.jpg" alt="developer" />
        </div>
      </div>
    </div>

  </Layout>
</template>
<script>
import Button from "@/components/Button";
import Layout from "@/components/Layout";

export default {
  name: "WelcomePage",
  components: {
    Button,
    Layout
  },
  data() {
    return {
      // tab: {
      //     personal: true,
      //     business: false
      // },
      user: undefined,
    };
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    // chageTab(key) {
    //     if (key === 'personal') {
    //         this.tab.personal = true;
    //         this.tab.business = false;
    //     } else if (key === 'business') {
    //         this.tab.personal = false;
    //         this.tab.business = true;
    //     }
    // },
  },
  computed: {
    fetchUser() {
      const storedUser = localStorage.getItem("user");
      return JSON.parse(storedUser);
    },
  },
  created() {
    if (this.fetchUser) {
      this.user = this.fetchUser;
    }
  },
};
</script>
<style scoped></style>

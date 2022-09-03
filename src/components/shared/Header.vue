<template>
  <div>
    <!-- top bar navigation -->
    <div class="headerbar">

      <!-- LOGO -->
      <div class="headerbar-left">
        <router-link to="/dashboard" tag="a" class="logo">
          <span>WORK</span>
        </router-link>
      </div>

      <nav class="navbar-custom">

        <ul class="list-inline float-right mb-0">
          <!-- <li class="list-inline-item dropdown notif">
                        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#"
                            aria-haspopup="false" aria-expanded="false">
                            <i class="far fa-envelope"></i>
                            <span class="notif-bullet"></span>
                        </a>

                        <div
                            class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-lg">

                            <div class="dropdown-item noti-title">
                                <h5>
                                    <small>
                                        <span class="label label-danger pull-xs-right">12</span>Mailbox</small>
                                </h5>
                            </div>

                            <a href="mail-all.html" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <b>John Doe</b>
                                    <span>New message received</span>
                                    <small class="text-muted">3 minutes ago</small>
                                </p>
                            </a>

                            <a href="mail-all.html" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <b>Michael Smith</b>
                                    <span>New message received</span>
                                    <small class="text-muted">18 minutes ago</small>
                                </p>
                            </a>

                            <a href="mail-all.html" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <b>John Lenons</b>
                                    <span>New message received</span>
                                    <small class="text-muted">Yesterday, 18:27</small>
                                </p>
                            </a>

                            <a href="mail-all.html" class="dropdown-item notify-item notify-all">
                                View All Messages
                            </a>

                        </div>

                    </li>

                    <li class="list-inline-item dropdown notif">
                        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#"
                            aria-haspopup="false" aria-expanded="false">
                            <i class="far fa-bell"></i>
                            <span class="notif-bullet"></span>
                        </a>

                        <div
                            class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-lg">
                            <div class="dropdown-item noti-title">
                                <h5>
                                    <small>
                                        <span class="label label-danger pull-xs-right">5</span>Allerts</small>
                                </h5>
                            </div>

                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon bg-faded">
                                    <img src="assets/images/avatars/avatar2.png" alt="img"
                                        class="rounded-circle img-fluid">
                                </div>
                                <p class="notify-details">
                                    <b>John Doe</b>
                                    <span>User registration</span>
                                    <small class="text-muted">3 minutes ago</small>
                                </p>
                            </a>

                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon bg-faded">
                                    <img src="assets/images/avatars/avatar3.png" alt="img"
                                        class="rounded-circle img-fluid">
                                </div>
                                <p class="notify-details">
                                    <b>Michael Cox</b>
                                    <span>Task 2 completed</span>
                                    <small class="text-muted">12 minutes ago</small>
                                </p>
                            </a>


                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon bg-faded">
                                    <img src="assets/images/avatars/avatar4.png" alt="img"
                                        class="rounded-circle img-fluid">
                                </div>
                                <p class="notify-details">
                                    <b>Michelle Dolores</b>
                                    <span>New job completed</span>
                                    <small class="text-muted">35 minutes ago</small>
                                </p>
                            </a>


                            <a href="#" class="dropdown-item notify-item notify-all">
                                View All Allerts
                            </a>

                        </div>
                    </li>


                    <li class="list-inline-item dropdown notif">
                        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#"
                            aria-haspopup="false" aria-expanded="false">
                            <i class="fas fa-cog"></i>
                        </a>

                        <div
                            class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-sm">

                            <div class="dropdown-item noti-title">
                                <h5>
                                    <small>Settings</small>
                                </h5>
                            </div>


                            <a href="#" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <i class="fas fa-cog"></i>
                                    <b>Settings 1</b>
                                </p>
                            </a>


                            <a href="#" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <i class="fas fa-cog"></i>
                                    <b>Settings 2</b>
                                </p>
                            </a>


                            <a href="#" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <i class="fas fa-cog"></i>
                                    <b>Settings 3</b>
                                </p>
                            </a>

                        </div>

                    </li> -->


          <!-- <li class="list-inline-item dropdown notif">
            <a class="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" aria-haspopup="false"
              aria-expanded="false">
              <div class="">
                {{ langControl() }}
              </div>


            </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">


              <a @click="switchLang('tr')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2000px-Flag_of_Turkey.svg.png"
                      alt="">
                  </div>
                  <div class="ml-3">
                    <span>TR</span>
                  </div>
                </div>
              </a>


              <a @click="switchLang('en')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/640px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                      alt="">
                  </div>
                  <div class="ml-3">
                    <span>EN</span>
                  </div>
                </div>
              </a>

              <a @click="switchLang('de')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" alt="">
                  </div>
                  <div class="ml-3">
                    <span>DE</span>
                  </div>
                </div>
              </a>

              <a @click="switchLang('es')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="">
                  </div>
                  <div class="ml-3">
                    <span>ES</span>
                  </div>
                </div>
              </a>

             <a @click="switchLang('ru')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/200px-Flag_of_Russia.svg.png" alt="">
                  </div>
                  <div class="ml-3">
                    <span>RU</span>
                  </div>
                </div>
              </a>

             <a @click="switchLang('ja')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" alt="">
                  </div>
                  <div class="ml-3">
                    <span>JA</span>
                  </div>
                </div>
              </a>

             <a @click="switchLang('le')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://www.bayraklar.info/data/flags/ultra/pl.png" alt="">
                  </div>
                  <div class="ml-3">
                    <span>LE</span>
                  </div>
                </div>
              </a>

             <a @click="switchLang('fr')" href="#" class="dropdown-item notify-item">
                <div class="d-flex align-items-center">
                  <div style="width: 30px;">
                    <img style="width: 100%;"
                      src="https://www.bayraklar.info/data/flags/normal/fr.png" alt="">
                  </div>
                  <div class="ml-3">
                    <span>FR</span>
                  </div>
                </div>
              </a>

            </div>
          </li> -->

        </ul>

        <ul class="list-inline menu-left mb-0 d-xs-block d-md-none">
          <li class="float-left">
            <button class="button-menu-mobile open-left">
              <i @click="sidebarSwitch(resS)" class="fas fa-bars"></i>
            </button>
          </li>
        </ul>

      </nav>

    </div>
    <!-- End Navigation -->
  </div>
</template>

<script>
export default {
  props:['resS'],
  methods: {
    langControl() {
      let lang = '';
      if (this.$i18n.locale == 'tr') {
        lang = 'TR';
      } else if (this.$i18n.locale == 'en') {
        lang = 'EN';
      } else if (this.$i18n.locale == 'de') {
        lang = 'DE';
      } else if (this.$i18n.locale == 'es') {
        lang = 'ES';
      }else if (this.$i18n.locale == 'ru') {
        lang = 'RU';
      }else if (this.$i18n.locale == 'ja') {
        lang = 'JA';
      }else if (this.$i18n.locale == 'le') {
        lang = 'LE';
      }else if (this.$i18n.locale == 'fr') {
        lang = 'FR';
      }
      return lang;
    },
    switchLang(param) {
      localStorage.setItem("lang", param)
      console.log(localStorage.getItem('lang'));
      this.$i18n.setLocale(param);
    },
    sidebarSwitch(data){
      this.resS=!data
      this.$emit('sb',this.resS)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

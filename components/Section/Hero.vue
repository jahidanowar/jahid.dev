<script lang="ts" setup></script>

<template>
  <div class="">
    <div
      class="section-hero container mx-auto flex flex-col md:flex-row justify-between items-center lg:h-screen relative w-full px-4 md:py-20 lg:py-0"
    >
      <!-- Text  -->
      <div
        class="mx-auto w-full md:w-7/12 z-20 flex flex-col gap-y-4 items-center md:items-start"
      >
        <h1 class="text-4xl lg:text-6xl text-center md:text-left font-bold">
          {{ $t("hero_title") }}
        </h1>
        <p
          class="leading-relaxed mt-6 w-11/12 lg:w-7/12 text-center md:text-left"
        >
          {{ $t("hero_description") }}
        </p>
        <div class="flex my-6 flex-wrap justify-center gap-2">
          <NuxtLink
            to="/blog/"
            class="btn btn-primary inline-flex items-center"
          >
            <span>{{ $t("hero_button_primary") }}</span>
            <Icon name="circum:bullhorn" size="20px" class="ml-2" />
          </NuxtLink>
          <NuxtLink
            to="/contact/"
            class="ml-2 btn btn-default inline-flex items-xenter"
          >
            <span>{{ $t("hero_button_secondary") }}</span>
            <Icon name="circum:video-on" size="20px" class="ml-2" />
          </NuxtLink>
        </div>
      </div>
      <!-- Video Content  -->
      <div class="w-full md:w-5/12 feature-image-box mt-5 relative">
        <div class="globe opacity-30 lg:opacity-50">
          <div
            class="globe-item globe-item__primary rounded-full absolute z-10 w-[400px] h-[400px] bg-gradient-to-tr from-primary-400 to-blue-600"
          ></div>
          <div
            class="globe-item globe-item__warning rounded-full absolute z-10 w-96 h-96 bg-gradient-to-tr from-yellow-500 to-yellow-300"
          ></div>
          <div
            class="globe-item globe-item__success rounded-full absolute z-10 w-96 h-96 bg-gradient-to-tr from-green-500 to-green-300"
          ></div>

          <div
            class="globe-item globe-item__danger rounded-full absolute z-10 w-[300px] h-[300px] bg-gradient-to-tr from-red-300 to-red-500"
          ></div>
        </div>

        <div
          class="w-full min:h-[300px] relative rounded-2xl border-8 border-white border-opacity-30 dark:border-opacity-70 dark:border-black/30 bg-white dark:bg-gray-900 backdrop-blur bg-opacity-20 dark:bg-opacity-20 shadow-2xl dark:shadow-2xl group hover:cursor-pointer mb-12"
        >
          <div class="h-full w-full relative">
            <nuxt-img
              src="/images/feature-video.webp"
              class="w-full h-full"
            ></nuxt-img>
            <div
              class="overlay absolute top-0 right-0 bottom-0 left-0 bg-gray-900 grid place-items-center text-white bg-opacity-40 group-hover:bg-opacity-80 duration-300 backdrop-blur-[0px] group-hover:backdrop-blur-[5px] z-10"
            >
              <div class="flex flex-col items-center">
                <Icon
                  name="bi:youtube"
                  size="60"
                  class="bi bi-youtube transition-all duration-300 translate-y-5 group-hover:translate-y-0"
                />
                <a
                  class="text-white -translate-y-5 scale-0 group-hover:scale-100 group-hover:-translate-y-0 transition-all duration-300"
                  >{{ $t("its_free") }} 🔥</a
                >
              </div>
            </div>
          </div>
          <div
            class="p-4 w-full bg-white dark:bg-black/50 text-center flex justify-center bg-opacity-60 z-20"
          >
            <h3>
              {{ $t("explore") + " " + $t("youtube") + " " + $t("videos") }}
            </h3>
          </div>
        </div>
      </div>
      <!-- ./ Video Content  -->
    </div>
  </div>
</template>

<style scoped>
.globe-item__primary {
  top: -15%;
  left: -10%;
}
.globe-item__success {
  left: 10%;
  bottom: -35%;
}
.globe-item__warning {
  right: -15%;
  bottom: -10%;
}
.globe-item__danger {
  right: -10%;
  top: -15%;
}

.globe-item {
  @apply blur-3xl;
}

.globe-item:nth-child(1) {
  animation: blob 5s ease infinite;
}

.globe-item:nth-child(2) {
  animation: blob 5s ease infinite 1s;
}

.globe-item:nth-child(3) {
  animation: blob 5s ease infinite 2s;
}

.globe-item:nth-child(4) {
  animation: blob 5s ease infinite 3s;
}

@keyframes blob {
  0% {
    transform: scale(1) translate(0);
  }
  33% {
    transform: scale(1.1) translate(20px, 20px);
  }
  66% {
    transform: scale(0.9) translate(-20px, -20px);
  }
  100% {
    transform: scale(1) translate(0);
  }
}
</style>

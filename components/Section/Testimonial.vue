<script setup lang="ts">
const testimonials = ref([
  {
    content:
      "Jahid took time to understand the requirements and finished before the deadline set. His task was to create a multi-lingual landing page with automatic language change based on location, and he did it successfully in a timely manner",
    name: "Hasan Alkhater",
    designation: "Co-Founder & COO, MacQueen",
    image: "/images/hasan-alkhater.jpg",
    gradient:
      "from-teal-500/30 to-teal-500/30 !text-teal-500 bg-white dark:bg-black !border-teal-500/40",
  },
  {
    content:
      "Jahid understands the requirements quite well, and implementation is praiseworthy. He puts in his mind and gives real good practical suggestions. Would surely work on more projects with him in future. Recommend that one should try out his work. I believe you would like his work",
    name: "Jaideep Hinduja",
    designation: "Director, Simext Technologies",
    image: "/images/jaideep-hinduja.jpg",
    gradient:
      "from-orange-500/20 to-red-500/20 !text-red-500/70 bg-white dark:bg-black !border-red-500/40 ",
  },
  {
    content:
      "I come to Jahid for eCommerce website development. The way of talking is super awesome, really impressive. When I saw the final work I was shocked, such a professional work at a reasonable prices. Highly recommended for any website development and designing Project.",
    name: "James Gregory",
    designation: "Head Coach - Pure Heart Muay Thai",
    image: "/images/james-gregory.jpeg",
    gradient:
      "from-purple-500/20 to-indigo-500/20 !text-indigo-500/70 bg-white dark:bg-black !border-indigo-500/40",
  },
  // {
  //   content:
  //     "I really like working with Jahid. He has a lot of experience with WordPress, is friendly and doesn't stop working until you are completely satisfied with the result.",
  //   name: "Duelen",
  //   designation: "Entrepreneur & Digital Marketer",
  //   image: "/images/duelen.jpg",
  //   gradient: "from-pink-500 to-red-500",
  // },
]);
</script>

<template>
  <div class="testimonials">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
      class="w-[320px] sm:w-[340px] lg:w-full"
    >
      <SwiperSlide
        v-for="testimonial in testimonials"
        :key="testimonial.image"
        class="dark:border-white/20 border p-10 rounded-3xl bg-gradient-to-tr"
        :class="testimonial.gradient"
      >
        <div class="testimonial-wrapper min-h-[280px] lg:py-5">
          <p class="text-base lg:text-xl">
            {{ testimonial.content }}
          </p>
          <div class="testimonial-meta flex items-center mt-8">
            <NuxtImg
              :src="testimonial.image"
              class="rounded-full w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
              width="100"
              height="100"
            />
            <div class="ml-4">
              <h4 class="text-lg font-semibold">{{ testimonial.name }}</h4>
              <p class="text-sm opacity-80 leading-tight">
                {{ testimonial.designation }}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

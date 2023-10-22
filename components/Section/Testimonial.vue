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
    image: "/images/Jaideep-Hinduja.jpg",
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
      "from-purple-500/20 to-indigo-500/20 !text-indigo-400 bg-white dark:bg-black !border-indigo-500/40",
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
  <div class="testimonials flex">
    <ClientOnly>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCards]"
        :slides-per-view="1"
        :loop="true"
        :effect="'cards'"
        class="w-[320px] sm:w-[340px] lg:w-full"
      >
        <SwiperSlide
          v-for="testimonial in testimonials"
          :key="testimonial.image"
        >
          <CardTestimonial :testimonial="testimonial" />
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>

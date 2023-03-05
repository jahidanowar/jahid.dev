<script setup lang="ts">
import { Form, Field } from "vee-validate";

const socialLinks = ref([
  {
    name: "youtube",
    link: "https://jahid.dev/go/yt",
    icon: "bi:youtube",
  },
  {
    name: "discord",
    link: "https://jahid.dev/go/d",
    icon: "bi:discord",
  },
  {
    name: "twitter",
    link: "https://jahid.dev/go/tw",
    icon: "bi:twitter",
  },
  {
    name: "github",
    link: "https://jahid.dev/go/gh",
    icon: "bi:github",
  },
]);

const schema = {
  name: {
    required: "Name is required",
  },
  email: {
    required: "Email is required",
    email: "Email is not valid",
  },
  message: {
    required: "Message is required",
  },
};

const handleSubmit = async (values: any) => {
  console.log(values);
};
</script>

<template>
  <main class="page page-contact py-24">
    <!-- Meta Tags -->
    <Head>
      <Title>Contact</Title>
      <Meta
        name="description"
        content="Discover the world of Jahid Anowar, a Full Stack Developer specializing in web apps. Contact me to bring your creative vision to life."
      />
    </Head>

    <!-- ./ Meta Tags -->

    <!-- Hero Section  -->
    <SectionPageHero
      title="Let's Get in Sync!"
      description="Say Hello and Let's Create Something Great!"
    />
    <!-- ./ Hero Section -->

    <!-- Contact Form -->
    <section class="container mx-auto">
      <div class="grid lg:grid-cols-5 gap-10">
        <div class="lg:col-span-3">
          <div
            class="card border rounded-3xl p-8 dark:bg-white/10 dark:border-white/20"
          >
            <Form
              v-slot="{ errors, isSubmitting }"
              :validation-schema="schema"
              @submit="handleSubmit"
            >
              <div class="form-group">
                <label for="subject">Interested In</label>
                <Field
                  name="subject"
                  id="subject"
                  as="select"
                  class="form-control"
                >
                  <option value="">Interested In</option>
                  <option value="Projects">Projects</option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Connect">Connect</option>
                  <option value="Other">Other</option>
                </Field>
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <Field name="name" id="name" type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <Field
                  name="description"
                  id="description"
                  as="textarea"
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </Form>
          </div>
          <div
            class="mt-10 card border rounded-3xl dark:bg-primary-500/20 dark:border-primary-500/50 text-center p-8"
          >
            <div class="text-xl">or Email me at</div>
            <a
              href="mailto:hello@jahid.dev"
              class="text-3xl font-bold block mt-2 text-primary-500"
              >hello[at]jhaid.dev</a
            >
          </div>
        </div>
        <div class="lg:col-span-2">
          <CardTestimonial
            :testimonial="{
              name: 'Duelen',
              designation: 'Software Engineer',
              image: '/images/Duelen.jpg',
              content:
                'Jahid is a great developer. He is very passionate about his work and always tries to do his best. He is very friendly and always ready to help. I am very happy to work with him.',
              gradient:
                'from-orange-500/20 to-red-500/20 !text-red-500/70 bg-white dark:bg-black !border-red-500/40 ',
            }"
            class="mb-10"
          />
          <!-- Social Media  -->
          <div
            class="border rounded-3xl p-5 dark:bg-gradient-to-r from-indigo-900/20 to-blue-900/20 dark:border-blue-900/50 bg-black/5"
          >
            <div class="text-center text-lg">
              Connect with me on Social Media
            </div>
            <div class="flex justify-around items-center mt-5 py-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.link"
                target="_blank"
                class="rounded-3xl p-5 bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 duration-300 transition-all group"
              >
                <Icon
                  :name="link.icon"
                  size="24"
                  class="group-hover:scale-90 duration-300 transition-all"
                />
              </a>
            </div>
          </div>
          <!-- ./ Social Media -->
        </div>
      </div>
    </section>
    <!-- ./ Contact Form  -->
  </main>
</template>

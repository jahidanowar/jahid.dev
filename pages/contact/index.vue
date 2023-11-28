<script setup lang="ts">
import { string } from "yup";

const { t } = useI18n();

const socialLinks = ref([
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
    name: "cal.com",
    link: "https://cal.com/jahid/15min",
    icon: "material-symbols:hangout-meeting-outline",
  },
  {
    name: "youtube",
    link: "https://jahid.dev/go/yt",
    icon: "bi:youtube",
  },
  {
    name: "github",
    link: "https://jahid.dev/go/gh",
    icon: "bi:github",
  },
]);

const isLoading = ref(false);
const isSubmitted = ref(false);

const schema = {
  name: string().required(t("validation_error.required", { field: t("name") })),
  email: string()
    .email()
    .required(t("validation_error.required", { field: t("email") })),
  message: string().required(
    t("validation_error.required", { field: t("message") })
  ),
};

const handleSubmit = async (values: any, { resetForm }: any) => {
  isLoading.value = true;
  console.log(values);

  try {
    await useFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });
    resetForm();

    isSubmitted.value = true;

    setTimeout(() => {
      isSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <main class="page page-contact py-24">
    <!-- Meta Tags -->
    <Head>
      <Title>{{ $t("contact") }}</Title>
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
      <!-- <div class="hero my-20">
        <h1>Let's Get in Sync!</h1>
        <p class="mt-2 block">Say Hello and Let's Create Something Great!</p>
      </div> -->
      <div class="max-w-2xl mx-auto">
        <div class="card">
          <Form
            :validation-schema="schema"
            v-slot="{ errors, isSubmitting }"
            @submit="handleSubmit"
          >
            <div class="grid md:grid-cols-2 md:gap-5">
              <TextFormField
                :label="$t('name')"
                name="name"
                type="text"
                :error="errors.name"
              />
              <TextFormField
                :label="$t('email')"
                name="email"
                type="email"
                :error="errors.email"
              />
            </div>

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

            <TextFormField
              name="message"
              :label="t('message')"
              type="textarea"
              as="textarea"
              rows="5"
              :error="errors.message"
            />
            <ButtonIcon
              type="submit"
              icon="heroicons:paper-airplane"
              class="btn-primary"
              :disabled="isSubmitting"
            >
              <template #icon>
                <Icon
                  :name="
                    isLoading
                      ? 'eva:loader-outline'
                      : 'heroicons:paper-airplane'
                  "
                  size="16"
                  class="ml-2"
                  :class="{
                    'animate-spin': isLoading,
                    'group-hover:translate-x-1 transition-all duration-300 ease-in-out':
                      !isLoading,
                  }"
                />
              </template>

              {{ $t("submit") }}
            </ButtonIcon>

            <!-- Success Message -->
            <div v-if="isSubmitted" class="text-center text-green-500 mt-5">
              {{ $t("contact_success_message") }}
            </div>
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
        <div
          class="mt-10 border rounded-3xl p-5 dark:bg-gradient-to-r from-indigo-900/20 to-blue-900/20 dark:border-blue-900/50 bg-black/5"
        >
          <div class="text-center text-lg">Connect with me on Social Media</div>
          <div class="flex justify-around items-center mt-5 py-3">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.link"
              target="_blank"
              class="rounded-2xl p-5 bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 duration-300 transition-all group"
            >
              <Icon
                :name="link.icon"
                size="24"
                class="group-hover:scale-90 duration-300 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- ./ Contact Form  -->
  </main>
</template>

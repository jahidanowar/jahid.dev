<script setup lang="ts">
import { string } from "yup";

const { t } = useI18n();

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

useHead({
  script: [
    {
      type: "text/javascript",
      textContent: `  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://cal.com"});
      Cal("ui", {"styles":{"branding":{"brandColor":"#0ea5e9"}},"hideEventTypeDetails":false,"layout":"month_view"});
      `,
      defer: true,
    },
  ],
});

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
        <!-- Book a free call  -->
        <div
          class="card border rounded-3xl dark:border-white/20 p-8 bg-white dark:bg-white/10"
        >
          <div class="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2>Book a free call</h2>
              <p class="mt-1">
                Let's talk about your project and how I can help you.
              </p>
            </div>

            <div>
              <ButtonIcon
                icon="system-uicons:calendar-month"
                class="btn-primary"
                data-cal-link="jahid/15min"
                data-cal-config='{"layout":"month_view"}'
              >
                Book now</ButtonIcon
              >
            </div>
          </div>
        </div>
        <!-- ./ Book a free call -->

        <hr class="my-14 dark:border-gray-800 w-11/12 mx-auto" />

        <div class="card">
          <h2 class="mb-4">Or Send a message</h2>
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
          class="mt-10 card border rounded-3xl bg-white dark:bg-primary-500/20 dark:border-primary-500/50 text-center p-8"
        >
          <div class="text-xl">or Email me at</div>
          <a
            href="mailto:hello@jahid.dev"
            class="text-3xl font-bold block mt-2 text-primary-500"
            >hello[at]jhaid.dev</a
          >
        </div>
      </div>
    </section>
    <!-- ./ Contact Form  -->
  </main>
</template>

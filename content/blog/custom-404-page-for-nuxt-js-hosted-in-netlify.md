---
title: "How to create custom 404 Page for Nuxt.js App Hosted on Netlify"
date: "2022-08-17"
image: "/images/blog/nuxt-js-custom-404-error-page-hosted-on-netlify.webp"
excerpt: "You can publish your web app with just 3 clicks. It works great for Nuxt as well but the Nuxt 404 page doesn’t work in Netlify. So let’s build one."
tags: ["nuxt", "nuxtjs", "nuxtjs 404", "netlify"]
---

Deploying the Nuxt app or any JS app with Netlify is very easy. You can publish your web app with just three clicks. It works great for Nuxt as well but the Nuxt 404 page doesn't work in Netlify. So we will see a workaround for creating a Custom 404 page for our Nuxt application.

## Why the Nuxt.js 404 page doesn't work on Netlify?

Netlify is great, it has the best UI for deploying applications.

But it has a weird feature that shows a 404 page for all unknown routes which look like this ?

![Netlify 404 page](https://res.cloudinary.com/jahiddev/images/v1623898881/netlify-404-page1/netlify-404-page1.jpg?_i=AA)

So when you request an unknown route it doesn't get to the nuxt.js. Netlify directly sends us a 404 page which i think is not that good looking or may not suits your brand identity.  
Why not create our own 404 page ?

We are nerds we don't like ready-made stuff. So let's create our own Custom 404 page.

**Creating 404 pages with Nuxt and Netlify**

Goto **layout** directory and create a page with name **error.vue**.

You can access this. error object on this page. So you can check for error codes and show different messages for different errors.

Our Page design is done now we need it to configure it.

Go to **nuxt.config.js** and add the following

```

generate: {
  fallback: true
}

```

It will create a 404 page and set the default fallback to 404.html you can read more about it here.

Most of the work is done although there is a big "gotcha" element let's face it now.

**The Caveat**

If you haven't handled the error properly, then the custom 404 page will not work on dynamic routes for example

`jahid.dev/blog/random-url-not-exists.`

To solve this issue, you can use **try{}catch(){}** block and handle the exception like this

```

async asyncData({ $axios, params, error }) {
try{
const posts = await $axios.$get('HTTP_URL')
return { PRPERTY }
}catch(){
return error({ statusCode: 404, message: 'Page not found' })
}
}

```

![](https://res.cloudinary.com/jahiddev/images/v1624340470/mic-drop/mic-drop.gif?_i=AA)  
That's it, you have successfully added a custom error page to your nuxt.js application ?

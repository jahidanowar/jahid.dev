---
title: "How to create a Vue JS Gallery Web App using Pixabay API"
date: "2020-05-16"
image: "/images/blog/vuejs-photo-gallery-web-apps-using-pixabay-api.webp"
excerpt: "How to Create VueJs Photo Gallery Web Application using Pixabay Photo API where users can search and download the image. We have used pixabay API with Axios."
tags:
  [
    "vuejs",
    "vue js",
    "vue js gallery",
    "vue js pixabay gallery",
    "vue js pixabay api",
    "vue js gallery api",
    "vue js gallery pixabay",
    "vue js gallery pixabay api",
  ]
---

If you are a Beginner in Vue JS and want to build something with your newly acquired skill then this Tutorial is for you.

_In this tutorial, I'll be Building a Simple Vue JS Gallery with Pixabay API, A simple SPA (Single Page Application) That allow the users to search image and download the image from the Pixabay API._

This is not an introduction tutorial for Vue JS or API. I assume that you have at least heard of API. If you don't know anything about API, let me explain it's not that hard

## What is an API ?

According to [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface), An API (application programming interface) is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

You didn't understand right ? let me explain

Let's suppose you have an application where you have stored your employee's data, like their name, age, salary, etc. Now let's say your friend is creating a Payment app and you want him to pay your employees as per their salaries mentioned in your database. Now You have to create an API to give access to your friend who can make a get request and get all your employee's information and pay them using his apps.

easy isn't it

now let's create the project.

## Getting Started

There are a few steps we need to take before we create Vue JS Pixabay Gallery Application, we need to create a Pixabay account and make sure we have the API Key. To create a Pixabay account and get an API key please follow the mentioned steps.

### Create Pixabay Account

1.  Go to [Pixabay.com](https://pixabay.com/)
2.  Signup or Login using your Email or Google Account
3.  Go to [Pixabay API](https://pixabay.com/service/about/api/) page
4.  Click on **Get Started**
5.  Copy Your API key in a Text file

Now we have everything needed to create a Gallery Application. It's time to start coding ? Just follow along with this tutorial.

## Step 1: Create Project Skeleton

**Step 1.1** Open Your Code Editor and Create _**index.html**_ file and paste the skeleton code

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Get High Quality Stock Photos for free</title>
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
</head>

<body>
<div id="app">
<!-- Vuetify Special Tag-- >
<v-app>
</v-app>
</div>
<!-- Vue JS library -- >
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>

<!-- Vuetify JS libarary -- >
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<!-- Axios Library for making HTTP Request -- >
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="app.js"></script>
</body>
</html>
```

In the above code, we have created a simple skeleton for our gallery web apps. Let me break it down to you. First, we have added [Vue JS library](https://vuejs.org/v2/guide/) using CDN. We have also added [Vuetify](https://vuetifyjs.com/en/) Library which is a Material Design component framework for Vue.js. It provides all the tools necessary to create beautiful content-rich applications.

Next, we have added the [Axios](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html) library which is used to make HTTP requests. After that, we have included our very own app.js file. Please make sure you created the _**app.js**_ file in the same directory.

**Step 1.2** Create or Open **_app.js_** file and add the code

```

window.onload = function(){
new Vue({
el: '#app',
vuetify: new Vuetify(),
data: {
api: 'https://pixabay.com/api/?key=YOUR_API_KEY,
images: null,
},
mounted() {

},
methods:{

},
})
}
```

In the above code, we have initialized Vue.js also we have created the required data properties 'api' and 'image'. Make sure to change the API key data property with your own API key provided by Pixabay.

## Step 2: Getting Images from Pixabay API

Let's Create a Vue JS method to Get the Images from Pixabay API.

```

getImages: function(){
axios.get(this.api)
.then(response => {
this.images = response.data.hits
})
.catch(error => (console.log(error)))
}
```

Inside getImages Method, we are making an HTTP request to pixabay API and storing the response to images data property. Now we have to call getImages() method inside mounted.

```

mounted() {
this.getImages()
}
```

## Step 3: Showing Images in Vuetify Card

Now Go back to index.html file. We will loop through the images object that we have stored in the previous step.

```

<v-container>
<v-row>
<v-col md="3" sm="6" v-for="(image, i) in images" :key="image.id">
<v-card>
<v-img :src="image.webformatURL">
</v-img>
<v-card-actions>
<v-spacer></v-spacer>
<v-btn icon @click="makeFav(i)">
<v-icon>mdi-heart</v-icon>
</v-btn>
{{image.likes}}
<v-btn icon @click="downloadWithAxios(image.largeImageURL)">
<v-icon>mdi-download</v-icon>
</v-btn>
{{image.downloads}}
<v-btn icon @click="viewImg(image.largeImageURL)">
<v-icon>mdi-eye</v-icon>
</v-btn>
{{image.views}}
</v-card-actions>
</v-card>

</v-col>
</v-row>
</v-container>
```

In the above code we have used built-in card element provided by Vuetify framework and Looping through the columns.

## Step 4: Downloading API images in Vue JS

Now let's create a Method for downloading API images.

```

forceFileDownload(response){
const url = window.URL.createObjectURL(new Blob([response.data]))
const link = document.createElement('a')
link.href = url
var rand = Math.floor(Math.random()*999)
link.setAttribute('download', 'wallpep'+rand+'.png') //or any other extension
document.body.appendChild(link)
link.click()
},

downloadWithAxios(link){
axios({
method: 'get',
url: link,
responseType: 'arraybuffer'
})
.then(response => {
this.forceFileDownload(response)
})
.catch((errror) => console.log(errror))

},
```

We are using Axios to download image from the URL.

Wow we have just completed the most crucial part of our application. ☺ Now let's add the search functionality.

## Step 4: The Search Functionality

Add another Property inside data with the name **_sText_** and make it an empty string. After adding the property your data property should look like this.

```
data: {
api: 'https://pixabay.com/api/?key=API_KEY',
images: null,
sText: '',
},
```

If your data property matches the above. Then go ahead and add the searchImage method

```

searchImage: function(e){
this.sText = e.target.value
axios.get(this.api+'&q='+this.sText)
.then(response=>{
this.images = response.data.hits
})
.catch(error=>{
console.log(error)
})

},
```

In the serachImage method, we are making an HTTP request using our sText query and Replacing our Image data property with the response of the HTTP request.

Congratulation ? the project is complete

## Let's see it in action

<iframe style="border: 0; top: 0; left: 0; width: 100%; height: 1000px;" src="https://jahidanowar.github.io/vuejs-pixabay/index.html" scrolling="" allowfullscreen="allowfullscreen"></iframe>

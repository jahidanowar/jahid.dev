---
title: "10 Laravel Packages you must use in 2022"
date: "2021-03-26"
image: "/images/blog/top-laravel-packages.webp"
excerpt: "Looking for the best Laravel Packages to use on your next application? Here’s our pick of the must have packages for your next Laravel project."
author: "Jahid Anowar"
tags: ["laravel", "laravel packages", "laravel 8", "laravel 8 packages"]
---

Looking for the best Laravel Packages to make your project more quickly and efficiently?

There are hundreds if not thousands of Laravel Packages that you can choose from. This makes it extremely overwhelming for newbie developers to find the right package for their needs.

Being in Laravel development since 2016, I have used a lot of packages along the way and gained a little bit of knowledge to choose a good package for specific tasks.  
Ever wonder which package gets used the most? Wonder no more – I did the math! Below, you’ll find the data-backed list

## 10 Laravel Packages that I use frequently

_Note: these are the packages that I use on daily basis._

### 1. Laravel Jetstream

Jetstream is a Laravel starter kit that comes with inbuilt authentication scaffolding. It uses tailwind CSS for design and Livewire for interactivity It also uses Fortify for authentication.  
So if you need a handy Authentication scaffolding with extra features such as Team, Two-factor authentication then Jetstream is the way to go.

### 2. Laravel Breeze

Jetstream comes with loads of overwhelming features that you might not need all the time. If you are looking for a package that comes with simple authentication scaffolding then Breze is the perfect package for you. It doesn't depend on Livewire or any other javascript framework, It gives you a clean and simple authentication feature just like Laravel UI.

### 3. Laravel-permission by Spatie

Most of the time when you are building a web application you also create an admin panel so that the client can manage some basic functionalities by themselves. Here comes the multi-tenancy feature that we have to implement. Well, we can implement it by ourselves but if you a beginner and looking for a scalable method to implement multi-tenancy then I would recommend Spatie's Laravel-Permission Package. This package allows you to manage user permissions and roles in a database. With this package, every permission will be stored as Gaurd that you can use in your blade file something this.

```

@can('create user')
...
@endcan

```

### 4. Laravel Sanctum

So far we have seen packages for auth scaffolding, permission but what if you are creating an API how would you like to implement the authentication in a stateless manner? Here comes our next package Laravel Sanctum.

Laravel Sanctum provides a featherweight authentication system for SPAs (single page applications), mobile applications, and simple, token-based APIs.

### 5. Laravel Medialibrary by Spatie

This package allows us to Associate files with Eloquent models. It provides a simple, fluent API to work with. If you are up to creating a CMS or CMS-like web application in Laravel then this package might save a lot of your time.

### 6. Laravel Debugbar

The Laravel Debugbar by Barry vd. Heuvel is a package that allows you to quickly and easily keep tabs on your application during development. With a simple installation and powerful features, the Debugbar package is one of the cornerstone packages for Laravel.

It allows you to monitor and debug all the requests directly on the Laravel view. Not only that you can also monitor SQL queries, Mail, and queue. In short, it's a must-have tool for debugging.

### 7. Socialite

Have you ever implemented authentication with Facebook, Google, Github?? if yes then you know the pain of getting it working. Don't worry Laravel Socialite is on rescue. This package allows you to implement authentication with Facebook, Twitter, LinkedIn, Google, GitHub, GitLab, and Bitbucket? (Holy smokes what else do you need?)

### 8. Bagisto

Bagisto is an open-source Laravel eCommerce package that has gained a lot of popularity among the Laravel community, It offers user management, multi-warehouse inventory management options, and much more.

The package is bundled with built-in user-friendly admin panel navigation, offers functionalities like Multi-Currency, Localization, Access Control Level, Multi-Channel, Payment integration, and much more.

### 9. Laravel Meta Manager

If you are looking for a proper way to manage the SEO of your Laravel application then Laravel Meta Manager is the best package and it can handle all of your on-page SEO tasks. It suggests you recommended meta tags which help to get a better ranking on SERP.

### 10. Laravel AdminLTE

Creating a dashboard would not have been so so easy without Laravel adminLTE.

AdminLte is an open-source bootstrap dashboard template that has lots of prebuilt components such as Login, Registration form, Chart, Graph, etc these components are responsive, reusable, and commonly used components.

The best thing about Laravel AdminLte package is that it doesn't depend on any other dependency other than Laravel core so you can start building your admin panel immediately. The package provides a blade template that you can extend and advanced menu configuration possibilities.

**Foot Note**

We, developers, always like to create all things on our own. it's a good thing but as they say "never do what is already done" well nobody actually said that I just made it up myself? the point is if you need, you can use these packages you are not a bad developer if you use packages rather you value your time that's it?

_Last Updated: 21/02/2022_

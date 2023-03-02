---
title: "How to update Laravel installer to 4.x or Up"
date: "2020-10-23"
image: "/images/blog/laravel-installer-update-1.webp"
excerpt: "Laravel 8 comes with a lot of cool new features. In order to use full Laravel magic (CLI Installer). In this tutorial, we will see the 3 easiest methods to update laravel installer to the Latest Version."
author: "Jahid Anowar"
tags: ["laravel", "laravel 8", "laravel 8 installer", "laravel installer"]
---

Today Laravel announced that they would shut down the old Laravel installer. That means the old installer will no longer do the magic of scaffolding your Laravel project. From now on, you have to use the new installer to start your next Laravel project.

<blockquote class="twitter-tweet mt-2">
<p dir="ltr" lang="en">⚠️ Reminder: we will be shutting down the old Laravel Installer servers at the end of the month. Please make sure your "laravel/installer" package that is globally installed on your machine is at version 4.0 or greater. ⚠️</p>
— Laravel (@laravelphp) <a href="https://twitter.com/laravelphp/status/1319362549217959936?ref_src=twsrc%5Etfw">October 22, 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So if you want to install Laravel with the friendly well-known `laravel new.` command, you need to update the old Laravel installer to a new version (4.0). That's our topic for today.

## What is Laravel Installer?

Laravel installer is a CLI tool that allows you to start your Laravel project with ease. To create a Laravel project, you just need to run the following command  
`Laravel new`

Fantastic tool, isn't it?

Now let's update the installer and make your day easier.  
Updating the Laravel installer is not as easy as installing it from scratch. It requires a little bit of extra attention. I will demonstrate two methods to do the same.

_But before that check your Laravel installer version by using `laravel --version` command._

If the the version is below 4.0 follow this tutorial otherwise we don't need to worry.

## Method 1: Composer global update

The easiest method to Update the Laravel installer package is to update it globally.

To update it, run the following command

```
composer global update laravel/installer
```

## Method 2: Uninstall and Reinstall

If the first method is not working for you you might uninstall the package and reinstall it that's what exactly we will do in this method.

First, uninstall the Laravel Installer package using the following command.

```
composer global remove laravel/installer
```

Now, Reinstall the package using the following command.

```
composer global require laravel/installer
```

That's it easy isn't it. Now you can continue creating your awesome Laravel project without worrying.?

Happy Coding 👋

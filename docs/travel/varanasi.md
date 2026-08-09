---
layout: page
title: Varanasi Travel Guide — Must & Optional Places
description: A map-first Varanasi guide with must-visit ghats, temples, Sarnath, and optional stops from a real trip — tips, timing, and Google Maps links.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('varanasi')
</script>

<CityGuide :city="city" />

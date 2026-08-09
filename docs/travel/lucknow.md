---
layout: page
title: Lucknow Travel Guide — Must & Optional Places
description: Nawabi Lucknow guide — Imambara, Residency, Hazratganj, and food stops with must vs optional.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('lucknow')
</script>

<CityGuide :city="city" />

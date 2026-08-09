---
layout: page
title: Amritsar Travel Guide — Must & Optional Places
description: Golden Temple, langar, Wagah Border, and Amritsar old-city stops with a map.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('amritsar')
</script>

<CityGuide :city="city" />

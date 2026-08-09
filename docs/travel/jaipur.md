---
layout: page
title: Jaipur Travel Guide — Must & Optional Places
description: Pink City forts, bazaars, and golden-hour views — must-visits and optional stops with a map.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('jaipur')
</script>

<CityGuide :city="city" />

---
layout: page
title: Nainital Travel Guide — Must & Optional Places
description: Nainital lake guide — ridge viewpoints, temple, mall road, and optional hill stops.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('nainital')
</script>

<CityGuide :city="city" />

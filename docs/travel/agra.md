---
layout: page
title: Agra Travel Guide — Must & Optional Places
description: Taj Mahal sunrise, Agra Fort, Mehtab Bagh, and nearby optional heritage stops with a map.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('agra')
</script>

<CityGuide :city="city" />

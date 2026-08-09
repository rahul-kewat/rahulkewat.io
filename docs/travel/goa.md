---
layout: page
title: Goa Travel Guide — Must & Optional Places
description: Goa coast guide — beaches, Old Goa churches, Fontainhas, and optional North Goa stops.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('goa')
</script>

<CityGuide :city="city" />

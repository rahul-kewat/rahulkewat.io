---
layout: page
title: Vrindavan Travel Guide — Must & Optional Places
description: Vrindavan temple guide — Banke Bihari, Prem Mandir, ISKCON, and quieter optional stops.
sidebar: false
aside: false
---

<script setup>
import { getCity } from '../.vitepress/theme/data/travel/cities.js'
const city = getCity('vrindavan')
</script>

<CityGuide :city="city" />

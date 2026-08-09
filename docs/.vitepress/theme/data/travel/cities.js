/**
 * Travel destinations — edit this file to add cities / places.
 * Each place needs: id, name, tier ('must' | 'optional'), lat, lng, blurb.
 * Optional: tip, bestTime, mapsUrl, image, gallery
 * City optional: accent, category, featured, mark (short label on cards)
 */

import { enrichPlace } from './placeMedia.js';

const wash = (hex) =>
  `radial-gradient(ellipse 80% 60% at 18% 8%, color-mix(in srgb, ${hex} 32%, transparent), transparent 55%), radial-gradient(ellipse 70% 50% at 92% 78%, color-mix(in srgb, var(--rk-accent) 14%, transparent), transparent 50%)`;

export const cities = [
  {
    slug: 'varanasi',
    name: 'Varanasi',
    region: 'Uttar Pradesh',
    category: 'Spiritual',
    mark: 'Ganga',
    featured: true,
    accent: '#c45c26',
    tagline: 'Ghats, aarti, and the oldest living city energy.',
    summary:
      'A walking-first city. Prioritize the river corridor at dawn and dusk, then branch out to Sarnath and the markets when you have spare hours.',
    vibe: 'Spiritual · Walkable · Early mornings',
    days: '2–3 days',
    season: 'Oct–Mar',
    center: [25.308, 83.01],
    zoom: 13,
    coverGradient: wash('#c45c26'),
    places: [
      { id: 'kashi-vishwanath', name: 'Kashi Vishwanath Temple', tier: 'must', lat: 25.31085, lng: 83.01067, blurb: 'The spiritual heart of the city. Go early, travel light, and expect queues.', tip: 'Keep phones and leather out of the inner complex. Morning darshan is calmer.', bestTime: '5:30–8:00 AM' },
      { id: 'dashashwamedh', name: 'Dashashwamedh Ghat & Ganga Aarti', tier: 'must', lat: 25.3069, lng: 83.0106, blurb: 'The main evening aarti — loud, crowded, unforgettable. Arrive early for a ghat seat.', tip: 'Book a small boat 30–45 min before aarti.', bestTime: 'Sunset aarti' },
      { id: 'assi-ghat', name: 'Assi Ghat', tier: 'must', lat: 25.2884, lng: 83.0065, blurb: 'Quieter southern ghat. Perfect for sunrise chai, journaling, or a slow walk.', tip: 'Sunrise here beats the chaos of the central ghats.', bestTime: 'Sunrise' },
      { id: 'sarnath', name: 'Sarnath', tier: 'must', lat: 25.3809, lng: 83.0214, blurb: 'Where Buddha gave his first sermon. Dhamek Stupa + museum make a half-day trip.', tip: 'Museums may close for lunch — plan around that.', bestTime: 'Morning' },
      { id: 'manikarnika', name: 'Manikarnika Ghat', tier: 'optional', lat: 25.3107, lng: 83.0124, blurb: 'The famous cremation ghat. Powerful and sensitive — observe quietly from a distance.', tip: 'No photos of the pyres.', bestTime: 'Daytime' },
      { id: 'godowlia', name: 'Godowlia Market', tier: 'optional', lat: 25.3095, lng: 83.0075, blurb: 'Silk, brass, Banarasi sweets, and lane after lane of street food.', tip: 'Try kachori-sabzi for breakfast nearby.', bestTime: 'Late afternoon' },
      { id: 'bhu', name: 'Banaras Hindu University', tier: 'optional', lat: 25.2677, lng: 82.9913, blurb: 'Huge leafy campus and the New Vishwanath Temple — a calmer counterpoint to the old city.', tip: 'Rent a cycle; the campus is vast.', bestTime: 'Late morning' },
      { id: 'ramnagar', name: 'Ramnagar Fort', tier: 'optional', lat: 25.2695, lng: 83.0267, blurb: 'Across the river — museum, river views, and a slower pace than the west bank.', tip: 'Prefer a boat crossing when possible.', bestTime: 'Afternoon' },
      { id: 'blue-lassi', name: 'Blue Lassi Shop', tier: 'optional', lat: 25.3102, lng: 83.0098, blurb: 'Tiny famous stall near the Vishwanath corridor. Thick lassi, ceramic bowls, long queue.', tip: 'Go between temple rushes.', bestTime: 'Mid-morning' },
    ],
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    category: 'Heritage',
    mark: 'Pink City',
    featured: true,
    accent: '#b85c38',
    tagline: 'Forts on ridges, bazaars below, and pink walls that glow at dusk.',
    summary:
      'Do the fort triangle early, wander the old city on foot in the afternoon, and leave one evening for a rooftop view over the bazaars.',
    vibe: 'Heritage · Bazaars · Golden hour',
    days: '2–3 days',
    season: 'Oct–Mar',
    center: [26.9124, 75.7873],
    zoom: 12,
    coverGradient: wash('#b85c38'),
    places: [
      { id: 'amer-fort', name: 'Amer Fort', tier: 'must', lat: 26.9855, lng: 75.8513, blurb: 'The headline fort — courtyards, mirror palace, and ridge views over Maota Lake.', tip: 'Enter early to beat tour buses; skip the elephant ride.', bestTime: '8–10 AM' },
      { id: 'city-palace', name: 'City Palace', tier: 'must', lat: 26.9258, lng: 75.8236, blurb: 'Still partly a royal residence. Museums, courtyards, and the heart of the old city.', tip: 'Combine with Jantar Mantar next door.', bestTime: 'Late morning' },
      { id: 'hawa-mahal', name: 'Hawa Mahal', tier: 'must', lat: 26.9239, lng: 75.8267, blurb: 'The honeycomb facade. Best photographed from the street — go inside only if you have time.', tip: 'Morning light on the east face is cleanest.', bestTime: 'Morning' },
      { id: 'jantar-mantar', name: 'Jantar Mantar', tier: 'must', lat: 26.9247, lng: 75.8246, blurb: 'Giant astronomical instruments that still feel like science fiction.', tip: 'Get a short guided explanation — the dials make more sense.', bestTime: 'Daytime' },
      { id: 'nahargarh', name: 'Nahargarh Fort', tier: 'optional', lat: 26.9369, lng: 75.8155, blurb: 'Sunset fort above the city — wide views, quieter than Amer.', tip: 'Stay for golden hour; cafes fill up fast.', bestTime: 'Sunset' },
      { id: 'jal-mahal', name: 'Jal Mahal', tier: 'optional', lat: 26.9539, lng: 75.8462, blurb: 'Palace in the lake — mostly a photo stop from the shore.', tip: 'Pair with Amer on the same half-day.', bestTime: 'Afternoon' },
      { id: 'bapu-bazaar', name: 'Bapu Bazaar', tier: 'optional', lat: 26.9165, lng: 75.8198, blurb: 'Textiles, jootis, lac bangles — classic Jaipur shopping lanes.', tip: 'Bargain with a smile; evenings are livelier.', bestTime: 'Evening' },
      { id: 'albert-hall', name: 'Albert Hall Museum', tier: 'optional', lat: 26.9116, lng: 75.8195, blurb: 'Indo-Saracenic museum with a lit-up facade after dark.', tip: 'Nice cool-down stop mid-heat.', bestTime: 'Late afternoon' },
    ],
  },
  {
    slug: 'agra',
    name: 'Agra',
    region: 'Uttar Pradesh',
    category: 'Heritage',
    mark: 'Taj',
    featured: true,
    accent: '#8b7355',
    tagline: 'One monument everyone knows — and a few you should not skip.',
    summary:
      'Sunrise at the Taj is worth the alarm. Keep the rest of the day for Agra Fort and a quieter Mehtab Bagh view across the river.',
    vibe: 'Monumental · Sunrise · Short trip',
    days: '1–2 days',
    season: 'Oct–Mar',
    center: [27.1767, 78.0081],
    zoom: 12,
    coverGradient: wash('#8b7355'),
    places: [
      { id: 'taj-mahal', name: 'Taj Mahal', tier: 'must', lat: 27.1751, lng: 78.0421, blurb: 'Go at opening. Soft light, thinner crowds, and the marble actually glows.', tip: 'Buy tickets online; no large bags inside.', bestTime: 'Sunrise' },
      { id: 'agra-fort', name: 'Agra Fort', tier: 'must', lat: 27.1795, lng: 78.0211, blurb: 'Red sandstone fortress with palace courts and distant Taj views.', tip: 'Do this after the Taj while energy is still high.', bestTime: 'Morning' },
      { id: 'mehtab-bagh', name: 'Mehtab Bagh', tier: 'must', lat: 27.179, lng: 78.0428, blurb: 'Opposite bank garden — the classic sunset silhouette of the Taj.', tip: 'Carry water; shade is limited.', bestTime: 'Sunset' },
      { id: 'itimad-ud-daulah', name: "Itimad-ud-Daulah (Baby Taj)", tier: 'optional', lat: 27.1928, lng: 78.031, blurb: 'Delicate marble tomb that previewed the Taj’s craftsmanship.', tip: 'Quieter and underrated — good midday stop.', bestTime: 'Midday' },
      { id: 'fatehpur-sikri', name: 'Fatehpur Sikri', tier: 'optional', lat: 27.0945, lng: 77.66, blurb: 'Abandoned Mughal capital ~40 km away — worth it if you have a full second day.', tip: 'Hire a driver for the half-day loop.', bestTime: 'Morning' },
      { id: 'akbar-tomb', name: "Akbar's Tomb, Sikandra", tier: 'optional', lat: 27.2205, lng: 77.9505, blurb: 'Grand gateway and garden tomb on the Delhi–Agra corridor.', tip: 'Easy stop if you’re driving in or out.', bestTime: 'Afternoon' },
    ],
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    region: 'Uttar Pradesh',
    category: 'Heritage',
    mark: 'Awadh',
    accent: '#6b4f3a',
    tagline: 'Nawabi arches, slow kebabs, and a city that still dresses for evenings.',
    summary:
      'Pair heritage mornings (Imambara, Residency) with a serious food evening. Lucknow rewards wandering more than rushing.',
    vibe: 'Nawabi · Food · Soft evenings',
    days: '2 days',
    season: 'Oct–Mar',
    center: [26.8467, 80.9462],
    zoom: 12,
    coverGradient: wash('#6b4f3a'),
    places: [
      { id: 'bara-imambara', name: 'Bara Imambara', tier: 'must', lat: 26.869, lng: 80.9128, blurb: 'The labyrinth (bhulbhulaiya) and grand hall — Lucknow’s signature monument.', tip: 'Hire the local guide for the maze; it’s worth it.', bestTime: 'Morning' },
      { id: 'rumi-darwaza', name: 'Rumi Darwaza', tier: 'must', lat: 26.8705, lng: 80.912, blurb: 'Towering gateway next to the Imambara complex — best as a photo stop.', tip: 'Shoot from a little distance for the full arch.', bestTime: 'Morning' },
      { id: 'residency', name: 'The Residency', tier: 'must', lat: 26.844, lng: 80.943, blurb: 'Ruined British residency from 1857 — atmospheric and heavy with history.', tip: 'Go with context; the museum helps.', bestTime: 'Late morning' },
      { id: 'hazratganj', name: 'Hazratganj', tier: 'optional', lat: 26.851, lng: 80.942, blurb: 'Colonial-era shopping spine — cafes, bookstores, evening stroll energy.', tip: 'Best after 5 PM when the lights come on.', bestTime: 'Evening' },
      { id: 'chota-imambara', name: 'Chota Imambara', tier: 'optional', lat: 26.8735, lng: 80.9055, blurb: 'Ornate smaller imambara with chandeliers and quiet courtyards.', tip: 'Combine with Bara Imambara in one cluster.', bestTime: 'Afternoon' },
      { id: 'tunday', name: 'Tunday Kababi (Aminabad)', tier: 'optional', lat: 26.846, lng: 80.922, blurb: 'The melt-in-mouth galawati kebab stop everyone argues about.', tip: 'Go hungry; share plates.', bestTime: 'Lunch / dinner' },
      { id: 'ambedkar-park', name: 'Ambedkar Memorial Park', tier: 'optional', lat: 26.822, lng: 80.982, blurb: 'Vast sandstone memorial complex — dramatic at dusk.', tip: 'More architecture than “park.”', bestTime: 'Evening' },
    ],
  },
  {
    slug: 'vrindavan',
    name: 'Vrindavan',
    region: 'Uttar Pradesh',
    category: 'Spiritual',
    mark: 'Krishna',
    accent: '#c45a7a',
    tagline: 'Temple bells, narrow lanes, and devotion that never really sleeps.',
    summary:
      'Compact and intense. Hit the main temples early, leave space for evening aarti, and expect crowds around festivals.',
    vibe: 'Devotional · Compact · Evening aarti',
    days: '1–2 days',
    season: 'Oct–Mar',
    center: [27.565, 77.659],
    zoom: 14,
    coverGradient: wash('#c45a7a'),
    places: [
      { id: 'banke-bihari', name: 'Banke Bihari Temple', tier: 'must', lat: 27.5805, lng: 77.695, blurb: 'The beating heart of Vrindavan devotion — crowded, emotional, unforgettable.', tip: 'No phones inside; go early or late evening.', bestTime: 'Early morning' },
      { id: 'prem-mandir', name: 'Prem Mandir', tier: 'must', lat: 27.572, lng: 77.673, blurb: 'White marble temple that lights up beautifully after dark.', tip: 'Stay for the evening illumination.', bestTime: 'Evening' },
      { id: 'iskcon', name: 'ISKCON Vrindavan', tier: 'must', lat: 27.5728, lng: 77.6785, blurb: 'Calm campus, clean darshan, and a gentler pace than the old lanes.', tip: 'Good reset between crowded temples.', bestTime: 'Morning' },
      { id: 'yamuna-ghat', name: 'Keshi Ghat', tier: 'optional', lat: 27.5845, lng: 77.7005, blurb: 'Yamuna-side aarti and boat light — softer than Varanasi, still moving.', tip: 'Evening aarti is the moment.', bestTime: 'Sunset' },
      { id: 'nidhivan', name: 'Nidhivan', tier: 'optional', lat: 27.5838, lng: 77.6942, blurb: 'Sacred grove wrapped in legend — quiet, eerie, respectful energy.', tip: 'No loud talking; follow local rules.', bestTime: 'Late afternoon' },
      { id: 'radha-raman', name: 'Radha Raman Temple', tier: 'optional', lat: 27.583, lng: 77.6965, blurb: 'Older, intimate temple — less spectacle, more atmosphere.', tip: 'Ask locals for the quieter darshan windows.', bestTime: 'Morning' },
    ],
  },
  {
    slug: 'amritsar',
    name: 'Amritsar',
    region: 'Punjab',
    category: 'Spiritual',
    mark: 'Golden',
    featured: true,
    accent: '#c9a227',
    tagline: 'Golden light on water, langar that humbles you, and border theatre at night.',
    summary:
      'The Golden Temple deserves sunrise and night. Fit Wagah if you like spectacle, and leave stomach space for old-city food.',
    vibe: 'Sacred · Generous · Night lights',
    days: '2 days',
    season: 'Oct–Mar',
    center: [31.634, 74.8723],
    zoom: 13,
    coverGradient: wash('#c9a227'),
    places: [
      { id: 'golden-temple', name: 'Golden Temple (Harmandir Sahib)', tier: 'must', lat: 31.62, lng: 74.8765, blurb: 'Go twice — once at dawn, once after dark. Cover your head; wash your feet.', tip: 'Sit by the sarovar and just watch for a while.', bestTime: 'Dawn & night' },
      { id: 'langar', name: 'Guru ka Langar', tier: 'must', lat: 31.6205, lng: 74.8768, blurb: 'Community kitchen that feeds thousands daily — participate respectfully.', tip: 'Help serve if invited; it’s part of the experience.', bestTime: 'Any meal' },
      { id: 'wagah', name: 'Wagah Border Ceremony', tier: 'must', lat: 31.6046, lng: 74.573, blurb: 'High-energy flag ceremony at the India–Pakistan border.', tip: 'Arrive early for seats; expect loud crowds.', bestTime: 'Before sunset' },
      { id: 'jallianwala', name: 'Jallianwala Bagh', tier: 'optional', lat: 31.6206, lng: 74.8801, blurb: 'Memorial garden next to the Golden Temple — sobering and necessary.', tip: 'Go quietly; read the plaques.', bestTime: 'Morning' },
      { id: 'partition-museum', name: 'Partition Museum', tier: 'optional', lat: 31.6255, lng: 74.8788, blurb: 'Well-curated museum on 1947 — heavy, excellent, worth 90 minutes.', tip: 'Do this when you’re mentally fresh.', bestTime: 'Afternoon' },
      { id: 'hall-bazaar', name: 'Hall Bazaar & old city food', tier: 'optional', lat: 31.6315, lng: 74.876, blurb: 'Kulcha, lassi, papad — Amritsar eats best in the lanes.', tip: 'Ask locals for current favourite kulcha shops.', bestTime: 'Lunch' },
    ],
  },
  {
    slug: 'nainital',
    name: 'Nainital',
    region: 'Uttarakhand',
    category: 'Hills',
    mark: 'Lake',
    accent: '#3d6b5a',
    tagline: 'A lake in a bowl of hills — boat rides, ridges, and cold morning air.',
    summary:
      'Base yourself near the mall road, do a ridge viewpoint at sunrise, and keep one half-day for a quieter lake or forest escape nearby.',
    vibe: 'Hills · Lake · Slow mornings',
    days: '2–3 days',
    season: 'Mar–Jun · Sep–Nov',
    center: [29.3803, 79.4636],
    zoom: 13,
    coverGradient: wash('#3d6b5a'),
    places: [
      { id: 'naini-lake', name: 'Naini Lake', tier: 'must', lat: 29.3803, lng: 79.4636, blurb: 'The town’s reason for existing. Boat at dusk when the hills soften.', tip: 'Weekdays are calmer than weekends.', bestTime: 'Evening' },
      { id: 'naina-devi', name: 'Naina Devi Temple', tier: 'must', lat: 29.3925, lng: 79.4575, blurb: 'Temple at the north end of the lake — short climb, big views.', tip: 'Combine with a lakeside walk.', bestTime: 'Morning' },
      { id: 'snow-view', name: 'Snow View Point', tier: 'must', lat: 29.402, lng: 79.448, blurb: 'Cable car / ridge viewpoint — Himalayan glimpses on clear days.', tip: 'Go early for clearer skies.', bestTime: 'Morning' },
      { id: 'tiffin-top', name: 'Tiffin Top (Dorothy’s Seat)', tier: 'optional', lat: 29.3705, lng: 79.435, blurb: 'Quiet hill viewpoint with picnic energy.', tip: 'Nice walk if weather is kind.', bestTime: 'Late morning' },
      { id: 'eco-cave', name: 'Eco Cave Gardens', tier: 'optional', lat: 29.376, lng: 79.455, blurb: 'Short nature stop with caves — good with kids or a spare hour.', tip: 'Don’t make it your main plan.', bestTime: 'Afternoon' },
      { id: 'mall-road', name: 'Mall Road', tier: 'optional', lat: 29.3915, lng: 79.4545, blurb: 'Stroll, snacks, shops — classic hill-station evening loop.', tip: 'Best after a viewpoint morning.', bestTime: 'Evening' },
    ],
  },
  {
    slug: 'kedarnath',
    name: 'Kedarnath',
    region: 'Uttarakhand',
    category: 'Spiritual',
    mark: 'Himalaya',
    accent: '#4a6fa5',
    tagline: 'A hard walk, thin air, and a temple that feels earned.',
    summary:
      'This is a pilgrimage, not a casual sightseeing day. Plan fitness, weather buffers, and respect for local rules — the temple is the destination.',
    vibe: 'Pilgrimage · Trek · High altitude',
    days: '2–3 days',
    season: 'May–Jun · Sep–Oct',
    center: [30.7352, 79.0669],
    zoom: 13,
    coverGradient: wash('#4a6fa5'),
    places: [
      { id: 'kedarnath-temple', name: 'Kedarnath Temple', tier: 'must', lat: 30.7352, lng: 79.0669, blurb: 'One of the Char Dham — stone, snow peaks, and a silence that hits after the climb.', tip: 'Check opening season and weather alerts before you go.', bestTime: 'Morning darshan' },
      { id: 'gau-mukh-path', name: 'Trek route (Gaurikund → Kedarnath)', tier: 'must', lat: 30.653, lng: 79.027, blurb: 'The journey is half the point — steep, scenic, demanding.', tip: 'Start early; carry layers and rain protection.', bestTime: 'Dawn start' },
      { id: 'bhairavnath', name: 'Bhairavnath Temple', tier: 'must', lat: 30.7385, lng: 79.0695, blurb: 'Short climb above Kedarnath with wider valley views.', tip: 'Do it after settling, not exhausted from arrival.', bestTime: 'Afternoon' },
      { id: 'gandhi-sarovar', name: 'Gandhi Sarovar', tier: 'optional', lat: 30.747, lng: 79.075, blurb: 'Glacial lake hike above town — only if weather and energy allow.', tip: 'Hire a local guide if snow/ice is present.', bestTime: 'Morning' },
      { id: 'gaurikund', name: 'Gaurikund', tier: 'optional', lat: 30.6532, lng: 79.0268, blurb: 'Base town with hot springs — start and end point energy.', tip: 'Acclimatise and pack light for the trek.', bestTime: 'Day before trek' },
      { id: 'sonprayag', name: 'Sonprayag', tier: 'optional', lat: 30.6345, lng: 78.995, blurb: 'Roadhead / Mandakini confluence area before Gaurikund.', tip: 'Expect vehicle restrictions in peak season.', bestTime: 'Transit day' },
    ],
  },
  {
    slug: 'goa',
    name: 'Goa',
    region: 'Goa',
    category: 'Beach',
    mark: 'Coast',
    featured: true,
    accent: '#2f6f6a',
    tagline: 'Salt air, slow mornings, and a coast that changes every 20 minutes.',
    summary:
      'Pick a base (North for buzz, South for quiet). Beach time first; churches and spice country as half-day add-ons.',
    vibe: 'Beach · Easy · Late breakfasts',
    days: '3–5 days',
    season: 'Nov–Mar',
    center: [15.4909, 73.8278],
    zoom: 10,
    coverGradient: wash('#2f6f6a'),
    places: [
      { id: 'palolem', name: 'Palolem Beach', tier: 'must', lat: 15.0101, lng: 74.0232, blurb: 'Crescent bay in the south — calmer water, sunset silhouettes.', tip: 'Stay nearby if you want quiet nights.', bestTime: 'Sunset' },
      { id: 'basilica', name: 'Basilica of Bom Jesus', tier: 'must', lat: 15.5009, lng: 73.9116, blurb: 'Old Goa’s UNESCO church — humid, historic, essential once.', tip: 'Combine with Sé Cathedral next door.', bestTime: 'Morning' },
      { id: 'fontainhas', name: 'Fontainhas (Panaji)', tier: 'must', lat: 15.498, lng: 73.826, blurb: 'Latin Quarter lanes — colour-washed houses and café corners.', tip: 'Best on foot in soft morning light.', bestTime: 'Morning' },
      { id: 'anjuna', name: 'Anjuna / Vagator cliffs', tier: 'optional', lat: 15.587, lng: 73.743, blurb: 'North Goa cliff views and flea-market energy.', tip: 'Sunset from the cliffs beats mid-day beach crowds.', bestTime: 'Evening' },
      { id: 'spice-farm', name: 'Spice plantation (Ponda belt)', tier: 'optional', lat: 15.402, lng: 74.012, blurb: 'Guided plantation walk + Goan lunch — touristy but pleasant.', tip: 'Book a morning slot; afternoons are hotter.', bestTime: 'Late morning' },
      { id: 'aguada', name: 'Fort Aguada', tier: 'optional', lat: 15.492, lng: 73.773, blurb: 'Portuguese fort and lighthouse views over the Arabian Sea.', tip: 'Quick stop while exploring North Goa.', bestTime: 'Afternoon' },
      { id: 'baga-calangute', name: 'Baga–Calangute stretch', tier: 'optional', lat: 15.555, lng: 73.755, blurb: 'Busy beach strip — fun once, not where I’d base a whole trip.', tip: 'Go for people-watching, leave for quieter sand.', bestTime: 'Late afternoon' },
    ],
  },
];

export function getCity(slug) {
  const city = cities.find((c) => c.slug === slug) || null;
  if (!city) return null;
  return {
    ...city,
    places: city.places.map((p) => enrichPlace(city.slug, p)),
  };
}

export function getCitySummaries() {
  return cities.map((c) => ({
    slug: c.slug,
    name: c.name,
    region: c.region,
    category: c.category,
    mark: c.mark,
    featured: !!c.featured,
    accent: c.accent,
    tagline: c.tagline,
    vibe: c.vibe,
    days: c.days,
    season: c.season,
    mustCount: c.places.filter((p) => p.tier === 'must').length,
    optionalCount: c.places.filter((p) => p.tier === 'optional').length,
    placeCount: c.places.length,
    href: `/travel/${c.slug}/`,
    coverGradient: c.coverGradient,
  }));
}

export function getTravelStats() {
  const summaries = getCitySummaries();
  return {
    cities: summaries.length,
    places: summaries.reduce((n, c) => n + c.placeCount, 0),
    must: summaries.reduce((n, c) => n + c.mustCount, 0),
    categories: [...new Set(summaries.map((c) => c.category))],
  };
}

export function getAdjacentCities(slug) {
  const i = cities.findIndex((c) => c.slug === slug);
  if (i < 0) return { prev: null, next: null };
  const prev = cities[(i - 1 + cities.length) % cities.length];
  const next = cities[(i + 1) % cities.length];
  return {
    prev: { slug: prev.slug, name: prev.name, href: `/travel/${prev.slug}/` },
    next: { slug: next.slug, name: next.name, href: `/travel/${next.slug}/` },
  };
}

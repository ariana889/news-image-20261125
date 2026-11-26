# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/ariana889/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/ariana889/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One image that sums up the world news of Wednesday 25 November 2026 — a dense front page of 41 stories: China launching Shenzhou-24 with the first Pakistani astronaut to visit the Tiangong space station; Colombian special forces freeing the last hostages from a Cartagena supermarket in a dawn raid; the Solomon Islands signing a security treaty with Australia and dropping its China pact; six miners dead and about twenty still trapped by floodwater in an illegal gold mine near Bogor, Indonesia; Spain's leaders facing off in a televised debate days before a snap election; and the US Army detonating five tons of unstable explosives at an Iowa munitions plant — plus 35 more verified stories from every region, each with its own thumbnail picture, from a Cairo tanker fire that killed 31 and a claimed Houthi strike on the Ras Tanura refinery to Roma holding PSG 2-2, the Dow erasing a 1,100-point plunge, and the Macy's centenary parade postponed. The repository holds the image as `entry.png`; `main.ts` copies it to the output directory unchanged.

Every headline was verified against two or more independent sources before drawing; where sources disagreed on a figure, the poster uses the wording all of them support.

## The six stories

1. **First Pakistani astronaut flies to space station** — Shenzhou-24 lifts off from Jiuquan and docks with Tiangong the same day.
2. **Cartagena hostages freed in dawn raid** — special forces storm the supermarket; one gunman killed, four detained.
3. **Solomons signs Australia treaty, drops China pact** — Canberra becomes the primary security partner; no foreign military base.
4. **6 dead, ~20 still trapped in flooded Bogor gold mine** — floodwater fills two illegal shafts; six bodies recovered by Wednesday evening, rescue under way.
5. **Spain's leaders clash in TV debate before snap vote** — Sánchez meets Feijóo days before the 29 November election.
6. **Army detonates 5 tons of unstable explosives in Iowa** — 68 drums of degraded lead azide; EPA air monitors detect no airborne lead.

## 35 more stories (one line each, grouped by region)

- **Asia:** stocks tumble (Kospi −5%, Nikkei −2.8%); Bangladesh garment workers win a 36% pay rise; North Korea expels a Swiss diplomat; South Korea births rise 12.2% in September; M5.1 quake hits Antique, Philippines; China and Cambodia open their biggest joint drills.
- **Oceania:** Australia apologises to LGBTQ veterans; inflation jumps to 4.9%; a Sydney jury convicts ex-police officer Beau Lamarre-Condon of double murder.
- **Middle East:** Saudi-led coalition strikes Hodeidah port; Eisenkot lands his first coalition partner; Houthis claim a strike on the Ras Tanura refinery; judges urge the Netanyahu bribery case be dropped; Iraq's top court backs Baghdad on Kurdish borders and oil fields; Israel kills a second Hamas security chief in 24 hours.
- **Africa:** Sudan rules out Ethiopia as peace-talks host; Nollywood legend Pete Edochie dies at 79; the UN and UAE condemn drone strikes on Khartoum; a Cairo tanker fire kills 31; RSF drones kill 19 in Blue Nile.
- **Europe:** Ukrainian drones hit two Russian oil refineries in Samara; Poland plans a no-fly zone on its Ukraine border; Roma hold PSG 2-2; the EU and UK fine a perfume cartel €570m; Greece holds a 24-hour general strike.
- **Americas:** six found dead after a Mississippi plane crash; SpaceX launches a classified Space Force payload; Thanksgiving travel peaks; M4.4 quake near Weston, Colorado; the Dow erases a 1,100-point plunge to close up; the US urges citizens to leave Iran; the Macy's 100th parade is postponed — a first.
- **Global:** UNAIDS warns HIV infections may rebound in 2027; an unclassified CIA system is breached; Brent crude slides below $90.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

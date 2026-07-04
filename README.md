# Easter Hop 🐣

A little browser game where you guide an Easter bunny through a spring meadow — hopping between white picket fences, dodging gaps, watching the world bloom from spring to summer.

**Play it → [hopzy.de](https://hopzy.de)**

---

Built in vanilla HTML5 Canvas with no frameworks, no build tools, no dependencies. Just one HTML file and a lot of `ctx.fillRect()`.

Features a global top-3 leaderboard (via Supabase), fireworks every 10 fences, and a world that slowly transitions from spring pastels to golden summer as your score climbs.

Originally started as "Molt the Mole" — a robot mole navigating server racks underground. Easter 2026 seemed like a good reason to redecorate.

---

## Roadmap & TODOs (AdSense-Neuaufstellung, Stand 04.07.2026)

Nach zwei AdSense-Ablehnungen („Low value content") wurde die Site strukturell neu aufgestellt. Vollständiger Maßnahmenplan liegt lokal; hier der Stand.

### ✅ Erledigt (04.07.2026)

- [x] Impressum als eigene Seite (§ 5 DDG, § 18 MStV), „nicht-kommerziell"-Widerspruch entfernt
- [x] DSGVO-Datenschutzerklärung mit AdSense-Abschnitt als eigene Seite
- [x] `robots.txt` (Mediapartners-Google erlaubt), `sitemap.xml`, `ads.txt`
- [x] Fonts lokal gehostet (kein Google-Fonts-Abruf mehr)
- [x] Leere Ad-Platzhalter + TODO-Kommentare aus dem Quelltext entfernt
- [x] Komplette Site auf Deutsch (Startseite, Spiel-UI, alle Artikel, Devlog); alte Slugs leiten weiter
- [x] E-E-A-T: Byline „Peter Jacob" + Author-Box + `Article`/`Person` JSON-LD auf allen Artikeln
- [x] Artikel gegen echten Spielcode geprüft (falsche Physik-Werte etc. korrigiert)
- [x] Google Privacy & Messaging (Consent Mode v2) — DSGVO-Nachricht ist „Published"
- [x] AdSense-Konto: Payments ✅, Ads ✅
- [x] Search Console: Domain-Property `hopzy.de` verifiziert (TXT bei checkdomain — **Eintrag nie löschen**), Sitemap eingereicht
- [x] Pillar-Artikel live: „Wie ich Easter Hop gebaut habe" (~2.000 Wörter)

### 🔜 Offen — Content (gestaffelt, ca. 1 Artikel/Woche)

- [ ] Artikel 2: „Farbpaletten-Interpolation: Wie das Spiel von Frühling zu Sommer wechselt"
- [ ] Artikel 3: „Touch-Steuerung und iOS-Eigenheiten: Browser-Games mobil zum Laufen bringen"
- [ ] Artikel 4: „Ein globales Leaderboard ohne Backend-Server: Supabase REST aus dem Browser"
- [ ] Artikel 5: „Pixel-Art ohne Bilddateien: Sprites als Zeichen-Arrays rendern"
- [ ] Artikel 6: „Browser-Game kostenlos hosten: GitHub Pages, Custom Domain, Stolperfallen"
- [ ] Jeden neuen Artikel: Sitemap ergänzen, Startseiten-Teaser, Querverlinkung, nach Push „Indexierung beantragen"

### 🔜 Offen — Laufend (wöchentlich, bis zur Re-Submission)

- [ ] Search Console → Indexierung → Seiten: alle Sitemap-URLs indexiert? Fehlende nach 2 Wochen erneut anschieben
- [ ] Search Console → Leistung: erste Impressionen/Klicks beobachten (organisches Traffic-Signal)
- [ ] Organischen Traffic aufbauen: itch.io-Eintrag mit Link auf hopzy.de, Posts in r/WebGames / r/playmygame / deutsche Communities (kein gekaufter/Bot-Traffic)
- [ ] PageSpeed Insights mobil prüfen (Ziel: grün)

### 🚦 Re-Submission-Gate (frühestens 3–4 Wochen nach letzter Ablehnung)

Erst in AdSense „Überprüfung anfordern", wenn **alle** Punkte erfüllt sind:

- [ ] ≥ 3–4 Wochen seit der letzten Ablehnung vergangen
- [ ] Alle 6 Artikel live und in Search Console indexiert
- [ ] Mehrwöchiger organischer Traffic sichtbar
- [ ] Consent-Banner getestet (erscheint erst, wenn Ads ausgeliefert werden — vorher ist „Messages shown: 0" normal)
- [ ] PageSpeed mobil grün

**Fallback:** Nach 3–4 weiteren Fehlversuchen mit klar verbesserter Site → vorerst Ezoic („Access Now") oder Media.net, AdSense später erneut.

---

*A product guy experimenting with Claude Code. Pure fun.*

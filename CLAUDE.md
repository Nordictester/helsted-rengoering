# Helsted Special Rengøring — projekt-hukommelse (læses automatisk hver session)

> **Menneske-hukommelse (Obsidian):** `C:\Users\Ano\Documents\AI\ObsidianValut\Codeing-Vault\Helsted Special Rengoring\`
> Læs Oversigt, Beslutninger og seneste sessionsnotat før du går i gang.
>
> **Kode-kort (graphify):** ikke bygget endnu. Lille statisk site — ofte unødvendigt. Kør `/graphify .` her hvis du vil have et kort.

## Brugeren
- Taler **dansk**, er **ikke programmør** — forklar i almindeligt dansk uden fagudtryk.
- Har **ADHD** + flere projekter — korte svar, én ting ad gangen, peg på næste skridt.
- Stramt budget.

## Hvad dette er
Statisk hjemmeside for **Helsted Special Rengøring og Skadeservice ApS** (43 års erfaring, specialrengøring + skadeservice). Ren HTML/CSS/JS — ingen build, intet framework.

## Sider
- `index.html` — forside (hero, ydelser, kontakt).
- Ydelses-sider: `facaderensning`, `skimmelsanering`, `pcb-sanering`, `fugt-og-vandskader`, `graffiti-rensning`, `sandblaesning`, `toeris-rensning`, `mijloesanering`, `specialrengoering`, `social-rengoering`, `rengoering`, `vi-tilbyder`.
- Øvrige: `profil`, `referencer`, `kontakt`, `job`, `ekspert-opgaver`.
- `assets/` — billeder, CSS, JS.

## Deploy (vigtig)
- Hostes på **GitHub Pages** (gratis, firma OK, ingen kommerciel-blokering som Netlify/Vercel havde).
- Repo er **offentligt** (krav for gratis Pages). Ingen hemmeligheder i koden.
- Live: **https://nordictester.github.io/helsted-rengoering/**
- **Auto-deploy:** `git push` til `origin master` (github.com/Nordictester/helsted-rengoering) → Pages bygger automatisk fra `master`-roden. Intet andet kræves.
- `.nojekyll` ligger i roden så GitHub serverer filerne råt (ingen Jekyll-behandling).
- Lokal test: åbn `index.html` i browser.

## Adfærdsregler for Claude
- **Små rettelser** (tekst, farve, link): bare gør det.
- **Større ændringer** (ny side, layout-omskrivning, ændre nav): spørg INDEN.
- Bevar dansk sprog + firmaets tone.
- **Intet template-system:** header/footer er kopieret ind i HVER HTML-fil. Ændrer du nav/footer, så ram ALLE relevante sider — ikke kun én.

## Efter samtalen
Skriv kort sessionsnotat til vaulten: `...\Helsted Special Rengoring\Sessioner\<dato> - <emne>.md`.
Husk `git commit` + `git push` hvis ændringer skal live.

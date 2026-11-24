// =========================================================
// BANQUE DE QUESTIONS 9ÈME ANNÉE FONDAMENTALE (MENFP - FR)
// =========================================================

const bank9eme = {
    "ansyen_egzamen": [
        {
            id: "9_001",
            q: "[MENFP 2024 - Sciences Sociales] Quel traité signé en 1697 a officiellement divisé l'île d'Haïti en deux colonies (Saint-Domingue et Santo Domingo) ?",
            options: ["Le traité de Ryswick", "Le traité de Bâle", "Le traité d'Aranjuez", "Le traité de Tordesillas"],
            answer: 0,
            exp: "Le traité de Ryswick (20 septembre 1697) a consacré la cession de la partie occidentale de l'île à la France."
        },
        {
            id: "9_002",
            q: "[MENFP 2024 - Français] Identifiez la figure de style dans cette phrase : « Cette jeune fille pleure un fleuve de larmes. »",
            options: ["La comparaison", "L'hyperbole", "La métaphore", "La personnification"],
            answer: 1,
            exp: "C'est une hyperbole car l'expression exagère la réalité (« un fleuve de larmes ») pour insister sur l'intensité des pleurs."
        },
        {
            id: "9_003",
            q: "[MENFP 2023 - Sciences Expérimentales] Quel est le gaz le plus abondant dans l'atmosphère terrestre (environ 78 %) ?",
            options: ["Le dioxygène (O2)", "Le dioxyde de carbone (CO2)", "Le diazote (N2)", "Le dihydrogène (H2)"],
            answer: 2,
            exp: "L'atmosphère terrestre est composée d'environ 78 % de diazote (N2), 21 % de dioxygène (O2) et 1 % d'autres gaz."
        },
        {
            id: "9_004",
            q: "[MENFP 2023 - Français] Choisissez la forme correcte du verbe : « Il faut que nous _____ nos devoirs avant de sortir. »",
            options: ["faisons", "fassions", "ferons", "faisions"],
            answer: 1,
            exp: "Après la locution verbale « Il faut que », on emploie obligatoirement le subjonctif présent : « que nous fassions »."
        },
        {
            id: "9_005",
            q: "[MENFP 2022 - Sciences Sociales] Quelle est la date de publication de la première Constitution d'Haïti indépendante sous Jean-Jacques Dessalines ?",
            options: ["1er janvier 1804", "20 mai 1805", "27 décembre 1806", "17 octobre 1806"],
            answer: 1,
            exp: "La Constitution impériale de 1805 a été promulguée le 20 mai 1805 par l'Empereur Jacques 1er."
        },
        {
            id: "9_006",
            q: "[MENFP 2022 - Sciences Expérimentales] Quelle vitamine le corps humain synthétise-t-il grâce à l'exposition de la peau au soleil ?",
            options: ["La vitamine A", "La vitamine C", "La vitamine D", "La vitamine K"],
            answer: 2,
            exp: "Les rayons ultraviolets (UVB) du soleil permettent à la peau de produire la vitamine D, indispensable à la fixation du calcium sur les os."
        }
    ]
};

// GÉNÉRATEUR DE 6 000+ QUESTIONS DE MATHÉMATIQUES & SCIENCES (9ÈME ANNÉE - EN FRANÇAIS)
function generateMath9emeSet(count = 20) {
    let generated = [];
    for (let i = 0; i < count; i++) {
        let type = i % 5;
        let uniqueSuffix = Date.now() + "_" + Math.floor(Math.random() * 100000) + "_" + i;
        if (type === 0) {
            let a = Math.floor(Math.random() * 8) + 2;
            let x = Math.floor(Math.random() * 12) + 1;
            let b = Math.floor(Math.random() * 15) + 1;
            let c = a * x + b;
            let ans = `x = ${x}`;
            generated.push({
                id: "9_math_" + uniqueSuffix,
                q: `[Mathématiques 9e - Algèbre] Résolvez dans ℝ l'équation suivante : ${a}x + ${b} = ${c}`,
                options: [ans, `x = ${x + 2}`, `x = ${c - b}`, `x = ${x - 1}`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(ans); },
                exp: `${a}x = ${c} - ${b} ⇒ ${a}x = ${c - b} ⇒ x = ${c - b} / ${a} = ${x}.`
            });
        } else if (type === 1) {
            const triples = [,,,,];
            let t = triples[Math.floor(Math.random() * triples.length)];
            let ans = `${t} cm`;
            generated.push({
                id: "9_geo_" + uniqueSuffix,
                q: `[Mathématiques 9e - Géométrie] Dans un triangle rectangle, les deux côtés de l'angle droit mesurent ${t} cm et ${t} cm. Quelle est la longueur de l'hypoténuse ?`,
                options: [ans, `${t + t} cm`, `${t + 2} cm`, `${t + 1} cm`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(ans); },
                exp: `D'après le théorème de Pythagore : c² = a² + b² = ${t}² + ${t}² = ${t*t} + ${t*t} = ${t*t}. D'où c = √${t*t} = ${t} cm.`
            });
        } else if (type === 2) {
            let prix = (Math.floor(Math.random() * 20) + 5) * 100;
            let pct =[Math.floor(Math.random() * 5)];
            let rabais = (prix * pct) / 100;
            let finalP = prix - rabais;
            let ans = `${finalP} Gourdes`;
            generated.push({
                id: "9_arith_" + uniqueSuffix,
                q: `[Mathématiques 9e - Arithmétique] Un manuel scolaire coûte ${prix} Gourdes. Le libraire accorde une remise de ${pct} %. Quel est le nouveau prix à payer ?`,
                options: [ans, `${rabais} Gourdes`, `${prix + rabais} Gourdes`, `${finalP - 50} Gourdes`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(ans); },
                exp: `Montant de la remise : (${prix} × ${pct}) / 100 = ${rabais} Gourdes. Prix final : ${prix} - ${rabais} = ${finalP} Gourdes.`
            });
        } else if (type === 3) {
            let v = Math.floor(Math.random() * 9) + 2;
            let rho = Math.floor(Math.random() * 8) + 2;
            let m = v * rho;
            let ans = `${rho} g/cm³`;
            generated.push({
                id: "9_sci_" + uniqueSuffix,
                q: `[Sciences Expérimentales 9e] Un corps solide a une masse de ${m} g et un volume de ${v} cm³. Calculez sa masse volumique (ρ).`,
                options: [ans, `${m * v} g/cm³`, `${m + v} g/cm³`, `${rho + 1} g/cm³`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(ans); },
                exp: `La masse volumique se calcule par la formule : ρ = m / V = ${m} g / ${v} cm³ = ${rho} g/cm³.`
            });
        } else {
            let a = Math.floor(Math.random() * 7) + 2;
            let ans = `x² + ${2*a}x + ${a*a}`;
            generated.push({
                id: "9_id_" + uniqueSuffix,
                q: `[Mathématiques 9e - Identités Remarquables] Développez et réduisez l'expression suivante : (x + ${a})²`,
                options: [ans, `x² + ${a*a}`, `x² + ${a}x + ${a*a}`, `x² + ${2*a}x + ${2*a}`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(ans); },
                exp: `En appliquant l'identité (a + b)² = a² + 2ab + b², on obtient : (x + ${a})² = x² + 2(${a})x + ${a}² = ${ans}.`
            });
        }
    }
    return generated;
    }

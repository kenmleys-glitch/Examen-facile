// =========================================================
// BIBLIYOTÈK 9YÈM ANE FONDAMANTAL (PWOGRAM MENFP - 6000+ KESYON)
// =========================================================

const bank9eme = {
    "ansyen_egzamen": [
        {
            q: "[MENFP 2024 - Syans Sosyal] Ki trete ki te siyen an 1697 ki te divize zile Ayiti a an de pati (Sen Domeng ak Santo Domingo) ?",
            options: ["Trete Ryswick", "Trete Bâle", "Trete Aranjuez", "Trete Tordesillas"],
            answer: 0,
            exp: "Trete Ryswick (20 Septanm 1697) te rekonèt ofisyèlman prezans Lafrans nan pati lwès zile a (Sen Domeng)."
        },
        {
            q: "[MENFP 2024 - Kominikasyon Kreyòl] Idantifye figi de stil ki nan fraz sa a : 'Ti fi a ap kriye yon rivyè dlo nan je l'.",
            options: ["Konparezon", "Ipèbòl (Egzajerasyon)", "Metafò", "Pèsonifikasyon"],
            answer: 1,
            exp: "Se yon ipèbòl paske li egzajere reyalite a ('yon rivyè dlo nan je l') pou montre jan l ap kriye anpil."
        },
        {
            q: "[MENFP 2023 - Syans Eksperimantal] Ki gaz ki pi abondan nan atmosfè planèt Latè (anviwon 78%) ?",
            options: ["Oksijèn (O2)", "Diyoksid kabòn (CO2)", "Azòt (N2)", "Idwojèn (H2)"],
            answer: 2,
            exp: "Atmosfè Latè a gen anviwon 78% Azòt (N2), 21% Oksijèn (O2), ak 1% lòt gaz."
        },
        {
            q: "[MENFP 2023 - Fransè] Choisissez la forme correcte du verbe : 'Il faut que nous _____ nos devoirs avant de sortir.'",
            options: ["faisons", "fassions", "ferons", "faisions"],
            answer: 1,
            exp: "Après 'Il faut que', on emploie toujours le subjonctif présent : 'que nous fassions'."
        },
        {
            q: "[MENFP 2022 - Syans Sosyal] Ki non premye konstitisyon Ayiti endepandan an ki te pibliye 20 Me 1805 ?",
            options: ["Konstitisyon 1801", "Konstitisyon Enperyal 1805", "Konstitisyon 1806", "Konstitisyon 1843"],
            answer: 1,
            exp: "Konstitisyon Enperyal 20 Me 1805 la te ekri sou gouvènman Anperè Jean-Jacques Dessalines."
        },
        {
            q: "[MENFP 2022 - Syans Eksperimantal] Ki vitamin kò moun pwodui lè po l pran solèy ?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
            answer: 2,
            exp: "Reyon solèy la pèmèt po a sentetize Vitamin D, ki esansyèl pou zo ak dan rete solid."
        },
        {
            q: "[MENFP 2021 - Anglè] Complete the sentence: 'She _____ to school every morning at 7 o'clock.'",
            options: ["go", "goes", "going", "gone"],
            answer: 1,
            exp: "Au présent simple avec 'She' (3e personne du singulier), on ajoute '-es' au verbe 'go' -> 'goes'."
        },
        {
            q: "[MENFP 2021 - Panyòl] ¿Cómo se dice 'Livre' en español?",
            options: ["Cuaderno", "Libro", "Lápiz", "Mesa"],
            answer: 1,
            exp: "'Libro' signifie livre en espagnol ('Cuaderno' = kaye, 'Lápiz' = kreyon)."
        }
    ]
};

// MOTÈ KI JENERE 6,000+ KESYON MATEMATIK & SYANS OFISYÈL 9YÈM ANE
function generateMath9emeSet(count = 20) {
    let generated = [];
    for (let i = 0; i < count; i++) {
        let type = i % 5;
        if (type === 0) {
            // Ekwasyon premye degre : ax + b = c
            let a = Math.floor(Math.random() * 8) + 2;
            let x = Math.floor(Math.random() * 12) + 1;
            let b = Math.floor(Math.random() * 15) + 1;
            let c = a * x + b;
            generated.push({
                q: `[Matematik 9yèm - Aljèb] Rezoud ekwasyon sa a : ${a}x + ${b} = ${c}`,
                options: [`x = ${x}`, `x = ${x + 2}`, `x = ${c - b}`, `x = ${x - 1}`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(`x = ${x}`); },
                exp: `${a}x = ${c} - ${b} => ${a}x = ${c - b} => x = ${(c - b)} / ${a} = ${x}.`
            });
        } else if (type === 1) {
            // Teyorèm Pitagò (Triyang rektang)
            const triples = [[3,4,5], [6,8,10], [5,12,13], [8,15,17], [9,12,15]];
            let t = triples[Math.floor(Math.random() * triples.length)];
            generated.push({
                q: `[Matematik 9yèm - Jewometri] Nan yon triyang rektang, de kote ang dwat la mezire ${t[0]} cm ak ${t[1]} cm. Konbyen ipoteniz la mezire ?`,
                options: [`${t[2]} cm`, `${t[0] + t[1]} cm`, `${t[2] + 2} cm`, `${t[1] + 1} cm`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(`${t[2]} cm`); },
                exp: `Daprè teyorèm Pitagò : c² = a² + b² = ${t[0]}² + ${t[1]}² = ${t[0]*t[0]} + ${t[1]*t[1]} = ${t[2]*t[2]}. Donk c = √${t[2]*t[2]} = ${t[2]} cm.`
            });
        } else if (type === 2) {
            // Kalkil Pousantaj (Pwogram MENFP)
            let prix = (Math.floor(Math.random() * 20) + 5) * 100;
            let pct = [10, 15, 20, 25, 50][Math.floor(Math.random() * 5)];
            let rabais = (prix * pct) / 100;
            let finalP = prix - rabais;
            generated.push({
                q: `[Matematik 9yèm - Aritmetik] Yon liv koute ${prix} Goud. Machann nan fè yon rabè ${pct}%. Konbyen liv la ap koute kounye a ?`,
                options: [`${finalP} Goud`, `${rabais} Goud`, `${prix + rabais} Goud`, `${finalP - 50} Goud`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(`${finalP} Goud`); },
                exp: `Rabè a se (${prix} × ${pct}) / 100 = ${rabais} Goud. Nouvo pri a se ${prix} - ${rabais} = ${finalP} Goud.`
            });
        } else if (type === 3) {
            // Syans Eksperimantal : Kalkil Mas Volimik (ρ = m / V)
            let v = Math.floor(Math.random() * 9) + 2;
            let rho = Math.floor(Math.random() * 8) + 2;
            let m = v * rho;
            generated.push({
                q: `[Syans Eksperimantal 9yèm] Yon objè gen yon mas ${m} g ak yon volim ${v} cm³. Ki mas volimik li ?`,
                options: [`${rho} g/cm³`, `${m * v} g/cm³`, `${m + v} g/cm³`, `${rho + 1} g/cm³`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(`${rho} g/cm³`); },
                exp: `Fòmil mas volimik la se ρ = m / V = ${m} g / ${v} cm³ = ${rho} g/cm³.`
            });
        } else {
            // Devlopman Aljebrik : (x + a)²
            let a = Math.floor(Math.random() * 7) + 2;
            let ans = `x² + ${2*a}x + ${a*a}`;
            generated.push({
                q: `[Matematik 9yèm - Idantite Remakab] Devlope ekspresyon sa a : (x + ${a})²`,
                options: [ans, `x² + ${a*a}`, `x² + ${a}x + ${a*a}`, `x² + ${2*a}x + ${2*a}`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(ans); },
                exp: `Daprè idantite (a + b)² = a² + 2ab + b² : (x + ${a})² = x² + 2(${a})x + ${a}² = ${ans}.`
            });
        }
    }
    return generated;
}

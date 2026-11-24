// =========================================================
// BIBLIYOTÈK NS4 - BAKALOREYA MENFP (SMP • SVT • SES • LLA)
// =========================================================

const bankNS4 = {
    "ansyen_egzamen": [
        {
            q: "[MENFP NS4 - Filozofi] Daprè Jean-Paul Sartre, kisa fraz 'L'existence précède l'essence' vle di ?",
            options: [
                "Bondye kreye moun ak yon destinasyon deja trase",
                "Moun egziste anvan, epi se li menm ki defini tèt li pa aksyon l yo",
                "Lasyans pi enpòtan pase filozofi",
                "Lavi pa gen okenn sans ditou"
            ],
            answer: 1,
            exp: "Nan ekzistansyalis Sartre la, moun fèt san etikèt, epi se chwa lib li yo ki bati esans li."
        },
        {
            q: "[MENFP NS4 - Istwa Ayiti] Ki prezidan ayisyen ki te siyen akò 1934 la pou mete fen nan okipasyon amerikèn nan (Dezyèm Endepandans) ?",
            options: ["Louis Borno", "Sténio Vincent", "Élie Lescot", "Dumarsais Estimé"],
            answer: 1,
            exp: "Prezidan Sténio Vincent te negosye ak Franklin D. Roosevelt pou sòlda ameriken yo kite Ayiti nan mwa Out 1934."
        },
        {
            q: "[MENFP NS4 - SVT / Jenetik] Ki baz azote ki prezan nan ARN (Acide Ribonucléique) men ki pa nan ADN ?",
            options: ["Adenin (A)", "Sitozin (C)", "Irasil (U)", "Gwanin (G)"],
            answer: 2,
            exp: "Nan ARN nan, Irasil (U) ranplase Timin (T) ki prezan nan ADN nan."
        },
        {
            q: "[MENFP NS4 - SES / Ekonomi] Ki sa yon 'Enflasyon' (Inflation) ye nan ekonomi ?",
            options: [
                "Bès jeneral pri pwodwi yo sou mache a",
                "Ogmanstasyon jeneral ak dirab pri byen ak sèvis yo, ki fè lajan an pèdi valè",
                "Ogmantasyon ekspòtasyon yon peyi",
                "Rediksyon to chomaj la"
            ],
            answer: 1,
            exp: "Enflasyon an diminye pouvwa dacha lajan an paske menm kantite kòb la achte mwens machandiz."
        },
        {
            q: "[MENFP NS4 - Literati] Ki woman Jacques Stephen Alexis ki rakonte lavi travayè ayisyen nan plantasyon kann Sendomeng (Masak 1937) ?",
            options: ["Les Arbres Musiciens", "Compère Général Soleil", "L'Espace d'un cillement", "Romancero aux étoiles"],
            answer: 1,
            exp: "Compère Général Soleil (1955) rakonte istwa Hilarion Hilarius ak masak 1937 la sou rejim Trujillo."
        },
        {
            q: "[MENFP NS4 - Chimi] Ki pH yon solisyon akeuz ki net a 25°C ?",
            options: ["pH = 0", "pH = 7", "pH = 14", "pH = 1"],
            answer: 1,
            exp: "Yon solisyon net gen pH = 7. Anba 7 li asid, anlè 7 li bazik."
        }
    ]
};

// MOTÈ KI JENERE 6,000+ KESYON DINAMIK POU NS4 (SMP, SVT, SES)
function generateNS4Set(serie = 'smp', count = 20) {
    let generated = [];
    for (let i = 0; i < count; i++) {
        let type = i % 4;
        if (type === 0) {
            // Matematik NS4 : Derive polinòm f(x) = ax³ + bx² + cx
            let a = Math.floor(Math.random() * 5) + 2;
            let b = Math.floor(Math.random() * 7) + 2;
            let c = Math.floor(Math.random() * 9) + 1;
            let ans = `${3*a}x² + ${2*b}x + ${c}`;
            generated.push({
                q: `[Matematik NS4 - Analiz] Kalkile fonksyon derive f'(x) pou : f(x) = ${a}x³ + ${b}x² + ${c}x`,
                options: [ans, `${a}x² + ${b}x + ${c}`, `${3*a}x² + ${b}x`, `${2*a}x² + ${2*b}x + ${c}`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(ans); },
                exp: `Daprè fòmil (xⁿ)' = n·xⁿ⁻¹ : (${a}x³)' = ${3*a}x², (${b}x²)' = ${2*b}x, epi (${c}x)' = ${c}.`
            });
        } else if (type === 1) {
            // Fizik NS4 : Enèji Sinetik Ec = 1/2 m v²
            let m = (Math.floor(Math.random() * 5) + 1) * 2; // m pè pou 1/2 m fasil
            let v = Math.floor(Math.random() * 8) + 2;
            let ec = 0.5 * m * v * v;
            generated.push({
                q: `[Fizik NS4 - Mekanik] Yon mobil ki gen mas ${m} kg ap deplase ak yon vitès ${v} m/s. Kalkile enèji sinetik (Ec) li.`,
                options: [`${ec} J`, `${m * v} J`, `${ec * 2} J`, `${0.5 * m * v} J`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(`${ec} J`); },
                exp: `Fòmil enèji sinetik la se Ec = ½ × m × v² = 0.5 × ${m} × (${v})² = ${0.5 * m} × ${v*v} = ${ec} Joules (J).`
            });
        } else if (type === 2) {
            // Ekonomi / Matematik Finansye SES : Kalkil Enterè Senp I = C × t × n / 100
            let cap = (Math.floor(Math.random() * 9) + 2) * 1000;
            let taux = Math.floor(Math.random() * 6) + 5;
            let ans = Math.floor(Math.random() * 4) + 2;
            let interet = (cap * taux * ans) / 100;
            generated.push({
                q: `[Ekonomi NS4 - SES] Yon kapital ${cap} Goud plase nan bank a yon to enterè senp ${taux}% pa ane pandan ${ans} lane. Konbyen enterè l ap rapòte ?`,
                options: [`${interet} Goud`, `${cap + interet} Goud`, `${(cap * taux) / 100} Goud`, `${interet * 2} Goud`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(`${interet} Goud`); },
                exp: `I = (C × t × n) / 100 = (${cap} × ${taux} × ${ans}) / 100 = ${interet} Goud.`
            });
        } else {
            // Matematik NS4 : Swit Aritmetik Un = U0 + n*r
            let u0 = Math.floor(Math.random() * 10) + 1;
            let r = Math.floor(Math.random() * 6) + 2;
            let n = Math.floor(Math.random() * 10) + 5;
            let un = u0 + n * r;
            generated.push({
                q: `[Matematik NS4 - Swit] Swit aritmetik (Un) gen premye tèm U0 = ${u0} ak rezon r = ${r}. Kalkile tèm U${n}.`,
                options: [`${un}`, `${u0 + n}`, `${un + r}`, `${u0 * r + n}`].sort(() => Math.random() - 0.5),
                get answer() { return this.options.indexOf(`${un}`); },
                exp: `Fòmil jeneral yon swit aritmetik se Un = U0 + n × r = ${u0} + (${n} × ${r}) = ${u0} + ${n*r} = ${un}.`
            });
        }
    }
    return generated;
}

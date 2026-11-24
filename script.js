const quizDatabase = {
    '9eme': {
        title: '9yèm Ane Fondamantal (MENFP)',
        questions: [
            {
                q: "Matematik : Ki valè x nan ekwasyon sa a : 3x - 7 = 14 ?",
                options: ["x = 5", "x = 7", "x = 21", "x = 3"],
                answer: 1,
                exp: "3x = 14 + 7 => 3x = 21 => x = 21 / 3 = 7."
            },
            {
                q: "Syans Sosyal : Ki dat batay Vètyè (Vertières) la te fèt ?",
                options: ["1ye Janvye 1804", "18 Novanm 1803", "14 Out 1791", "17 Oktòb 1806"],
                answer: 1,
                exp: "Batay Vètyè a te fèt 18 Novanm 1803 sou kòmandman Dessalines ak Capois-La-Mort."
            },
            {
                q: "Kominikasyon Kreyòl : Ki wòl mo 'yo' nan fraz sa a : 'Timoun yo ap etidye' ?",
                options: ["Pwonon pèsonèl", "Atik defini pliryèl", "Adjektif posesif", "Vèb"],
                answer: 1,
                exp: "'Yo' ki plase aprè yon non sèvi kòm atik defini pliryèl."
            }
        ]
    },
    'smp': {
        title: 'NS4 - Serye SMP (Matematik & Fizik)',
        questions: [
            {
                q: "Matematik : Ki limit fonksyon (x² - 4) / (x - 2) lè x ap tand vè 2 ?",
                options: ["0", "2", "4", "Enfini"],
                answer: 2,
                exp: "x² - 4 = (x - 2)(x + 2). Lè nou senplifye pa (x - 2), li rete (x + 2). Pou x = 2, sa bay 4."
            },
            {
                q: "Fizik : Yon kò ki gen mas 5 kg sibi yon akselerasyon 3 m/s². Ki fòs ki aplike sou li ?",
                options: ["8 N", "15 N", "1.6 N", "2 N"],
                answer: 1,
                exp: "F = m × a => F = 5 kg × 3 m/s² = 15 Newton (N)."
            }
        ]
    },
    'svt': {
        title: 'NS4 - Serye SVT (Syans Lavi ak Latè)',
        questions: [
            {
                q: "Biyoloji : Ki òganit nan selil la ki responsab pwodiksyon enèji (ATP) ?",
                options: ["Ribozòm", "Mitokondri", "Nwayo", "Aparèy Golgi"],
                answer: 1,
                exp: "Mitokondri a se santral enèjetik selil la kote respirasyon selilè a fèt."
            },
            {
                q: "Jenetik : Konbyen kwomozòm yon selil somatik moun nòmal genyen ?",
                options: ["23 kwomozòm", "44 kwomozòm", "46 kwomozòm", "48 kwomozòm"],
                answer: 2,
                exp: "Moun gen 23 pè kwomozòm, sa ki bay 46 kwomozòm an total."
            }
        ]
    },
    'ses': {
        title: 'NS4 - Serye SES (Ekonomi & Syans Sosyal)',
        questions: [
            {
                q: "Ekonomi : Kisa PIB (Produit Intérieur Brut) mezire ?",
                options: ["Dèt ekstèn yon peyi", "Valè tout richès ki pwodui anndan yon peyi nan yon ane", "Kantite lajan bank santral la enprime"],
                answer: 1,
                exp: "PIB la mezire valè total tout byen ak sèvis final ki pwodui nan yon peyi pandan 1 ane."
            },
            {
                q: "Istwa : Ki lane okipasyon amerikèn nan ann Ayiti te kòmanse ?",
                options: ["1915", "1934", "1957", "1986"],
                answer: 0,
                exp: "Okipasyon amerikèn nan te kòmanse 28 Jiyè 1915 epi li te fini nan mwa Out 1934."
            }
        ]
    },
    'lla': {
        title: 'NS4 - Serye LLA (Lèt, Lang & Atizay)',
        questions: [
            {
                q: "Literati Ayisyèn : Kiyès ki ekri 'Compère Général Soleil' ?",
                options: ["Jacques Roumain", "Jacques Stephen Alexis", "René Depestre", "Marie Vieux-Chauvet"],
                answer: 1,
                exp: "Jacques Stephen Alexis te pibliye 'Compère Général Soleil' an 1955."
            },
            {
                q: "Filozofi : Kiyès ki te di : 'Je pense, donc je suis' ?",
                options: ["Platon", "René Descartes", "Jean-Jacques Rousseau", "Socrate"],
                answer: 1,
                exp: "René Descartes te ekri fraz sa a nan 'Discours de la méthode' (1637)."
            }
        ]
    },
    'univ': {
        title: 'Konkou Inivèsite (UEH & Lòt)',
        questions: [
            {
                q: "Kilti Jeneral : Ki premye nasyon nwa endepandan nan mond lan ?",
                options: ["Etyopi", "Ayiti", "Liberya", "Gana"],
                answer: 1,
                exp: "Ayiti te pwoklame endepandans li 1ye Janvye 1804."
            },
            {
                q: "Jewografi Ayiti : Konbyen depatman jewografik ki genyen nan peyi Ayiti ?",
                options: ["9 depatman", "10 depatman", "11 depatman", "12 depatman"],
                answer: 1,
                exp: "Ayiti gen 10 depatman (dènye a se Nippes ki te kreye an 2003)."
            }
        ]
    }
};
function sendWhatsAppProof() {
    const phoneInput = document.getElementById('userPhone').value.replace(/\D/g, '');
    if (phoneInput.length !== 8) {
        alert("Tanpri ekri nimewo telefòn 8 chif ou anvan ou voye mesaj WhatsApp la !");
        return;
    }
    const text = encodeURIComponent("Bonjou, mwen fèk peye 100 Gds sou Natcash (+509 4240-2215) pou abònman VIP BAKO HAITI. Men nimewo telefòn mwen pou kòd la : " + phoneInput);
    window.open("https://wa.me" + text, "_blank");
}

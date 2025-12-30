/**
 * Data konstan untuk Equation Slideshow.
 * Dipisahkan agar file komponen tidak penuh dengan string HTML.
 */
export const EQUATIONS_DATA = [
    {
        id: 'einstein',
        tex: "R<sub>&mu;&nu;</sub> - &frac12;Rg<sub>&mu;&nu;</sub> = 8&pi;GT<sub>&mu;&nu;</sub>", 
        grad: "linear-gradient(90deg, #F2994A, #F2C94C)",
        shadow: "rgba(242, 201, 76, 0.4)"
    },
    {
        id: 'schrodinger',
        tex: "i&#8463; &part;&Psi;/&part;t = &Hcirc;&Psi;", 
        grad: "linear-gradient(90deg, #00f260, #0575e6)",
        shadow: "rgba(5, 117, 230, 0.4)"
    },
    {
        id: 'maxwell',
        tex: "&nabla; &sdot; E = &rho;/&epsilon;<sub>0</sub>", // Maxwell
        grad: "linear-gradient(90deg, #DA22FF, #9733EE)",
        shadow: "rgba(218, 34, 255, 0.4)"
    },
    {
        id: 'dirac',
        tex: "(i&gamma;<sup>&mu;</sup>&part;<sub>&mu;</sub> - m)&psi; = 0", // Dirac
        grad: "linear-gradient(90deg, #e1eec3, #f05053)",
        shadow: "rgba(240, 80, 83, 0.4)"
    },
    {
        id: 'entropy',
        tex: "&Delta;S &ge; 0", // Entropy
        grad: "linear-gradient(90deg, #02aab0, #00cdac)",
        shadow: "rgba(0, 205, 172, 0.4)"
    },
    {
        id: 'lagrangian',
        tex: "L = &int; (D<sub>&mu;</sub>&phi;)<sup>&dagger;</sup>D<sup>&mu;</sup>&phi; - m<sup>2</sup>&phi;<sup>&dagger;</sup>&phi; - &frac14;F<sub>&mu;&nu;</sub>F<sup>&mu;&nu;</sup> dx", // Lagrangian Standard Model
        grad: "linear-gradient(90deg, #FF416C, #FF4B2B)",
        shadow: "rgba(255, 75, 43, 0.4)"
    }
];

/**
 * Helper sederhana untuk truncate text jika nanti diperlukan di blog card
 */
export const truncateText = (str, length = 100) => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
};

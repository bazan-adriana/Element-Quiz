const elements = [
    {
        "atomicNumber": 1,
        "name": "Hydrogen",
        "symbol": "H",
        "atomicMass": "1.008",
        "groupBlock": "nonmetal",
        "standardState": "gas",
        "bondingType": "diatomic",
        "yearDiscovered": 1766
    },
    {
        "atomicNumber": 2,
        "name": "Helium",
        "symbol": "He",
        "atomicMass": "4.002602",
        "groupBlock": "noble gas",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1868
    },
    {
        "atomicNumber": 3,
        "name": "Lithium",
        "symbol": "Li",
        "atomicMass": "6.94",
        "groupBlock": "alkali metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1817
    },
    {
        "atomicNumber": 4,
        "name": "Beryllium",
        "symbol": "Be",
        "atomicMass": "9.0121831",
        "groupBlock": "alkaline earth metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1798
    },
    {
        "atomicNumber": 5,
        "name": "Boron",
        "symbol": "B",
        "atomicMass": "10.81",
        "groupBlock": "metalloid",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": 1808
    },
    {
        "atomicNumber": 6,
        "name": "Carbon",
        "symbol": "C",
        "atomicMass": "12.011",
        "groupBlock": "nonmetal",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 7,
        "name": "Nitrogen",
        "symbol": "N",
        "atomicMass": "14.007",
        "groupBlock": "nonmetal",
        "standardState": "gas",
        "bondingType": "diatomic",
        "yearDiscovered": 1772
    },
    {
        "atomicNumber": 8,
        "name": "Oxygen",
        "symbol": "O",
        "atomicMass": "15.999",
        "groupBlock": "nonmetal",
        "standardState": "gas",
        "bondingType": "diatomic",
        "yearDiscovered": 1774
    },
    {
        "atomicNumber": 9,
        "name": "Fluorine",
        "symbol": "F",
        "atomicMass": "18.998403163",
        "groupBlock": "halogen",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1670
    },
    {
        "atomicNumber": 10,
        "name": "Neon",
        "symbol": "Ne",
        "atomicMass": "20.180",
        "groupBlock": "noble gas",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1898
    },
    {
        "atomicNumber": 11,
        "name": "Sodium",
        "symbol": "Na",
        "atomicMass": "22.990",
        "groupBlock": "alkali metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1807
    },
    {
        "atomicNumber": 12,
        "name": "Magnesium",
        "symbol": "Mg",
        "atomicMass": "24.305",
        "groupBlock": "alkaline earth metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1808
    },
    {
        "atomicNumber": 13,
        "name": "Aluminum",
        "symbol": "Al",
        "atomicMass": "26.982",
        "groupBlock": "post-transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 14,
        "name": "Silicon",
        "symbol": "Si",
        "atomicMass": "28.085",
        "groupBlock": "metalloid",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": 1823
    },
    {
        "atomicNumber": 15,
        "name": "Phosphorus",
        "symbol": "P",
        "atomicMass": "30.974",
        "groupBlock": "nonmetal",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": 1669
    },
    {
        "atomicNumber": 16,
        "name": "Sulfur",
        "symbol": "S",
        "atomicMass": "32.06",
        "groupBlock": "nonmetal",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 17,
        "name": "Chlorine",
        "symbol": "Cl",
        "atomicMass": "35.45",
        "groupBlock": "halogen",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1774
    },
    {
        "atomicNumber": 18,
        "name": "Argon",
        "symbol": "Ar",
        "atomicMass": "39.948",
        "groupBlock": "noble gas",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1894
    },
    {
        "atomicNumber": 19,
        "name": "Potassium",
        "symbol": "K",
        "atomicMass": "39.0983",
        "groupBlock": "alkali metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1807
    },
    {
        "atomicNumber": 20,
        "name": "Calcium",
        "symbol": "Ca",
        "atomicMass": "40.078",
        "groupBlock": "alkaline earth metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 21,
        "name": "Scandium",
        "symbol": "Sc",
        "atomicMass": "44.955908",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1879
    },
    {
        "atomicNumber": 22,
        "name": "Titanium",
        "symbol": "Ti",
        "atomicMass": "47.867",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1791
    },
    {
        "atomicNumber": 23,
        "name": "Vanadium",
        "symbol": "V",
        "atomicMass": "50.9415",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1801
    },
    {
        "atomicNumber": 24,
        "name": "Chromium",
        "symbol": "Cr",
        "atomicMass": "51.9961",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 25,
        "name": "Manganese",
        "symbol": "Mn",
        "atomicMass": "54.938044",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1774
    },
    {
        "atomicNumber": 26,
        "name": "Iron",
        "symbol": "Fe",
        "atomicMass": "55.845",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 27,
        "name": "Cobalt",
        "symbol": "Co",
        "atomicMass": "58.933194",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 28,
        "name": "Nickel",
        "symbol": "Ni",
        "atomicMass": "58.6934",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1751
    },
    {
        "atomicNumber": 29,
        "name": "Copper",
        "symbol": "Cu",
        "atomicMass": "63.546",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 30,
        "name": "Zinc",
        "symbol": "Zn",
        "atomicMass": "65.38",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 31,
        "name": "Gallium",
        "symbol": "Ga",
        "atomicMass": "69.723",
        "groupBlock": "metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1875
    },
    {
        "atomicNumber": 32,
        "name": "Germanium",
        "symbol": "Ge",
        "atomicMass": "72.63",
        "groupBlock": "metalloid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1886
    },
    {
        "atomicNumber": 33,
        "name": "Arsenic",
        "symbol": "As",
        "atomicMass": "74.921595",
        "groupBlock": "metalloid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 34,
        "name": "Selenium",
        "symbol": "Se",
        "atomicMass": "78.96",
        "groupBlock": "nonmetal",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": 1817
    },
    {
        "atomicNumber": 35,
        "name": "Bromine",
        "symbol": "Br",
        "atomicMass": "79.904",
        "groupBlock": "halogen",
        "standardState": "liquid",
        "bondingType": "atomic",
        "yearDiscovered": 1826
    },
    {
        "atomicNumber": 36,
        "name": "Krypton",
        "symbol": "Kr",
        "atomicMass": "83.798",
        "groupBlock": "noble gas",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1898
    },
    {
        "atomicNumber": 37,
        "name": "Rubidium",
        "symbol": "Rb",
        "atomicMass": "85.4678",
        "groupBlock": "alkali metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1861
    },
    {
        "atomicNumber": 38,
        "name": "Strontium",
        "symbol": "Sr",
        "atomicMass": "87.62",
        "groupBlock": "alkaline earth metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1790
    },
    {
        "atomicNumber": 39,
        "name": "Yttrium",
        "symbol": "Y",
        "atomicMass": "88.90584",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1794
    },
    {
        "atomicNumber": 40,
        "name": "Zirconium",
        "symbol": "Zr",
        "atomicMass": "91.224",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1789
    },
    {
        "atomicNumber": 41,
        "name": "Niobium",
        "symbol": "Nb",
        "atomicMass": "92.90637",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1801
    },
    {
        "atomicNumber": 42,
        "name": "Molybdenum",
        "symbol": "Mo",
        "atomicMass": "95.95",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1778
    },
    {
        "atomicNumber": 43,
        "name": "Technetium",
        "symbol": "Tc",
        "atomicMass": "98",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1937
    },
    {
        "atomicNumber": 44,
        "name": "Ruthenium",
        "symbol": "Ru",
        "atomicMass": "101.07",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1827
    },
    {
        "atomicNumber": 45,
        "name": "Rhodium",
        "symbol": "Rh",
        "atomicMass": "102.9055",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1803
    },
    {
        "atomicNumber": 46,
        "name": "Palladium",
        "symbol": "Pd",
        "atomicMass": "106.42",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1803
    },
    {
        "atomicNumber": 47,
        "name": "Silver",
        "symbol": "Ag",
        "atomicMass": "107.8682",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 48,
        "name": "Cadmium",
        "symbol": "Cd",
        "atomicMass": "112.414",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1817
    },
    {
        "atomicNumber": 49,
        "name": "Indium",
        "symbol": "In",
        "atomicMass": "114.818",
        "groupBlock": "post-transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1863
    },
    {
        "atomicNumber": 50,
        "name": "Tin",
        "symbol": "Sn",
        "atomicMass": "118.71",
        "groupBlock": "post-transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 51,
        "name": "Antimony",
        "symbol": "Sb",
        "atomicMass": "121.76",
        "groupBlock": "metalloid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 52,
        "name": "Tellurium",
        "symbol": "Te",
        "atomicMass": "127.6",
        "groupBlock": "metalloid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1782
    },
    {
        "atomicNumber": 53,
        "name": "Iodine",
        "symbol": "I",
        "atomicMass": "126.90447",
        "groupBlock": "halogen",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": 1811
    },
    {
        "atomicNumber": 54,
        "name": "Xenon",
        "symbol": "Xe",
        "atomicMass": "131.293",
        "groupBlock": "noble gas",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1898
    },
    {
        "atomicNumber": 55,
        "name": "Cesium",
        "symbol": "Cs",
        "atomicMass": "132.90545196",
        "groupBlock": "alkali metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1860
    },
    {
        "atomicNumber": 56,
        "name": "Barium",
        "symbol": "Ba",
        "atomicMass": "137.327",
        "groupBlock": "alkaline earth metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1808
    },
    {
        "atomicNumber": 57,
        "name": "Lanthanum",
        "symbol": "La",
        "atomicMass": "138.90547",
        "groupBlock": "lanthanide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1839
    },
    {
        "atomicNumber": 58,
        "name": "Cerium",
        "symbol": "Ce",
        "atomicMass": "140.116",
        "groupBlock": "lanthanide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1803
    },
    {
        "atomicNumber": 59,
        "name": "Praseodymium",
        "symbol": "Pr",
        "atomicMass": "140.90766",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1885
    },
    {
        "atomicNumber": 60,
        "name": "Neodymium",
        "symbol": "Nd",
        "atomicMass": "144.242",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1885
    },
    {
        "atomicNumber": 61,
        "name": "Promethium",
        "symbol": "Pm",
        "atomicMass": "[145]",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1945
    },
    {
        "atomicNumber": 62,
        "name": "Samarium",
        "symbol": "Sm",
        "atomicMass": "150.36",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1853
    },
    {
        "atomicNumber": 63,
        "name": "Europium",
        "symbol": "Eu",
        "atomicMass": "151.964",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1901
    },
    {
        "atomicNumber": 64,
        "name": "Gadolinium",
        "symbol": "Gd",
        "atomicMass": "157.25",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1880
    },
    {
        "atomicNumber": 65,
        "name": "Terbium",
        "symbol": "Tb",
        "atomicMass": "158.92535",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1843
    },
    {
        "atomicNumber": 66,
        "name": "Dysprosium",
        "symbol": "Dy",
        "atomicMass": "162.5",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1886
    },
    {
        "atomicNumber": 67,
        "name": "Holmium",
        "symbol": "Ho",
        "atomicMass": "164.93033",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1878
    },
    {
        "atomicNumber": 68,
        "name": "Erbium",
        "symbol": "Er",
        "atomicMass": "167.259",
        "groupBlock": "lanthanoid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1842
    },
    {
        "atomicNumber": 69,
        "name": "Thulium",
        "symbol": "Tm",
        "atomicMass": "168.93422",
        "groupBlock": "lanthanide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1879
    },
    {
        "atomicNumber": 70,
        "name": "Ytterbium",
        "symbol": "Yb",
        "atomicMass": "173.054",
        "groupBlock": "lanthanide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1878
    },
    {
        "atomicNumber": 71,
        "name": "Lutetium",
        "symbol": "Lu",
        "atomicMass": "174.9668",
        "groupBlock": "lanthanide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1907
    },
    {
        "atomicNumber": 72,
        "name": "Hafnium",
        "symbol": "Hf",
        "atomicMass": "178.49",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1923
    },
    {
        "atomicNumber": 73,
        "name": "Tantalum",
        "symbol": "Ta",
        "atomicMass": "180.94788",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1802
    },
    {
        "atomicNumber": 74,
        "name": "Tungsten",
        "symbol": "W",
        "atomicMass": "183.84",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1783
    },
    {
        "atomicNumber": 75,
        "name": "Rhenium",
        "symbol": "Re",
        "atomicMass": "186.207",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1925
    },
    {
        "atomicNumber": 76,
        "name": "Osmium",
        "symbol": "Os",
        "atomicMass": "190.23",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1803
    },
    {
        "atomicNumber": 77,
        "name": "Iridium",
        "symbol": "Ir",
        "atomicMass": "192.217",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1803
    },
    {
        "atomicNumber": 78,
        "name": "Platinum",
        "symbol": "Pt",
        "atomicMass": "195.084",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 79,
        "name": "Gold",
        "symbol": "Au",
        "atomicMass": "196.966569",
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 80,
        "name": "Mercury",
        "symbol": "Hg",
        "atomicMass": "200.592",
        "groupBlock": "transition metal",
        "standardState": "liquid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 81,
        "name": "Thallium",
        "symbol": "Tl",
        "atomicMass": "204.38",
        "groupBlock": "post-transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1861
    },
    {
        "atomicNumber": 82,
        "name": "Lead",
        "symbol": "Pb",
        "atomicMass": "207.2",
        "groupBlock": "post-transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 83,
        "name": "Bismuth",
        "symbol": "Bi",
        "atomicMass": "208.9804",
        "groupBlock": "post-transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": "ancient"
    },
    {
        "atomicNumber": 84,
        "name": "Polonium",
        "symbol": "Po",
        "atomicMass": "209",
        "groupBlock": "metalloid",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1898
    },
    {
        "atomicNumber": 85,
        "name": "Astatine",
        "symbol": "At",
        "atomicMass": "210",
        "groupBlock": "halogen",
        "standardState": "solid",
        "bondingType": "covalent network",
        "yearDiscovered": 1940
    },
    {
        "atomicNumber": 86,
        "name": "Radon",
        "symbol": "Rn",
        "atomicMass": "222",
        "groupBlock": "noble gas",
        "standardState": "gas",
        "bondingType": "atomic",
        "yearDiscovered": 1900
    },
    {
        "atomicNumber": 87,
        "name": "Francium",
        "symbol": "Fr",
        "atomicMass": "223",
        "groupBlock": "alkali metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1939
    },
    {
        "atomicNumber": 88,
        "name": "Radium",
        "symbol": "Ra",
        "atomicMass": "226",
        "groupBlock": "alkaline earth metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1898
    },
    {
        "atomicNumber": 89,
        "name": "Actinium",
        "symbol": "Ac",
        "atomicMass": "227",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1899
    },
    {
        "atomicNumber": 90,
        "name": "Thorium",
        "symbol": "Th",
        "atomicMass": "232.0377",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1828
    },
    {
        "atomicNumber": 91,
        "name": "Protactinium",
        "symbol": "Pa",
        "atomicMass": "231.03588",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1913
    },
    {
        "atomicNumber": 92,
        "name": "Uranium",
        "symbol": "U",
        "atomicMass": "238.02891",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1789
    },
    {
        "atomicNumber": 93,
        "name": "Neptunium",
        "symbol": "Np",
        "atomicMass": "237",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1940
    },
    {
        "atomicNumber": 94,
        "name": "Plutonium",
        "symbol": "Pu",
        "atomicMass": "244",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1940
    },
    {
        "atomicNumber": 95,
        "name": "Americium",
        "symbol": "Am",
        "atomicMass": "243",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1944
    },
    {
        "atomicNumber": 96,
        "name": "Curium",
        "symbol": "Cm",
        "atomicMass": "247",
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1944
    },
    {
        "atomicNumber": 97,
        "name": "Berkelium",
        "symbol": "Bk",
        "atomicMass": [
            247
        ],
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1949
    },
    {
        "atomicNumber": 98,
        "name": "Californium",
        "symbol": "Cf",
        "atomicMass": [
            251
        ],
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1950
    },
    {
        "atomicNumber": 99,
        "name": "Einsteinium",
        "symbol": "Es",
        "atomicMass": [
            252
        ],
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1952
    },
    {
        "atomicNumber": 100,
        "name": "Fermium",
        "symbol": "Fm",
        "atomicMass": [
            257
        ],
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1952
    },
    {
        "atomicNumber": 101,
        "name": "Mendelevium",
        "symbol": "Md",
        "atomicMass": [
            258
        ],
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1955
    },
    {
        "atomicNumber": 102,
        "name": "Nobelium",
        "symbol": "No",
        "atomicMass": [
            259
        ],
        "groupBlock": "actinide",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1957
    },
    {
        "atomicNumber": 103,
        "name": "Lawrencium",
        "symbol": "Lr",
        "atomicMass": [
            262
        ],
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1961
    },
    {
        "atomicNumber": 104,
        "name": "Rutherfordium",
        "symbol": "Rf",
        "atomicMass": [
            267
        ],
        "groupBlock": "transition metal",
        "standardState": "solid",
        "bondingType": "metallic",
        "yearDiscovered": 1964
    },
    {
        "atomicNumber": 105,
        "name": "Dubnium",
        "symbol": "Db",
        "atomicMass": [
            270
        ],
        "groupBlock": "transition metal",
        "standardState": "unknown",
        "bondingType": "unknown",
        "yearDiscovered": 1967
    },
    {
        "atomicNumber": 106,
        "name": "Seaborgium",
        "symbol": "Sg",
        "atomicMass": [
            271
        ],
        "groupBlock": "transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1974
    },
    {
        "atomicNumber": 107,
        "name": "Bohrium",
        "symbol": "Bh",
        "atomicMass": [
            270
        ],
        "groupBlock": "transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1976
    },
    {
        "atomicNumber": 108,
        "name": "Hassium",
        "symbol": "Hs",
        "atomicMass": [
            277
        ],
        "groupBlock": "transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1984
    },
    {
        "atomicNumber": 109,
        "name": "Meitnerium",
        "symbol": "Mt",
        "atomicMass": [
            278
        ],
        "groupBlock": "transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1982
    },
    {
        "atomicNumber": 110,
        "name": "Darmstadtium",
        "symbol": "Ds",
        "atomicMass": [
            281
        ],
        "groupBlock": "transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1994
    },
    {
        "atomicNumber": 111,
        "name": "Roentgenium",
        "symbol": "Rg",
        "atomicMass": [
            282
        ],
        "groupBlock": "transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1994
    },
    {
        "atomicNumber": 112,
        "name": "Copernicium",
        "symbol": "Cn",
        "atomicMass": [
            285
        ],
        "groupBlock": "transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1996
    },
    {
        "atomicNumber": 113,
        "name": "Nihonium",
        "symbol": "Nh",
        "atomicMass": [
            284
        ],
        "groupBlock": "post-transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 2003
    },
    {
        "atomicNumber": 114,
        "name": "Flerovium",
        "symbol": "Fl",
        "atomicMass": [
            289
        ],
        "groupBlock": "post-transition metal",
        "standardState": "predicted",
        "bondingType": "unknown",
        "yearDiscovered": 1998
    },
    {
        "atomicNumber": 115,
        "name": "Ununpentium",
        "symbol": "Uup",
        "atomicMass": "288",
        "groupBlock": "post-transition metal",
        "standardState": "unknown",
        "bondingType": "unknown",
        "yearDiscovered": 2003
    },
    {
        "atomicNumber": 116,
        "name": "Livermorium",
        "symbol": "Lv",
        "atomicMass": "293",
        "groupBlock": "post-transition metal",
        "standardState": "unknown",
        "bondingType": "unknown",
        "yearDiscovered": 2000
    },
    {
        "atomicNumber": 117,
        "name": "Tennessine",
        "symbol": "Ts",
        "atomicMass": "294",
        "groupBlock": "halogen",
        "standardState": "unknown",
        "bondingType": "unknown",
        "yearDiscovered": 2010
    },
    {
        "atomicNumber": 118,
        "name": "Oganesson",
        "symbol": "Og",
        "atomicMass": "294",
        "groupBlock": "noble gas",
        "standardState": "unknown",
        "bondingType": "unknown",
        "yearDiscovered": 2002
    }
]

export default elements;

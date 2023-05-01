const data = [
    {
        "materia": "APC",
        "tranca": ["DS", "EDA 1", "OO"],
        "color": "#FFC107"
    },
    {
        "materia": "DIAC",
        "tranca": ["IHC"],
        "color": "#FFC107"
    },
    {
        "materia": "EA",
        "tranca": [],
        "color": "#FFC107"
    },
    {
        "materia": "Introdução",
        "tranca": [],
        "color": "#FFC107"
    },
    {
        "materia": "C1",
        "tranca": ["PE", "PA", "C2"],
        "color": "#FFC107"
    },
    {
        "materia": "C2",
        "tranca": ["MNE"],
        "color": "#FFC107"
    },
    {
        "materia": "Fis 1",
        "tranca": [],
        "color": "#FFC107"
    },
    {
        "materia": "Fis 1 Exp",
        "tranca": [],
        "color": "#FFC107"
    },
    {
        "materia": "IAL",
        "tranca": ["TED 1", "PED 1"],
        "color": "#FFC107"
    },
    {
        "materia": "PE",
        "tranca": [],
        "color": "#FFC107"
    },
    {
        "materia": "DS",
        "tranca": [],
        "color": "#FF85C1"
    },
    {
        "materia": "MNE",
        "tranca": [],
        "color": "#FFC107"
    },
    {
        "materia": "Econômica",
        "tranca": ["GPQ"],
        "color": "#FFC107"
    },
    {
        "materia": "HC",
        "tranca": [],
        "color": "#FFC107"
    },
    {
        "materia": "TED 1",
        "tranca": ["FAC"],
        "color": "#FFC107"
    },
    {
        "materia": "PED 1",
        "tranca": ["FAC"],
        "color": "#FFC107"
    },
    {
        "materia": "OO",
        "tranca": ["PI 1", "MDS", "Paradigmas"],
        "color": "#9ACD32"
    },
    {
        "materia": "MD1",
        "tranca": ["MD2"],
        "color": "#9ACD32"
    },
    {
        "materia": "PI 1",
        "tranca": ["PI 2"],
        "color": "#FF8C00"
    },
    {
        "materia": "MD2",
        "tranca": ["SGBD 1"],
        "color": "#9ACD32"
    },
    {
        "materia": "FAC",
        "tranca": ["FSO"],
        "color": "#9ACD32"
    },
    {
        "materia": "EDA 1",
        "tranca": ["EDA 2", "PA", "Compiladores"],
        "color": "#9ACD32"
    },
    {
        "materia": "MDS",
        "tranca": ["Requisitos", "Testes"],
        "color": "#9ACD32"
    },
    {
        "materia": "GPQ",
        "tranca": ["Qualidade"],
        "color": "#FFC107"
    },
    {
        "materia": "IHC",
        "tranca": ["Qualidade"],
        "color": "#9ACD32"
    },
    {
        "materia": "Requisitos",
        "tranca": ["Arquitetura"],
        "color": "#9ACD32"
    },
    {
        "materia": "SGBD 1",
        "tranca": ["SGBD 2"],
        "color": "#9ACD32"
    },
    {
        "materia": "FSO",
        "tranca": ["FRC", "Embarcados"],
        "color": "#9ACD32"
    },
    {
        "materia": "Compiladores",
        "tranca": ["Paradigmas"],
        "color": "#9ACD32"
    },
    {
        "materia": "EDA 2",
        "tranca": ["PSPD"],
        "color": "#9ACD32"
    },
    {
        "materia": "PA",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "SGBD 2",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "FRC",
        "tranca": ["PSPD"],
        "color": "#9ACD32"
    },
    {
        "materia": "Arquitetura",
        "tranca": ["Paradigmas", "TPPE"],
        "color": "#9ACD32"
    },
    {
        "materia": "Testes",
        "tranca": ["GCES", "TPPE"],
        "color": "#9ACD32"
    },
    {
        "materia": "Qualidade",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "TPPE",
        "tranca": ["EPS"],
        "color": "#9ACD32"
    },
    {
        "materia": "Paradigmas",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "Embarcados",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "PSPD",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "EPS",
        "tranca": ["PI 2"],
        "color": "#9ACD32"
    },
    {
        "materia": "GCES",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "Estágio",
        "tranca": [],
        "color": "#FF8C00"
    },
    {
        "materia": "TCC 1",
        "tranca": ["TCC 2"],
        "color": "#FF8C00"
    },
    {
        "materia": "PI 2",
        "tranca": [],
        "color": "#9ACD32"
    },
    {
        "materia": "TCC 2",
        "tranca": [],
        "color": "#FF8C00"
    }
];

const edges = [];

for (const subject in data) {

    if (data[subject].tranca.length === 0) {
        edges.push([data[subject].materia, ""]);
    } else {
        for (const dependency of data[subject].tranca) {
            edges.push([data[subject].materia, dependency]);
        }
    }
}


const graph = new Graph(edges, directed = true);
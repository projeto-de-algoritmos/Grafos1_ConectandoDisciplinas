const data = [
    {
        "materia": "APC",
        "tranca": ["DS", "EDA 1", "OO"]
    },
    {
        "materia": "DIAC",
        "tranca": ["IHC"]
    },
    {
        "materia": "EA",
        "tranca": []
    },
    {
        "materia": "Introdução à Engenharia",
        "tranca": []
    },
    {
        "materia": "C1",
        "tranca": ["PE", "PA", "C2"]
    },
    {
        "materia": "C2",
        "tranca": ["MNE"]
    },
    {
        "materia": "Física 1",
        "tranca": []
    },
    {
        "materia": "Física 1 Experimental",
        "tranca": []
    },
    {
        "materia": "IAL",
        "tranca": ["TED 1", "PED 1"]
    },
    {
        "materia": "PE",
        "tranca": []
    },
    {
        "materia": "DS",
        "tranca": []
    },
    {
        "materia": "MNE",
        "tranca": []
    },
    {
        "materia": "Econômica",
        "tranca": ["GPQ"]
    },
    {
        "materia": "HC",
        "tranca": []
    },
    {
        "materia": "TED 1",
        "tranca": ["FAC"]
    },
    {
        "materia": "PED 1",
        "tranca": ["FAC"]
    },
    {
        "materia": "OO",
        "tranca": ["PI 1", "MDS", "Paradigmas"]
    },
    {
        "materia": "MD1",
        "tranca": ["MD2"]
    },
    {
        "materia": "PI 1",
        "tranca": ["PI 2"]
    },
    {
        "materia": "MD2",
        "tranca": ["SBGD 1"]
    },
    {
        "materia": "FAC",
        "tranca": ["FSO"]
    },
    {
        "materia": "EDA 1",
        "tranca": ["EDA 2", "PA", "Compiladores"]
    },
    {
        "materia": "MDS",
        "tranca": ["Requisitos", "Testes"]
    },
    {
        "materia": "GPQ",
        "tranca": ["Qualidade"]
    },
    {
        "materia": "IHC",
        "tranca": ["Qualidade"]
    },
    {
        "materia": "Requisitos",
        "tranca": ["Arquitetura"]
    },
    {
        "materia": "SGBD 1",
        "tranca": ["SGBD 2"]
    },
    {
        "materia": "FSO",
        "tranca": ["FRC", "Embarcados"]
    },
    {
        "materia": "Compiladores",
        "tranca": ["Paradigmas"]
    },
    {
        "materia": "EDA 2",
        "tranca": ["PSPD"]
    },
    {
        "materia": "PA",
        "tranca": []
    },
    {
        "materia": "SGBD 2",
        "tranca": []
    },
    {
        "materia": "FRC",
        "tranca": ["PSPD"]
    },
    {
        "materia": "Arquitetura",
        "tranca": ["Paradigmas", "TPPE"]
    },
    {
        "materia": "Testes",
        "tranca": ["GCES", "TPPE"]
    },
    {
        "materia": "Qualidade",
        "tranca": []
    },
    {
        "materia": "TPPE",
        "tranca": ["EPS"]
    },
    {
        "materia": "Paradigmas",
        "tranca": []
    },
    {
        "materia": "Embarcados",
        "tranca": []
    },
    {
        "materia": "PSPD",
        "tranca": []
    },
    {
        "materia": "EPS",
        "tranca": ["PI 2"]
    },
    {
        "materia": "GCES",
        "tranca": []
    },
    {
        "materia": "Estágio",
        "tranca": []
    },
    {
        "materia": "TCC 1",
        "tranca": ["TCC 2"]
    },
    {
        "materia": "PI 2",
        "tranca": []
    },
    {
        "materia": "TCC 2",
        "tranca": []
    }
];

const edges = [];

for (const subject of data) {
    if (subject.tranca.length === 0) {
        edges.push([subject.materia, ""]);
    } else {
        for (const dependency of subject.tranca) {
            edges.push([subject.materia, dependency]);
        }
    }
}


const graph = new Graph(edges);
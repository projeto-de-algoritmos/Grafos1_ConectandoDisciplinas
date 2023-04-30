class Graph{

    constructor(edges, directed = false) {
        this.directed = directed;
        this.neighbors = {};
        this.addEdges(edges);
    }

    addEdges(edges) {
       // implementar logica para adicionar arestas
    }

    getEdges() {
        // implementar logica para obter arestas
    }

    getVertices() {
        // implementar logica para obter vertices
    }

    edgeExists(edge) {
       // implementar logica para verificar se aresta existe
    }
}

function findRelatedVertices(graph, vertex) {
    // implementar logica para obter dependentes
}

function findDependenciesInGraph(graph, vertex) {
    // implementar logica para obter dependencias
}

const data = [
    {
        "materia": "Algoritmos e Programação de Computadores",
        "tranca": ["Desenvolvimento de Software", "Estruturas de Dados 1", "Orientação a Objetos"]
    },
    {
        "materia": "Desenho Industrial Assistido por Computador",
        "tranca": ["Interação Humano Computador"]
    },
    {
        "materia": "Engenharia e Ambiente",
        "tranca": []
    },
    {
        "materia": "Introdução à Engenharia",
        "tranca": []
    },
    {
        "materia": "Cálculo 1",
        "tranca": ["Probabilidade e Estatística Aplicada à Engenharia", "Projeto e Análise de Algoritmos", "Cálculo 2"]
    },
    {
        "materia": "Cálculo 2",
        "tranca": ["Métodos Numéricos para Engenharia"]
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
        "materia": "Introdução à Álgebra Linear",
        "tranca": ["Teoria de Eletrônica Digital 1", "Prática de Eletrônica Digital 1"]
    },
    {
        "materia": "Probabilidade e Estatística Aplicada à Engenharia",
        "tranca": []
    },
    {
        "materia": "Desenvolvimento de Software",
        "tranca": []
    },
    {
        "materia": "Métodos Numéricos para Engenharia",
        "tranca": []
    },
    {
        "materia": "Engenharia Econômica",
        "tranca": ["Gestão da Produção e Qualidade"]
    },
    {
        "materia": "Humanidades e Cidadania",
        "tranca": []
    },
    {
        "materia": "Teoria de Eletrônica Digital 1",
        "tranca": ["Fundamentos de Arquiteturas de Computadores"]
    },
    {
        "materia": "Prática de Eletrônica Digital 1",
        "tranca": ["Fundamentos de Arquiteturas de Computadores"]
    },
    {
        "materia": "Orientação a Objetos",
        "tranca": ["Projeto Integrador de Engenharia 1", "Métodos de Desenvolvimento de Software", "Paradigmas de Programação"]
    },
    {
        "materia": "Matemática Discreta 1",
        "tranca": ["Matemática Discreta 2"]
    },
    {
        "materia": "Projeto Integrador de Engenharia 1",
        "tranca": ["Projeto Integrador de Engenharia 2"]
    },
    {
        "materia": "Matemática Discreta 2",
        "tranca": ["Sistemas de Banco de Dados 1"]
    },
    {
        "materia": "Fundamentos de Arquiteturas de Computadores",
        "tranca": ["Fundamentos de Sistemas Operacionais"]
    },
    {
        "materia": "Estruturas de Dados 1",
        "tranca": ["Estruturas de Dados 2", "Projeto e Análise de Algoritmos", "Compiladores 1"]
    },
    {
        "materia": "Métodos de Desenvolvimento de Software",
        "tranca": ["Requisitos de Software", "Testes de Software"]
    },
    {
        "materia": "Gestão da Produção e Qualidade",
        "tranca": ["Qualidade de Software 1"]
    },
    {
        "materia": "Interação Humano Computador",
        "tranca": ["Qualidade de Software 1"]
    },
    {
        "materia": "Requisitos de Software",
        "tranca": ["Arquitetura e Desenho de Software"]
    },
    {
        "materia": "Sistemas de Banco de Dados 1",
        "tranca": ["Sistemas de Banco de Dados 2"]
    },
    {
        "materia": "Fundamentos de Sistemas Operacionais",
        "tranca": ["Fundamentos de Redes de Computadores", "Fundamentos de Sistemas Embarcados"]
    },
    {
        "materia": "Compiladores 1",
        "tranca": ["Paradigmas de Programação"]
    },
    {
        "materia": "Estruturas de Dados 2",
        "tranca": ["Programação para Sistemas Paralelos e Distribuídos"]
    },
    {
        "materia": "Projeto e Análise de Algoritmos",
        "tranca": []
    },
    {
        "materia": "Sistemas de Banco de Dados 2",
        "tranca": []
    },
    {
        "materia": "Fundamentos de Redes de Computadores",
        "tranca": ["Programação para Sistemas Paralelos e Distribuídos"]
    },
    {
        "materia": "Arquitetura e Desenho de Software",
        "tranca": ["Paradigmas de Programação", "Técnicas de Programação em Plataformas Emergentes"]
    },
    {
        "materia": "Testes de Software",
        "tranca": ["Gerência de Configuração e Evolução de Software", "Técnicas de Programação em Plataformas Emergentes"]
    },
    {
        "materia": "Qualidade de Software 1",
        "tranca": []
    },
    {
        "materia": "Técnicas de Programação em Plataformas Emergentes",
        "tranca": ["Engenharia de Produto de Software"]
    },
    {
        "materia": "Paradigmas de Programação",
        "tranca": []
    },
    {
        "materia": "Fundamentos de Sistemas Embarcados",
        "tranca": []
    },
    {
        "materia": "Programação para Sistemas Paralelos e Distribuídos",
        "tranca": []
    },
    {
        "materia": "Engenharia de Produto de Software",
        "tranca": ["Projeto Integrador de Engenharia 2"]
    },
    {
        "materia": "Gerência de Configuração e Evolução de Software",
        "tranca": []
    },
    {
        "materia": "Estágio Supervisionado",
        "tranca": []
    },
    {
        "materia": "Trabalho de Conclusão de Curso 1",
        "tranca": ["Trabalho de Conclusão de Curso 2"]
    },
    {
        "materia": "Projeto Integradorde Engenharia 2",
        "tranca": []
    },
    {
        "materia": "Trabalho de Conclusão de Curso 2",
        "tranca": []
    }
];







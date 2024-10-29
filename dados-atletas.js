class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return 'Infantil';
        } else if (this.idade >= 12 && this.idade <= 13) {
            return 'Juvenil';
        } else if (this.idade >= 14 && this.idade <= 15) {
            return 'Intermediário';
        } else if (this.idade >= 16 && this.idade <= 30) {
            return 'Adulto';
        } else {
            return 'Sem categoria';
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        const notasOrdenadas = this.notas.sort((a, b) => a - b);
        const notasComputadas = notasOrdenadas.slice(1, 4); // Remove maior e menor nota
        const soma = notasComputadas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasComputadas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.obtemNomeAtleta()}`);
        console.log(`Idade: ${this.obtemIdadeAtleta()}`);
        console.log(`Peso: ${this.obtemPesoAtleta()}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Notas: ${this.obtemNotasAtleta().join(', ')}`);
        console.log(`Categoria: ${this.obtemCategoria()}`);
        console.log(`IMC: ${this.obtemIMC()}`);
        console.log(`Média válida: ${this.obtemMediaValida()}`);
    }
}

// Exemplo de uso
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
atleta.exibirInformacoes();

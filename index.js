let jogos = [
    {
        palavras: ['agi', 'moer', 'diz', 'mola', 'deu', 'comer', 'for', 'traje', 'tuas', 'base', 'doa', 'abano'],
        letras: ['q', 'e', 's', 'c', 'h', 'u', 'i', 'b', 't', 'x', 'l', 'm', 'f', 'o', 'p', 'g', 'j', 'n']
    },
    {
        palavras: ['bem', 'data', 'sua', 'lava', 'seu', 'secar', 'lua', 'poupa', 'roxo', 'grua', 'tal', 'raiar'],
        letras: ['i', 'o', 'x', 'c', 'h', 'p', 'j', 'z', 't', 'n', 'b', 'l', 'q', 'u', 'd', 'g', 'v', 's']
    },
    {
        palavras: ['ler', 'bata', 'teu', 'cada', 'mel', 'treze', 'fim', 'aluga', 'fito', 'jure', 'amo', 'sonha'],
        letras: ['o', 'n', 't', 'c', 'u', 'b', 'd', 'g', 'z', 'i', 'j', 'l', 'q', 'h', 'p', 's', 'r', 'v']
    },
    {
        palavras: ['ler', 'bata', 'teu', 'cada', 'mel', 'treze', 'fim', 'aluga', 'fito', 'jure', 'amo', 'sonha'],
        letras: ['o', 'n', 't', 'c', 'u', 'b', 'd', 'g', 'z', 'i', 'j', 'l', 'q', 'h', 'p', 's', 'r', 'a']
    }
]

jogos.forEach((jogo, i) => {

    jogo.palavras.forEach(palavra => {
        let palavra_letras = palavra.split('')
        let state = true

        palavra_letras.forEach(l => {
            if (!state) return;

            if (!jogo.letras.includes(l)) {
                state = false
                return;
            }
        })

        if (state) console.log(`Jogo ${i+1}:\n    A palavra ${palavra.toUpperCase()} está completa.\n`)
    });
})
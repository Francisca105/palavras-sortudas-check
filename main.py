palavras = []
letras = []

for i in range(0, 12):
    palavras.append(input('Digite uma palavra do jogo: '))

for i in range(0, 18):
    letras.append(input('Digite uma letra do jogo: '))

for palavra in palavras:
    state = True

    for letra in palavra:
        if letra not in letras:
            state = False
    
    if state:
        print(f'A palavra "{palavra}" pode ser formada com as letras dadas.')

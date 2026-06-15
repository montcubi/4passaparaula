# Instruccions del joc Passaparaula

## Objectiu

Aquesta aplicació permet fer un joc de repàs de Física i Química de 4t d'ESO amb format de rosco A-Z. Està pensada per utilitzar-se a classe, especialment en una pissarra digital.

## Fitxers del projecte

- `index.html`: estructura principal de l'aplicació.
- `style.css`: disseny visual del joc.
- `script.js`: funcionament del joc, preguntes i lògica de les rondes.

## Com obrir el joc

1. Obre la carpeta del projecte.
2. Fes doble clic a `index.html`.
3. El joc s'obrirà al navegador.

No cal instal·lar res ni utilitzar internet. És una aplicació feta només amb HTML, CSS i JavaScript.

## Funcionament general

1. Selecciona la ronda:
   - Classificatòria
   - Semifinal A
   - Semifinal B
   - Final
2. Indica el temps total de la partida.
3. Prem `Començar partida`.
4. Apareixerà la lletra activa i la seva pista.
5. Escriu la resposta i prem `Comprovar resposta`.

## Botons disponibles

- `Comprovar resposta`: valida la resposta escrita.
- `Passaparaula`: deixa la pregunta pendent i la torna a posar al final de la cua.
- `Marcar com correcta`: marca manualment la lletra com a encertada.
- `Marcar com incorrecta`: marca manualment la lletra com a errònia.
- `Reiniciar partida`: torna el joc a l'estat inicial.

## Colors de les lletres

- Verd: resposta correcta.
- Vermell: resposta incorrecta.
- Blau clar: pendent.
- Gris/blau fosc: passada amb `Passaparaula`.
- Groc: lletra actual.

## Informació que mostra la pantalla

- Ronda activa
- Lletra actual
- Número de pregunta
- Pista o definició
- Puntuació
- Encerts
- Errors
- Preguntes pendents
- Temps restant

## Criteri de correcció

El joc accepta les respostes de manera flexible:

- no diferencia entre majúscules i minúscules
- tolera accents
- admet algunes respostes alternatives definides al codi

Per exemple, una resposta amb o sense accent es pot considerar equivalent si està prevista a `script.js`.

## Final de la partida

La partida acaba quan passa una d'aquestes dues coses:

- no queden preguntes pendents
- s'acaba el temps

En acabar, la pantalla mostra la puntuació final.

## Ús recomanat a classe

- Utilitzar una ronda diferent per a cada fase del concurs.
- Fer que un alumne o equip respongui oralment mentre una altra persona escriu.
- Utilitzar els botons manuals si el professor vol validar respostes equivalents no previstes.

## Personalització

Si vols canviar preguntes o respostes:

1. Obre `script.js`.
2. Busca l'objecte `questionSets`.
3. Modifica les pistes o les respostes de cada ronda.

## Nota

El rosco utilitza les 26 lletres A-Z. En alguns casos, la paraula associada a la lletra és un concepte científic que no necessàriament comença exactament per la grafia catalana habitual, però s'ha mantingut així per adaptar-se al format del joc.

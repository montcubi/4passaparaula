# Instruccions del joc Passaparaula

## Objectiu

Aquesta aplicació permet fer una competició de Passaparaula de Física i Química de 4t d'ESO amb dos equips:

- un rosco per a l'equip A
- un rosco diferent per a l'equip B

Cada equip té les seves pròpies paraules i el seu propi temps.

## Fitxers del projecte

- `index.html`: estructura principal de l'aplicació
- `style.css`: disseny visual del joc
- `script.js`: lògica del joc, torns, roscos i bancs de preguntes

## Com obrir el joc

1. Obre la carpeta del projecte.
2. Fes doble clic a `index.html`.
3. El joc s'obrirà al navegador.

No cal instal·lar res ni connectar-se a internet.

## Configuració inicial

Abans de començar, cal indicar:

- la ronda
- el temps per equip
- el nom de l'equip A
- el nom de l'equip B

Les rondes disponibles són:

- Classificatòria
- Semifinal A
- Semifinal B
- Final

## Funcionament del joc

1. Prem `Començar partida`.
2. Comença l'equip A.
3. Es mostra la lletra activa del seu rosco i la pista corresponent.
4. L'equip respon escrivint una sola paraula.
5. Després de respondre o passar, el torn canvia a l'altre equip.
6. El joc continua fins que no queden preguntes o s'acaba el temps.

## Botons disponibles

- `Comprovar resposta`: valida la resposta escrita
- `Passaparaula`: deixa la lletra pendent i la torna al final de la cua del mateix equip
- `Marcar com correcta`: correcció manual positiva
- `Marcar com incorrecta`: correcció manual negativa
- `Reiniciar partida`: torna el joc a l'estat inicial

## Colors de les lletres

- Verd: correcta
- Vermell: incorrecta
- Blau clar: pendent
- Gris: passada amb `Passaparaula`
- Groc: lletra activa

## Informació que es mostra

- ronda activa
- equip que té el torn
- lletra actual
- pista actual
- encerts de l'equip A
- errors de l'equip A
- pendents de l'equip A
- temps de l'equip A
- encerts de l'equip B
- errors de l'equip B
- pendents de l'equip B
- temps de l'equip B
- puntuació dels dos equips

## Criteri de correcció

El joc accepta les respostes de manera flexible:

- no diferencia entre majúscules i minúscules
- tolera accents
- admet variants com `joule`, `joules` i `juls`

Les respostes estan pensades perquè normalment siguin d'una sola paraula.

## Bancs de preguntes

Cada ronda assigna un banc diferent a cada equip.

En aquesta versió, com que hi ha 4 bancs disponibles, s'han distribuït així:

- Classificatòria: banc 1 per a l'equip A i banc 2 per a l'equip B
- Semifinal A: banc 3 per a l'equip A i banc 4 per a l'equip B
- Semifinal B: banc 2 per a l'equip A i banc 1 per a l'equip B
- Final: banc 4 per a l'equip A i banc 3 per a l'equip B

Si vols una assignació diferent, només cal canviar-la a `script.js`.

## Personalització

Si vols canviar paraules, pistes o distribució de rondes:

1. Obre `script.js`
2. Busca `BANKS`
3. Modifica les pistes i respostes
4. Si cal, modifica també `ROUND_ASSIGNMENTS`

## Tipus de pistes afegides

En aquesta versió també hi ha pistes del tipus:

- element químic del període 2 o 3 i d'un grup concret
- vocabulari de formulació
- vocabulari de nomenclatura
- conceptes com `valència`

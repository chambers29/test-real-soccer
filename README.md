# test-real-soccer

Prosty setup pod HaxBall Headless Host z customowa mapa wpisana bezposrednio w `headless-host.js`.

## Co jest w repo

- `headless-host.js` - samowystarczalny skrypt do uruchomienia na stronie headless hosta.
- `maps/` - referencyjne pliki `.hbs`, z ktorych mozna kopiowac zawartosc do `headless-host.js`.

## Jak tego uzyc

1. Otworz `https://html5.haxball.com/headless`.
2. Otworz DevTools, wklej zawartosc `headless-host.js` i uruchom.
3. Przejdz recaptcha lub ustaw token w konfiguracji skryptu.

## Konfiguracja mapy

W `headless-host.js` zmien:

- `CUSTOM_STADIUMS` jesli chcesz podmienic lub dodac customowe mapy
- `defaultCustomStadium` jesli chcesz startowac od innej mapy
- `roomName`, `maxPlayers`, `token` i pozostale ustawienia pokoju

Skrypt laduje mape przez `room.setCustomStadium(...)`, a nie przez `setDefaultStadium(...)`, bo customowa mapa musi byc przekazana jako tekst.

## Komendy czatu

- `!map classic` - ustawia mape zdefiniowana w `CUSTOM_STADIUMS`
- `!reloadmap` - przeladowuje aktualnie ustawiona mape

Zmiana stadionu wymaga, zeby mecz nie byl w trakcie. Skrypt sam zatrzymuje gre przed zmiana mapy.

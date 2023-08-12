# Rugby Data Paraguay

Backend project.

Author: Rodrigo Centurión

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Versiones](#versiones)

## Installation

1. Clone the repository:
```
git clone https://github.com/Centurion95/rugby-data-paraguay-api
```

2. Install dependencies:
```
cd rugby-data-paraguay-api
npm install
```

3. Set up the environment variables:
- Create a `.env` file based on the `.env.example` file.
- Update the environment variables with your own values.

## Usage

1. Start the server:
```
npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Versiones

#### rc95 - 11/08/2023 23:50
- Cambios para deploy en `vercel`

#### rc95 - 05/07/2023
- Cambios en el `README`

#### rc95 - 16/06/2023
- Se implementa `jsonwebtoken`
- Se implementa un propotipo de `Login`
- Se implementa:
  - /api/estadios

#### rc95 - 09/06/2023
- Se implementa:
  - /api/jugadores
  - /api/torneos
  - /api/torneo_detalles

#### rc95 - 08/06/2023
- Se implementa:
  - /api/clubes
  - /api/tipos_contacto
  - /api/tipos_identificador
  - /api/personas

#### rc95 - 06/06/2023
- Se implementa:
  - /api/paises
  - /api/estados
  - /api/ciudades

#### rc95 - 03/06/2023
- Primer commit
- Prototipo de API REST
- Estructura preparada para modelos de MongoDB
- Se crea una función inicial para prepoblar la base
- Estructura app - routes - controller
- Se implementa:
  - /api/continentes
- Se crea el archivo `utils.js` para formateo de fechas

# Magic Transporters

Magic Transporters is a Node.js application that manages virtual movers and items, utilizing the power of "virtual magic" to handle transportation tasks.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Introduction

Magic Transporters aims to provide a simple REST API to manage magic movers and items. These movers can be loaded with items, sent on missions, and their activities can be tracked.

## Features

- Add Magic Movers
- Add Magic Items
- Load Movers with Items
- Start and End Missions for Movers
- Track Movers with the Most Missions Completed

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/samaralkhateb/Magic-Transporters.git
    cd magic-transporters
    ```

2. Install dependencies:

    ```bash
    npm init -y
    npm install
    npm install -D typescript
    npm install mongoose
    npm install mongoose @types/mongoose
    npm install express typescript @types/express ts-node-dev
    npm i express
    npm i -D @types/express
    ```

3. Set up your MongoDB connection in `src/db.ts`:

    ```typescript
    const MONGO_URL = 'your-mongodb-connection-string';
    ```



## API Postman Collection
you can find it in the project folder : ```package-lock.json ```


## Usage

To start the application, use the following command:

```npm start```


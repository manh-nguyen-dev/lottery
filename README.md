Here's a template for your project's README file. Feel free to customize it according to your specific needs:

---

# Lottery Application

This project is a lottery management system developed using Node.js, React, and MySQL. It includes backend and frontend components, with WebSocket support for real-time updates.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Docker Setup](#docker-setup)
- [API Endpoints](#api-endpoints)
- [WebSocket Integration](#websocket-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Backend**: Node.js with Express, Sequelize for ORM, and MySQL for the database.
- **Frontend**: React application served with Nginx.
- **Real-time Updates**: WebSocket integration for live notifications.
- **Docker**: Containerization for easy deployment and management.

## Technologies Used

- **Backend**: Node.js, Express, Sequelize, MySQL
- **Frontend**: React, Nginx
- **WebSocket**: `ws` library for real-time communication
- **Docker**: For containerization

## Setup Instructions

### Prerequisites

- Docker
- Docker Compose

### Local Development

1. **Clone the repository:**

    ```bash
    git clone https://github.com/manh-nguyen-dev/lottery-app.git
    cd lottery
    ```

2. **Install dependencies:**

    - For the backend:

        ```bash
        cd backend
        npm install
        ```

    - For the frontend:

        ```bash
        cd ../frontend
        npm install
        ```

3. **Run the application:**

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images and start the services defined in the `docker-compose.yml` file.

## Docker Setup

- **Backend**: The backend service runs on port `3000`.
- **Frontend**: The frontend service runs on port `80`.
- **MySQL**: The MySQL service runs on port `3308`, with the database accessible via `mysql:3306`.

## API Endpoints

- **GET /api/results**: Retrieve results by date.
- **POST /api/results**: Create a new result.
- **GET /api/sessions**: Retrieve the most recent sessions.
- **POST /api/sessions**: Create a new session.

Refer to the [backend documentation](./backend/README.md) for detailed API information.

## WebSocket Integration

The backend uses WebSocket for real-time updates. The WebSocket server is configured to listen for connections and broadcast messages to all connected clients.

### Client-Side WebSocket

In the React frontend, WebSocket communication is established as follows:

```javascript
const ws = new WebSocket('ws://103.54.143.110:3000');

// On message received
ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    console.log('Message received:', message);
};

// On error
ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you have suggestions or find bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any sections based on the specifics of your project or any additional features you may have.
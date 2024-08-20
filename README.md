# Lottery Application

This project is a lottery management system developed using Node.js, React, and MySQL. It includes backend and frontend components with WebSocket support for real-time updates.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Docker Setup](#docker-setup)
- [WebSocket Integration](#websocket-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Backend**: Node.js with Express, Sequelize ORM, and MySQL database.
- **Frontend**: React application served with Nginx.
- **Real-time Updates**: WebSocket integration for live notifications.
- **Docker**: Containerized setup for easy deployment and management.

## Technologies Used

- **Backend**: Node.js, Express, Sequelize, MySQL
- **Frontend**: React, Nginx
- **WebSocket**: Socket.IO for real-time communication
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

2. **Build and run the application:**

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images and start the services defined in the `docker-compose.yml` file.

## Docker Setup

- **Backend**: The backend service runs on port `3000`.
- **Frontend**: The frontend service runs on port `8081` (mapped to port `80` in the container).
- **MySQL**: The MySQL service runs on port `3308`, with the database accessible via `mysql:3306`.

## WebSocket Integration

The backend uses Socket.IO for real-time updates. The WebSocket server is configured to listen for connections and broadcast messages to all connected clients.

### Client-Side WebSocket

In the React frontend, WebSocket communication is established as follows:

```javascript
const socket = io('http://localhost:3000');

// On message received
socket.on('message', (data) => {
    console.log('Message received:', data);
});

// On error
socket.on('error', (error) => {
    console.error('WebSocket error:', error);
});
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you have suggestions or find bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
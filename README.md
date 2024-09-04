# My first chat app

A Chat Application using React, Redux, Redux-Saga, and Web Sockets.

## Architecture Overview

This application is a distributed system consisting of two main components:

1. **Node.js Server**:

   - Acts as the backend of the application.
   - Manages client connections, processes requests, and handles data persistence.

2. **React Browser Client**:
   - Serves as the frontend interface.
   - Manages state using [Redux](https://redux.js.org/) and handles side effects with [Redux-Saga](https://redux-saga.js.org/).

### Client-Server Communication

- **WebSockets**: The client and server communicate in real-time using WebSockets, ensuring a responsive and interactive user experience.

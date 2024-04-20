
### Notification Test App README

```markdown
# Notification Test App

## Overview

The Notification Test App is a simple Node.js application designed to test the Notification Service. It connects to the Notification Service using Socket.io and triggers notifications based on priority and custom events to verify the functionality of the service.

## Features

- **Connect to Notification Service**: Connects to the Notification Service using Socket.io.
- **Set Priority**: Sets the notification priority to high.
- **Trigger Notifications**: Triggers high-priority notifications to the Notification Service.
- **Receive Notifications**: Listens for incoming notifications from the Notification Service.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your system.

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/notification-test-app.git
    cd notification-test-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the test application:

    ```bash
    npm start
    ```

The test application will connect to the Notification Service and start testing the notification functionality.

## Usage

### Customization

You can modify the test application code (`index.js`) to test other priority levels and custom event-based triggers as per your requirements.

### Starting the Test Application

Run the following command to start the test application:

```bash
npm start

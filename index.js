const io = require("socket.io-client");

// Connect to the notification service
const socket = io.connect("http://localhost:3000");

// Handle connection
socket.on("connect", () => {
    console.log("Connected to notification service");

    // Set priority
    socket.emit("setPriority", "high");

    // Trigger notification
    socket.emit("triggerNotification", { priority: "low", message: "Test notification low", org: "org1", category: "employee" });
    socket.emit("triggerNotification", { priority: "high", message: "Test notification high", org: "org2", category: "manager" });
    socket.emit("triggerNotification", { priority: "medium", message: "Test notification medium", org: "org3", category: "staff" });
    socket.emit("triggerNotification", { priority: "high", message: "Test notification high2", org: "org4", category: "director" });

    // Listen for notifications
    socket.on("notification", (message) => {
        console.log("Received notification:", message);
    });
});

// Handle disconnection
socket.on("disconnect", () => {
    console.log("Disconnected from notification service");
});

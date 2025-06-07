
# 🛰️ MQTT Dummy Simulator  
_**Harshana's Dummy MQTT Client for SIT725**_

A lightweight Node.js simulator that emulates multiple BBQ devices by sending MQTT messages to a broker. Useful for testing real-time IoT integrations in the BBQ Tracker project.

---

## 🚀 Features

- Simulates multiple virtual BBQ devices.
- Sends randomised temperature and sensor data every 5 seconds.
- Publishes to the `bbq/status` topic via MQTT.
- Easily configurable device list and broker address.

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) installed.
- An MQTT broker installed and running (default: `mqtt://localhost:1883`).
  - We recommend [**Mosquitto**](https://mosquitto.org/) as a lightweight and widely supported MQTT broker.

---

## 🛠️ Setting Up Mosquitto (MQTT Broker)

If you don’t already have an MQTT broker installed, you can install **Mosquitto** as follows:

### 🔹 On macOS (using Homebrew):

```bash
brew install mosquitto
brew services start mosquitto
```

### 🔹 On Ubuntu/Debian:

```bash
sudo apt update
sudo apt install mosquitto mosquitto-clients
sudo systemctl enable mosquitto
sudo systemctl start mosquitto
```

### 🔹 On Windows:

Download the installer from the official site:  
👉 https://mosquitto.org/download/

After installation, start the Mosquitto broker using:

```cmd
mosquitto
```

---

## ✅ Verifying Mosquitto is Running

To check that the broker is working, run the following in a new terminal:

```bash
mosquitto_sub -h localhost -t bbq/status
```

Then start the MQTT dummy client. You should see the published messages in the subscriber terminal.

---

## 📦 Installation

```bash
git clone https://github.com/your-username/MQTT_dummy.git
cd MQTT_dummy
npm install
```

---

## ▶️ Usage

Start the MQTT simulator:

```bash
node mqttClient.js
```

You should see terminal output showing status messages being published from each simulated device.

---

## ⚙️ Configuration

- **MQTT Broker URL**:  
  To change the broker address, update this line in `mqttClient.js`:

  ```js
  const client = mqtt.connect('mqtt://localhost:1883');
  ```

- **Device IDs**:  
  Modify the `deviceIds` array in `mqttClient.js` to simulate different or more devices:

  ```js
  const deviceIds = ['bbq-001', 'bbq-002', 'bbq-003'];
  ```

- **Message Format**:  
  You can customise the message payload structure in the `setInterval()` function where `statusMessage` is constructed.

---

## 📚 Dependencies

- [`mqtt`](https://www.npmjs.com/package/mqtt) – used for MQTT communication.
- [`axios`](https://www.npmjs.com/package/axios) – installed, but not currently in use.

---

## 📝 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

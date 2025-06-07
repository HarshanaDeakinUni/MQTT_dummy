const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883'); // Use your broker address

const deviceIds = ['device-001', 'device-002', 'device-003', 'device-004']; // Simulated devices

client.on('connect', () => {
  console.log('✅ Simulator connected to MQTT broker');

  // Simulate data every 5 seconds
  setInterval(() => {
    deviceIds.forEach(deviceId => {
      const data = {
        deviceId,
        sim: `SIM-${Math.floor(Math.random() * 1000000)}`,
        temperature: +(250 + Math.random() * 50).toFixed(2),
        HotPlate1Temp: +(250 + Math.random() * 50).toFixed(2),
        HotPlate2Temp: +(250 + Math.random() * 50).toFixed(2),
        ShellTemp: +(200 + Math.random() * 40).toFixed(2),
        sensor: {
          Voltage: +(11 + Math.random() * 2).toFixed(2),
          SignalStrength: -Math.floor(50 + Math.random() * 30)
        }
      };

      client.publish('bbq/status', JSON.stringify(data));
      console.log(`📤 Sent data from ${deviceId}`);
    });
  }, 5000); // Every 5 seconds
});

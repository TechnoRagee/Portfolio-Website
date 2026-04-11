const dns = require('dns');

// Force using Google Public DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log("Testing DNS resolution via Google DNS (8.8.8.8)...");

dns.resolveSrv('_mongodb._tcp.cluster0.vzbi039.mongodb.net', (err, addresses) => {
  if (err) {
    console.error("SRV Lookup Failed (8.8.8.8):", err.message);
  } else {
    console.log("SRV Addresses found (8.8.8.8):", addresses);
  }
});

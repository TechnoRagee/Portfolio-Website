const dns = require('dns');

console.log("Testing DNS resolution for MongoDB Atlas...");

dns.resolveSrv('_mongodb._tcp.cluster0.vzbi039.mongodb.net', (err, addresses) => {
  if (err) {
    console.error("SRV Lookup Failed:", err.message);
    
    // Try regular A record lookup
    dns.resolve4('cluster0.vzbi039.mongodb.net', (err2, addresses2) => {
      if (err2) {
        console.error("A Record Lookup Failed:", err2.message);
      } else {
        console.log("A Record found:", addresses2);
      }
    });
  } else {
    console.log("SRV Addresses found:", addresses);
  }
});

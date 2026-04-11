const fs = require('fs');

async function seed() {
  try {
    console.log('Reading seed.json...');
    const seedData = JSON.parse(fs.readFileSync('./seed.json', 'utf8'));
    
    console.log('Sending data to API...');
    const response = await fetch('http://localhost:5000/api/data/seed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seedData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Seeding Success:', result.message);
      console.log(`📊 Result: Projects: ${result.projectCount}, Skills: ${result.skillCount}`);
      process.exit(0);
    } else {
      console.error('❌ Seeding Failed:', result.error);
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Error during seeding:', err.message);
    process.exit(1);
  }
}

seed();

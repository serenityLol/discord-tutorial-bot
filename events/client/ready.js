module.exports = client => {
  let botStatus = [
    `CharmingSquad Server!`,
]

    setInterval(function() {
    let status = botStatus[Math.floor(Math.random() * botStatus.length)];
    client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

    client.user.setUsername('Charming Utilities'); // sets the bots name
    client.user.setStatus("dnd"); // sets the bots status
    
  console.log(`Hello ${client.user.username} is now online!`); // consoles logs this when bot is turned on
   
};

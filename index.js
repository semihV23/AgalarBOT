var mineflayer = require("mineflayer");
var db = require("quick.db");

var ayar = {
  host: "agalar-sunucusu.tk", //Sunucu IPnizi "" arasına giriniz.
  port: 25565, //Sunucu portunuzu giriniz. Genellikle 25565 olarak ayarlıdır.
  username: "AgalarBOT", //Sunucuya giriş yapacak bot isminizi "" arasına girin.
  version: false //Burası böyle kalsın değiştirmeyin.
};

var bot = mineflayer.createBot(ayar);
  
bot.on("chat", function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState("sprint", true);
  }
  setInterval(intervalFunc, 7000);
 
//Bot Mesaj
if (automessage == true) {
setInterval(() => {
  bot.chat("/gamemode spectator"); // değiştirmek çok basit '' arasındaki yazıyı değiştirin yeter
}, 20000);
}
   
});

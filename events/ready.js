const { ActivityType } = require("discord.js");
const client = require("../index");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    name: ("EmiWn ❤️ S T A R", "EmiWn 💛 S T A R", "EmiWn 💚 S T A R", "EmiWn 💜 S T A R", "EmiWn 💙 S T A R", "EmiWn 🤍 S T A R", "EmiWn 🧡 S T A R", "EmiWn 🖤 S T A R", "EmiWn 🤎 S T A R"),
    type: ActivityType.Listening,
  });

  // loading database
  await require("../handlers/Database")(client);

  // loading dashboard
  require("../server");

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild);
  });
});

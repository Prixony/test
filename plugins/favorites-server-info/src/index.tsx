
import { metro } from "@unbound-app/api";

const GuildStore = metro.findByProps("getGuild");
const ChannelStore = metro.findByProps("getChannel");

function getFavoriteServerInfo(channelId: string) {
  const channel = ChannelStore?.getChannel(channelId);
  if (!channel?.guild_id) return null;

  const guild = GuildStore?.getGuild(channel.guild_id);
  if (!guild) return null;

  return {
    serverName: guild.name,
    serverIcon: guild.icon,
    guildId: guild.id,
  };
}

export default {
  start() {
    console.log("[Favorites Server Info] Started");
  },

  stop() {
    console.log("[Favorites Server Info] Stopped");
  },
};

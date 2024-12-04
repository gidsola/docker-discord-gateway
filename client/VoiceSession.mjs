/** 
 * @class VoiceSession
 * @description Class containing active voice session environment 
 */
class VoiceSession {
  constructor() {

    /** Connect to voice gateway? 
     * @type {boolean}
     */
    this.voiceConn = false ?? true;

    /** Interval timer for heartbeat control. 
     * @type {NodeJS.Timer}
     */
    this.vhb = (() => { });

    /** Voice Heartbeat process, Ping/false, Pong/true.
     * @type {boolean}
     */
    this.vhbACK = true ?? false;

    /** Voice Sequence number 
     * @type {number}
     */
    this.vSeq = 0;

    this.voiceState = {

      storeVSession: (payloadData) => {
        //console.info("storeVSession", payloadData);
        this.voiceSession = {
          member: {
            user: {
              username: payloadData?.member.user.username,
              public_flags: payloadData?.member.user.public_flags,
              id: payloadData?.member.user.id,
              global_name: payloadData?.member.user.global_name,
              display_name: payloadData?.member.user.display_name,
              discriminator: payloadData?.member.user.discriminator,
              bot: payloadData?.member.user.bot,
              avatar_decoration_data: payloadData?.member.user.avatar_decoration_data,
              avatar: payloadData?.member.user.avatar
            },
            roles: payloadData?.member.roles,
            premium_since: payloadData?.member.premium_since,
            pending: payloadData?.member.pending,
            nick: payloadData?.member.nick,
            mute: payloadData?.member.mute,
            joined_at: payloadData?.member.joined_at,
            flags: payloadData?.member.flags,
            deaf: payloadData.member.deaf,
            communication_disabled_until: payloadData?.member.communication_disabled_until,
            avatar: payloadData?.member.avatar
          },
          user_id: payloadData?.user_id,
          suppress: payloadData?.suppress,
          session_id: payloadData?.session_id,
          self_video: payloadData?.self_video,
          self_mute: payloadData?.self_mute,
          self_deaf: payloadData?.self_deaf,
          request_to_speak_timestamp: payloadData?.request_to_speak_timestamp,
          mute: payloadData?.mute,
          guild_id: payloadData?.guild_id,
          deaf: payloadData?.deaf,
          channel_id: payloadData?.channel_id
        }
        return true;
      },

      serverReady: (payloadData) => {
        //console.info("server ready", payloadData);
        this.voiceSessionReady = {
          streams: payloadData?.streams,
          ssrc: payloadData?.ssrc,
          port: payloadData?.port,
          modes: payloadData?.modes,
          ip: payloadData?.ip,
          experiments: payloadData?.experiments
        }
      },

      sessionDesc: (payloadData) => {
        //console.info("sessionDesc", payloadData);
        this.sessionDescription = {
          mode: payloadData?.mode,
          secret_key: payloadData?.secret_key
        }
      },
      resume: () => { },
      restart: () => { },

    };

  }
};

export default VoiceSession;

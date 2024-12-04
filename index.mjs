import Client from './client/Client.mjs';
import DiscordGateway from "./gateway/Gateway.mjs";
import Session from './client/DefaultSession.mjs';
import CacheHandler from './client/CacheHandler.mjs';

class GatewayController {
  /**
   * @param {string} token 
   * @param {string} auid
   * @param {string} uuid
   * @param {string} datadir
   */
  constructor(token, auid, uuid, datadir) {
    /**
     * @type {string}
     */
    this.token = token;
    /**
     * @type {string}
     */
    this.auid = auid;
    /**
     * @type {string}
     */
    this.uuid = uuid;
    /**
     * @type {string}
     */
    this.datadir = datadir;

    this.Session = new Session();
    this.CacheHandler = new CacheHandler();
    this.Client = new Client(this.token, this.auid, this.uuid, '/app', this.Session, this.CacheHandler);
    this.Gateway = new DiscordGateway(this.token, this.uuid, this.Client);
  };

  async start() { await this.Gateway.initialize(); };

};
export default GatewayController;

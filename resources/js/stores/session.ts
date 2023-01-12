/* Session store */
import { observable, action, computed, flow } from "mobx";

export class User {
  /** ID */
  readonly id: string;
  /** 用户邮箱 */
  readonly email: string;
  /** 用户昵称 */
  readonly nickname: string;
  /** 用户头像 */
  readonly image: string;
  /** 最后登录时间 */
  readonly lastLoginTime: string;
  /** 登录次数 */
  readonly loginCount: number;
  /** 用户 App 信息列表 */
  readonly apps: {[appId: string]: {
    is_admin: boolean;
    roles: Array<string>;
    config: { [key: string]: any };
    profile: { [key: string]: any };
  }};

  /** 用户 Grooups 列表 */
  readonly groups: Array<string>;

  constructor(data: any) {
    this.id = data['id'];
    this.email = data['email'];
    this.nickname = data['nickname'];
    this.image = data['image'];
    this.lastLoginTime = data['last_login_time'];
    this.loginCount = data['login_count'];
    this.apps = data['apps'];
    this.groups = data['groups'] || [];
  }

}

export class SessionStore {
  @observable session_id = '';
  @observable islogin = false;
  @observable user: User | null = null;

  /** 判断用户是否已登录 */
  @computed get loggedIn() {
    return this.islogin;
  }

  /** 获取 session id */
  @computed get sessionId() {
    if (this.session_id) {
      return this.session_id;
    }
    // 从 localStorage 取回
    const sid = localStorage.getItem('sid');
    if (sid) {
      this.session_id = sid;
      return sid;
    } else {
      return null;
    }
  }

  /** 用户登陆登录 */
  @action async login(data: any) {
    // 写入 localStorage
    const sessionId = data.id;
    localStorage.setItem('sid', sessionId);
    this.session_id = sessionId;
    this.user = new User(data.user);
    this.islogin = true;

  }

  /** 退出登录 */
  @action logout() {
    // 清空 localStorage
    localStorage.removeItem('sid');
    this.session_id = '';
    // this.staff = null;
    this.islogin = false;

    window.location.reload();
  }

  /** 校验用户信息 */
  auth = flow(function* (this: SessionStore) {
    // 当前是登陆状态
    if (this.loggedIn) {
      return true;
    }
    return false;
  });
};

const session = new SessionStore();

export default session;

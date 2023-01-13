/* Session store */
import { observable, action, computed, flow } from "mobx";
import Request from "../utils/request";
const client = new Request().request();

export class User {
  /** ID */
  readonly id: string;
  /** 用户邮箱 */
  readonly email: string;
  /** 用户昵称 */
  readonly nickname: string;

  @observable carts: string[];

  constructor(data: any) {
    this.id = data['id'];
    this.email = data['email'];
    this.nickname = data['nickname'];
    this.carts = data['carts'];
  }

  @action async setCart(carts: string[]) {
    // 写入 localStorage
    console.log(carts, 'setCart')
    this.carts = carts;
  }

}

export class SessionStore {
  @observable islogin = false;
  @observable user: User | null = null;
  @observable carts: string[] = [];

  /** 判断用户是否已登录 */
  @computed get loggedIn() {
    return this.islogin;
  }


  /** 用户登陆登录 */
  @action async login(data: any) {
    // 写入 localStorage
    this.user = new User(data.user);
    this.islogin = true;

  }

  /** 退出登录 */
  @action logout() {
    // 清空 localStorage
    localStorage.removeItem('sid');
    this.islogin = false;

    window.location.reload();
  }

  auth = flow(function* (this: SessionStore) {
    // 当前是登陆状态
    if (this.loggedIn) {
      return true;
    }
    try {
      const { data } = yield client.get('/user/info');
      if (data.result) {
        // 用户是登录状态，设置session登录状态
        yield this.login(data.result);
        return true;
      }
    } catch (e) {}
    return false;
  });

  @action async setCart(carts: string[]) {
    // 写入 localStorage
    console.log(carts, 'setCart')
    this.carts = carts;
  }
};

const session = new SessionStore();

export default session;

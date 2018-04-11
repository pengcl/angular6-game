import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {StorageService} from '../services/storage.service';
import {WxService} from '../modules/wx';
import {Config} from '../config';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private storage: StorageService,
              private wx: WxService) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    if (this.storage.get('user')) {// 如果localStorage中存在user;
      return true;
    } else {// 如果localStorage中不存在userId;
      if (this.wx.isWx()) {// 微信环境,查找地址栏参数中是否存在userId;
        if (route.queryParams['userId']) {// 如果地址栏参数存在userId;
          this.storage.set('user', route.queryParams['userId']); // 把userId存入localStorage
          return true;
        } else {// 如果地址栏参数不存在userId
          window.location.href = Config.prefix.api + '/wx/auth?callbackUrl=' + encodeURI(window.location.href);
          return false;
        }
      } else {// 非微信环境,跳转至登录页;
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}

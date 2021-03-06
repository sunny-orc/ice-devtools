// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/index';
import { AboutComponent } from './pages/about/index';

export declare type RoutesModule = RouteModule[];
export interface RouteModule extends Route {
  path: string;
  children?: RoutesModule;
  module?: any;
  component?: any;
}

export const routerConfig: RoutesModule = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

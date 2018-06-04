import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production === true) {
  enableProdMode();
}

const init = () => {
platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => (<any>window).appBootstrap && (<any>window).appBootstrap())
.catch(err => console.error(err));
};

init();

platformBrowserDynamic().onDestroy(() => {
init();
});

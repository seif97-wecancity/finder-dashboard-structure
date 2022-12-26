import { Component, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { map, delay, withLatestFrom } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Infinity Motors';

// For Progressbar
loaders = this.loader.progress$.pipe(
  delay(1000),
  withLatestFrom(this.loader.progress$),
  map((v) => v[1])
);
   
  
  constructor( @Inject(PLATFORM_ID) private platformId: Object ,private translate: TranslateService,private loader: LoadingBarService,private _Router:Router) {
    if (isPlatformBrowser(this.platformId)) {
      translate.setDefaultLang("en");
      translate.addLangs(["en", "ar"]);
    }
  }
  
  ngOnDestroy(){
   
  }
}

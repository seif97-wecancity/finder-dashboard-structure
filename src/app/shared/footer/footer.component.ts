import { Component, DebugElement, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { TranslateService} from '@ngx-translate/core'
import { MENU } from './../header/menu'
import { coreDirectives } from '@agm/core/core.module';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

/**
 * Footer Component
 */
export class FooterComponent implements OnInit {
  public dropdown:object = {} ;
  public language: boolean = false;

  public languages: any[] = [{
    language: this.translate.instant("English"),
    code: 'en',
    type: 'US',
    icon: 'us'
  },{
    language: this.translate.instant("Arabic"),
    code: 'ar',
    type: 'EG',
    icon: 'eg'
  },
 ]

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }
  constructor(private layout:LayoutService,private translate : TranslateService) { }

  ngOnInit(): void {
   
    if( localStorage.getItem('language') == 'en'){
      const elements = document.getElementsByClassName("insertbutton");
      for(let i = 0 ; i <= elements.length ; i++){
         document.getElementsByTagName("button")[i].classList.remove('pull-left')
         document.getElementsByTagName("button")[i].classList.add('pull-right')
      }
    }else {
      const elements = document.getElementsByClassName("insertbutton");
      for(let i = 0 ; i <= elements.length ; i++){
         document.getElementsByTagName("button")[i].classList.remove('pull-right')
         document.getElementsByTagName("button")[i].classList.add('pull-left')
      }
    }
  }
  changeLanguage(lang : any) {
    this.translate.use(lang.code);
    localStorage.setItem('language', lang.code);
    this.selectedLanguage = lang;
    this.layout.language=lang.code
    // console.log(  this.layout.language);
   this.direction(lang);
  }
  
  direction(lang : any){
    if (lang.code=='ar') {  
      this.customizeLayoutType('rtl') 
      const elements = document.getElementsByClassName("insertbutton");
      for(let i = 0 ; i <= elements.length ; i++){
         document.getElementsByTagName("button")[i].classList.remove('pull-right')
         document.getElementsByTagName("button")[i].classList.add('pull-left')
      }
    } else {
      this.customizeLayoutType('ltr') 
      const elements = document.getElementsByClassName("insertbutton");
      for(let i = 0 ; i <= elements.length ; i++){
         document.getElementsByTagName("button")[i].classList.remove('pull-left')
         document.getElementsByTagName("button")[i].classList.add('pull-right')
      }
    }
  }

  public layoutType: string = 'ltr';
  customizeLayoutType(val : any) {
    this.layoutType = val;
    // console.log(val)
    this.layout.config.settings.layout_type = val;
    if(val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
    }
  }
  /**
  * SidebarHide modal
  * @param content modal content
  */
   sidebarShow() {
    document.getElementById('demo-switcher')?.classList.add('show');
    document.querySelector('.vertical-overlay')?.classList.add('show');
  }

  /**
  * SidebarHide modal
  * @param content modal content
  */
  SidebarHide() {
    document.getElementById('demo-switcher')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  ngOnDestroy() {
  
  }

}

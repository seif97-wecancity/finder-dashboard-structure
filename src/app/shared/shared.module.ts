import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Scroll To
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

// directives
import { DisableWritingEnglishDirective } from './directives/disable-writing-english.directive';
import { DisableWritingArabicDirective } from './directives/disable-writing-arabic.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { PaginationModule } from 'ngx-bootstrap/pagination';
// Translate 
import { TranslateModule } from '@ngx-translate/core';
import { LayoutService } from './services/layout.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DisableWritingEnglishDirective,
    DisableWritingArabicDirective,
    OnlyNumbersDirective,
   
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    ScrollToModule,
    TranslateModule,
    PaginationModule.forRoot(),
    NgbModule
   
  ],
  providers: [LayoutService],
  exports: [HeaderComponent, FooterComponent,DisableWritingEnglishDirective,DisableWritingArabicDirective,OnlyNumbersDirective,TranslateModule,NgbModule]
})
export class SharedModule { }

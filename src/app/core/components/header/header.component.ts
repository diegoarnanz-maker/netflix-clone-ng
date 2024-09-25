import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input({required: true}) name: string ='';
  @Input({required: true}) userProfileImg: string ='';
  navList = ["Home", "TV Shows", "New & Popular", "My List", "Language"];
}

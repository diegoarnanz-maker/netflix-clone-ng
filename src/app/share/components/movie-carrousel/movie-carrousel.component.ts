import { CommonModule, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../models/video-content.interface';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ImagePipe } from '../../pipes/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-carrousel',
  standalone: true,
  imports: [CommonModule,
    DescriptionPipe,
    ImagePipe,
    NgIf
  ],
  templateUrl: './movie-carrousel.component.html',
  styleUrl: './movie-carrousel.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MovieCarrouselComponent implements OnInit, AfterViewInit {
 
  @Input() videoContents: IVideoContent[] = [];
  @Input() title: string = '';

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  selectedContent: string | null = null;

  constructor() { }
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }


  private initSwiper(){
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    });
  }

  setHoverMovie(movie: IVideoContent){
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie(){
    this.selectedContent = null;
  }

}

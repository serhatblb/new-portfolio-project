// CommonModule
import { CommonModule } from '@angular/common';

// Core 
import { Component } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

}

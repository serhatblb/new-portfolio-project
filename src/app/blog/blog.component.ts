import { Component } from '@angular/core';
// BlogCard Ekledim
import { BlogCard } from './BlogCard';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

    blogCard: BlogCard[] = [
      {
        id: 1,
        header:"What are the differences between Framework and Libraries?",
        title: "Serhat",
        text: "A library is a collection of pieces of code, usually to perform certain functions or perform certain tasks.",
        description: "Description 1",
        // img: '../imgs/blog-1.jpg',
        author: 'User 1',
        date: new Date()
      },
      {
        id: 2,
        header:"Differences Between Semantic and Non-Semantic HTML Tags",
        title: "Serhat",
        text: "Meaning and Structure: Semantic tags clearly define the content and purpose, while Non-Semantic tags are used only to apply formatting or styling and do not specify the meaning of the content. ",
        description: "Description 2",
        // img: '../imgs/blog-2.jpg',
        author: 'User 2',
        date: new Date()
      },
      {
        id: 3,
        header:"What is CDN?",
        title: "Serhat",
        text: "CDN is an infrastructure used to accelerate and distribute content provider over the internet",
        description: "Description 3",
        // img: '../imgs/blog-3.jpg',
        author: 'User 3',
        date: new Date()
      }       
    ];

}
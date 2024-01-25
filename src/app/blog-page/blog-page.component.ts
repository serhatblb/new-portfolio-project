// CommonModule
import { CommonModule } from '@angular/common';

// Core 
import { Component } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';
import { BlogCard } from '../blog/BlogCard';
import { SearchBlogFilterPipe} from '../custom-pipline/search-blog-filter.pipe'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule,RouterLink,SearchBlogFilterPipe ,FormsModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

  //Fields
  dataBlogFilterCategory="";



  //BlogCard
  blogCard: BlogCard[] = [
    {
      id: 1,
      header:"What are the differences between Framework and Libraries?",
      title: "Serhat",
      text: "A library is a collection of pieces of code, usually to perform certain functions or perform certain tasks.",
      description: "Description 1",
      img: '../../assets/imgs/blog-1.jpg',
      author: 'User 1',
      link:'blog',
      categoryName:this.blogCategoryNameRandom(),
      date: new Date()
    },
    {
      id: 2,
      header:"Differences Between Semantic and Non-Semantic HTML Tags",
      title: "Serhat",
      text: "Meaning and Structure: Semantic tags clearly define the content and purpose, while Non-Semantic tags are used only to apply formatting or styling and do not specify the meaning of the content. ",
      description: "Description 2",
      img: '../../assets/imgs/blog-2.jpg',
      author: 'User 2',
      link:'blog',
      categoryName:this.blogCategoryNameRandom(),
      date: new Date()
    },
    {
      id: 3,
      header:"What is CDN?",
      title: "Serhat",
      text: "CDN is an infrastructure used to accelerate and distribute content provider over the internet",
      description: "Description 3",
      img: '../../assets/imgs/blog-3.jpg',
      author: 'User 3',
      link:'blog',
      categoryName:this.blogCategoryNameRandom(),
      date: new Date()
    },
    {
      id: 4,
      header:"What are the differences between Framework and Libraries?",
      title: "Serhat",
      text: "A library is a collection of pieces of code, usually to perform certain functions or perform certain tasks.",
      description: "Description 1",
      img: '../../assets/imgs/blog-1.jpg',
      author: 'User 1',
      link:'blog',
      categoryName:this.blogCategoryNameRandom(),
      date: new Date()
    },
    {
      id: 5,
      header:"Differences Between Semantic and Non-Semantic HTML Tags",
      title: "Serhat",
      text: "Meaning and Structure: Semantic tags clearly define the content and purpose, while Non-Semantic tags are used only to apply formatting or styling and do not specify the meaning of the content. ",
      description: "Description 2",
      img: '../../assets/imgs/blog-2.jpg',
      author: 'User 2',
      link:'blog',
      categoryName:this.blogCategoryNameRandom(),
      date: new Date()
    },
    {
      id: 6,
      header:"What is CDN?",
      title: "Serhat",
      text: "CDN is an infrastructure used to accelerate and distribute content provider over the internet",
      description: "Description 3",
      img: '../../assets/imgs/blog-3.jpg',
      author: 'User 3',
      link:'blog',
      categoryName:this.blogCategoryNameRandom(),
      date: new Date()
    }       
  ];

  constructor() {}

  //Method
  detailPage() {
    alert('Detail Page');
    if (window.confirm('Detail sayfasına gitmek mi istiyorsunuz')) {
      window.location.href = 'blog';
    } else {
      alert('Blog Detail Gidilmedi');
    }
  }
  blogCategoryNameRandom(): string {
    let categoryNameArray: string[] = [
      'frontend',
      'backend',
      'database',
      'mobile',
      'desktop',
      'network',
      'security',
      'game',
      'ai',
      'machine-learning',
      'devops',
      'testing',
      'other',
    ];
    return categoryNameArray[
      Math.floor(Math.random() * categoryNameArray.length - 1 + 1)
    ];
  };
}

import { Pipe, PipeTransform } from '@angular/core';

import { BlogCard } from '../blog/BlogCard' 
@Pipe({
  name: 'searchBlogFilter',
  standalone: true
})


export class SearchBlogFilterPipe implements PipeTransform {

  transform(value: BlogCard[], dataFilterBlogCategory?: any): BlogCard[] {

    dataFilterBlogCategory = dataFilterBlogCategory
      ? dataFilterBlogCategory.toLocaleLowerCase()
      : null;

    return dataFilterBlogCategory
      ? value.filter(
          (category: BlogCard) =>
            category.categoryName
              .toLocaleLowerCase()
              .indexOf(dataFilterBlogCategory) !== -1
        )
      : value;
  } 
}


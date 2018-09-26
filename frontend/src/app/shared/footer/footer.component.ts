import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category/category';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  categorys: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategorys().subscribe(cats => {
      this.categorys = cats;
    })
  }

}

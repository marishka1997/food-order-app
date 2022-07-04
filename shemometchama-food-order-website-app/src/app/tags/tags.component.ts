import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  tags?: Tag[] = [];
  constructor(private foodservice: FoodService) {}

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodservice.getAllTag();
  }
}

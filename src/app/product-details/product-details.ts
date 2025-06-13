import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss']
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null;
  @Output() back = new EventEmitter<void>();

  goBack(): void {
    this.back.emit();
  }
}

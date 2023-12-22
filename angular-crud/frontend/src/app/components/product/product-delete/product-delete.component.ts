import { ProductService } from './../product.service';
import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam !== null ? +idParam : 0;
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    const productId = this.product.id;
  
    productId !== undefined &&
      this.productService.delete(productId).subscribe(() => {
        this.productService.showMessage("Produto excluído com sucesso!");
        this.router.navigate(["/products"]);
      }) ||
      console.error("ID do produto é indefinido.");
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
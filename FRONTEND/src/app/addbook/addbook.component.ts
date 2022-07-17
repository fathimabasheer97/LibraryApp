import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  book={
    bookName: "",
    authorName: "",
    imageURL:""
  }
  // addBook(){
  //   this.addbook(this.book)
  //   .subscribe((data: any)=>
  //     {
  //     console.log(data);
  //     this.route.navigate(["/books"]);
  //   },
  //     (    err: any)=>{
  //     alert("Invalid login Session")
  //     this.route.navigate(["/login"])
  //   })
  // }

  }

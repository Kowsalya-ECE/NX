import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Observable, Observer, Subscriber, filter, map, subscribeOn } from 'rxjs';
// import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {


  // @ViewChild('appInput', { static: true }) appInput!: ElementRef;

  // ngAfterViewInit() {
  //   const element = this.appInput.nativeElement;
  //   const offsetWidth = element.offsetWidth;
  //   console.log('offsetwidth',offsetWidth);

  //   if (element.offsetWidth && element.offsetHeight) {
  //     const offsetWidth = element.offsetWidth;
  //     console.log(offsetWidth);
  //   } else {
  //     console.log('Element has no size yet');
  //   }


  // }



  data!: Observable<number>
  datasubscription: any;
  datasubscription1: any;
  // constructor(private authService:AuthService)
  // {


  // }
  ngOnInit(): void {
    // this.authService.getMessage();
    this.data = new Observable((subscribe: Observer<number>) => {
      // setInterval(() => {
      //   subscribe.next(1);
      //   subscribe.next(2);
      //   subscribe.next(3);
      //   // subscribe.complete();
      // }, 2000)
    });
    this.datasubscription = this.getobservable1().subscribe(response => {
      console.log('response:', response);

    });
    this.datasubscription1 = this.getobservable2().subscribe(response => {
      console.log('response:', response);

    });
    // data.pipe(filter(x => x > 1)).subscribe(response => {
    //   console.log('response: ', response);
    // });
    // data.pipe(map(x => x * 3)).subscribe(response => {
    //   console.log('response: ', response);
    // });
    this.data.subscribe(response => {
      // console.log('response', response);
    }, error => {
      // console.log('error', error);
    }, () => {
      // console.log('completed');
    }
    )
    // data.subscribe({
    //   next:(response)=>{
    //     console.log('res: ',response);
    //     },
    //     error:(error)=>{
    //       console.log('error');
    //     },
    //     complete:()=>{
    //       console.log('completed');
    //     }
    // })
    // data.pipe(map(x=>x*3)).subscribe(response=>
    //   {
    //     console.log('response',response);
    //   });
  }
  getobservable1(): Observable<string> {
    return new Observable(subscribe => {
      subscribe.next('Kowsalya');
      subscribe.next('Priya');
      subscribe.next('Vaishnavi');
      subscribe.next('Gowthami');
      subscribe.next('Kim');
    });
  }
  getobservable2(): Observable<string> {
    return new Observable(subscribe => {
      subscribe.next('K');
      subscribe.next('P');
      subscribe.next('V');
      subscribe.next('G');
      subscribe.next('K');
    });
  }
  ngOnDestroy() {
    this.datasubscription.unsubscribe();
    this.datasubscription1.unsubscribe();
  }
  //  data.pipe(filter(x=>x>2)).subscribe(response=>{
  //   console.log('response: ',response);

  //  });
  result = [{ id: 1, text: 'Angular is an open-source, JavaScript framework written in TypeScript' },
            { id: 2, text: ' its primary purpose is to develop single-page applications' },
            { id: 3, text: 'As a framework, Angular has clear advantages while also providing a standard structure for developers to work with' }
  ];
  searchterm!: string;
  updatesearch(e: any) {
    this.searchterm = e.target.value
  }
}



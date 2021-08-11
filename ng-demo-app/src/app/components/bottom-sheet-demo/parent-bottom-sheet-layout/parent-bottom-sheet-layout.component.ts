import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-parent-bottom-sheet-layout',
  templateUrl: './parent-bottom-sheet-layout.component.html',
  styleUrls: ['./parent-bottom-sheet-layout.component.scss']
})
export class ParentBottomSheetLayoutComponent implements OnInit {
  
  
  constructor(private _bottomSheet: MatBottomSheet, private fb: FormBuilder) { }
  
  public parentForm = this.fb.group({
    title: [null, Validators.required],
  });
  
  ngOnInit(): void {
    this.parentForm.get('title').setValue('Initial Title');
  }

  openBottomSheet(): void {
    const bottomSheetRef = this._bottomSheet.open(DemoBottomSheet, {
      data: { title: this.parentForm.get('title').value }
    });
  }

  onSubmit($event): void {
    console.log($event);
  }
}


@Component({
  selector: './demo-bottom-sheet',
  templateUrl: './demo-bottom-sheet.html',
  styleUrls: ['./demo-bottom-sheet.scss']
})
export class DemoBottomSheet {
  
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, 
              private _bottomSheetRef: MatBottomSheetRef<DemoBottomSheet>, ) {}

  public title = this.data.title;
  
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

import { TestBed } from '@angular/core/testing';

import { DialogueService } from './dialogue.service';
import { MatDialog } from '@angular/material/dialog';
class mockMatDialog
{
  open()
  {
    return true;
  }
}
describe('DialogueService', () => {
  let service: DialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:MatDialog,useClass:mockMatDialog}
      ]
    });
    service = TestBed.inject(DialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be openDialogue',()=>{
    service.openDialogue('');
     expect(service.openDialogue).toBeDefined();
  })
});

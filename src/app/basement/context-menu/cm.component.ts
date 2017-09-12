import {Component, OnInit, ViewChild} from '@angular/core';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-context-menu',
  templateUrl: './cm.component.html',
  styleUrls: ['./cm.component.css']
})
export class CmComponent implements OnInit {

  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('fileMenu') public fileMenu: ContextMenuComponent;

  /**
   * 业务数据列表
   */
  public items = [
    {name: '文本', otherProperty: 'mine', subject: 'text'},
    {name: '文本过时', otherProperty: 'timeout', subject: 'text'},
    {name: '图片', otherProperty: 'Bar', subject: 'image'},
    {name: '文件', otherProperty: 'Bar', subject: 'file'},
    {name: '语音', otherProperty: 'Bar', subject: 'voice'}
  ];


  constructor() {
  }

  ngOnInit() {
  }

  showMessage(msg: string) {
    console.log(msg);
  }

  canRecall(item: any): boolean {
    return item.otherProperty !== 'timeout';
  }

  canDelete(item: any): boolean {
    return item.otherProperty !== 'mine';
  }

  doCopy(item: any): void {
    console.log('复制', item);
  }

  doTransmit(item: any): void {
    console.log('转发', item);
  }



}

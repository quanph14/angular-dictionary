import {Component, OnInit} from '@angular/core';
import {DicServiceService} from "../../dic-service.service";
import {Word} from "../../model/word"

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit{
  constructor(private dicSvr: DicServiceService) {
  }

  dictionary: Word[] = [];

  ngOnInit() {
    this.dictionary = this.dicSvr.getAll();
  }
}

import {Component, OnInit} from '@angular/core';
import {Word} from "../../model/word";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DicServiceService} from "../../dic-service.service";

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit{
  // @ts-ignore
  word: Word;

  constructor(private dictionaryService: DicServiceService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id = paramMap.get('id');
        // @ts-ignore
        this.word = this.dictionaryService.findById(id);
      }
    )
  }
}

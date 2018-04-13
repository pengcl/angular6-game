import {Component, OnInit} from '@angular/core';
import {DragulaService} from "ng2-dragula";
import {TeamService} from "../../services/team.service";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  team: any;
  players: String[];
  lineup = {
    main: [],
    bench: []
  };

  constructor(private dragSvc: DragulaService,
              private teamSvc: TeamService,
              private playerSvc: PlayerService) {
  }

  ngOnInit() {
    this.dragSvc.dropModel.subscribe((value) => {
      console.log(this.lineup);
    });
    this.dragSvc.removeModel.subscribe((value) => {
      console.log(this.lineup);
    });
    this.teamSvc.find().then(res => this.team = res[0]).then(team => {
      this.playerSvc.findTeamPlayer(team._id).then(res => {
        console.log(res);
        this.players = res;
        this.lineup.main = res;
      })
    })
  }

}

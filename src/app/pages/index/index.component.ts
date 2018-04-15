import {Component, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {TeamService} from '../../services/team.service';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  team: any;
  players: String[];
  lineup = {
    main: {
      ST: [
        {
          name: 'Vieri'
        },
        {
          name: 'Inzaghi'
        }
      ],
      AML: [],
      AMF: [
        {
          name: 'Totti'
        },
        {
          name: 'Kaka'
        }
      ],
      AMR: [],
      LMF: [],
      CMF: [],
      RMF: [],
      DMF: [
        {
          name: 'Totti'
        },
        {
          name: 'Kaka'
        }
      ],
      LB: [],
      CB: [],
      RB: [],
      GK: []
    },
    bench: [],
    reserve: []
  };

  constructor(private dragSvc: DragulaService,
              private teamSvc: TeamService,
              private playerSvc: PlayerService) {
  }

  ngOnInit() {
    this.dragSvc.setOptions('lineup', {
      revertOnSpill: true,
      accepts: (el, target, source, sibling) => {
        if (target.className.indexOf('ST') !== -1 && this.lineup.main.ST.length >= 3) {
          return false;
        }
        if (target.className.indexOf('AML') !== -1 && this.lineup.main.AML.length >= 1) {
          return false;
        }
        if (target.className.indexOf('AMF') !== -1 && this.lineup.main.AMF.length >= 2) {
          return false;
        }
        if (target.className.indexOf('AMR') !== -1 && this.lineup.main.AMR.length >= 1) {
          return false;
        }
        if (target.className.indexOf('LMF') !== -1 && this.lineup.main.LMF.length >= 1) {
          return false;
        }
        if (target.className.indexOf('CMF') !== -1 && this.lineup.main.CMF.length >= 3) {
          return false;
        }
        if (target.className.indexOf('RMF') !== -1 && this.lineup.main.RMF.length >= 1) {
          return false;
        }
        if (target.className.indexOf('DMF') !== -1 && this.lineup.main.DMF.length >= 3) {
          return false;
        }
        if (target.className.indexOf('LB') !== -1 && this.lineup.main.LB.length >= 1) {
          return false;
        }
        if (target.className.indexOf('CB') !== -1 && this.lineup.main.CB.length >= 3) {
          return false;
        }
        if (target.className.indexOf('RB') !== -1 && this.lineup.main.RB.length >= 1) {
          return false;
        }
        if (target.className.indexOf('GK') !== -1 && this.lineup.main.GK.length >= 1) {
          return false;
        }
        return true; // elements can be dropped in any of the `containers` by default
      },
    });
    this.dragSvc.dropModel.subscribe((value) => {
      // console.log('drop:' + value);
    });
    this.dragSvc.removeModel.subscribe((value) => {
      // console.log('remove:' + value);
    });
    this.teamSvc.find().then(res => this.team = res[0]).then(team => {
      /*this.playerSvc.findTeamPlayer(team._id).then(res => {
        this.players = res;
        this.lineup.main = res;
      });*/
    });
  }

}

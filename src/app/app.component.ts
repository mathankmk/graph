import {Component, AfterContentInit, Input, ViewChild} from '@angular/core';
import {presets} from './chart-js.presets';
declare var Chart:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterContentInit {
  @ViewChild('lineChart') private lineChart;
  @ViewChild('stackedChart') private stackedChart;
  
  @Input() public data:any;
  @Input() public type:string;
  @Input() width:string = '100%';
  chart: any;

  constructor() {
  }

  ngAfterContentInit() {
    // ChartJS.then((chartJs:any)=> {
    //   this.render()
    // })

var ctx = document.querySelector('#myChart') as HTMLCanvasElement;
var cty = ctx.getContext('2d');
var myChart = new Chart(cty, {
    type: 'bar',
    data: {
        labels: ['Highly likely', 'Likely', 'Possible', 'Unlikely', 'Highly unlikely'],
        datasets: [{
            label: '',
            data: [7200, 8400, 9800, 11600, 12200],
            backgroundColor: [
                '#00847E',
                '#00847E',
                '#E8A215',
                '#DB0011',
                '#DB0011'
            ],
            borderColor: [
                '#00847E',
                '#00847E',
                '#E8A215',
                '#DB0011',
                '#DB0011'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});
var ctz = document.querySelector('#stacked') as HTMLCanvasElement;
var ctq = ctz.getContext('2d');
new Chart(ctq, {
  type: 'line',
     data: {
    labels: [65, 87],
    datasets: [
	    {
	      label: '',
	      data: [65, 87],
      	borderWidth: 1,
         backgroundColor: 
        '#00847E',
        fill: 'origin'
    	}
		]
  },
  options: {
  	 plugins: {
            filler: {
                propagate: true
            }
        }
  }
});
  }


}

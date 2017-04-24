import { Component, OnInit, OnChanges, ViewChild, ViewEncapsulation,OnDestroy,ElementRef, Input} from '@angular/core';
import { DatePipe } from '@angular/common';
// import * as d3 from 'd3';

declare var d3: any;

@Component({
  selector: 'farm-2d-map',
  template: `<svg class="chart"></svg>`

})

export class FarmMapComponent implements OnInit ,OnDestroy{

    private _chart: any;
    private _tooltip: any;
    private _svgContainer: any;
    private _farm2D: any;
    private _farm_x_axis: any;
    private _farm_y_axis: any;

    @Input() n: number;

    @Input() private width: number;
    @Input() private height: number;
    @Input() private length: number;

    @Input() farmStructure ;

    constructor( private datePipe : DatePipe,private el:ElementRef

             ) { }


   	ngOnInit() {

    /*
      this.n = 3;
      this.width = 750, this.height = 200;
      this.farmStructure = [
                { "x_axis": 0,  "y_axis": 0,  "color" : "green" , recipe: '3:1', variety: 'new '},
                { "x_axis": 40, "y_axis": 0,  "color" : "purple", recipe: '3:1', variety: 'new ' },
                { "x_axis": 80, "y_axis":0,   "color" : "red",  recipe: '3:1' , variety: 'new '},

                { "x_axis": 0,  "y_axis": 30,  "color" : "green" ,recipe: '5:1', variety: 'new '},
                { "x_axis": 40, "y_axis": 30,  "color" : "purple",recipe: '5:1', variety: 'new '},
                { "x_axis": 80, "y_axis":30,   "color" : "red" ,recipe: '5:1', variety: 'new '},

                { "x_axis": 0,  "y_axis": 60,  "color" : "green" ,recipe: '7:1', variety: 'old '},
                { "x_axis": 40, "y_axis":60,   "color" : "purple",recipe: '7:1', variety: 'old '},
                { "x_axis": 80, "y_axis":60,   "color" : "red"  ,recipe: '7:1', variety: 'old '}
          ];
    */

      this.length = this.width / this.n;
      console.log('ngoninot ',this.length);

   		this.initElement();
      this.draw();
   	}

   	ngOnDestroy() {
    

    }

    ngOnChanges() {
      if (this._chart) {
        this.draw();
      }
    }  

    initElement(){

      this._chart = d3.select(".chart")
                      .attr("width",  this.width)
                      .attr("height", this.height)
                      .append("g");

      this._tooltip = d3.select(this.el.nativeElement)
                        .append("div")
                        .style("position", "absolute")
                        .style("z-index", "10")
                        .style("visibility", "hidden")
                        .style("background", "#fee")
                        .text("a simple tooltip");

      this._farm_x_axis = d3.scaleLinear().domain([0, 80]).range([0, this.width - this.length]);
      this._farm_y_axis = d3.scaleLinear().domain([0, 60]).range([0, 100]);
  

      this._svgContainer = d3.select(this.el.nativeElement).append("svg")
                                           .attr("width", this.width)
                                           .attr("height", this.height);

      this._farm2D = this._svgContainer.selectAll("rect")
                                .data(this.farmStructure)
                                .enter()
                                .append("rect");

    }

  	draw() {

      let self = this;

     
      this._farm2D.attr("x", function(d) { console.log(  self._farm_x_axis(d.x_axis) ); return self._farm_x_axis(d.x_axis); })
                   .attr("y", function(d) {  return self._farm_y_axis(d.y_axis); })
                   .attr("width", function(d) { return self.length; })   // 
                   .attr("height", 20)
                   .style("fill", function(d) { return d.color; })
                   .on("mousemove", function (d, i) {
                      return  self._tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                    })
                    .on("mouseover", function (d, i) {

                       self._tooltip.text(d.recipe + '  '+ d.variety);
                      return  self._tooltip.style("visibility", "visible");
                    })
                    .on("mouseout", function (d, i) {
                      return  self._tooltip.style("visibility", "hidden");
                    })
                    .on("click", function (d, i) {
                      console.log( d.recipe, d.variety );
                    });


    }

}

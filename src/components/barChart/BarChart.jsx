import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import "./barChart.css";

export default function BarChart({ data }) {
  const svgRef = useRef();
  useEffect(() => {
    const width = 928;
    const height = 500;
    const marginTop = 80;
    const marginRight = 0;
    const marginBottom = 60;
    const marginLeft = 80;
    // Declare the x (horizontal position) scale.
    const x = d3.scaleBand()
      .domain(data.map(d => d.name)) // descending frequency
      .range([marginLeft, width - marginRight])
      .padding(0.1);
    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.total)])
      .range([height - marginBottom, marginTop]);
    // Create the SVG container.
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");
    // Create tooltip
    const tooltip = d3.select("#bar-chart").append('div')
      .style('position', 'absolute')
      .style('background', '#f4f4f4')
      .style('padding', '5px')
      .style('border', '1px solid #d4d4d4')
      .style('border-radius', '5px')
      .style('opacity', 0);
    // Add a rect for each bar and a tooltip for each.
    svg.append("g")
      .attr("fill", "steelblue")
      .selectAll()
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.total))
      .attr("height", (d) => y(0) - y(d.total))
      .attr("width", x.bandwidth())
      .on('mouseover', (event, d) => {
        tooltip
          .style('left', `${event.pageX + 30}px`)
          .style('top', `${event.pageY - 30}px`)
          .style('opacity', 1)
          .html(`Month: ${d.name}<br>Total: ${d.total}`)
      })
        .on('mouseout', () => {
          tooltip.style('opacity', 0);
      });
    // Title
    svg.append("text")
      .attr("font-size", 32)
      .attr("x", "350")
      .attr("y", "30")
      .attr("fill", "black")
      .text("Monthly totals");
    // y Axis label
    svg.append("text")
      .attr("font-size", 16)
      .attr("transform", "rotate(-90)")
        .attr("x", "-250")
      .attr("y", "15")
      .attr("fill", "black")
      .text("Totals");
    // x Axis label    
    svg.append("text")
      .attr("font-size", 16)
      .attr("x", "450")
      .attr("y", "485")
      .attr("fill", "black")
      .text("Month");        
    // Add the x-axis and label.
    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));
    // Add the y-axis and label, and remove the domain line.
    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Frequency (%)"));
  }, []);
  return (
    <div id='bar-chart'>
      <svg ref={svgRef}></svg>
    </div>
  )
};
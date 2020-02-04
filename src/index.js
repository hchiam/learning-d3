// data

const dataset = [
  [230, 145],
  [100, 280],
  [310, 120],
  [80, 410],
  [420, 220],
  [330, 90],
  [220, 330],
  [80, 320],
  [35, 80],
  [20, 120],
];

// useful parameters

const w = 500;
const h = 500;
const padding = 60;

// add svg to body

const svg = d3
    .select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

// set scaling

const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding - 10]);

const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);

// set dots

svg
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => xScale(d[0]))
    .attr('cy', (d) => yScale(d[1]))
    .attr('r', (d) => 5);

// set labels on data points

svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text((d) => d[0] + ',' + d[1])
    .attr('x', (d) => xScale(d[0] + 10))
    .attr('y', (d) => yScale(d[1]));

// set graph axes

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg
    .append('g')
    .attr('transform', 'translate(0,' + (h - padding) + ')')
    .call(xAxis);

svg
    .append('g')
    .attr('transform', 'translate(' + padding + ',0)')
    .call(yAxis);

/**
 * This file was first created using the Yeoman generator
 * generator-hchiam-learning:
 * https://www.npmjs.com/package/generator-hchiam-learning
 */

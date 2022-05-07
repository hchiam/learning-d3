let vis = d3.select("body").append("svg");
let svgSize = Math.min(window.innerWidth, window.innerHeight);

const placeholdersArray2dData = [
  [
    {
      Colour: "maroon",
      Text: "Cherry",
    },
    {
      Colour: "navy",
      Text: "Blueberry",
    },
  ],
  [
    {
      Colour: "red",
      Text: "Apple",
    },
    {
      Colour: "orange",
      Text: "Orange",
    },
    {
      Colour: "green",
      Text: "Kiwi",
    },
    {
      Colour: "green",
      Text: "Kiwi",
    },
  ],
];

draw(placeholdersArray2dData);

let timer = null;
window.onresize = function (event) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    svgSize = Math.min(window.innerWidth, window.innerHeight);
    d3.select("body").select("svg").remove();
    vis = d3.select("body").append("svg");
    draw(placeholdersArray2dData);
  }, 20);
};

function draw(data) {
  generateLevels(data);
}

class Placeholder {
  Colour: string;
  Text: string;
}

class NestedPlaceholder extends Placeholder {
  Children: Placeholder[];
}

function generateNestedLevel(nestedPlaceholders: NestedPlaceholder[]) {
  // TODO
}

function generateLevels(placeholders2dArray: Placeholder[][]) {
  const levels = placeholders2dArray.length;
  let level = 1;
  while (level <= levels) {
    generateLevel(level, placeholders2dArray[level - 1]);
    level++;
  }
}

function generateLevel(level, placeholders: Placeholder[]) {
  const count = placeholders.length;
  const radius1 = level * 50;
  const radius2 = (level + 1) * 50;
  const sliceSize = 360 / count;

  const arcData = placeholders.map((placeholder, index) => {
    return {
      Radiuses: [radius1, radius2],
      Degrees: [sliceSize * index, sliceSize * (index + 1)],
      Colour: placeholder.Colour,
      Text: placeholder.Text,
    };
  });
  const arcs = generateArcs(arcData);

  const svg = generateSVG();
  addArcsToSVG(svg, arcs);
}

// function draw() {
//   const svg = generateSVG();

//   //   const arc = generateArc([50, 100], [45, 90]);
//   //   const arc2 = generateArc([50, 100], [90, 100]);

//   //   addArcToSVG(svg, arc, "red");
//   //   addArcToSVG(svg, arc2, "blue");

//   const arcs = generateArcs([
//     {
//       Radiuses: [50, 100],
//       Degrees: [45, 90],
//       Colour: "maroon"
//     },
//     {
//       Radiuses: [50, 100],
//       Degrees: [90, 200],
//       Colour: "navy"
//     }
//   ]);

//   addArcsToSVG(svg, arcs);
// }

class ArcInfo {
  Radiuses: number[];
  Degrees: number[];
  Colour: string;
  Text: string;
}

function generateArcs(arcInfoArray: ArcInfo[]) {
  const arcs = [];
  arcInfoArray.forEach((arc) => {
    arcs.push({
      Arc: generateArc(arc.Radiuses, arc.Degrees),
      Colour: arc.Colour,
      Text: arc.Text,
    });
  });
  return arcs;
}

function generateArc([radius1, radius2], [startDeg, endDeg]) {
  const arc = d3.svg
    .arc()
    .innerRadius(radius1)
    .outerRadius(radius2)
    .startAngle(degreesToRadians(startDeg))
    .endAngle(degreesToRadians(endDeg));
  return arc;
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function generateSVG() {
  const svg = vis.attr("width", svgSize).attr("height", svgSize);
  return svg;
}

function addArcsToSVG(svg, arcs) {
  arcs.forEach((arcData) => {
    addArcToSVG(svg, arcData.Arc, arcData.Colour, arcData.Text);
  });
}

var arcX = d3.scale.linear().range([0, 2 * Math.PI]);
var arcY = d3.scale.linear().range([0, 50]);
function addArcToSVG(svg, arc, colour, textString) {
  svg
    .append("path")
    .attr("d", arc)
    .attr("id", "path" + colour)
    .attr("fill", colour)
    .attr("transform", `translate(${svgSize / 2}, ${svgSize / 2})`);

  const text = svg.append("text").attr("x", 50).attr("dy", 14);
  text
    .append("textPath")
    .attr("stroke", "white")
    .attr("fill", "white")
    .attr("xlink:href", "#path" + colour)
    .text(textString);
}

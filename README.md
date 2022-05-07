# Learning D3

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Data-Driven Documents. <https://www.youtube.com/watch?v=bp2GF8XcJdY> D3 syntax feels very much like jQuery, but its power comes with `.data(arrayOrFile)`, its states methods, and helper functions.

You can generate a [dependency graph](https://github.com/hchiam/learning-dependency-cruiser) with `bash show_dep_graph.sh`.

This file was first created using the Yeoman generator [`generator-hchiam-learning`](https://www.npmjs.com/package/generator-hchiam-learning).

Live demo: <https://codepen.io/hchiam/pen/LYVPQgq?editors=1010>

Reference: <https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3>

## Notes

- D3 syntax feels very much like jQuery, but its power comes with `.data(arrayOrFile)`, its states methods, and helper functions
- `d3.select('.some-jquery-like-selector')`
- attach data array/file: `.data(arrayOrFile)`
- 3 possible states per data point: `.enter()` (when initially draw), `.update()` (when data changes), `.exit()` (when data is about to be removed): `.enter().update().exit()`
- helpers example: `.scaleBand().range().domain()` to draw x-axis and y-axis scales
- helpers example: `.transition().duration(2000).attr('width', '400')` to animate each data point as data is added
- you can also add interactivity that feels like jQuery `.on('mouseover', () => showToolTip())` or `.on('click')`

## Demo

Then to quickly serve the example, install [`parcel`](https://github.com/hchiam/learning-parcel) globally (so not specifically for this project):

```sh
npm install -g parcel-bundler
# or:
yarn global add parcel
```

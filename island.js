function getNeighbors(row, col, matrix) {
  let neighbors = [];

  // Check top
  if (row !== 0 && matrix[row - 1][col] === 1){
    const up = [row - 1, col];
    neighbors.push(up);
  }
  // Check top right
  if (row !== 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] === 1){
    const upRight = [row - 1, col + 1];
    neighbors.push(upRight);
  }
  // Check right
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1){
    const right = [row, col + 1];
    neighbors.push(right);
  }
  // Check bottom right
  if (row < matrix.length - 1 && col < matrix[row].length - 1 && matrix[row + 1][col + 1] === 1){
    const bottomRight = [row + 1, col + 1];
    neighbors.push(bottomRight);
  }
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1){
    const bottom = [row + 1, col];
    neighbors.push(bottom);
  }
  // Check bottom left
  if (row < matrix.length - 1 && col !== 0 && matrix[row + 1][col - 1] === 1){
    const bottomLeft = [row + 1, col - 1];
    neighbors.push(bottomLeft);
  }
  // Check left
  if (col !== 0 && matrix[row][col - 1] === 1){
    const left = [row, col - 1];
    neighbors.push(left);
  }
  // Check top left
  if (row !== 0 && col !== 0 && matrix[row - 1][col - 1] === 1){
    const upLeft = [row - 1, col - 1];
    neighbors.push(upLeft);
  }
  // Return neighbors
  return neighbors;

}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Initialize count to 0
  let count = 0;
  visited.add('0, 0');

  // iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++){
    for (let col = 0; col < matrix[row].length; col++){

      // check if node is a 1 and has not been visited before
      let stringNode = `${row}, ${col}`;
      if (matrix[row][col] === 1 && !visited.has(stringNode)) {
        // increase island count
        count++;
        // initialize stack with current node
        let stack = [[row, col]];
        // add current node to visited
        visited.add(row.toString() + ', ' + col.toString());

        // iterate while stack is not empty
        while (stack.length > 0) {
          const currentNode = stack.pop();
          // get neighbors of current node
          const neighbors = getNeighbors(currentNode[0], currentNode[1], matrix);

          // iterate through neighbors
          for (const neighbor of neighbors) {
            let stringify = `${neighbor[0]}, ${neighbor[1]}`;

            // check if neighbor has been visited
            if (visited.has(stringify)) continue;
            else {
              // if not, add to visited and push to stack
              visited.add(stringify);
              stack.push(neighbor);
            }
          }
        }
      }

    }
  }
  // return island count
  return count;

}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];

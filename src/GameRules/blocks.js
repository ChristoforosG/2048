export const execute = (state, action) => {
  let currentState = convertDisplayResultToState(state);
  if (action === "ArrowRight") {
    currentState = executeRight(currentState);
  } else if (action === "ArrowLeft") {
    currentState = executeLeft(currentState);
  } else if (action === "ArrowUp") {
    currentState = executeUp(currentState);
  } else if (action === "ArrowDown") {
    currentState = executeDown(currentState);
  }
  return createDisplayResult(currentState);
};

const executeRight = (state) => {
  const result = [];
  for (let i = 0; i < 4; i++) {
    const rowNoZeros = [];
    for (let j = 0; j < 4; j++) {
      if (state[i][j] !== 0) rowNoZeros.push(state[i][j]);
    }

    for (let j = rowNoZeros.length - 1; j > 0; j--) {
      if (rowNoZeros[j] === rowNoZeros[j - 1]) {
        rowNoZeros[j] += rowNoZeros[j - 1];
        rowNoZeros[j - 1] = 0;
      }
    }
    const row = [];
    for (let j = 0; j < rowNoZeros.length; j++) {
      if (rowNoZeros[j] !== 0) row.push(rowNoZeros[j]);
    }
    const len = row.length;
    for (let j = 0; j < 4 - len; j++) {
      row.unshift(0);
    }
    result.push(row);
  }
  if (areSame(result, state)) return result;
  return [...addNewRandom(result)];
};

const executeLeft = (state) => {
  const result = [];
  for (let i = 0; i < 4; i++) {
    const rowNoZeros = [];
    for (let j = 0; j < 4; j++) {
      if (state[i][j] !== 0) rowNoZeros.push(state[i][j]);
    }
    for (let j = 0; j < rowNoZeros.length - 1; j++) {
      if (rowNoZeros[j] === rowNoZeros[j + 1]) {
        rowNoZeros[j] += rowNoZeros[j + 1];
        rowNoZeros[j + 1] = 0;
      }
    }
    const row = [];
    for (let j = 0; j < rowNoZeros.length; j++) {
      if (rowNoZeros[j] !== 0) row.push(rowNoZeros[j]);
    }
    const len = row.length;
    for (let j = 0; j < 4 - len; j++) {
      row.push(0);
    }
    result.push(row);
  }
  if (areSame(result, state)) return result;
  return [...addNewRandom(result)];
};

const executeUp = (state) => {
  const result = [[], [], [], []];
  for (let i = 0; i < 4; i++) {
    const columnNoZeros = [];
    for (let j = 0; j < 4; j++) {
      if (state[j][i] !== 0) columnNoZeros.push(state[j][i]);
    }
    for (let j = 0; j < columnNoZeros.length - 1; j++) {
      if (columnNoZeros[j] === columnNoZeros[j + 1]) {
        columnNoZeros[j] += columnNoZeros[j + 1];
        columnNoZeros[j + 1] = 0;
      }
    }
    const column = [];
    for (let j = 0; j < columnNoZeros.length; j++) {
      if (columnNoZeros[j] !== 0) column.push(columnNoZeros[j]);
    }
    const len = column.length;
    for (let j = 0; j < 4 - len; j++) {
      column.push(0);
    }
    for (let j = 0; j < 4; j++) {
      result[j].push(column[j]);
    }
  }
  if (areSame(result, state)) return result;
  return [...addNewRandom(result)];
};

const executeDown = (state) => {
  const result = [[], [], [], []];
  for (let i = 0; i < 4; i++) {
    const columnNoZeros = [];
    for (let j = 0; j < 4; j++) {
      if (state[j][i] !== 0) columnNoZeros.push(state[j][i]);
    }
    for (let j = columnNoZeros.length - 1; j > 0; j--) {
      if (columnNoZeros[j] === columnNoZeros[j - 1]) {
        columnNoZeros[j] += columnNoZeros[j - 1];
        columnNoZeros[j - 1] = 0;
      }
    }
    const column = [];
    for (let j = 0; j < columnNoZeros.length; j++) {
      if (columnNoZeros[j] !== 0) column.push(columnNoZeros[j]);
    }
    const len = column.length;
    for (let j = 0; j < 4 - len; j++) {
      column.unshift(0);
    }
    for (let j = 0; j < 4; j++) {
      result[j].push(column[j]);
    }
  }
  if (areSame(result, state)) return result;
  return [...addNewRandom(result)];
};

const createDisplayResult = (state) => {
  const result = [];
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      if (state[i][j] === 0) row.push("");
      else row.push(state[i][j].toString());
    }
    result.push(row);
  }
  return result;
};

const convertDisplayResultToState = (result) => {
  const state = [];
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      if (result[i][j] === "") row.push(0);
      else row.push(parseInt(result[i][j]));
    }
    state.push(row);
  }
  return state;
};

const addNewRandom = (state) => {
  const pairsOfZero = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (state[i][j] === 0) pairsOfZero.push([i, j]);
    }
  }
  const index = Math.floor(Math.random() * pairsOfZero.length);
  state[pairsOfZero[index][0]][pairsOfZero[index][1]] = 2;
  return [...state];
};

function areSame(A, B) {
  let i, j;
  for (i = 0; i < 4; i++)
    for (j = 0; j < 4; j++) if (A[i][j] != B[i][j]) return false;
  return true;
}

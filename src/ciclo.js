
import math from 'mathjs'

const projects = [
  {
    nome: 'Progetto 1',
    criteri: [
      {
        nameCriterio: 'Criterio 1',
        valoreCriterio: 6,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 2',
        valoreCriterio: 5,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 3',
        valoreCriterio: 6,
        pesoCriterio: 0.4,
        tipoCriterio: 'max'
      }
    ]
  },
  {
    nome: 'Progetto 2',
    criteri: [
      {
        nameCriterio: 'Criterio 1',
        valoreCriterio: 7,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 2',
        valoreCriterio: 5,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 3',
        valoreCriterio: 4,
        pesoCriterio: 0.4,
        tipoCriterio: 'max'
      }
    ]
  },
  {
    nome: 'Progetto 3',
    criteri: [
      {
        nameCriterio: 'Criterio 1',
        valoreCriterio: 6,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 2',
        valoreCriterio: 5,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 3',
        valoreCriterio: 4,
        pesoCriterio: 0.4,
        tipoCriterio: 'max'
      }
    ]
  },
  {
    nome: 'Progetto 4',
    criteri: [
      {
        nameCriterio: 'Criterio 1',
        valoreCriterio: 4,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 2',
        valoreCriterio: 6,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 3',
        valoreCriterio: 4,
        pesoCriterio: 0.4,
        tipoCriterio: 'max'
      }
    ]
  },
  {
    nome: 'Progetto 5',
    criteri: [
      {
        nameCriterio: 'Criterio 1',
        valoreCriterio: 7,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 2',
        valoreCriterio: 8,
        pesoCriterio: 0.3,
        tipoCriterio: 'min'
      },
      {
        nameCriterio: 'Criterio 3',
        valoreCriterio: 7,
        pesoCriterio: 0.4,
        tipoCriterio: 'max'
      }
    ]
  }
]

function getCriteriValue (projects) {
  var valori = []
  for (var i in projects) {
    for (var j in projects[i]) {
      if (j == 'criteri') {
        for (var k in projects[i][j]) {
          // console.log(projects[i][j][k]["valoreCriterio"]);
          valori.push(projects[i][j][k]['valoreCriterio'])
        }
      }
    }
  }
  return valori
}

function creaMatriceCriteri (projects) {
  var valori = getCriteriValue(projects)
  var matrix = []
  var index = 0
  for (var i = 0; i < projects.length; i++) {
    matrix[i] = []
    for (var j = 0; j < projects[0]['criteri'].length; j++) {
      matrix[i][j] = parseFloat(valori[index])
      index = index + 1
    }
  }
  return matrix
}

function getCriteriPesi (projects) {
  var pesi = []
  for (var i in projects) {
    for (var j in projects[i]) {
      if (j == 'criteri') {
        for (var k in projects[i][j]) {
          // console.log(projects[i][j][k]["valoreCriterio"]);
          pesi.push(projects[i][j][k]['pesoCriterio'])
        }
      }
    }
  }
  return pesi
}

function creaMatricePesi (projects) {
  var pesi = getCriteriPesi(projects)
  var matrix = []
  var index = 0
  for (var i = 0; i < projects.length; i++) {
    matrix[i] = []
    for (var j = 0; j < projects[0]['criteri'].length; j++) {
      matrix[i][j] = parseFloat(pesi[index])
      index = index + 1
    }
  }
  return matrix
}
// console.log(creaMatricePesi(projects))

// matrix = creaMatriceCriteri(projects);
// console.log((matrix));

function getCriteriTipo (projects) {
  var tipi = []
  for (var i in projects) {
    for (var j in projects[i]) {
      if (j == 'criteri') {
        for (var k in projects[i][j]) {
          // console.log(projects[i][j][k]["valoreCriterio"]);
          tipi.push(projects[i][j][k]['tipoCriterio'])
        }
      }
    }
  }
  return tipi
}

function creaMatriceTipo (projects) {
  var tipi = getCriteriTipo(projects)
  var matrix = []
  var index = 0
  for (var i = 0; i < projects.length; i++) {
    matrix[i] = []
    for (var j = 0; j < projects[0]['criteri'].length; j++) {
      matrix[i][j] = (tipi[index])
      index = index + 1
    }
  }
  return matrix
}

function ciccio () {
  console.log(math)
}
// console.log(creaMatriceTipo(projects))

export { creaMatriceCriteri, creaMatricePesi, creaMatriceTipo, ciccio }

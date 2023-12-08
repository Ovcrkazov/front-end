import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss'],
})
export class TetrisComponent implements AfterViewInit {
  @ViewChild('tetris') tetris!: ElementRef;
  @ViewChild('error') error!: ElementRef;
  @ViewChild('score') score!: ElementRef;
  @ViewChild('level') level!: ElementRef;

  ngAfterViewInit() {
    this.tetris.nativeElement.style.border = 'solid .2em #fff';

    var ingame = true;

    const canvas = this.tetris.nativeElement;
    const context = canvas.getContext('2d');

    context.shadowColor = 'black';
    context.shadowOffsetX = 0.5;
    context.shadowOffsetY = 0.5;

    context.scale(20, 20);

    function arenaSweep() {
      let rowCount = 1;
      outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
          if (arena[y][x] === 0) {
            continue outer;
          }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;
      }
    }

    function iscolliding(arena: any, player: any) {
      const [m, o] = [player.matrix, player.pos];

      for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
          if (
            m[y][x] !== 0 &&
            (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0
          ) {
            return true;
          }
        }
      }
      return false;
    }

    function createMatrix(w: any, h: any) {
      const matrix = [];
      while (h--) {
        matrix.push(new Array(w).fill(0));
      }
      return matrix;
    }

    function draw() {
      context.fillStyle = '#e3e3e3';
      context.fillRect(0, 0, canvas.width, canvas.height);

      drawMatrix(arena, {
        x: 0,
        y: 0,
      });

      drawMatrix(player.matrix, player.pos);
    }

    // Fonction qui crée les différentes pièces (définit les dimensions des tetrominoes)
    function createPiece(type: any) {
      if (type === 'I') {
        return [
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
        ];
      } else if (type === 'L') {
        return [
          [0, 2, 0],
          [0, 2, 0],
          [0, 2, 2],
        ];
      } else if (type === 'J') {
        return [
          [0, 3, 0],
          [0, 3, 0],
          [3, 3, 0],
        ];
      } else if (type === 'O') {
        return [
          [4, 4],
          [4, 4],
        ];
      } else if (type === 'Z') {
        return [
          [5, 5, 0],
          [0, 5, 5],
          [0, 0, 0],
        ];
      } else if (type === 'S') {
        return [
          [0, 6, 6],
          [6, 6, 0],
          [0, 0, 0],
        ];
      } else {
        return [
          [0, 7, 0],
          [7, 7, 7],
          [0, 0, 0],
        ];
      }
    }

    // On écrit une fonction qui va dessiner en prenant en paramètre le "matrix" (c'est-à-dire les coordonnées des pièces du jeu Tetris) et l "offset" : le décalage de la pièce, là où elle va apparaître au départ dans le canvas tetris
    function drawMatrix(matrix: any[][], offset: any) {
      // On fait une première boucle qui va itérer les coordonnées du Tetrominoe pour chaque ligne du tableau "row"
      matrix.forEach((row: any, y: any) => {
        // On fait une deuxième boucle pour chaque ligne-tableau du matrix
        // On récupère la valeur et l'indice x
        row.forEach((value: any, x: any) => {
          // On décide que la valeur récupérée égale à 0 doit être ignorée pour les dessins des pièces
          // Donc on vérifie que la valeur n'est pas égale à 0
          // A condition que la valeur soit différente de 0
          if (value !== 0) {
            // Alors on dessine
            // Choix de la couleur
            // context.fillStyle = 'red';
            context.fillStyle = colors[value];
            // On dessine une forme à partir la valeur x (coordonnée gauche), de la valeur y (coordonnée en haut), puis on définit la largeur = 1 et la hauteur = 1
            context.fillRect(x + offset.x, y + offset.y, 1, 1);
          }
        });
      });
    }

    const arena = createMatrix(12, 20);
    // On appelle la fonction de dessin des pièces, en définissant l "offset" des pièces (la position x à partir la gauche et la position y à partir du haut du canvas)
    // Exemple -> drawMatrix(matrix, {x:4, y:4});
    // On peut remplacer les paramètres de l'appel de la fonction drawMatrix à partir d'une constante "player"
    const player: {
      pos: {
        x: number;
        y: number;
      };
      matrix: any | null;
      score: number;
    } = {
      pos: {
        x: 0,
        y: 0,
      },
      // Exemple -> matrix: createPiece('S'),
      matrix: null,
      score: 0,
    };

    // Cette fonction calcule les positions du joueur en fonction du tableau de positions de l'arène de jeu
    function merge(arena: any, player: any) {
      player.matrix.forEach((row: any, y: any) => {
        // On récupère les positions
        row.forEach((value: any, x: any) => {
          if (value !== 0) {
            arena[y + player.pos.y][x + player.pos.x] = value;
          }
        });
      });
    }

    function playerRotate(dir: any) {
      const pos = player.pos.x;
      let offset = 1;
      rotate(player.matrix, dir);
      if (player.matrix) {
        // On modifie le comportement de la pièce en fonction des collisions avec les bords de l'arène ou la présence d'autres pièces déjà posées sur l'arène
        while (iscolliding(arena, player)) {
          player.pos.x += offset;
          offset = -(offset + (offset > 0 ? 1 : -1));
          if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
          }
        }
      }
    }

    // Fonction de rotation des pièces du jeu
    // Elle fonctionne par inversion des colonnes de positions qui définissent l'apparition des pièces du jeu
    function rotate(matrix: any, dir: any) {
      for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
      }
      // ici on vérifie la direction et effectue la rotation des pièces
      if (dir > 0) {
        matrix.forEach((row: any) => row.reverse());
      } else {
        matrix.reverse();
      }
    }

    // Cette fonction empêche le joueur de sortir des bords gauche et droit de l'arène
    function playerMove(dir: any) {
      player.pos.x += dir;
      if (iscolliding(arena, player)) {
        player.pos.x -= dir;
      }
    }

    // Fonction qui affiche aléatoirement les pièces
    function playerReset() {
      const pieces = 'TJLOSZI';
      player.matrix = createPiece(pieces[(pieces.length * Math.random()) | 0]);
      player.pos.y = 0;
      if (player.matrix) {
        player.pos.x =
          ((arena[0].length / 2) | 0) - ((player.matrix[0].length / 2) | 0);
      }
      // Ici on active un retour en début de partie lorsque tout est rempli
      if (iscolliding(arena, player)) {
        arena.forEach((row) => row.fill(0));
        updateScore();
        ingame = false;
      }
    }

    function playerDrop() {
      player.pos.y++;
      if (iscolliding(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
      }
      dropCounter = 0;
    }

    // Fonction qui permet de dessiner continuellement en temps réel
    // La paramètre time défini à 0 -> on peut observer le résultat dans la console (cela opère un décompte du temps en millisecondes)
    let dropCounter = 0;
    // Nous voulons que la pièce tombe selon cette intervalle en millisecondes
    let dropInterval = 500;

    let lastTime = 0;

    const update = (time = 0) => {
      // On met à jour le temps
      const deltaTime = time - lastTime;
      lastTime = time;
      //console.log(deltaTime);

      // On utilise ici l'opérateur affectation après addition
      // Cela équivaut à : dropCounter = dropCounter + deltaTime;
      dropCounter += deltaTime;

      if (dropCounter > dropInterval) {
        playerDrop();
      }

      draw();
      if (ingame == false) {
        arenaSweep();
        this.result(player.score);
        return;
      }
      requestAnimationFrame(update);
    };

    let colors = [
      null,
      '#8eedef',
      '#daa43c',
      '#381ce7',
      '#ecf050',
      '#cd3326',
      '#86ec49',
      '#912be8',
    ];

    const updateScore = () => {
      if (this.score) {
        this.score.nativeElement.innerText = player.score;

        // Vérifications du score pour accélérer la vitesse et passer à de nouveaux levels
        const scoring = this.score.nativeElement;
        const textScore = this.score.nativeElement.textContent;
        // On convertit le texte en nombre
        const numberScore = Number(textScore);
        // console.log(numberScore);

        // Level 2
        if (numberScore >= 100) {
          // alert(numberScore);
          dropInterval = 400;
          // console.log(dropInterval)
          this.level.nativeElement.innerText = 'Level 2';
        }
        // Level 3
        if (numberScore >= 200) {
          dropInterval = 300;
          this.level.nativeElement.innerText = 'Level 3';
        }
        // On vérifie que le nombre du score est supérieur à 100 pour augmenter ensuite la vitesse du jeu
        if (numberScore >= 300) {
          dropInterval = 200;
          this.level.nativeElement.innerText = 'Level 4';
        }
        // On vérifie que le nombre du score est supérieur à 100 pour augmenter ensuite la vitesse du jeu
        if (numberScore >= 400) {
          dropInterval = 100;
          this.level.nativeElement.innerText = 'Level 5';
        }
      }
    };

    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) {
        playerMove(-1);
        // player.pos.x--;
      } else if (event.keyCode === 39) {
        playerMove(1);
        // player.pos.x++;
      } else if (event.keyCode === 40) {
        playerDrop();
      }

      // La touche q pour faire une rotation à gauche
      else if (event.keyCode === 81) {
        playerRotate(-1);
      }
      // La touche d pour faire une rotation à droite
      else if (event.keyCode === 68) {
        playerRotate(1);
      }
    });

    playerReset();
    updateScore();
    update();
    console.log(player.score);
  }

  public result(score: any) {
    console.log(this.error)
    if (this.error) {
      if (score >= 404) {
        // On affiche le résultat dans la section "resulats" en créant un élément HTML la balise <a> ne doit pas devenir bleu et soulignée
        this.error.nativeElement.innerHTML =
          '<p>Félicitation vous avez perdu votre temps ! </p><p>Votre score est de ' +
          score +
          " points</p><a href='./404' style='color: #3877FF; text-decoration: none;'>Rejouer</a>";
      } else {
        // On affiche le résultat dans la section "resulats" en créant un élément HTML
        this.error.nativeElement.innerHTML =
          '<p>Félicitation vous avez perdu votre temps !</p><p>Même la victoire vous ne la trouvez pas...</p><p>Votre score est de ' +
          score +
          " point(s)</p><a href='./404' style='color: #3877FF; text-decoration: none;'>Rejouer</a>";
      }
    }
  }
}

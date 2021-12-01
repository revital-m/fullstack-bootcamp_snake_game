let inputDirection = { x:0, y:0 };
let lastInputDirection = { x:0, y:0 };

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) { break; } // can't move up if already moving down.
            inputDirection = { x:0, y:-1 };
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) { break; } // can't move down if already moving up.
            inputDirection = { x:0, y:1 };
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) { break; } // can't left down if already moving right.
            inputDirection = { x:-1, y:0 };
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) { break; } // can't right down if already moving left.
            inputDirection = { x:1, y:0 };
            break;
    }
});

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
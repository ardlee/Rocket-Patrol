class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super( scene, x, y, texture, frame, pointValue);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 2;

    }

    update() {

        // make the spaceships move left
        this.x -= this.moveSpeed;

        // wrap around from left edge to right edge, doesnt instantly dissapear after touching edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width; 
        }
    }
}
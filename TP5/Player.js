class Player {
    constructor(id, name, skinId, level, position, HP, HPmax, hitbox, damagehitbox, damage) {
        // Propriétés de base
        this.id = id;
        this.name = name;
        this.skinId = skinId;
        this.level = level;
        this.position = position;
        
        // Stats de combat
        this.HP = HP;
        this.HPmax = HPmax;
        this.damage = damage;
        this.hitbox = hitbox;
        this.damagehitbox = damagehitbox;

        // États (States)
        this.isWalking = false;
        this.isAttacking = false;
        this.isDead = false;

        // Paramètres d'animation (Valeurs par défaut à ajuster)
        this.walkSpriteIndex = 0;
        this.walkSpritesNumber = 8; 
        this.currentWalkSpriteStep = 0;
        this.walkSpriteDuration = 5; 
    }

    update(updateData) {
        if (!updateData) return;

        // Utilisation d'un mapping simple pour éviter les répétitions
        if (updateData.position) this.position = updateData.position;
        if (updateData.HP !== undefined) this.HP = updateData.HP;
        if (updateData.skinId !== undefined) this.skinId = updateData.skinId;
        if (updateData.name) this.name = updateData.name;
        if (updateData.HPmax) this.HPmax = updateData.HPmax;

        console.log(`Update [${this.name}]: Pos: ${JSON.stringify(this.position)}, HP: ${this.HP}/${this.HPmax}`);
    }

    animate() {
        if (this.isWalking) {
            this.handleWalkAnimation();
        } else if (this.isAttacking) {
            // Logique d'attaque ici
        } else {
            // Logique Idle ici
        }

        // Debug Logs (inclus dans la méthode pour fonctionner)
        this.logDebugInfo();
    }

    handleWalkAnimation() {
        this.currentWalkSpriteStep++;
        
        if (this.currentWalkSpriteStep >= this.walkSpriteDuration) {
            this.currentWalkSpriteStep = 0;
            this.walkSpriteIndex++;
        }
        
        if (this.walkSpriteIndex >= this.walkSpritesNumber) {
            this.walkSpriteIndex = 0;
        }
    }

    logDebugInfo() {
        console.log(`--- Animation Debug: ${this.name} ---`);
        console.log("isWalking:", this.isWalking);
        console.log(`Sprite: ${this.walkSpriteIndex} / ${this.walkSpritesNumber}`);
        console.log(`Step: ${this.currentWalkSpriteStep} / ${this.walkSpriteDuration}`);
    }
}
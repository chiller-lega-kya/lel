sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    let h = false
    if (h == false) {
        story.printCharacterText("talk ", "orion")
        story.printCharacterText("talk2 ", "orion")
        story.printCharacterText("talk3 ", "felix")
        story.printCharacterText("talk ", "orion")
    } else {
        story.printCharacterText("we belive in you", "Everyone")
    }
})

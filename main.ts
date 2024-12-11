namespace SpriteKind {
    export const image = SpriteKind.create()
    export const casa = SpriteKind.create()
    export const attack = SpriteKind.create()
    export const CARTEL = SpriteKind.create()
    export const cartel2 = SpriteKind.create()
    export const CARTEL3 = SpriteKind.create()
    export const map = SpriteKind.create()
    export const BOSSS = SpriteKind.create()
    export const clau = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const PUNTOS = SpriteKind.create()
    export const carta = SpriteKind.create()
    export const UEBO = SpriteKind.create()
    export const UEBODEORO = SpriteKind.create()
    export const imformation = SpriteKind.create()
    export const enemyjiji = SpriteKind.create()
    export const vida = SpriteKind.create()
    export const controles = SpriteKind.create()
}
namespace StatusBarKind {
    export const down = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile79`, function (sprite, location) {
    if (info.score() >= 25) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(49, 18))
    } else {
        timer.throttle("action", 1000, function () {
            game.showLongText("Necesitas más puntos no todo el mnundo puede pasar por aquí es un mounstro lo que hay detras", DialogLayout.Top)
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inicio == 0) {
        timer.throttle("action", 700, function () {
            if (controller.right.isPressed()) {
                atackgodtier = 1
                statusbar.value = 0
                controller.moveSprite(mySprite, 0, 0)
                mySprite.setVelocity(200, 0)
                characterAnimations.loopFrames(
                mySprite,
                assets.animation`H0OLA`,
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                timer.after(500, function () {
                    atackgodtier = 0
                    mySprite.setVelocity(0, 0)
                    controller.moveSprite(mySprite, 150, 150)
                    mySprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . f f f f f 3 3 3 f . . . . 
                        . . f e 3 3 3 3 3 3 3 3 f . . . 
                        . f f 3 e 3 3 3 3 3 3 e f f . . 
                        . f 3 3 3 3 e e 3 e e 3 3 f . . 
                        . f 3 3 3 d d d 3 d d 3 3 f . . 
                        . f f 3 d d d d d 3 d d 3 f . . 
                        . . f 3 d f d d d d f d 3 f . . 
                        . f c c d d d d f d d d b b f . 
                        f c c b b 5 c c 9 2 c c c b b f 
                        f b b b f c 5 2 2 b c c c b b f 
                        f b b f f c c c c b f c b b b f 
                        f e 5 5 5 5 5 c c b . f e e d f 
                        f e 2 2 2 8 8 8 9 9 . . f f f . 
                        . f f . . f . . . f . . . . . . 
                        `)
                    ANIMATIONSPRITE1()
                    for (let index = 0; index < 7; index++) {
                        statusbar.value += 1
                        pause(100)
                    }
                })
                music.play(music.createSoundEffect(
                WaveShape.Noise,
                1,
                464,
                0,
                0,
                500,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
                ), music.PlaybackMode.UntilDone)
            }
            if (controller.down.isPressed()) {
                atackgodtier = 1
                statusbar.value = 0
                controller.moveSprite(mySprite, 0, 0)
                mySprite.setVelocity(0, 200)
                characterAnimations.loopFrames(
                mySprite,
                assets.animation`H0OLA`,
                100,
                characterAnimations.rule(Predicate.MovingDown)
                )
                timer.after(500, function () {
                    atackgodtier = 0
                    sprites.destroyAllSpritesOfKind(SpriteKind.attack)
                    mySprite.setVelocity(0, 0)
                    controller.moveSprite(mySprite, 150, 150)
                    mySprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . f f f f f 3 3 3 f . . . . 
                        . . f e 3 3 3 3 3 3 3 3 f . . . 
                        . f f 3 e 3 3 3 3 3 3 e f f . . 
                        . f 3 3 3 3 e e 3 e e 3 3 f . . 
                        . f 3 3 3 d d d 3 d d 3 3 f . . 
                        . f f 3 d d d d d 3 d d 3 f . . 
                        . . f 3 d f d d d d f d 3 f . . 
                        . f c c d d d d f d d d b b f . 
                        f c c b b 5 c c 9 2 c c c b b f 
                        f b b b f c 5 2 2 b c c c b b f 
                        f b b f f c c c c b f c b b b f 
                        f e 5 5 5 5 5 c c b . f e e d f 
                        f e 2 2 2 8 8 8 9 9 . . f f f . 
                        . f f . . f . . . f . . . . . . 
                        `)
                    ANIMATIONSPRITE1()
                    for (let index = 0; index < 7; index++) {
                        statusbar.value += 1
                        pause(100)
                    }
                })
                music.play(music.createSoundEffect(
                WaveShape.Noise,
                1,
                464,
                0,
                0,
                500,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
                ), music.PlaybackMode.UntilDone)
            }
            if (controller.left.isPressed()) {
                atackgodtier = 1
                statusbar.value = 0
                controller.moveSprite(mySprite, 0, 0)
                mySprite.setVelocity(-200, 0)
                characterAnimations.loopFrames(
                mySprite,
                assets.animation`H0OLA`,
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                timer.after(500, function () {
                    atackgodtier = 0
                    statusbar.value = 0
                    sprites.destroyAllSpritesOfKind(SpriteKind.attack)
                    mySprite.setVelocity(0, 0)
                    controller.moveSprite(mySprite, 150, 150)
                    mySprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . f f f f f 3 3 3 f . . . . 
                        . . f e 3 3 3 3 3 3 3 3 f . . . 
                        . f f 3 e 3 3 3 3 3 3 e f f . . 
                        . f 3 3 3 3 e e 3 e e 3 3 f . . 
                        . f 3 3 3 d d d 3 d d 3 3 f . . 
                        . f f 3 d d d d d 3 d d 3 f . . 
                        . . f 3 d f d d d d f d 3 f . . 
                        . f c c d d d d f d d d b b f . 
                        f c c b b 5 c c 9 2 c c c b b f 
                        f b b b f c 5 2 2 b c c c b b f 
                        f b b f f c c c c b f c b b b f 
                        f e 5 5 5 5 5 c c b . f e e d f 
                        f e 2 2 2 8 8 8 9 9 . . f f f . 
                        . f f . . f . . . f . . . . . . 
                        `)
                    ANIMATIONSPRITE1()
                    for (let index = 0; index < 7; index++) {
                        statusbar.value += 1
                        pause(100)
                    }
                })
                music.play(music.createSoundEffect(
                WaveShape.Noise,
                1,
                464,
                0,
                0,
                500,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
                ), music.PlaybackMode.UntilDone)
            }
            if (controller.up.isPressed()) {
                atackgodtier = 1
                statusbar.value = 0
                controller.moveSprite(mySprite, 0, 0)
                mySprite.setVelocity(0, -200)
                characterAnimations.loopFrames(
                mySprite,
                assets.animation`H0OLA`,
                100,
                characterAnimations.rule(Predicate.MovingUp)
                )
                timer.after(500, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.attack)
                    atackgodtier = 0
                    mySprite.setVelocity(0, 0)
                    controller.moveSprite(mySprite, 150, 150)
                    mySprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . f f f f f 3 3 3 f . . . . 
                        . . f e 3 3 3 3 3 3 3 3 f . . . 
                        . f f 3 e 3 3 3 3 3 3 e f f . . 
                        . f 3 3 3 3 e e 3 e e 3 3 f . . 
                        . f 3 3 3 d d d 3 d d 3 3 f . . 
                        . f f 3 d d d d d 3 d d 3 f . . 
                        . . f 3 d f d d d d f d 3 f . . 
                        . f c c d d d d f d d d b b f . 
                        f c c b b 5 c c 9 2 c c c b b f 
                        f b b b f c 5 2 2 b c c c b b f 
                        f b b f f c c c c b f c b b b f 
                        f e 5 5 5 5 5 c c b . f e e d f 
                        f e 2 2 2 8 8 8 9 9 . . f f f . 
                        . f f . . f . . . f . . . . . . 
                        `)
                    ANIMATIONSPRITE1()
                    for (let index = 0; index < 7; index++) {
                        statusbar.value += 1
                        pause(100)
                    }
                })
                music.play(music.createSoundEffect(
                WaveShape.Noise,
                1,
                464,
                0,
                0,
                500,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
                ), music.PlaybackMode.UntilDone)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    manolosworld = 1
    if (manolosworld == 1) {
        music.stopAllSounds()
        music.play(music.createSong(hex`00640004081e0405001c000f0a006400f4010a00000400000000000000000000000000000000028f0184008800010d8c009000010da000a2000108a400a800010dac00b000010dbc00be000114c000c2000111c400c800010dcc00d000010de000e2000108e400e800010dec00f000010dfc00fe00011600010201011404012201011224012e01011430013201010838013a01020a163c013e01020c1444015c01010d64016601010d84018601010d8a018c01010d8c018e01010892019401010894019a01010da401aa010111ac01c001010cc001c201010cc401c6010112cc01ce01010fd001d2010114d401d6010108dc01de01010ce401e601010dee01f0010108f401f6010116f8010002011404020602010d0a020c02010d0c020e02010812021402010814021e02010d24023002010c3c023e02010a40024202010c4402460201124c024e02010f54025602010858025c02020c1464026802010d78027c0201087c028002010d84029c02010da002a402010fa402c0020111c402d0020106d402e0020108e402e802010de802ea020108ec02ee02010af002f202010cf402fe02010d04030603010d08030a03010d0c030e03010d07001c00020a006400f401640000040000000000000000000000000000000003b7018400860003141d2588008a0003141d258c008e0003141d259000920003141d25a400a60003141d25a800aa0003141d25ac00ae0003141d25b000b20003141d25c400c60003141d25c600c70003141d25cc00ce0003141d25e400e50003141d25e600e70003141d25e800e90003141d250601120103161e251401160103161e2518011c0103161e252601320103141b243401360103141b2438013c0103141b244401580103141d255c015e0103141d25700172010311141978017a0103111419800182010311141988018a0103111419900192010311141998019a0103111419a001a20103111419a801aa0103111418b001b20103111418b801ba0103111418c001c20103111418c801ca0103121619d001d2010312161bd801da01030f1418e001e201030f1418e801ea0103111419ee01f00103111419f8010002030f141808020a0203111419100212020311141918021a0203111419200222020311141928022a0203111418300232020311141838023a0203111418400242020311141848024a0203121619500252020312161958025e02030f141868026a02031114196c026e02031114196e027002031114197402780202111908001c000e050046006603320000040a002d0000006400140001320002010002d60004010601012206010801012408012001012524013a01012740014201012044015801012584018601012588018a0101258c018e0101259001920101259401960101259601980101259c019e010122a001a2010124a401aa010129ac01ae01012ab001be010129c001c2010129c401ca01012acc01d201012ad401d60102272cd801de0102242ce401f0010129f8010002012c04020a02012c0c020e02012c10021602012c1c021e02012a2402360201293c023e0201204402460201224c024e02012250025202012054025e020220246402720202202509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80048060400050001010800090001060c000d0001011000110001061400150001011800190001061c001d0001012000210001062200230001122400250001012800290001062c002d0001013000310001063400350001013800390001063c003d0001014000410001064200430001124400450001014800490001064c004d0001015000510001065400550001015800590001065c005d0001016000610001066200630001126400650001016800690001066c006d0001017000710001067400750001017800790001067c007d0001018000810001068200830001128400850001018800890001068c008d0001019000910001069400950001019800990001069c009d000101a000a1000106a200a3000112a400a5000101a800a9000106ac00ad000101b000b1000106b400b5000101b800b9000106bc00bd000101c000c1000106c200c3000112c400c5000101c800c9000106cc00cd000101d000d1000106d400d5000101d800d9000106dc00dd000101e000e1000106e200e3000112e400e5000101e800e9000106ec00ed000101f000f1000106f400f5000101f800f9000106fc00fd0001010001010101060201030101120401050101010801090101060c010d0101011001110101061401150101011801190101061c011d0101012001210101062201230101122401250101012801290101062c012d0101013001310101063401350101013801390101063c013d0101014001410101064201430101124401450101014801490101064c014d0101015001510101065401550101015801590101065c015d0101016001610101066201630101126401650101016801690101066c016d0101017001710101067401750101017801790101067c017d0101018001810101068201830101128401850101018801890101068c018d0101019001910101069401950101019801990101069c019d010101a001a1010106a201a3010112a401a5010101a801a9010106ac01ad010101b001b1010106b401b5010101b801b9010106bc01bd010101c001c1010106c201c3010112c401c5010101c801c9010106cc01cd010101d001d1010106d401d5010101d801d9010106dc01dd010101e001e1010106e201e3010112e401e5010101e801e9010106ec01ed010101f001f1010106f401f5010101f801f9010106fc01fd0101010002010201060202030201120402050201010802090201060c020d0201011002110201061402150201011802190201061c021d0201012002210201062202230201122402250201012802290201062c022d0201013002310201063402350201013802390201063c023d0201014002410201064202430201124402450201014802490201064c024d0201015002510201065402550201015802590201065c025d0201016002610201066202630201126402650201016802690201066c026d0201017002710201067402750201017802790201067c027d0201018002810201068202830201128402850201018802890201068c028d0201019002910201069402950201019802990201069c029d020101a002a1020106a202a3020112a402a5020101a802a9020106ac02ad020101b002b1020106b402b5020101b802b9020106bc02bd020101c002c1020106c202c3020112c402c5020101c802c9020106cc02cd020101d002d1020106d402d5020101d802d9020106dc02dd020101e002e1020106e202e3020112e402e5020101e802e9020106ec02ed020101f002f1020106f402f5020101f802f9020106fc02fd0201010003010301060203030301120403050301010803090301060c030d0301011003110301061403150301011803190301061c031d0301012003210301062203230301122403250301012803290301062c032d0301013003310301063403350301013803390301063c033d0301014003410301064203430301124403450301014803490301064c034d0301015003510301065403550301015803590301065c035d0301016003610301066203630301126403650301016803690301066c036d0301017003710301067403750301017803790301067c037d0301018003810301068203830301128403850301018803890301068c038d0301019003910301069403950301019803990301069c039d030101a003a1030106a203a3030112a403a5030101a803a9030106ac03ad030101b003b1030106b403b5030101b803b9030106bc03bd030101`), music.PlaybackMode.LoopingInBackground)
        forest = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vida, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
function BARRA () {
    statusbar.setColor(9, 15)
    statusbar.attachToSprite(mySprite, 0, 10)
    statusbar.max = 7
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile67`, function (sprite, location) {
    if (info.score() == 1) {
        music.play(music.createSoundEffect(WaveShape.Noise, 4031, 4833, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        tiles.setTileAt(tiles.getTileLocation(19, 4), assets.tile`myTile68`)
        tiles.setTileAt(tiles.getTileLocation(20, 4), assets.tile`myTile69`)
    }
})
sprites.onOverlap(SpriteKind.BOSSS, SpriteKind.Player, function (sprite, otherSprite) {
    if (atackgodtier == 0) {
        timer.throttle("action", 1000, function () {
            animation.runImageAnimation(
            BOSS,
            [img`
                ........................
                ........................
                ....ff..................
                ....f1f.................
                .ff.fbbf................
                .f1ffbbff.ffff..........
                .fbffbbf1f1111ff........
                ..fbbbbbbffffffbf.......
                ..fbbbbbc1111111f.......
                ..fbbbbbccf11fc11f1.....
                ...fbbbbfb11111111f.....
                ...ffffff111111111f.....
                ......fcf111111bbf......
                .......ccbdb1b1fcf......
                .......fffbfbfdff.......
                ........ffffffff........
                ........ffffffff........
                .........fffffff........
                ......f..ffffffb........
                ..........fffff..fff....
                .........f.ffff..f......
                ..........f.............
                ..........f.............
                ...........f............
                `,img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ....7.fd11111111df......
                ...7..fd11111111df......
                ...7..fd11111111df......
                ...7..fddd1111dddff.....
                ...67.fbdbfddfbdbfcf....
                ...667fcdcf11fcdcfbf....
                ....66fffbdb1bdffcf.....
                ....fcb1bcffffff........
                ....f1cdc1ffffff........
                ....fdcdcdfffff.f.f.....
                ....fdcdcdf.......f.....
                ....f1f1f1f.......f.....
                .....f.1.1....ff........
                .......f.f....f.........
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd111111111f......
                ......fd11111111df......
                ......fd11111111df......
                ......fcdd1111ddcff.....
                .......fbcf11fcbfbbf....
                .......ffbdb1bdffff.....
                ........fcbfbfdf........
                ........ffffffff........
                ......ffffffffff........
                .....fcb1bcffff.........
                ......ffbffff...f.......
                .............f..f.......
                .........f...f..f.......
                .........f..f...........
                ............f...........
                ........................
                `],
            100,
            false
            )
            characterAnimations.loopFrames(
            BOSS,
            [img`
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                ......ff111ff1111f......
                .....fd11ffffff11df.....
                .....fdd11f11f11ddf.....
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ........fcdb1bdf........
                ..fffff..cbfbfc...fffff.
                .ff11ff...fffff..fd111f.
                .f111df...fffff.fdd1111f
                fd11dfdf.ffff...fcfdf11f
                fddddfcf.f.fff..fbfdffdf
                fdfdffbf.f.ffff..ffcfccf
                fcfcffff...f..f..fccffff
                .ffbf.f...ff..f..fbff...
                ...f......f.f.....f.....
                ............f.f.........
                ............f...........
                ........................
                ........................
                `,img`
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                ......ff111ff1111f......
                .....fd11ffffff11df.....
                .....fdd11f11f11ddf.....
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ..fffff.fcdb1bdf..fffff.
                .ff11ff.1cbfbfc..fd111f.
                .f111df..1fffff.fdd1111f
                fd11dfdf.ffffff.fcfdf11f
                fddddfcf.f.ffff.fbfdffdf
                fdfdffbf.f.ff.f..ffcfccf
                fcfcffff...ff....fccffff
                .ffbf.f..f.ff....fbff...
                ...f.....f..f.....f.....
                .........f....f.........
                ..............f.........
                ..........f.............
                ..........f.............
                ............f...........
                `,img`
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                ......ff111ff1111f......
                .....fd11ffffff11df.....
                .....fdd11f11f11ddf.....
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.fffff.
                ..fffff.1cbfbfc..fd111f.
                .ff11ff..1fffff.fdd1111f
                .f111df..ffffff.fcfdf11f
                fd11dfdf.f.ffff.fbfdffdf
                fddddfcf.f.ff.f..ffcfccf
                fdfdffbf...ff.f..fccffff
                fcfcffff.f.ff.f..fbff...
                .ffbf.f.....f.....f.....
                ...f....................
                .........f..f...........
                .........f..f...........
                .........f..............
                ..............f.........
                `],
            200,
            characterAnimations.rule(Predicate.MovingDown)
            )
            characterAnimations.loopFrames(
            BOSS,
            [img`
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                ......ff111111111f......
                .....fd1111111111df.....
                .....fd111111111ddf.....
                ......fd11111111df......
                ......fbd1cccc11bf......
                ......fcdccffccdcf......
                .......fb1cfffcbf.......
                ........fcfffcdf........
                ..ccccf..cffffc...fcccf.
                .cccccf...fffff..cccccf.
                .f111df...fffff.fdc1111f
                fd11dfff.ffff...fffdf11f
                ffffffff.f.fff...ffdffff
                ..ffff...f.ffff...fffff.
                ...........f..f.........
                ..........ff..f.........
                ..........f.f...........
                ............f.f.........
                ............f...........
                ........................
                ........................
                `,img`
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                ......ff111111111f......
                .....fd1111111111df.....
                .....fdd11111111ddf.....
                ......fdd111111ddf......
                ......fbd1cccc1dbf......
                ......fcdccccccdcf......
                .......fcdcfff1bf.......
                ..ccccc.fcfffccf..ccccf.
                .fccccc.1cffffc..cccccf.
                .f111cf..1fffff.fcdd111f
                ff1dddff.ffffff.fddddd1f
                ffffffff.f.ffff.fddd11ff
                ......ff.f.ff.f..fffff.f
                ...........ff...........
                .........f.ff...........
                .........f..f...........
                .........f....f.........
                ..............f.........
                ..........f.............
                ..........f.............
                ............f...........
                `,img`
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                ......ff111111111f......
                .....fd1111111111df.....
                .....fdd11111111ddf.....
                ......fddd1111dddf......
                ......fbdbccccbdbf......
                ......fcdcccfccdcf......
                .......fb1ffff1bf.ccccf.
                ..fffff.1cffffc..cccccf.
                .ffccff..1fffff.fdcc111f
                .fcc1cf..ffffff.fddddd1f
                fd11dfcf.f.ffff.fddd11f.
                fddddfff.f.ff.f..fffff..
                fffffff....ff.f.........
                ...fff...f.ff.f.........
                ............f...........
                ........................
                .........f..f...........
                .........f..f...........
                .........f..............
                ..............f.........
                `],
            200,
            characterAnimations.rule(Predicate.MovingUp)
            )
            scene.cameraShake(4, 500)
            info.changeLifeBy(-1)
            music.play(music.createSoundEffect(WaveShape.Triangle, 865, 1, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    forest = 1
    if (forest == 1) {
        music.stopAllSounds()
        music.play(music.createSong(hex`0078000408180503001c0001dc00690000045e01000400000000000000000000056400010400032d00440060000411162229640084000412162225e401f4010411162229f4010402041116242904020802041116222905001c000f0a006400f4010a0000040000000000000000000000000000000002200104000800010a14001800010a24002800010a34003800010a44004800010a54005800010a64006800010a74007800011184008800010a940098000111a400a800010ab400b8000111c400c800010ad400d8000111e400e800010af400f800011104010801010a14011801011124012801010a34013801011144014801010c54015801011164016801010c74017801011184018801010c940198010111a401a801010cb401b8010111c401c801010ad401d8010111e401e801010af401f801011104020802010a14021802011124022802010a34023802011144024802010c54025802011164026802010c74027802011184028802010c940298020111a402a8020105b402b8020111c402c802010ad402d8020111e402e602010af402f602011107001c00020a006400f4016400000400000000000000000000000000000000034a028c009000030a0d1190009400030a0d119c00a000030a0d11a000a400030a0d11ac00b000030a0d11b000b400030a0d11bc00c000030a0d11c000c400030a0d11cc00d000030a0d11d000d400030a0d11dc00e000030a0d11e000e400030a0d11ec00f000030a0d11f000f400030a0d11fc000001030a0d1100010401030a0d110c010e01020d1110011201020d111c011e01020d1120012201020d112c012e01020d1130013201020d113c013e01020f1140014201020f114c014e01020f1150015201020f115c015e01020f1160016201020f116c016e01020f1170017201020f117c017e01020f1180018201020f118c018e01020f1190019201020f119c019e01020f11a001a201020f11ac01ae01020f11b001b201020f11bc01be01030c0f11c001c201030c0f11cc01ce01020d11d001d201020d11dc01de01020d11e001e201020d11ec01ee01020d11f001f201020d11fc01fe01020d1100020202020d110c020e02020d1110021202020d111c021e02020d1120022202020d112c022e02020d1130023202020d113c023e02020d1140024202020d114c024e02020f1150025202020f115c025e02020f1160026202020f116c026e02020f1170027202020f117c027e02020f1180028202020f118c028e02020f1190029202020f119c029e02020f11a002a202020f11ac02ae02020f11b002b202020f11bc02be02020f11c002c202020f11cc02ce02020d11d002d202020d11dc02de02020d11e002e202020d11e402e502010ae502e602010de602f4020111f402f5020111f502f6020116f6020003011908001c000e050046006603320000040a002d00000064001400013200020100029c0004010801012508010c0101240c011c0101223401380101253c014001012744015001012454015e01012264016c01011d8401940101249c01a001011da401a8010129b401b8010124c401e801012204020802012208020c02011d0c023a0201293c02400201274402600201248402880201298c02940201279c02a402011da402a6020129ac02ae020127b402b6020125bc02be020124c402d802012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000502a400a5000106ac00ad000106b400b5000414040608bc00bd000106c400c5000106cc00cd000106d400d5000414040608dc00dd000106e400e5000106ec00ed000106f400f5000414040608fc00fd000106040105010206090c010d0101061401150105140406080a1c011d010106240125010206092c012d0101063401350105140406080a3c013d010106440145010206094c014d0101065401550105140406080a5c015d010106640165010206096c016d0101067401750105140406080a7c017d010106840185010206098c018d0101069401950105140406080a9c019d010106a401a501020609ac01ad010106b401b50105140406080abc01bd010106c401c501020609cc01cd010106d401d50105140406080adc01dd010106e401e501020609ec01ed010106f401f50105140406080afc01fd010106040205020206090c020d0201061402150205140406080a1c021d020106240225020206092c022d0201063402350205140406080a3c023d020106440245020206094c024d0201065402550205140406080a5c025d02010664026502030506096c026d0201067402750205140406080a7c027d020106840285020206098c028d0201069402950205140406080a9c029d020106a402a502020609ac02ad020106b402b50205140406080abc02bd020106c402c502020609cc02cd020106d402d50205140406080adc02dd020106`), music.PlaybackMode.LoopingInBackground)
        manolosworld = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.imformation, function (sprite, otherSprite) {
    timer.throttle("texas", 1000, function () {
        if (PARRY == 1) {
            game.showLongText("ya puedes ir a por el boss", DialogLayout.Bottom)
        } else {
            game.showLongText("consigue mas puntos para ir al boss", DialogLayout.Bottom)
        }
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.UEBO, function (sprite, otherSprite) {
    game.splash("¡¡5 puntos!!")
    sprites.destroy(otherSprite)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyjiji, function (sprite, otherSprite) {
    if (atackgodtier == 0) {
        timer.throttle("action", 1000, function () {
            scene.cameraShake(4, 500)
            info.changeLifeBy(-1)
            animation_when_hiting()
            timer.after(1100, function () {
                ANIMATIONSPRITE1()
            })
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cartel2, function (sprite, otherSprite) {
    cartel_2.sayText("Arriba: Castillo Izquierda: Bosque     Abajo: Pueblo", 500, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.controles, function (sprite, otherSprite) {
    timer.throttle("CONTROLS", 500, function () {
        game.splash("CONTROLES:arriba-w abajo-s izquierda-A derecha-D", " ATAQUE:d/w/a/s + boton A(q en teclado) ")
    })
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.setScore(0)
    sprites.destroy(BOSS, effects.spray, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    boss_vivo = 0
    music.play(music.createSoundEffect(WaveShape.Noise, 1356, 1, 5000, 0, 1500, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    llave = sprites.create(img`
        . . . . f . . . . . f . . . . . 
        . . . f e f . . . f e f . . . . 
        . . f e 5 f f f f f e 1 f . . . 
        . . f e 1 f 5 5 2 f e e f . . . 
        . . f 5 5 e 1 1 2 e 2 5 f . . . 
        . . f 5 e 1 5 5 5 2 e 5 f . . . 
        . . f 5 e 1 2 5 5 2 e 5 f . . . 
        . . f 5 e 1 2 5 5 2 2 5 f . . . 
        . . f 5 e 1 2 2 2 2 2 5 f . . . 
        . . . f f 5 e 2 5 2 f f . . . . 
        . . . . . f 5 2 5 f . . . . . . 
        . . . . . f 5 1 5 f f . . . . . 
        . . . . . f 5 1 5 5 5 f . . . . 
        . . . . . f 5 1 5 f f . . . . . 
        . . . . . f 5 1 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        `, SpriteKind.clau)
    characterAnimations.loopFrames(
    llave,
    [img`
        . . . f e f . . . f e f . . . . 
        . . f e 5 f f f f f e 1 f . . . 
        . . f e 1 f 5 5 2 f e e f . . . 
        . . f 5 5 e 1 1 2 e 2 5 f . . . 
        . . f 5 e 1 5 5 5 2 e 5 f . . . 
        . . f 5 e 1 2 5 5 2 e 5 f . . . 
        . . f 5 e 1 2 5 5 2 2 5 f . . . 
        . . f 5 e 1 2 2 2 2 2 5 f . . . 
        . . . f f 5 e 2 5 2 f f . . . . 
        . . . . . f 5 2 5 f . . . . . . 
        . . . . . f 5 1 5 f f . . . . . 
        . . . . . f 5 1 5 5 5 f . . . . 
        . . . . . f 5 1 5 f f . . . . . 
        . . . . . f 5 1 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f e f . . . f e f . . . . 
        . . f e 5 f f f f f e 1 f . . . 
        . . f e 1 f 5 5 2 f e e f . . . 
        . . f 5 5 e 1 1 2 e 2 5 f . . . 
        . . f 5 e 1 5 5 5 2 e 5 f . . . 
        . . f 5 e 1 2 5 5 2 e 5 f . . . 
        . . f 5 e 1 2 5 5 2 2 5 f . . . 
        . . f 5 e 1 2 2 2 2 2 5 f . . . 
        . . . f f 5 e 2 5 2 f f . . . . 
        . . . . . f 5 2 5 f . . . . . . 
        . . . . . f 5 1 5 f f . . . . . 
        . . . . . f 5 1 5 5 5 f . . . . 
        . . . . . f 5 1 5 f f . . . . . 
        . . . . . f 5 1 5 5 5 f . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
    llave.setPosition(318, 245)
    game.showLongText("COJER LA LLAVE", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile81`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(49, 12))
})
function animation_when_hiting () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        f f f f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . f 3 3 3 3 f f . 
        . f f f . . . f 3 e 3 3 3 3 3 f 
        . . . . . . f 3 3 3 e e e 3 3 f 
        . . . . . . f 3 3 3 3 3 d d f . 
        . . . . . . f 3 3 3 d 3 d f . . 
        . . . . . . . f f 3 d d d d f . 
        . . . . . . f b b c c f f f f . 
        . . . . f f b b b c c c f d f . 
        . . . f d b b b b c c c c c f . 
        . . . f 5 5 5 5 c c c f f f . . 
        . . . f 2 2 2 8 c c c . . . . . 
        f . . . . 8 8 8 9 f 9 9 . . . . 
        . . . . f . . . . . . f f . . . 
        `,img`
        f f . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f . . 
        . f f . . f f . f 3 3 3 3 f f . 
        . . . . . . . f e 3 3 3 3 3 3 f 
        . . . . . . f 3 3 e e e e 3 3 f 
        . . . . . . f 3 3 3 3 d d d 3 f 
        . . . . . . f 3 3 d 3 d d f . . 
        . . . . . . . f 3 d d d d d f . 
        . . . . . . . . f b b c f f . . 
        . . . . . . . f c c b b c f . . 
        . . . . . . . f c c b b c f . . 
        . . . . . . . f c c 5 5 5 5 5 f 
        f f . . . . . f f 8 2 2 2 f . . 
        . . . . . . . . f 8 8 8 f . . . 
        . . . . . . . . f f 8 f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        f f f . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f 3 3 3 3 f f . . . 
        . . . . . f 3 3 3 3 3 3 3 f . . 
        . . . . f 3 e 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 e e e e d 3 f . . 
        . . . f 3 3 3 3 3 3 3 d 3 f . . 
        . . . . f 3 3 d 3 d d f . . . . 
        . . . . f 3 3 d d d d d f . . . 
        . . . . . f f 3 3 c 5 f . . . . 
        . . . f f c c b b b c f . . . . 
        . . f c c c c c b b b b f f f . 
        . f e e c f c c c f b d 5 5 5 f 
        . f e d f 9 9 8 8 c f d 2 2 f . 
        . . f f 9 9 f f 8 8 8 . f f . . 
        . . . f . . . . . . . f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f 3 3 3 f f f . . 
        . . f e 3 3 3 3 3 3 3 3 f f . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b b f . 
        f c c b b 5 c c 9 2 c c c b b f 
        f b b b f c 5 2 2 b c c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 c c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 . . f f f . 
        . f f . . f . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b f . . 
        f c c b b 5 c c 9 2 c c c b f . 
        f b b b f c 5 2 2 b c c c b f . 
        f b b f f c c c c b f c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 8 c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 . . f f f . 
        . f f . . f . . . f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 d f . . . 
        . . f b b c 3 3 c c c c f . . . 
        . f b b b c c c c b c f c f . . 
        f b b b f c c c c b f c b b f . 
        f b b f f c c c c b f f e e f . 
        f e d f . 8 8 8 9 9 f . f f . . 
        . f f . . f f . . f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f c c 3 3 3 3 3 3 3 3 b f . . 
        f c c b b c c 3 3 3 c c b b f . 
        f b b b f c c c c f c c b b f . 
        f d d f . c c c c b f e e d f . 
        f f f . . 8 8 8 9 9 f f f f . . 
        . . . . . f . . f f . . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . f f f f 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . f f 3 3 3 3 f . . . . . . . . 
        f 3 3 3 3 3 e 3 f . . . . . . . 
        f 3 3 e e e 3 3 3 f . . . . . . 
        . f d d 3 3 3 3 3 f . f f . . . 
        . . f d 3 d 3 3 3 f . . . . . . 
        . f d d d d 3 f f . . . . . . . 
        . f f f f c c b b f . . . . . . 
        . f d f c c c b b b f f . . . . 
        . f c c c c c b b b b d f . . . 
        . . f f f c c c 5 5 5 5 f . . . 
        . . . . . c c c 8 2 2 2 f . . . 
        . . . . 9 9 f 9 8 8 8 f f . . . 
        . . . f . . . . . . f . . . . f 
        `,img`
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . f f 3 3 3 3 f . . . . . . . . 
        f 3 3 3 3 3 3 e f . . . . . . . 
        f 3 3 e e e e 3 3 f . f f f . . 
        f 3 d d d 3 3 3 3 f . . . . . . 
        . . f d d 3 d 3 3 f . . . . . . 
        . f d d d d d 3 f . . . . . . . 
        . . f f c b b f . . . . . . . . 
        . . f c b b c c f . . . . . . . 
        . . f c b b c c f . . . . . . . 
        . 5 5 5 5 5 c c f . . . . . . . 
        . . f 2 2 2 8 f f . . . . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . . f f 8 f f . . . . f f . f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . f f f . f 
        . . . . . f f f f . . . . . . . 
        . . . f f 3 3 3 3 f . . . . . . 
        . . f 3 3 3 3 3 3 3 f . . . . . 
        . . f 3 3 3 3 3 3 e 3 f . . . . 
        . . f 3 d e e e e 3 3 3 f . . . 
        . . f 3 d 3 3 3 3 3 3 3 f . . . 
        . . . . f d d 3 d 3 3 f . . f f 
        . . . f d d d d d 3 3 f . . . . 
        . . . . f 5 c 3 3 f f . . . . . 
        . . . . f c b b b c c f f . . . 
        f f f f b b b b c c c c c f . . 
        f 5 5 5 d b f c c c f c e e f . 
        f f 2 2 d f c 8 8 9 9 f d e f . 
        . f f f . 8 8 8 f f 9 9 f f . . 
        . . . . f . . . . . . f . . . f 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (atackgodtier == 0) {
        timer.throttle("action", 1000, function () {
            animation_when_hiting()
            scene.cameraShake(4, 500)
            info.changeLifeBy(-1)
            timer.after(1100, function () {
                ANIMATIONSPRITE1()
            })
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.clau, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(llave)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    game.showLongText("Manolito decide saLir de su casa", DialogLayout.Top)
    inicio = 0
    manolosworld = 1
    forest = 0
    info.setLife(3)
    CASTILLO = sprites.create(img`
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777779999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777779999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777779999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999cccccbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddddddddddddbbbddddddddddddddddddddccdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddddddddddbbddddddddddddddddddddcccdddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddddddddbbdddddddddddddddddddcccddddddddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddddddbbddddddddddddddddddfccffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddddbbdddddddddddddddddfcccffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddddddddddddddbbddddddddddddddddecccfffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddddbbbdddddddddddddddfcccffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddddbbdddddddddddfffffccc.ffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddddbbddddddfffffffddcccdccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbdddddddddbbddffffffdddddddccdcccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbbddddddfbbffffddddddddddcccccccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccccbbbbffffffbbdddddddddddddcccdcccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999999ccccffffffbdbdbbddddddddddddcccddcccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999999999999999999999999999999fffcfffccbbbbbdbbdddddddddddcccdcccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        777777779999999999999999999999999999999fffffff999ccccccbbbbbdddddddddddcccdcbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        777777779999999999999999999999999ffffff9999999999ccccccbbbbbdddddddddcccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        77777777999999999999999999fffffff9999999999999999ccccccbbbbbddddddccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999999999fffffff99999999999999999999999ccccccbbbbbdddcccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        7777777799999ffffff999999999999999999999999999999ccccccbbbbbccccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        333333fffffff33333333333333333333333333333333333333333333333ccccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        33333f222222222222333333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        333333333333333333333333333333333333333333333333333333333333ccccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        333333333333333333333333333333333333333333333333333333333333ccccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e222222222222222222222222222222222222222222222222222222222e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e222222222222222222222222222222222222222222222222222222222e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e332222222222222223333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        eeeeeeeeeeeeeeeeeeeeeeeeee33333333eeeeeeeeeeeeeeeeeeeeeeeee333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        eeeeeeeeeeeeeeeeeeeeeeeeee33333333eeeeeeeeeeeeeeeeeeeeeeeee333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdfdddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdfdddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdfdddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbddddddddddddddddddddddddddddddddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        e322222222222222223333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        e333333333333333333333333333333333333333333333333333333333e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        e222222222222222222222222222222222222222222222222222222222e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        e222222222222222222222222222222222222222222222222222222222e333ccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33cccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        33ff222222222222222223333333333333333333333333333333333333333cccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        3333fffffff33333333333333333333333333333333333333333333333333cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        333333333ffffffff33333333333333333333333333333333333333333333cccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999fffffff99999999999999999999999999999ccccbbbbcccccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        777777999999999999999999ffffff99999999999999999999999ccccbbbbddcccccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        777777999999999999999999999999fffffff9999999999999999ccccbbbbddddcccccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        7777779999999999999999999999999999999ffffff9999999999ccccbbbbdddddddccccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        7777779999999999999999999999999999999999999fffffff999ccccbbbbdddddddddccccccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999fffccfcbbbbdddddddddddddccbccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999cccfffffffddddddddddddddccccccccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddfffffffddddddddddddcccccbccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddffffffdddddddddcccccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdbbddddddddddddfffffffddddcccccccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddbbdddddddddddddddddffffffcc.ccfffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddbbdddddddddddddddddddddffffffffffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddbbbdddddddddddddddddddddddcccffffffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddbbddddddddddddddddddddddddcccfffffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbbbddddddddddddddddddddddddcccffffffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddbbdddddddddddddddddddddddddcccfffffffdddddbdddddddddddddddddddddddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddddbbddddddddddddddddddddddddddcccffffdddddbddddddddddddddddddddbddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddddddbbbddddddddddddddddddddddddddcccfdddddbddddddddddddddddddddbddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddddddddddddbbdddddddddddddddddddddddddddcdddddbddddddddddddddddddddbddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddbddddddddddddddddddddbddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddbddddddddddddddddddddbddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddddddddddddddddbbddddddddddddddddddddddddddbddddddddddddddddddddbddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddddddddddddddddddbbbdddddddddddddddddddddddbddddddddddddddddddddbddddddddbddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddbddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddbddddddddddddddddddddbbddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbddddddddddddddddddddbdbbddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddddddddddddddddddddddddddddddbbddddddddddddbddddddddddddddddddddbdddbdddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbdddddddddddddddddddddddddddddddddddddddddddddbbbdddddddddbddddddddddddddddddddbddddbddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddbddddddddddddddddddddbdddddbbddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddbddddddddddddddddddddbdddddddbdddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddbdddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999cccbbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        77777799999999999999999999999999999999999999999999999ccccbbbbddddddddddddbdddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        77777779999999999999999999999999999999999999999999999ccccbbbbdddddddddddddbddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `, SpriteKind.Player)
    CARTEL1 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        f 2 e e e e 3 e e e 3 e e 3 2 f 
        f e 3 e e 3 3 e e 3 3 e e 3 e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e 3 e e 3 e e 3 e 3 e f 
        f e e e 3 e e 3 3 e 3 e e 3 e f 
        . f e e e e e e e e e e e e f . 
        . . f f f f f 2 e f f f f f . . 
        . . . . . . f 2 e f . . . . . . 
        . . . . . . f 2 e f . . . . . . 
        . . . 6 6 6 f 2 e f 6 6 6 . . . 
        . . 6 6 6 6 f 2 e f 6 6 6 6 . . 
        . . 6 6 6 6 f 2 e f 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        `, SpriteKind.CARTEL)
    CARTEL1.setPosition(482, 1778)
    cartel_2 = sprites.create(img`
        ........f........
        .......f2f.......
        ......f222f......
        ......fe2ef......
        ......f3eef......
        ......f3eef......
        ..fffff3eef......
        .f3333333ef......
        f33e33e33efff....
        f333ee3e3ef33f...
        .f3333333e333f...
        ..fffffee33e3f...
        ......f3e3333f...
        ......f3e3e3f....
        ......f3e3e3f....
        ......f3e33f.....
        ......f3e33f.....
        ......f3e3f......
        ......f3eef......
        ......f3eeffff...
        ......f3333333f..
        ......f33ee3333f.
        ......f3e33e333f.
        ......f3333333f..
        ......f3eeffff...
        ......f3eef......
        ......f3eef..bbb.
        ......f3eefbbbbb.
        ......f3eefbbbb..
        ......f3eefbbb...
        ......f3eefbbb...
        .....bf3eefbbb...
        .....bf3eefb.....
        ......bbebb......
        .......bbb.......
        `, SpriteKind.cartel2)
    cartel_2.setPosition(1161, 1234)
    CARTEL3 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        f 2 e e e e 3 e e e 3 e e 3 2 f 
        f e 3 e e 3 3 e e 3 3 e e 3 e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e 3 e e 3 e e 3 e 3 e f 
        f e e e 3 e e 3 3 e 3 e e 3 e f 
        . f e e e e e e e e e e e e f . 
        . . f f f f f 2 e f f f f f . . 
        . . . . . . f 2 e f . . . . . . 
        . . . . . . f 2 e f . . . . . . 
        . . . 6 6 6 f 2 e f 6 6 6 . . . 
        . . 6 6 6 6 f 2 e f 6 6 6 6 . . 
        . . 6 6 6 6 f 2 e f 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        `, SpriteKind.CARTEL3)
    CARTEL3.setPosition(746, 920)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b b f . 
        f c c b b 5 c c 9 2 c c c b b f 
        f b b b f c 5 2 2 b c c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 c c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 . . f f f . 
        . f f . . f . . . f . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(326, 1784)
    controller.moveSprite(mySprite, 150, 150)
    scene.cameraFollowSprite(mySprite)
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    tiles.setCurrentTilemap(tilemap`nivel7`)
    mySprite2 = sprites.create(img`
        .............eeeeee.............
        ...........cceeeeee33...........
        ...........22eeeeee333..........
        ..........222eeeeee3333.........
        .........2222eeeeee23333........
        ........22222eeeeee233333.......
        .......d22222eeeeee233333.......
        ......2d22222eeeeee2323333......
        ....212d22222eeeeee232333333....
        .2ee212d22222eeeeee232333333333.
        .2ee212d22222eeeeee232333333333.
        .2ee212d22222eeeeee332333333333.
        .2ee212d22222eeeeee332333333333.
        .2ee212d22222eeeeee33233333e333.
        .2ee212d22222eeeeee23233333e333.
        .2ee212d22222eeeeee23233333ee33.
        .2ee212d22222e3333e22233233ee33.
        .2ee21212222233333311233233ee33.
        62ee21212222e22222231123233ee33.
        62ee2122222eeeeee3333311233ee336
        62ee212222eeeee333333331133eee36
        62ee22222eeeeeeee3333333312eee36
        62ee2222eeeeeee333333333311eee36
        72ee22e11299eee333331929933eee36
        7888eee22222eee33333222223336666
        8888eee11299ee222233192993336666
        8888eeeeeeeee2222223333333336666
        8888eeeeeeeee2222223333333336666
        88888888888888888888888888866666
        88888888888888888888888886666666
        88888888888888888888888666666666
        68888888888888666666666666666666
        `, SpriteKind.casa)
    mySprite2.setPosition(320, 1760)
    casa_1 = sprites.create(img`
        ......................cccceeeeeeeeeeeeee3333....................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ...................2222222eeeeeeeeeeeeee333333333...............
        ...................2222222eeeeeeeeeeeeee333333333...............
        .................222222222eeeeeeeeeeeeee12333333333.............
        .................222222222eeeeeeeeeeeeee12333333333.............
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3
        2eeeee221122ddd22222222222ee3eeeeeeee3ee2222222333312233331eeee3
        2eeeee22112211122222222222333eeeeeeee3331111222333312233331eeee3
        2eeeee2211221112222222222233eeeeeeeeee331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111112233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111122233331eeee3
        2eeeee2211222222222eeeeeeeeeeeeeeee333333333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeee3333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeee3333331111133331eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeee33ee33333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeee3333333333333333333311111eeeee
        2eeeee2222ee111112219999eeeeeeeee33333333311999ee9999933331e1eee
        2eeeee2222ee111112211999eeeeeeee333333333311999ee999993333111eee
        .....ccceeee111112211999eeeeeeeeeeee33333322eeeeeeeeee333333....
        .....ccceeee222222222eeeeeeeeee3333333333322eeeeeeeeee333333....
        .....ccceeee111112219999eeee222eeeeeee333311999ee99999333333....
        .....ccceeee111112299999eeee2ee333333e333319999ee99999333333....
        .....ccceeee111112299999eeee2e2eee33ee333399999ee99999333333....
        .....ccceeeeeeeeeeeeeeeeee22222eeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e3eeeeeee333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e2eeeeeeeee3e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2eeeeeeeeeeeee33333333333333333333....
        `, SpriteKind.casa)
    casa_1.setPosition(736, 1409)
    casa_2 = sprites.create(img`
        ......................cccceeeeeeeeeeeeee3333....................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ...................2222222eeeeeeeeeeeeee333333333...............
        ...................2222222eeeeeeeeeeeeee333333333...............
        .................222222222eeeeeeeeeeeeee12333333333.............
        .................222222222eeeeeeeeeeeeee12333333333.............
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3
        2eeeee221122ddd22222222222ee3eeeeeeee3ee2222222333312233331eeee3
        2eeeee22112211122222222222333eeeeeeee3331111222333312233331eeee3
        2eeeee2211221112222222222233eeeeeeeeee331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111112233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111122233331eeee3
        2eeeee2211222222222eeeeeeeeeeeeeeee333333333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeee3333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeee3333331111133331eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeee33ee33333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeee3333333333333333333311111eeeee
        2eeeee2222ee111112219999eeeeeeeee33333333311999ee9999933331e1eee
        2eeeee2222ee111112211999eeeeeeee333333333311999ee999993333111eee
        .....ccceeee111112211999eeeeeeeeeeee33333322eeeeeeeeee333333....
        .....ccceeee222222222eeeeeeeeee3333333333322eeeeeeeeee333333....
        .....ccceeee111112219999eeee222eeeeeee333311999ee99999333333....
        .....ccceeee111112299999eeee2ee333333e333319999ee99999333333....
        .....ccceeee111112299999eeee2e2eee33ee333399999ee99999333333....
        .....ccceeeeeeeeeeeeeeeeee22222eeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e3eeeeeee333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e2eeeeeeeee3e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2eeeeeeeeeeeee33333333333333333333....
        `, SpriteKind.casa)
    casa_2.setPosition(1472, 1409)
    casa_3 = sprites.create(img`
        ......................cccceeeeeeeeeeeeee3333....................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ...................2222222eeeeeeeeeeeeee333333333...............
        ...................2222222eeeeeeeeeeeeee333333333...............
        .................222222222eeeeeeeeeeeeee12333333333.............
        .................222222222eeeeeeeeeeeeee12333333333.............
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3
        2eeeee221122ddd22222222222ee3eeeeeeee3ee2222222333312233331eeee3
        2eeeee22112211122222222222333eeeeeeee3331111222333312233331eeee3
        2eeeee2211221112222222222233eeeeeeeeee331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111112233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111122233331eeee3
        2eeeee2211222222222eeeeeeeeeeeeeeee333333333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeee3333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeee3333331111133331eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeee33ee33333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeee3333333333333333333311111eeeee
        2eeeee2222ee111112219999eeeeeeeee33333333311999ee9999933331e1eee
        2eeeee2222ee111112211999eeeeeeee333333333311999ee999993333111eee
        .....ccceeee111112211999eeeeeeeeeeee33333322eeeeeeeeee333333....
        .....ccceeee222222222eeeeeeeeee3333333333322eeeeeeeeee333333....
        .....ccceeee111112219999eeee222eeeeeee333311999ee99999333333....
        .....ccceeee111112299999eeee2ee333333e333319999ee99999333333....
        .....ccceeee111112299999eeee2e2eee33ee333399999ee99999333333....
        .....ccceeeeeeeeeeeeeeeeee22222eeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e3eeeeeee333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e2eeeeeeeee3e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2eeeeeeeeeeeee33333333333333333333....
        `, SpriteKind.casa)
    casa_3.setPosition(1328, 1409)
    casa_4 = sprites.create(img`
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ....................................................cccceeeeeeeeeeeeee3333......................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        .................................................2222222eeeeeeeeeeeeee333333333.................................................
        .................................................2222222eeeeeeeeeeeeee333333333.................................................
        ...............................................222222222eeeeeeeeeeeeee12333333333...............................................
        ...............................................222222222eeeeeeeeeeeeee12333333333...............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        ..........................................ddd22222222222eeeeeeeeeeeeee12333333333333............................................
        ..........................................ddd22222222222eeeeeeeeeeeeee12333333333333............................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ....................................221122ddd22222222222eeeeeeeeeeeeee12331223333333333333......................................
        ....................................221122ddd22222222222eeeeeeeeeeeeee12331223333333333333......................................
        .................................eee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        .................................eee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        ....................cccceeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333eeeeeeeee3333.....................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333eeeeeeeee3333333..................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee3333333..................
        .................2222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee3333333..................
        .................2222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee333333333................
        ...............222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee333333333................
        ...............222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333eeeeeeeee12333333333..............
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333eeeeeeeee12333333333..............
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333eeeeeeeee12333333333333...........
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333eeeeeeeee12333333333333...........
        ..........ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333eeeeeeeee12333333333333...........
        ..........ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee12333333333333...........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee12333333333333...........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee1233122333333333.........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3eeeeeeeee1233122333333333.........
        ....221122ddd22222222222eeeeeeeeeeee221122ddd22222222222ee3333333333ee2222222333312233331eeee3eeeeeeeee1233122333333333.........
        ....221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee12331223333333333333.....
        eeee221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee12331223333333333333.....
        eeee221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee221122111222222222ee22222222222222ee11111223312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee221122111222222222ee22222222222222ee11111223312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222222eeeeeeeeeeeeeeeeeeeeeeeee111112233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222222eeeeeeeeeeeeeeeeeeeeeeeee111122233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11221eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11221eeeeeeeeeeeeee333312233333333333133333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee3333122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee3333122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee2233122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee2222ee111112219999eeeeeeeeeeeeeeeeee11999ee99999eeee1e1eeeeeeeeeeee2233122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee2222ee111112211999eeeeeeeeeeeeeeeeee11999ee99999eeee111eeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222eeeeeeeeeeeeeeeeee111112211999eeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222ee3333333333eeeeee222222222eeeeeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222ee3333333333eeeeee111112219999eeeeeeeeeeeeeeeeee11999ee99999eeeee333333333333ee2222122333322233331eeee3.
        eeee22112211122222222222333333333333eeeeee111112299999eeeeeeeeeeeeeeeeee19999ee99999eeeee333333333333ee2222222333312233331eeee3.
        eeee22112211122222222222333333333333eeeeee111112299999eeeeeeeeeeeeeeeeee99999ee99999eeeee333333333333331111222333312233331eeee3.
        eeee22112211122222222222333333333333eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333331111222333312233331eeee3.
        eeee221122111222222222ee222222222233eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333331111222333312233331eeee3.
        eeee221122111222222222ee222222222233eeeeee11999ee99999eeeeeeeeeeeeeeeeee111112219999eeeee322222222222223311111223312233331eeee3.
        eeee2211222222222222eeeeeeeeeeeeeee3eeeeee11999ee99999eeeeeeeeeeeeeeeeee111112211999eeeee322222222222223311111223312233331eeee3.
        eeee2211222222222222eeeeeeeeeeeeeee3eeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeee111112211999eeeee33eeeeeee333333333333111112233331eeee3.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeee222222222eeeeeeee33eeeeeee333333333333111122233331eeee3.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee11999ee99999eeee2222222222eeee111112219999eeeee33eeeeeee333333333333331111133331eeeee.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee19999ee99999eee222222222222eee111112299999eeeee33eeeeeeeeeeee3333333331111133331eeeee.
        eeee22222222222eeeeeeeeeeeeeeeeeeee3eeeeee99999ee99999eee2eeeeeeeeee2eee111112299999eeeee33eeeeeeeeeeeeeee3333331111133331eeeee.
        eeee22222222222eeeeeeeeeeeeeeeeeeee3eeeeeeeeeeeeeeeeeee2222222222222222eeeeeeeeeeeeeeeeee33eeeeeeee33333333333333333311221eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeee3eeeeeeeeeeeeeeeeee222e2222222222e222eeeeeeeeeeeeeeeee33eeeeeeee33333333333333333311221eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222eeee333eeeeeeeee3eeeeeeee33ee33333333333333311111eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e22222222222222e22eeee333eeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee.
        eeee2222ee111112219999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222e22eeeeeeeeee333333eeeeeee3333333333333333333311111eeeee.
        eeee2222ee111112211999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeee3333333311999ee9999933331e1eee.
        ...ccceeee111112211999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeeee33333333311999ee999993333111eee.
        ...ccceeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeeeeeee33333322eeeeeeeeee333333.....
        ...ccceeee111112219999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeee333333333322eeeeeeeeee333333.....
        ...ccceeee111112299999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeee333333eeeeeeeeeeee333311999ee99999333333.....
        ...ccceeee111112299999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeee33333e333319999ee99999333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeee33ee333399999ee99999333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeee33e33333333333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeee33e3eeeeeee333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeee333333333eeeeeeeeeeeee3e33333333333333333333.....
        `, SpriteKind.casa)
    casa_4.setPosition(911, 1375)
    casa_5 = sprites.create(img`
        ......................cccceeeeeeeeeeeeee3333....................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ...................2222222eeeeeeeeeeeeee333333333...............
        ...................2222222eeeeeeeeeeeeee333333333...............
        .................222222222eeeeeeeeeeeeee12333333333.............
        .................222222222eeeeeeeeeeeeee12333333333.............
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111112233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111122233331eeee3
        2eeeee2211222222222eeeeeeeeeeeeeeee333333333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeee3333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeee3333331111133331eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeee33ee33333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeee3333333333333333333311111eeeee
        2eeeee2222eeeeeeeeeeeeeeeeeeeeeee33333333333333333333333331e1eee
        2eeeee2222eeeeeeeeeeeeeeeeeeeeee33333333333333333333333333111eee
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee3333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee3333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee3333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee3eeeeeee333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        `, SpriteKind.casa)
    casa_5.setPosition(785, 1550)
    casa_8 = sprites.create(img`
        ......................cccceeeeeeeeeeeeee3333....................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ...................2222222eeeeeeeeeeeeee333333333...............
        ...................2222222eeeeeeeeeeeeee333333333...............
        .................222222222eeeeeeeeeeeeee12333333333.............
        .................222222222eeeeeeeeeeeeee12333333333.............
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111112233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111122233331eeee3
        2eeeee2211222222222eeeeeeeeeeeeeeee333333333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeee3333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeee3333331111133331eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeee33ee33333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeee3333333333333333333311111eeeee
        2eeeee2222eeeeeeeeeeeeeeeeeeeeeee33333333333333333333333331e1eee
        2eeeee2222eeeeeeeeeeeeeeeeeeeeee33333333333333333333333333111eee
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee3333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee3333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee3333333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee3eeeeeee333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333....
        `, SpriteKind.casa)
    casa_8.setPosition(945, 1550)
    casa_7 = sprites.create(img`
        ......................cccceeeeeeeeeeeeee3333....................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ...................2222222eeeeeeeeeeeeee333333333...............
        ...................2222222eeeeeeeeeeeeee333333333...............
        .................222222222eeeeeeeeeeeeee12333333333.............
        .................222222222eeeeeeeeeeeeee12333333333.............
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3
        2eeeee221122ddd22222222222ee3eeeeeeee3ee2222222333312233331eeee3
        2eeeee22112211122222222222333eeeeeeee3331111222333312233331eeee3
        2eeeee2211221112222222222233eeeeeeeeee331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111112233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111122233331eeee3
        2eeeee2211222222222eeeeeeeeeeeeeeee333333333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeee3333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeee3333331111133331eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeee33ee33333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeee3333333333333333333311111eeeee
        2eeeee2222ee111112219999eeeeeeeee33333333311999ee9999933331e1eee
        2eeeee2222ee111112211999eeeeeeee333333333311999ee999993333111eee
        .....ccceeee111112211999eeeeeeeeeeee33333322eeeeeeeeee333333....
        .....ccceeee222222222eeeeeeeeee3333333333322eeeeeeeeee333333....
        .....ccceeee111112219999eeee222eeeeeee333311999ee99999333333....
        .....ccceeee111112299999eeee2ee333333e333319999ee99999333333....
        .....ccceeee111112299999eeee2e2eee33ee333399999ee99999333333....
        .....ccceeeeeeeeeeeeeeeeee22222eeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e3eeeeeee333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e2eeeeeeeee3e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2eeeeeeeeeeeee33333333333333333333....
        `, SpriteKind.casa)
    casa_7.setPosition(1104, 1696)
    casa_8 = sprites.create(img`
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        .............333333333333333333333333333333333333..............
        ............333333333333333333333333333333333333333............
        ...........3333333333333333333333333333333333333333............
        ..........3333332222222222222222222222222222222233333..........
        .........3333333333333333333333333333333333333333333333........
        ........333333333333333333333333333333333333333333333333.......
        .......33333333333333333333333333333333333333333333333333......
        .....3333333333333333333333333333333333333333333333333333......
        ....3333333322222222222222222222222222222222222222222233333....
        ...333333333333333333333333333333333333333333333333333333333...
        ...3333333333333333333333333333333333333333333333333333333333..
        ..333333333333333333333333333333333333333333333333333333333333.
        .3333333333333333333333333333333333333333333333333333333333333.
        .33333333333333333333333333333333333333333333333333333333333333
        333333332222222222222222222222222222222222222222222222222233333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333222222222222222222222222222222222222223333333333333
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222111111111111111111111111111111111111111111111111111111122222
        2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222
        2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222211111111111112222222222222222222222222222222111111111112222
        2222222eeeeeeeee111111111111111111111111111111111eeeeeeeee2222.
        .2222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222.
        .2222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222.
        .2222222222222222222222222222222222222222222222222222222222222.
        .222222222222222222222222222222222222222222222222222222222222..
        ..2222222222222222222222222222222222222222222222222222222222...
        ..2222222222222222222222222222222222222222222222222222222222...
        ...22222222222222222222222222222222222222222222222222222222....
        ...e2221111112222222222222222222222222222222222222211111222....
        ...e222eeeee1111111111112222222222222222221111111111eeee22e....
        ...ee222222eeeeeeeeeeee11111111111111111111eeeeeeeeee22222e....
        ...ee222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222e....
        ...ee22222222222222222eeeeeeeeeeeeeeeeeeeee222222222222222e....
        ...eee2222222222222222eeeeeeeeeeeeeeeeeeeee22222222222222.e....
        ...eee222222222222222222222222222222222222222222222222222.e....
        ...eee222222222222222222222222222222222222222222222222222.e....
        ...eeee2222222222222222222222222222222222222222222222222..e....
        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..ee....
        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        `, SpriteKind.casa)
    casa_8.setPosition(1154, 1587)
    casa_deu = sprites.create(img`
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        .............333333333333333333333333333333333333..............
        ............333333333333333333333333333333333333333............
        ...........3333333333333333333333333333333333333333............
        ..........3333332222222222222222222222222222222233333..........
        .........3333333333333333333333333333333333333333333333........
        ........333333333333333333333333333333333333333333333333.......
        .......33333333333333333333333333333333333333333333333333......
        .....3333333333333333333333333333333333333333333333333333......
        ....3333333322222222222222222222222222222222222222222233333....
        ...333333333333333333333333333333333333333333333333333333333...
        ...3333333333333333333333333333333333333333333333333333333333..
        ..333333333333333333333333333333333333333333333333333333333333.
        .3333333333333333333333333333333333333333333333333333333333333.
        .33333333333333333333333333333333333333333333333333333333333333
        333333332222222222222222222222222222222222222222222222222233333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333222222222222222222222222222222222222223333333333333
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222111111111111111111111111111111111111111111111111111111122222
        2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222
        2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222211111111111112222222222222222222222222222222111111111112222
        2222222eeeeeeeee111111111111111111111111111111111eeeeeeeee2222.
        .2222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222.
        .2222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222.
        .2222222222222222222222222222222222222222222222222222222222222.
        .222222222222222222222222222222222222222222222222222222222222..
        ..2222222222222222222222222222222222222222222222222222222222...
        ..2222222222222222222222222222222222222222222222222222222222...
        ...22222222222222222222222222222222222222222222222222222222....
        ...e2221111112222222222222222222222222222222222222211111222....
        ...e222eeeee1111111111112222222222222222221111111111eeee22e....
        ...ee222222eeeeeeeeeeee11111111111111111111eeeeeeeeee22222e....
        ...ee222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222e....
        ...ee22222222222222222eeeeeeeeeeeeeeeeeeeee222222222222222e....
        ...eee2222222222222222eeeeeeeeeeeeeeeeeeeee22222222222222.e....
        ...eee222222222222222222222222222222222222222222222222222.e....
        ...eee222222222222222222222222222222222222222222222222222.e....
        ...eeee2222222222222222222222222222222222222222222222222..e....
        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..ee....
        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        `, SpriteKind.casa)
    casa_deu.setPosition(1301, 1587)
    CASTILLO.setPosition(2305, 513)
    casa9 = sprites.create(img`
        ......................cccceeeeeeeeeeeeee3333....................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ......................2222eeeeeeeeeeeeee3333333.................
        ...................2222222eeeeeeeeeeeeee333333333...............
        ...................2222222eeeeeeeeeeeeee333333333...............
        .................222222222eeeeeeeeeeeeee12333333333.............
        .................222222222eeeeeeeeeeeeee12333333333.............
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ...............22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ............ddd22222222222eeeeeeeeeeeeee12333333333333..........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ..........22ddd22222222222eeeeeeeeeeeeee1233122333333333........
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        ......221122ddd22222222222eeeeeeeeeeeeee12331223333333333333....
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3
        2eeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3
        2eeeee221122ddd22222222222ee3eeeeeeee3ee2222222333312233331eeee3
        2eeeee22112211122222222222333eeeeeeee3331111222333312233331eeee3
        2eeeee2211221112222222222233eeeeeeeeee331111222333312233331eeee3
        2eeeee22112211122222222222333333333333331111222333312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee221122111222222222ee222222222222223311111223312233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111112233331eeee3
        2eeeee2211222222222222eeeeeeeeeeeee333333333333111122233331eeee3
        2eeeee2211222222222eeeeeeeeeeeeeeee333333333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeee3333333331111133331eeeee
        2eeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeee3333331111133331eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee22222222222eeeeeeeeeeeeeeeeeee33333333333333333311221eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeee33ee33333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee
        2eeeee222222222eeeeeeeeeeeeeeeeeee3333333333333333333311111eeeee
        2eeeee2222ee111112219999eeeeeeeee33333333311999ee9999933331e1eee
        2eeeee2222ee111112211999eeeeeeee333333333311999ee999993333111eee
        .....ccceeee111112211999eeeeeeeeeeee33333322eeeeeeeeee333333....
        .....ccceeee222222222eeeeeeeeee3333333333322eeeeeeeeee333333....
        .....ccceeee111112219999eeee222eeeeeee333311999ee99999333333....
        .....ccceeee111112299999eeee2ee333333e333319999ee99999333333....
        .....ccceeee111112299999eeee2e2eee33ee333399999ee99999333333....
        .....ccceeeeeeeeeeeeeeeeee22222eeeeeeeee33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e222eeeeee33e3eeeeeee333333333333....
        .....ccceeeeeeeeeeeeeeeeee2e2eeeeeeeee3e33333333333333333333....
        .....ccceeeeeeeeeeeeeeeeee2eeeeeeeeeeeee33333333333333333333....
        `, SpriteKind.casa)
    casa9.setPosition(1344, 1700)
    statusbar = statusbars.create(7, 4, StatusBarKind.down)
    enemigo_unoo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e f . . . . . 
        . . . . e d d d d d f . . . . . 
        . . . f d e d d d d f f . . . . 
        . . e d d d e d d d e d e 3 . . 
        . . e d d f d d d e d d d 3 . . 
        . e d d d d d d d d f d d e 3 . 
        . e d d d d e e d d d d d e 3 . 
        . e d d d d d d d d d d d e f . 
        . . e d d d d d d d d e e 3 . . 
        . f b b d d d d d d e e b c 3 . 
        c b b b c e e e e f f b b c c f 
        c c c f f . . . . . . f c f f f 
        `, SpriteKind.Enemy)
    characterAnimations.loopFrames(
    enemigo_unoo,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e e . . . . . 
        . . . . e e d d d d f . . . . . 
        . . . f d d e d d d e f . . . . 
        . . e d d f d d d e d d e 3 . . 
        . e d d d d e e d d f d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . f b b b b d d d d d d d e 3 . 
        f b b b b b b d d d d d d e f . 
        f c c c c b b d d d d e e 3 . . 
        f c c c c b b d d d e e b f . . 
        . f c c c b f e e f f b b f . . 
        . . f f f f f . . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . f d e d d d d d e . . . . 
        . . e d d d e d d d e d e 3 . . 
        . . e d d f d d d e d d d 3 . . 
        . e d d d d d d d d f d d e 3 . 
        . e d d d d e e d d d d d e 3 . 
        . e d d d d d d d d d d d e f . 
        . . e d d d d d d d d e e 3 . . 
        . f b b d d d d d d e e b c 3 . 
        f b b b c e e e e f f b b c c f 
        f f c f f . . . . . . f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e f e . . . . . 
        . . . . e d d d d d e e . . . . 
        . . . f d d d d d e d d f . . . 
        . . 3 e d d e d d d f d e 3 . . 
        . . 3 d d f d e e d d d d 3 3 . 
        . e d d d d d d d d d d d e 3 . 
        . e d d d d d d d d b b b b f . 
        . e e d d d d d d b b b b b b f 
        . . 3 e e d d d d b b c c c b f 
        . . f b e e d d d f c c c c c f 
        . . f b b f f e e f c c c c f . 
        . . f f f f . . . f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e e . . . . . 
        . . . . e d d d d d f . . . . . 
        . . . f d e d d d d d e . . . . 
        . . e d d d e d d d e d e 3 . . 
        . . e d d f d d d e d d d 3 . . 
        . e d d d d d d d d f d d e 3 . 
        . e d d d d e e d d d d d e 3 . 
        . e d d d d d d d d d d d e f . 
        . . e d d d d d d d d e e 3 . . 
        . f b b d d d d d d e e b c 3 . 
        c b b b c e e e e f f b b c c f 
        c c c f f . . . . . . f c f f f 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    enemigo_unoo,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f b b e e e e e e e e b c 3 . 
        f b b b c e e e e f f b b c c f 
        f f c f f . . . . . . f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f c c e e e e e e c c c c 3 . 
        . f f c f e e e e f b b b c c f 
        . . f f . . . . . f f f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f b b e e e e e e e e b c 3 . 
        f b b b c e e e e f f b b c c f 
        f f c f f . . . . . . f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f c c c c e e e e e e c f . . 
        f b b b b b f e e f f c c f . . 
        f f f f f f . . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    enemigo_unoo.setPosition(734, 1765)
    enemigo_dos = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . f f f 4 2 f f f f f . . . . 
        . f 2 2 2 2 4 e e e 3 e f . . . 
        f 2 f f 2 2 4 2 e e 3 e e f . . 
        f 2 2 2 2 2 4 2 e e 3 e e f f . 
        f 2 2 2 2 2 4 2 2 2 4 2 e 3 e f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Enemy)
    enemigo_dos.setPosition(623, 791)
    enemigo2_p2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . f f f 4 2 f f f f f . . . . 
        . f 2 2 2 2 4 e e e 3 e f . . . 
        f 2 f f 2 2 4 2 e e 3 e e f . . 
        f 2 2 2 2 2 4 2 e e 3 e e f f . 
        f 2 2 2 2 2 4 2 2 2 4 2 e 3 e f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Enemy)
    enemigo2_p2.setPosition(832, 165)
    characterAnimations.loopFrames(
    enemigo_uno_p2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . f 2 2 2 3 e e f f f f . . . . 
        f 2 f f 2 2 3 e e 3 e e f f . . 
        f 2 2 2 2 2 4 2 e e 3 e e f f . 
        f 2 2 2 2 2 4 2 2 2 4 2 e 3 f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 2 2 2 4 f . . . . 
        . . . . . f 4 2 2 4 4 f . . . . 
        . . . f f 2 2 4 e 3 2 f . . . . 
        . . f f 2 2 2 2 f e e 2 f . . . 
        . . f 2 f f 2 2 f 3 3 4 f . . . 
        . . f 2 2 e e f e e e 2 f . . . 
        . . f f f f f . f f f f f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    enemigo_uno_p2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f f . . 
        . . . . f f f f e e 3 2 2 2 f . 
        . . f f e e 3 e e 3 2 2 f f 2 f 
        . f f e e 3 e e 2 4 2 2 2 2 2 f 
        f f 3 e 2 4 2 2 2 4 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 4 2 2 2 f f . . . . . 
        . . . . f 4 4 2 2 4 f . . . . . 
        . . . . f 2 3 e 4 2 2 f f . . . 
        . . . f 2 e e f 2 2 2 2 f f . . 
        . . . f 4 3 3 f 2 2 f f 2 f . . 
        . . . f 2 e e e f e e 2 2 f . . 
        . . f f f f f f . f f f f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    enemigo_dos.setPosition(623, 791)
    casa10 = sprites.create(img`
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ....................................................cccceeeeeeeeeeeeee3333......................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        .................................................2222222eeeeeeeeeeeeee333333333.................................................
        .................................................2222222eeeeeeeeeeeeee333333333.................................................
        ...............................................222222222eeeeeeeeeeeeee12333333333...............................................
        ...............................................222222222eeeeeeeeeeeeee12333333333...............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        ..........................................ddd22222222222eeeeeeeeeeeeee12333333333333............................................
        ..........................................ddd22222222222eeeeeeeeeeeeee12333333333333............................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ....................................221122ddd22222222222eeeeeeeeeeeeee12331223333333333333......................................
        ....................................221122ddd22222222222eeeeeeeeeeeeee12331223333333333333......................................
        .................................eee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        .................................eee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        ....................cccceeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333eeeeeeeee3333.....................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333eeeeeeeee3333333..................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee3333333..................
        .................2222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee3333333..................
        .................2222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee333333333................
        ...............222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee333333333................
        ...............222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333eeeeeeeee12333333333..............
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333eeeeeeeee12333333333..............
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333eeeeeeeee12333333333333...........
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333eeeeeeeee12333333333333...........
        ..........ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333eeeeeeeee12333333333333...........
        ..........ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee12333333333333...........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee12333333333333...........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee1233122333333333.........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3eeeeeeeee1233122333333333.........
        ....221122ddd22222222222eeeeeeeeeeee221122ddd22222222222ee3333333333ee2222222333312233331eeee3eeeeeeeee1233122333333333.........
        ....221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee12331223333333333333.....
        eeee221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee12331223333333333333.....
        eeee221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee221122111222222222ee22222222222222ee11111223312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee221122111222222222ee22222222222222ee11111223312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222222eeeeeeeeeeeeeeeeeeeeeeeee111112233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222222eeeeeeeeeeeeeeeeeeeeeeeee111122233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11221eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11221eeeeeeeeeeeeee333312233333333333133333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee3333122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee3333122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee2233122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee2222ee111112219999eeeeeeeeeeeeeeeeee11999ee99999eeee1e1eeeeeeeeeeee2233122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee2222ee111112211999eeeeeeeeeeeeeeeeee11999ee99999eeee111eeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222eeeeeeeeeeeeeeeeee111112211999eeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222ee3333333333eeeeee222222222eeeeeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222ee3333333333eeeeee111112219999eeeeeeeeeeeeeeeeee11999ee99999eeeee333333333333ee2222122333322233331eeee3.
        eeee22112211122222222222333333333333eeeeee111112299999eeeeeeeeeeeeeeeeee19999ee99999eeeee333333333333ee2222222333312233331eeee3.
        eeee22112211122222222222333333333333eeeeee111112299999eeeeeeeeeeeeeeeeee99999ee99999eeeee333333333333331111222333312233331eeee3.
        eeee22112211122222222222333333333333eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333331111222333312233331eeee3.
        eeee221122111222222222ee222222222233eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333331111222333312233331eeee3.
        eeee221122111222222222ee222222222233eeeeee11999ee99999eeeeeeeeeeeeeeeeee111112219999eeeee322222222222223311111223312233331eeee3.
        eeee2211222222222222eeeeeeeeeeeeeee3eeeeee11999ee99999eeeeeeeeeeeeeeeeee111112211999eeeee322222222222223311111223312233331eeee3.
        eeee2211222222222222eeeeeeeeeeeeeee3eeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeee111112211999eeeee33eeeeeee333333333333111112233331eeee3.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeee222222222eeeeeeee33eeeeeee333333333333111122233331eeee3.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee11999ee99999eeee2222222222eeee111112219999eeeee33eeeeeee333333333333331111133331eeeee.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee19999ee99999eee222222222222eee111112299999eeeee33eeeeeeeeeeee3333333331111133331eeeee.
        eeee22222222222eeeeeeeeeeeeeeeeeeee3eeeeee99999ee99999eee2eeeeeeeeee2eee111112299999eeeee33eeeeeeeeeeeeeee3333331111133331eeeee.
        eeee22222222222eeeeeeeeeeeeeeeeeeee3eeeeeeeeeeeeeeeeeee2222222222222222eeeeeeeeeeeeeeeeee33eeeeeeee33333333333333333311221eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeee3eeeeeeeeeeeeeeeeee222e2222222222e222eeeeeeeeeeeeeeeee33eeeeeeee33333333333333333311221eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222eeee333eeeeeeeee3eeeeeeee33ee33333333333333311111eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e22222222222222e22eeee333eeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee.
        eeee2222ee111112219999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222e22eeeeeeeeee333333eeeeeee3333333333333333333311111eeeee.
        eeee2222ee111112211999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeee3333333311999ee9999933331e1eee.
        ...ccceeee111112211999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeeee33333333311999ee999993333111eee.
        ...ccceeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeeeeeee33333322eeeeeeeeee333333.....
        ...ccceeee111112219999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeee333333333322eeeeeeeeee333333.....
        ...ccceeee111112299999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeee333333eeeeeeeeeeee333311999ee99999333333.....
        ...ccceeee111112299999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeee33333e333319999ee99999333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeee33ee333399999ee99999333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeee33e33333333333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeee33e3eeeeeee333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeee333333333eeeeeeeeeeeee3e33333333333333333333.....
        `, SpriteKind.casa)
    casa10.setPosition(911, 1055)
    CASA11 = sprites.create(img`
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ....................................................cccceeeeeeeeeeeeee3333......................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        ....................................................2222eeeeeeeeeeeeee3333333...................................................
        .................................................2222222eeeeeeeeeeeeee333333333.................................................
        .................................................2222222eeeeeeeeeeeeee333333333.................................................
        ...............................................222222222eeeeeeeeeeeeee12333333333...............................................
        ...............................................222222222eeeeeeeeeeeeee12333333333...............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        .............................................22222222222eeeeeeeeeeeeee12333333333333............................................
        ..........................................ddd22222222222eeeeeeeeeeeeee12333333333333............................................
        ..........................................ddd22222222222eeeeeeeeeeeeee12333333333333............................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ........................................22ddd22222222222eeeeeeeeeeeeee1233122333333333..........................................
        ....................................221122ddd22222222222eeeeeeeeeeeeee12331223333333333333......................................
        ....................................221122ddd22222222222eeeeeeeeeeeeee12331223333333333333......................................
        .................................eee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        .................................eee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        ....................cccceeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333..................................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333eeeeeeeee3333.....................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee123312233333333333333333eeeeeeeee3333333..................
        ....................2222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee3333333..................
        .................2222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee3333333..................
        .................2222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee333333333................
        ...............222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333333333eeeeeeeee333333333................
        ...............222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee333312233333333333133333eeeeeeeee12333333333..............
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333eeeeeeeee12333333333..............
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee3333122333333333331e3333eeeeeeeee12333333333333...........
        .............22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333eeeeeeeee12333333333333...........
        ..........ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331e3333eeeeeeeee12333333333333...........
        ..........ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee12333333333333...........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee12333333333333...........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222eeeeeeeeeeeeee2233122333333333331eeee3eeeeeeeee1233122333333333.........
        ........22ddd22222222222eeeeeeeeeeee221122ddd22222222222ee3333333333ee2222122333322233331eeee3eeeeeeeee1233122333333333.........
        ....221122ddd22222222222eeeeeeeeeeee221122ddd22222222222ee3333333333ee2222222333312233331eeee3eeeeeeeee1233122333333333.........
        ....221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee12331223333333333333.....
        eeee221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee12331223333333333333.....
        eeee221122ddd22222222222eeeeeeeeeeee22112211122222222222333333333333331111222333312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee221122111222222222ee22222222222222ee11111223312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee221122111222222222ee22222222222222ee11111223312233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222222eeeeeeeeeeeeeeeeeeeeeeeee111112233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222222eeeeeeeeeeeeeeeeeeeeeeeee111122233331eeee3eeeeeeeee123312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee2211222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111133331eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11221eeeeeeeeeeeeee333312233333333333333333.
        eeee221122ddd22222222222eeeeeeeeeeee22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11221eeeeeeeeeeeeee333312233333333333133333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee3333122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee3333122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeee2233122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee2222ee111112219999eeeeeeeeeeeeeeeeee11999ee99999eeee1e1eeeeeeeeeeee2233122333333333331e3333.
        eeee221122ddd22222222222eeeeeeeeeeee2222ee111112211999eeeeeeeeeeeeeeeeee11999ee99999eeee111eeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222eeeeeeeeeeeeeeeeee111112211999eeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222ee3333333333eeeeee222222222eeeeeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeee2233122333333333331eeee3.
        eeee221122ddd22222222222ee3333333333eeeeee111112219999eeeeeeeeeeeeeeeeee11999ee99999eeeee333333333333ee2222122333322233331eeee3.
        eeee22112211122222222222333333333333eeeeee111112299999eeeeeeeeeeeeeeeeee19999ee99999eeeee333333333333ee2222222333312233331eeee3.
        eeee22112211122222222222333333333333eeeeee111112299999eeeeeeeeeeeeeeeeee99999ee99999eeeee333333333333331111222333312233331eeee3.
        eeee22112211122222222222333333333333eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333331111222333312233331eeee3.
        eeee221122111222222222ee222222222233eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee333333333333331111222333312233331eeee3.
        eeee221122111222222222ee222222222233eeeeee11999ee99999eeeeeeeeeeeeeeeeee111112219999eeeee322222222222223311111223312233331eeee3.
        eeee2211222222222222eeeeeeeeeeeeeee3eeeeee11999ee99999eeeeeeeeeeeeeeeeee111112211999eeeee322222222222223311111223312233331eeee3.
        eeee2211222222222222eeeeeeeeeeeeeee3eeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeee111112211999eeeee33eeeeeee333333333333111112233331eeee3.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeee222222222eeeeeeee33eeeeeee333333333333111122233331eeee3.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee11999ee99999eeee2222222222eeee111112219999eeeee33eeeeeee333333333333331111133331eeeee.
        eeee2211222222222eeeeeeeeeeeeeeeeee3eeeeee19999ee99999eee222222222222eee111112299999eeeee33eeeeeeeeeeee3333333331111133331eeeee.
        eeee22222222222eeeeeeeeeeeeeeeeeeee3eeeeee99999ee99999eee2eeeeeeeeee2eee111112299999eeeee33eeeeeeeeeeeeeee3333331111133331eeeee.
        eeee22222222222eeeeeeeeeeeeeeeeeeee3eeeeeeeeeeeeeeeeeee2222222222222222eeeeeeeeeeeeeeeeee33eeeeeeee33333333333333333311221eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeee3eeeeeeeeeeeeeeeeee222e2222222222e222eeeeeeeeeeeeeeeee33eeeeeeee33333333333333333311221eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222eeee333eeeeeeeee3eeeeeeee33ee33333333333333311111eeeee.
        eeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e22222222222222e22eeee333eeeeeeeeeeeeeeeeeeeeeee3333333333333311111eeeee.
        eeee2222ee111112219999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222e22eeeeeeeeee333333eeeeeee3333333333333333333311111eeeee.
        eeee2222ee111112211999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeee3333333311999ee9999933331e1eee.
        ...ccceeee111112211999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeeee33333333311999ee999993333111eee.
        ...ccceeee222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeeeeeee33333322eeeeeeeeee333333.....
        ...ccceeee111112219999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeeeeeeeeeeeeeee333333333322eeeeeeeeee333333.....
        ...ccceeee111112299999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222eeee22eeeeeeeee333333eeeeeeeeeeee333311999ee99999333333.....
        ...ccceeee111112299999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeee33333e333319999ee99999333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeee33ee333399999ee99999333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeee33e33333333333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeeeeeeeeeeeeeeeeeeeeeeee33e3eeeeeee333333333333.....
        ...ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22e2222222222222222e22eeeee333333333eeeeeeeeeeeee3e33333333333333333333.....
        `, SpriteKind.casa)
    CASA11.setPosition(1297, 640)
    CASA12 = sprites.create(img`
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ..............333333333333333333333333333333333333.............
        ............333333333333333333333333333333333333333............
        ............3333333333333333333333333333333333333333...........
        ..........3333322222222222222222222222222222222333333..........
        ........3333333333333333333333333333333333333333333333.........
        .......333333333333333333333333333333333333333333333333........
        ......33333333333333333333333333333333333333333333333333.......
        ......3333333333333333333333333333333333333333333333333333.....
        ....3333322222222222222222222222222222222222222222233333333....
        ...333333333333333333333333333333333333333333333333333333333...
        ..3333333333333333333333333333333333333333333333333333333333...
        .333333333333333333333333333333333333333333333333333333333333..
        .3333333333333333333333333333333333333333333333333333333333333.
        33333333333333333333333333333333333333333333333333333333333333.
        333332222222222222222222222222222222222222222222222222233333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333
        333333333333322222222222222222222222222222222222222333333333333
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222221111111111111111111111111111111111111111111111111111111222
        2222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222
        2222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222
        222211111111111222222222222222222222222222222211111111111112222
        .2222eeeeeeeee111111111111111111111111111111111eeeeeeeee2222222
        .22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222.
        .22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222.
        .2222222222222222222222222222222222222222222222222222222222222.
        ..222222222222222222222222222222222222222222222222222222222222.
        ...2222222222222222222222222222222222222222222222222222222222..
        ...2222222222222222222222222222222222222222222222222222222222..
        ....22222222222222222222222222222222222222222222222222222222...
        ....2221111122222222222222222222222222222222222222111111222e...
        ....e22eeee1111111111222222222222222222111111111111eeeee222e...
        ....e22222eeeeeeeeee11111111111111111111eeeeeeeeeeee222222ee...
        ....e22222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222ee...
        ....e222222222222222eeeeeeeeeeeeeeeeeeeee22222222222222222ee...
        ....e322222222222222eeeeeeeeeeeeeeeeeeeee2222222222222222eee...
        ....e3222222222222222222222222222222222222222222222222222eee...
        ....e3222222222222222222222222222222222222222222222222222eee...
        ....e332222222222222222222222222222222222222222222222222eeee...
        ....ee33eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        ...............................................................
        `, SpriteKind.casa)
    CASA12.setPosition(1301, 1006)
    characterAnimations.loopFrames(
    enemigo_dos,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . f 2 2 2 3 e e f f f f . . . . 
        f 2 f f 2 2 3 e e 3 e e f f . . 
        f 2 2 2 2 2 4 2 e e 3 e e f f . 
        f 2 2 2 2 2 4 2 2 2 4 2 e 3 f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 2 2 2 4 f . . . . 
        . . . . . f 4 2 2 4 4 f . . . . 
        . . . f f 2 2 4 e 3 2 f . . . . 
        . . f f 2 2 2 2 f e e 2 f . . . 
        . . f 2 f f 2 2 f 3 3 4 f . . . 
        . . f 2 2 e e f e e e 2 f . . . 
        . . f f f f f . f f f f f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    enemigo_dos,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f f . . 
        . . . . f f f f e e 3 2 2 2 f . 
        . . f f e e 3 e e 3 2 2 f f 2 f 
        . f f e e 3 e e 2 4 2 2 2 2 2 f 
        f f 3 e 2 4 2 2 2 4 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 4 2 2 2 f f . . . . . 
        . . . . f 4 4 2 2 4 f . . . . . 
        . . . . f 2 3 e 4 2 2 f f . . . 
        . . . f 2 e e f 2 2 2 2 f f . . 
        . . . f 4 3 3 f 2 2 f f 2 f . . 
        . . . f 2 e e e f e e 2 2 f . . 
        . . f f f f f f . f f f f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f 3 3 3 f f f . . 
        . . f e 3 3 3 3 3 3 3 3 f f . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b b f . 
        f c c b b 5 c c 9 2 c c c b b f 
        f b b b f c 5 2 2 b c c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 c c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 3 3 f f f . 
        . f f . . f . . . f . . . . . . 
        `,img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b f . . 
        f c c b b 5 c c 9 2 c c c b f . 
        f b b b f c 5 2 2 b c c c b f . 
        f b b f f c c c c b f c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 8 c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 . . f f f . 
        . f f . . f . . . f . . . . . . 
        `],
    700,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . . . f d d d d f d d d f . . . 
        . . f b b 5 c c 9 2 c c f f . . 
        . f b b b c 5 2 2 b c f c f . . 
        f b b b f c c c c b f c b b f . 
        f e 5 5 5 5 5 c c b f f e e f . 
        f e 2 2 2 8 8 8 9 9 f . f f . . 
        . f f . . f f . . f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . f f . . . . . 
        . . . . f f . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b f . . 
        f c c b b 5 c c 9 c c c b b f . 
        f b b b f c 5 2 2 f c c b b f . 
        f 5 5 f . c c c c b f e e d f . 
        f f f . . 8 8 8 9 9 f f f f . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 d f . . . 
        . . f b b c 3 3 c c c c f . . . 
        . f b b b c c c c b c f c f . . 
        f b b b f c c c c b f c b b f . 
        f b b f f c c c c b f f e e f . 
        f e d f . 8 8 8 9 9 f . f f . . 
        . f f . . f f . . f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f c c 3 3 3 3 3 3 3 3 b f . . 
        f c c b b c c 3 3 3 c c b b f . 
        f b b b f c c c c f c c b b f . 
        f d d f . c c c c b f e e d f . 
        f f f . . 8 8 8 9 9 f f f f . . 
        . . . . . f . . f f . . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        f f f f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . f 3 3 3 3 f f . 
        . f f f . . . f 3 e 3 3 3 3 3 f 
        . . . . . . f 3 3 3 e e e 3 3 f 
        . . . . . . f 3 3 3 3 3 d d f . 
        . . . . . . f 3 3 3 d 3 d f . . 
        . . . . . . . f f 3 d d d d f . 
        . . . . . . f b b c c f f f f . 
        . . . . f f b b b c c c f d f . 
        . . . f d b b b b c c c c c f . 
        . . . f 5 5 5 5 c c c f f f . . 
        . . . f 2 2 2 8 c c c . . . . . 
        f . . . . 8 8 8 9 f 9 9 . . . . 
        . . . . f . . . . . . f f . . . 
        `,img`
        f f . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f . . 
        . f f . . f f . f 3 3 3 3 f f . 
        . . . . . . . f e 3 3 3 3 3 3 f 
        . . . . . . f 3 3 e e e e 3 3 f 
        . . . . . . f 3 3 3 3 d d d 3 f 
        . . . . . . f 3 3 d 3 d d f . . 
        . . . . . . . f 3 d d d d d f . 
        . . . . . . . . f b b c f f . . 
        . . . . . . . f c c b b c f . . 
        . . . . . . . f c c b b c f . . 
        . . . . . . . f c c 5 5 5 5 5 f 
        f f . . . . . f f 8 2 2 2 f . . 
        . . . . . . . . f 8 8 8 f . . . 
        . . . . . . . . f f 8 f f . . . 
        `,img`
        f f f . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f 3 3 3 3 f f . . . 
        . . . . . f 3 3 3 3 3 3 3 f . . 
        . . . . f 3 e 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 e e e e d 3 f . . 
        . . . f 3 3 3 3 3 3 3 d 3 f . . 
        . . . . f 3 3 d 3 d d f . . . . 
        . . . . f 3 3 d d d d d f . . . 
        . . . . . f f 3 3 c 5 f . . . . 
        . . . f f c c b b b c f . . . . 
        . . f c c c c c b b b b f f f . 
        . f e e c f c c c f b d 5 5 5 f 
        . f e d f 9 9 8 8 c f d 2 2 f . 
        . . f f 9 9 f f 8 8 8 . f f . . 
        . . . f . . . . . . . f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . f f f f 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . f f 3 3 3 3 f . . . . . . . . 
        f 3 3 3 3 3 e 3 f . . . . . . . 
        f 3 3 e e e 3 3 3 f . . . . . . 
        . f d d 3 3 3 3 3 f . f f . . . 
        . . f d 3 d 3 3 3 f . . . . . . 
        . f d d d d 3 f f . . . . . . . 
        . f f f f c c b b f . . . . . . 
        . f d f c c c b b b f f . . . . 
        . f c c c c c b b b b d f . . . 
        . . f f f c c c 5 5 5 5 f . . . 
        . . . . . c c c 8 2 2 2 f . . . 
        . . . . 9 9 f 9 8 8 8 f f . . . 
        . . . f . . . . . . f . . . . f 
        `,img`
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . f f 3 3 3 3 f . . . . . . . . 
        f 3 3 3 3 3 3 e f . . . . . . . 
        f 3 3 e e e e 3 3 f . f f f . . 
        f 3 d d d 3 3 3 3 f . . . . . . 
        . . f d d 3 d 3 3 f . . . . . . 
        . f d d d d d 3 f . . . . . . . 
        . . f f c b b f . . . . . . . . 
        . . f c b b c c f . . . . . . . 
        . . f c b b c c f . . . . . . . 
        . 5 5 5 5 5 c c f . . . . . . . 
        . . f 2 2 2 8 f f . . . . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . . f f 8 f f . . . . f f . f 
        `,img`
        . . . . . . . . . . . f f f . f 
        . . . . . f f f f . . . . . . . 
        . . . f f 3 3 3 3 f . . . . . . 
        . . f 3 3 3 3 3 3 3 f . . . . . 
        . . f 3 3 3 3 3 3 e 3 f . . . . 
        . . f 3 d e e e e 3 3 3 f . . . 
        . . f 3 d 3 3 3 3 3 3 3 f . . . 
        . . . . f d d 3 d 3 3 f . . f f 
        . . . f d d d d d 3 3 f . . . . 
        . . . . f 5 c 3 3 f f . . . . . 
        . . . . f c b b b c c f f . . . 
        f f f f b b b b c c c c c f . . 
        f 5 5 5 d b f c c c f c e e f . 
        f f 2 2 d f c 8 8 9 9 f d e f . 
        . f f f . 8 8 8 f f 9 9 f f . . 
        . . . . f . . . . . . f . . . f 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . 9 9 8 8 . . . . . . 
        . . . . . f 9 8 c c f f . . . . 
        . . . f f c c c c c c f f . . . 
        . . f f c c 3 3 3 3 c c c f . . 
        . . f c 3 3 3 3 3 3 3 c c f . . 
        . f f c 3 3 3 3 3 3 3 3 c f f . 
        . f c c 3 3 3 3 3 3 3 3 c c f f 
        f d d d f 3 3 3 3 3 3 f d d d f 
        f f f f f f f f f f f f f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 8 8 . . . . . . 
        . . . . . f 9 8 c c f f . . . . 
        . . . f f c c c c c c f f . . . 
        . . f f c c e e e 3 c c c f . . 
        . . f b 3 e e 3 3 e 3 c b f . . 
        . f f b 3 e 3 3 3 3 3 3 b f f . 
        . f b b 3 3 3 3 3 3 3 3 b b b f 
        f d d d f 3 3 3 3 3 3 f d d d f 
        f f f f f f f f f f f f f f f f 
        `],
    500,
    characterAnimations.rule(Predicate.HittingWallDown)
    )
    BARRA()
    music.play(music.createSong(hex`00640004081e0405001c000f0a006400f4010a00000400000000000000000000000000000000028f0184008800010d8c009000010da000a2000108a400a800010dac00b000010dbc00be000114c000c2000111c400c800010dcc00d000010de000e2000108e400e800010dec00f000010dfc00fe00011600010201011404012201011224012e01011430013201010838013a01020a163c013e01020c1444015c01010d64016601010d84018601010d8a018c01010d8c018e01010892019401010894019a01010da401aa010111ac01c001010cc001c201010cc401c6010112cc01ce01010fd001d2010114d401d6010108dc01de01010ce401e601010dee01f0010108f401f6010116f8010002011404020602010d0a020c02010d0c020e02010812021402010814021e02010d24023002010c3c023e02010a40024202010c4402460201124c024e02010f54025602010858025c02020c1464026802010d78027c0201087c028002010d84029c02010da002a402010fa402c0020111c402d0020106d402e0020108e402e802010de802ea020108ec02ee02010af002f202010cf402fe02010d04030603010d08030a03010d0c030e03010d07001c00020a006400f401640000040000000000000000000000000000000003b7018400860003141d2588008a0003141d258c008e0003141d259000920003141d25a400a60003141d25a800aa0003141d25ac00ae0003141d25b000b20003141d25c400c60003141d25c600c70003141d25cc00ce0003141d25e400e50003141d25e600e70003141d25e800e90003141d250601120103161e251401160103161e2518011c0103161e252601320103141b243401360103141b2438013c0103141b244401580103141d255c015e0103141d25700172010311141978017a0103111419800182010311141988018a0103111419900192010311141998019a0103111419a001a20103111419a801aa0103111418b001b20103111418b801ba0103111418c001c20103111418c801ca0103121619d001d2010312161bd801da01030f1418e001e201030f1418e801ea0103111419ee01f00103111419f8010002030f141808020a0203111419100212020311141918021a0203111419200222020311141928022a0203111418300232020311141838023a0203111418400242020311141848024a0203121619500252020312161958025e02030f141868026a02031114196c026e02031114196e027002031114197402780202111908001c000e050046006603320000040a002d0000006400140001320002010002d60004010601012206010801012408012001012524013a01012740014201012044015801012584018601012588018a0101258c018e0101259001920101259401960101259601980101259c019e010122a001a2010124a401aa010129ac01ae01012ab001be010129c001c2010129c401ca01012acc01d201012ad401d60102272cd801de0102242ce401f0010129f8010002012c04020a02012c0c020e02012c10021602012c1c021e02012a2402360201293c023e0201204402460201224c024e02012250025202012054025e020220246402720202202509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80048060400050001010800090001060c000d0001011000110001061400150001011800190001061c001d0001012000210001062200230001122400250001012800290001062c002d0001013000310001063400350001013800390001063c003d0001014000410001064200430001124400450001014800490001064c004d0001015000510001065400550001015800590001065c005d0001016000610001066200630001126400650001016800690001066c006d0001017000710001067400750001017800790001067c007d0001018000810001068200830001128400850001018800890001068c008d0001019000910001069400950001019800990001069c009d000101a000a1000106a200a3000112a400a5000101a800a9000106ac00ad000101b000b1000106b400b5000101b800b9000106bc00bd000101c000c1000106c200c3000112c400c5000101c800c9000106cc00cd000101d000d1000106d400d5000101d800d9000106dc00dd000101e000e1000106e200e3000112e400e5000101e800e9000106ec00ed000101f000f1000106f400f5000101f800f9000106fc00fd0001010001010101060201030101120401050101010801090101060c010d0101011001110101061401150101011801190101061c011d0101012001210101062201230101122401250101012801290101062c012d0101013001310101063401350101013801390101063c013d0101014001410101064201430101124401450101014801490101064c014d0101015001510101065401550101015801590101065c015d0101016001610101066201630101126401650101016801690101066c016d0101017001710101067401750101017801790101067c017d0101018001810101068201830101128401850101018801890101068c018d0101019001910101069401950101019801990101069c019d010101a001a1010106a201a3010112a401a5010101a801a9010106ac01ad010101b001b1010106b401b5010101b801b9010106bc01bd010101c001c1010106c201c3010112c401c5010101c801c9010106cc01cd010101d001d1010106d401d5010101d801d9010106dc01dd010101e001e1010106e201e3010112e401e5010101e801e9010106ec01ed010101f001f1010106f401f5010101f801f9010106fc01fd0101010002010201060202030201120402050201010802090201060c020d0201011002110201061402150201011802190201061c021d0201012002210201062202230201122402250201012802290201062c022d0201013002310201063402350201013802390201063c023d0201014002410201064202430201124402450201014802490201064c024d0201015002510201065402550201015802590201065c025d0201016002610201066202630201126402650201016802690201066c026d0201017002710201067402750201017802790201067c027d0201018002810201068202830201128402850201018802890201068c028d0201019002910201069402950201019802990201069c029d020101a002a1020106a202a3020112a402a5020101a802a9020106ac02ad020101b002b1020106b402b5020101b802b9020106bc02bd020101c002c1020106c202c3020112c402c5020101c802c9020106cc02cd020101d002d1020106d402d5020101d802d9020106dc02dd020101e002e1020106e202e3020112e402e5020101e802e9020106ec02ed020101f002f1020106f402f5020101f802f9020106fc02fd0201010003010301060203030301120403050301010803090301060c030d0301011003110301061403150301011803190301061c031d0301012003210301062203230301122403250301012803290301062c032d0301013003310301063403350301013803390301063c033d0301014003410301064203430301124403450301014803490301064c034d0301015003510301065403550301015803590301065c035d0301016003610301066203630301126403650301016803690301066c036d0301017003710301067403750301017803790301067c037d0301018003810301068203830301128403850301018803890301068c038d0301019003910301069403950301019803990301069c039d030101a003a1030106a203a3030112a403a5030101a803a9030106ac03ad030101b003b1030106b403b5030101b803b9030106bc03bd030101`), music.PlaybackMode.LoopingInBackground)
    enemigo_uno_p2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e f . . . . . 
        . . . . e d d d d d f . . . . . 
        . . . f d e d d d d f f . . . . 
        . . e d d d e d d d e d e 3 . . 
        . . e d d f d d d e d d d 3 . . 
        . e d d d d d d d d f d d e 3 . 
        . e d d d d e e d d d d d e 3 . 
        . e d d d d d d d d d d d e f . 
        . . e d d d d d d d d e e 3 . . 
        . f b b d d d d d d e e b c 3 . 
        c b b b c e e e e f f b b c c f 
        c c c f f . . . . . . f c f f f 
        `, SpriteKind.Enemy)
    enemigo_uno_p2.setPosition(677, 1091)
    characterAnimations.loopFrames(
    enemigo_uno_p2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e e . . . . . 
        . . . . e e d d d d f . . . . . 
        . . . f d d e d d d e f . . . . 
        . . e d d f d d d e d d e 3 . . 
        . e d d d d e e d d f d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . f b b b b d d d d d d d e 3 . 
        f b b b b b b d d d d d d e f . 
        f c c c c b b d d d d e e 3 . . 
        f c c c c b b d d d e e b f . . 
        . f c c c b f e e f f b b f . . 
        . . f f f f f . . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . f d e d d d d d e . . . . 
        . . e d d d e d d d e d e 3 . . 
        . . e d d f d d d e d d d 3 . . 
        . e d d d d d d d d f d d e 3 . 
        . e d d d d e e d d d d d e 3 . 
        . e d d d d d d d d d d d e f . 
        . . e d d d d d d d d e e 3 . . 
        . f b b d d d d d d e e b c 3 . 
        f b b b c e e e e f f b b c c f 
        f f c f f . . . . . . f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e f e . . . . . 
        . . . . e d d d d d e e . . . . 
        . . . f d d d d d e d d f . . . 
        . . 3 e d d e d d d f d e 3 . . 
        . . 3 d d f d e e d d d d 3 3 . 
        . e d d d d d d d d d d d e 3 . 
        . e d d d d d d d d b b b b f . 
        . e e d d d d d d b b b b b b f 
        . . 3 e e d d d d b b c c c b f 
        . . f b e e d d d f c c c c c f 
        . . f b b f f e e f c c c c f . 
        . . f f f f . . . f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e f e e e e . . . . . 
        . . . . e d d d d d f . . . . . 
        . . . f d e d d d d d e . . . . 
        . . e d d d e d d d e d e 3 . . 
        . . e d d f d d d e d d d 3 . . 
        . e d d d d d d d d f d d e 3 . 
        . e d d d d e e d d d d d e 3 . 
        . e d d d d d d d d d d d e f . 
        . . e d d d d d d d d e e 3 . . 
        . f b b d d d d d d e e b c 3 . 
        c b b b c e e e e f f b b c c f 
        c c c f f . . . . . . f c f f f 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    enemigo_uno_p2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f b b e e e e e e e e b c 3 . 
        f b b b c e e e e f f b b c c f 
        f f c f f . . . . . . f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f c c e e e e e e c c c c 3 . 
        . f f c f e e e e f b b b c c f 
        . . f f . . . . . f f f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f b b e e e e e e e e b c 3 . 
        f b b b c e e e e f f b b c c f 
        f f c f f . . . . . . f c f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d d d d e . . . . . 
        . . . e d d d d d d d e . . . . 
        . . e d d d d d d d d d e 3 . . 
        . . e d d d d d d d d d d 3 . . 
        . e d d d d d d d d d d d e 3 . 
        . e d d e e e e e e e d d e 3 . 
        . e e e e e e e e e e e e e f . 
        . . e e e e e e e e e e e 3 . . 
        . f c c c c e e e e e e c f . . 
        f b b b b b f e e f f c c f . . 
        f f f f f f . . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    for (let value of tiles.getTilesByType(assets.tile`myTile72`)) {
        rocuela = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f c c c c c . . . . . 
            . . . . f b d d d d d c . . . . 
            . . . f b f d d d d d d c . . . 
            . . f b b d f d d d f d f c . . 
            . . f b f f d d d f d d d c . . 
            . f b b b d d d b b f f d f c . 
            . f b b b f f f f f d d d f c . 
            . f b b f b d d d d f d d d f . 
            . f b f b b b d d d d f d d f . 
            . f b b b b b b d d d d d d f . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(rocuela, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    CARTA = sprites.create(img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f 1 1 f f f . . . . 
        . . . . . f f b 1 1 1 f . . . . 
        . . . . . b b f f 1 1 1 f . . . 
        . . . f f b 1 1 1 f 1 1 1 f . . 
        . . f f b b 1 1 1 f f 1 1 f f . 
        f f f b f b 1 1 1 1 1 1 f . . . 
        . f f b b f f 1 1 1 1 f . . . . 
        . . f f b 1 1 f f 1 f f . . . . 
        . . . f b 1 1 1 1 f f . . . . . 
        . . . f f 1 1 1 f f . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.carta)
    CARTA.setPosition(395, 1808)
    for (let value7 of tiles.getTilesByType(assets.tile`myTile73`)) {
        COFRES = sprites.create(img`
            . . . . f f c c c c c c . . . . 
            . . . c f d d d d d d c f . . . 
            . . c c d d d d d d d d f c . . 
            . . f b b d d d d d d b b c . . 
            . c f b b b b b b b b b b f c . 
            . c b b b b b b b b b b b b c . 
            . f b b b b b b b b b b b b f . 
            . f d b b b b b b b b b b d f . 
            f c c d d d d d d d d d d c c f 
            f c c c c c c c c c c c c c c f 
            f c c c c c c c c c c c c c c f 
            f c c c c c c c c c c c c c c f 
            . f c c c c c c c c c c c c f . 
            . f c c c c c c c c c c c c f . 
            . . f c c c c c c c c c c f . . 
            . . . f f f f f f f f f f . . . 
            `, SpriteKind.UEBO)
        tiles.placeOnTile(COFRES, value7)
        tiles.setTileAt(value7, assets.tile`transparency16`)
    }
    for (let VALUE8 of tiles.getTilesByType(assets.tile`myTile74`)) {
        SUPERCOFRE = sprites.create(img`
            . . . . f f f f 3 3 3 3 . . . . 
            . . . 3 3 5 5 5 5 5 5 3 f . . . 
            . . 3 3 5 5 1 1 1 1 5 5 f f . . 
            . . f e e 5 5 5 1 1 5 e e 3 . . 
            . 3 f 2 2 e e e e e e e 2 f 3 . 
            . f 2 2 2 2 2 2 2 5 e e 2 e 3 . 
            . f e 2 2 2 2 5 5 5 5 e e e f . 
            . f 5 e e e e e e e e e e 5 3 . 
            f 2 e 5 5 5 1 1 1 1 1 5 5 e 2 f 
            f 2 2 e e e e e e e e e e 5 2 3 
            f 2 2 2 2 2 2 2 2 5 e e e 5 2 3 
            3 2 2 2 2 2 2 2 2 1 5 e e 5 2 3 
            . 3 2 2 2 2 2 2 2 2 1 e e 2 3 . 
            . f 2 2 2 2 2 5 5 1 1 e e 2 f . 
            . . f 2 2 2 2 5 1 1 e e 2 3 . . 
            . . . f 3 3 3 3 3 3 3 3 f . . . 
            `, SpriteKind.UEBODEORO)
        tiles.placeOnTile(SUPERCOFRE, VALUE8)
        tiles.setTileAt(VALUE8, assets.tile`transparency16`)
    }
    information = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . . f 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . f f e e e e e e f f . . . 
        f 3 f 2 2 2 2 2 2 2 2 2 3 f 3 f 
        f 7 e e e e e e e e e e e e 7 f 
        . f f b 4 b b b 7 b b b b 4 f f 
        . . f b b b f b b f b b b f . . 
        . . f d d f d d d d d f d f . . 
        . f f f d d f f f f f d f f f . 
        f 8 8 9 9 8 8 8 9 9 9 9 8 8 8 f 
        f 8 8 8 8 8 8 8 8 8 9 9 8 8 f . 
        f b d d 8 8 8 8 8 8 9 9 b d f . 
        f b b d c c c c c c c c b d f . 
        . . . c c c c c . . c c c c . . 
        . . f f f f f . . . f f f f f . 
        `, SpriteKind.imformation)
    information.setPosition(36, 445)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CARTEL, function (sprite, otherSprite) {
    CARTEL1.sayText("PUEBLO: derecha-arriba", 500, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    bossbatlesong = 1
    inicio = 1
    sprites.destroy(information)
    sprites.destroy(mySprite3)
    controller.moveSprite(mySprite, 0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b b f . 
        f c c b b 5 c c 9 2 c c c b b f 
        f b b b f c 5 2 2 b c c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 c c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 . . f f f . 
        . f f . . f . . . f . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(318, 245)
    tiles.setCurrentTilemap(tilemap`nivel16`)
    scene.cameraFollowSprite(mySprite)
    mySprite.setPosition(318, 245)
    animation.runImageAnimation(
    mySprite,
    [img`
        .....ffffffffffffffff...........
        ...ffffeeeeeeeeeeeeeeff.........
        ...ffffeeeeeeeeeeeeeeff.........
        ...ffeeeeeeeeeeeeeeeeeeff.ff....
        ...ffeeeeeeeeeeeeeeeeeeff.ff....
        ...ffeeeeedddddddddeeeefff22ff..
        ...ffeeeeedddddddddeeeefff22ff..
        ...ffeeeeffddddddffddff..f55ff..
        ...ffeeeeffddddddffddff..f55ff..
        .....ffdddddbbbbbbbddffff255ff..
        .....ffdddddbbbbbbbddffff255ff..
        .ffccccddd444444bbbffffcc255ff..
        .ffccccddd444444bbbffffcc255ff..
        .ffddccccdbbbbbbdddccccccdddff..
        .ffddccccdbbbbbbdddccccccdddff..
        .ffddccccccccccccccccccccdddff..
        .ffddccccccccccccccccccccdddff..
        .ffffccccccccccccccccffffcccff..
        .ffffccccccccccccccccffffcccff..
        ...ffffffccccc9999999fffffffff..
        ...ffffffccccc9999999fffffffff..
        .....ff99999999999999...........
        .....ff99999999999999...........
        .......999999999999ffffff.......
        .......999999999999ffffff.......
        ...ffffff9999999...ffffff.......
        ...ffffff9999999...ffffff.......
        ...ffffff.......................
        ...ffffff.......................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ....ffffffffffffffffff......ff..
        ....ffffffffffffffffff......ff..
        ..ffffeeeeeeeeeeeeeeeeff..ff22ff
        ..ffffeeeeeeeeeeeeeeeeff..ff22ff
        ..ffeeeeeeeeeeeeeeeeeeeeffff55ff
        ..ffeeeeeeeeeeeeeeeeeeeeffff55ff
        ..ffeeeeffddddddddffeeeeff2255ff
        ..ffeeeeffddddddddffeeeeff2255ff
        ..ffeeeeddddddddddddddffff2255ff
        ..ffeeeeddddddddddddddffff2255ff
        ....ffddddddbbbbbbbbddffddddddff
        ....ffddddddbbbbbbbbddffddddddff
        ....ffdddd444444bbbbff..ddddddff
        ....ffdddd444444bbbbff..ddddddff
        ffffccccddbbbbbbbbbbddccccccccff
        ffffccccddbbbbbbbbbbddccccccccff
        ffddddccccccbbbbccccccccccccccff
        ffddddccccccbbbbccccccccccccccff
        ffddddccccccccccccccccffcc....ff
        ffddddccccccccccccccccffcc....ff
        ffddddcccccccc999999ffffffffffff
        ffddddcccccccc999999ffffffffffff
        ..ffffffff9999999999ff..........
        ..ffffffff9999999999ff..........
        ..ffffff99999999999999..........
        ..ffffff99999999999999..........
        ....ffff999999999999ffff........
        ....ffff999999999999ffff........
        ....................ffff........
        ....................ffff........
        ......................ff........
        `,img`
        ................................
        ................................
        ................................
        ........ffffffffffff............
        ........ffffffffffff............
        ......fffeeeeeeeeeeeff..........
        ......fffeeeeeeeeeeeff..........
        ......ffeeeeeeeeeeeeeeff.ff.....
        ......ffeeeedddddddeeefff22.....
        ......ffeeeedddddddeeefff22.....
        ......ffeeefdddddffdff..f55.....
        ......ffeeefdddddffdff..f55.....
        ........fdddddbbbbbdffff255.....
        ....ffcccddd4444bbbfffcc255.....
        ....ffcccddd4444bbbfffcc255.....
        ....ffddcccdbbbbdddcccccddd.....
        ....ffddccccccccccccccccddd.....
        ....ffddccccccccccccccccddd.....
        ....ffffccccccccccccffffccc.....
        ....ffffccccccccccccffffccc.....
        ......fffffccccc9999fffffff.....
        ........f99999999999............
        ........f99999999999............
        .........9999999999fffff........
        .........9999999999fffff........
        ....fffff.......................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .........fffffffffff....ff......
        .........fffffffffff....ff......
        .........fffffffffff....ff......
        .......fffeeeeeeeeeef..f22......
        .......ffeeeeeeeeeeeefff55......
        .......ffeeeddddddddfff255......
        .......ffeeeddddddddfff255......
        .......ffeeeddddddddfff255......
        .........fdddbbbbbbbfddddd......
        .........fddd444bbbb.ddddd......
        ......fdddcccbbbcccccccccc......
        ......fdddcccbbbcccccccccc......
        ......fdddccccccccccfcc.........
        ......fdddccccccccccfcc.........
        ......fdddccccc99999ffffff......
        .......fffff99999999............
        .......fffff99999999............
        .........fff99999999f...........
        ....................f...........
        ....................f...........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ............fffffff.............
        ...........ffeeeeeef............
        ...........ffeeeeeef............
        ...........feedddeeef2..........
        ...........fefddfddff5..........
        .........ffdcdbbdcccdd..........
        .........ffdcdbbdcccdd..........
        .........ffdccccccccdd..........
        .........fffcccccccfcc..........
        .........fffcccccccfcc..........
        ............f999999.............
        .............9999fff............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................fff.............
        ...........fffff333f............
        ..........fe33333333f...........
        .........ff3e333333eff..........
        .........f3333ee3ee33f..........
        .........f333ddd3dd33f..........
        .........ff3ddddd3dd3f..........
        ..........f3dfddddfd3f..........
        .........fccddddfdddbbf.........
        ........fccbb5cc92cccbbf........
        ........fbbbfc522bcccbbf........
        ........fbbffccccbfcbbbf........
        ........fe55555ccb.feedf........
        ........fe22288899..fff.........
        .........ff..f...f..............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `],
    200,
    false
    )
    timer.after(1200, function () {
        inicio = 0
        ANIMATIONSPRITE1()
        BARRA()
        boss_vivo = 1
        controller.moveSprite(mySprite, 150, 150)
        atackgodtier = 0
        game.showLongText("No te llevaras a la princesa!!!! ", DialogLayout.Bottom)
        BOSS = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..................33............
            ..............33333.3...........
            ..............3....3............
            ..............3....3............
            ...............3333.............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.BOSSS)
        BOSS.setPosition(318, 210)
        BOSS.follow(mySprite, 60)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar2.setColor(7, 4)
        statusbar2.attachToSprite(BOSS, 0, 10)
        statusbar2.max = 7
        characterAnimations.loopFrames(
        BOSS,
        [img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......ff111ff1111f......
            .....fd11ffffff11df.....
            .....fdd11f11f11ddf.....
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ........fcdb1bdf........
            ..fffff..cbfbfc...fffff.
            .ff11ff...fffff..fd111f.
            .f111df...fffff.fdd1111f
            fd11dfdf.ffff...fcfdf11f
            fddddfcf.f.fff..fbfdffdf
            fdfdffbf.f.ffff..ffcfccf
            fcfcffff...f..f..fccffff
            .ffbf.f...ff..f..fbff...
            ...f......f.f.....f.....
            ............f.f.........
            ............f...........
            ........................
            ........................
            `,img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......ff111ff1111f......
            .....fd11ffffff11df.....
            .....fdd11f11f11ddf.....
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ..fffff.fcdb1bdf..fffff.
            .ff11ff.1cbfbfc..fd111f.
            .f111df..1fffff.fdd1111f
            fd11dfdf.ffffff.fcfdf11f
            fddddfcf.f.ffff.fbfdffdf
            fdfdffbf.f.ff.f..ffcfccf
            fcfcffff...ff....fccffff
            .ffbf.f..f.ff....fbff...
            ...f.....f..f.....f.....
            .........f....f.........
            ..............f.........
            ..........f.............
            ..........f.............
            ............f...........
            `,img`
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......ff111ff1111f......
            .....fd11ffffff11df.....
            .....fdd11f11f11ddf.....
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.fffff.
            ..fffff.1cbfbfc..fd111f.
            .ff11ff..1fffff.fdd1111f
            .f111df..ffffff.fcfdf11f
            fd11dfdf.f.ffff.fbfdffdf
            fddddfcf.f.ff.f..ffcfccf
            fdfdffbf...ff.f..fccffff
            fcfcffff.f.ff.f..fbff...
            .ffbf.f.....f.....f.....
            ...f....................
            .........f..f...........
            .........f..f...........
            .........f..............
            ..............f.........
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        BOSS,
        [img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......ff111111111f......
            .....fd1111111111df.....
            .....fd111111111ddf.....
            ......fd11111111df......
            ......fbd1cccc11bf......
            ......fcdccffccdcf......
            .......fb1cfffcbf.......
            ........fcfffcdf........
            ..ccccf..cffffc...fcccf.
            .cccccf...fffff..cccccf.
            .f111df...fffff.fdc1111f
            fd11dfff.ffff...fffdf11f
            ffffffff.f.fff...ffdffff
            ..ffff...f.ffff...fffff.
            ...........f..f.........
            ..........ff..f.........
            ..........f.f...........
            ............f.f.........
            ............f...........
            ........................
            ........................
            `,img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......ff111111111f......
            .....fd1111111111df.....
            .....fdd11111111ddf.....
            ......fdd111111ddf......
            ......fbd1cccc1dbf......
            ......fcdccccccdcf......
            .......fcdcfff1bf.......
            ..ccccc.fcfffccf..ccccf.
            .fccccc.1cffffc..cccccf.
            .f111cf..1fffff.fcdd111f
            ff1dddff.ffffff.fddddd1f
            ffffffff.f.ffff.fddd11ff
            ......ff.f.ff.f..fffff.f
            ...........ff...........
            .........f.ff...........
            .........f..f...........
            .........f....f.........
            ..............f.........
            ..........f.............
            ..........f.............
            ............f...........
            `,img`
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......ff111111111f......
            .....fd1111111111df.....
            .....fdd11111111ddf.....
            ......fddd1111dddf......
            ......fbdbccccbdbf......
            ......fcdcccfccdcf......
            .......fb1ffff1bf.ccccf.
            ..fffff.1cffffc..cccccf.
            .ffccff..1fffff.fdcc111f
            .fcc1cf..ffffff.fddddd1f
            fd11dfcf.f.ffff.fddd11f.
            fddddfff.f.ff.f..fffff..
            fffffff....ff.f.........
            ...fff...f.ff.f.........
            ............f...........
            ........................
            .........f..f...........
            .........f..f...........
            .........f..............
            ..............f.........
            `],
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
        if (bossbatlesong == 1) {
            music.stopAllSounds()
            music.play(music.createSong(hex`00c80004080c0401001c000f05001202c102c201000405002800000064002800031400060200041e0020003000011840005000011660007000011480008800010ca400c000010c06001c00010a006400f4016400000400000000000000000000000000000000022a0020004000012940004400012948005800012760006400012768008000012584008800012c88008c00012908001c000e050046006603320000040a002d00000064001400013200020100022c0100000400010d08000c00010c10001400010818001c00010d20002400010c28002c00010830003400010d38003c00010c40004400010848004c00010d50005400010c58005c00010860006400010d68006c00010c70007400010878007c00010d80008400010c88008c00010890009400010d94009800010c98009c000108a400a8000119a800ac00011bac00b0000120b000c000011dc000c4000124c400c8000120c800cc000120d000dc00011de000e400011de400e8000119e800ec00011bec00f0000129f000fc00012400010801012508010c0101200c011001012510011c01012420012401012428013401012938013c0101273c014001012540014401012444014801012248014c0101294c015001011950015401011954015801011b58015c01012060017801011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800290100000100010208000900010314001500010218001900010420002100010228002900010334003500010238003900010440004100010248004900010354005500021702580059000104600061000102680069000103740075000102780079000104800081000102880089000103900091000104980099000104a000a100021214a800a9000112b000b100021217b800b9000112c000c1000112c800c9000112d000d100021217d800d9000112e000e100021202e800e9000112f000f10003121702f800f90001120001010101120801090101121001110102121718011901011220012101011228012901011230013101011238013901011240014101011248014901011250015101011258015901011260016101021217700171010112740175010112780179010112`), music.PlaybackMode.UntilDone)
            manolosworld = 0
            forest = 0
        }
    })
})
function ANIMATIONSPRITE1 () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        f f f f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . f 3 3 3 3 f f . 
        . f f f . . . f 3 e 3 3 3 3 3 f 
        . . . . . . f 3 3 3 e e e 3 3 f 
        . . . . . . f 3 3 3 3 3 d d f . 
        . . . . . . f 3 3 3 d 3 d f . . 
        . . . . . . . f f 3 d d d d f . 
        . . . . . . f b b c c f f f f . 
        . . . . f f b b b c c c f d f . 
        . . . f d b b b b c c c c c f . 
        . . . f 5 5 5 5 c c c f f f . . 
        . . . f 2 2 2 8 c c c . . . . . 
        f . . . . 8 8 8 9 f 9 9 . . . . 
        . . . . f . . . . . . f f . . . 
        `,img`
        f f . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f . . 
        . f f . . f f . f 3 3 3 3 f f . 
        . . . . . . . f e 3 3 3 3 3 3 f 
        . . . . . . f 3 3 e e e e 3 3 f 
        . . . . . . f 3 3 3 3 d d d 3 f 
        . . . . . . f 3 3 d 3 d d f . . 
        . . . . . . . f 3 d d d d d f . 
        . . . . . . . . f b b c f f . . 
        . . . . . . . f c c b b c f . . 
        . . . . . . . f c c b b c f . . 
        . . . . . . . f c c 5 5 5 5 5 f 
        f f . . . . . f f 8 2 2 2 f . . 
        . . . . . . . . f 8 8 8 f . . . 
        . . . . . . . . f f 8 f f . . . 
        `,img`
        f f f . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f 3 3 3 3 f f . . . 
        . . . . . f 3 3 3 3 3 3 3 f . . 
        . . . . f 3 e 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 e e e e d 3 f . . 
        . . . f 3 3 3 3 3 3 3 d 3 f . . 
        . . . . f 3 3 d 3 d d f . . . . 
        . . . . f 3 3 d d d d d f . . . 
        . . . . . f f 3 3 c 5 f . . . . 
        . . . f f c c b b b c f . . . . 
        . . f c c c c c b b b b f f f . 
        . f e e c f c c c f b d 5 5 5 f 
        . f e d f 9 9 8 8 c f d 2 2 f . 
        . . f f 9 9 f f 8 8 8 . f f . . 
        . . . f . . . . . . . f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f 3 3 3 f f f . . 
        . . f e 3 3 3 3 3 3 3 3 f f . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b b f . 
        f c c b b 5 c c 9 2 c c c b b f 
        f b b b f c 5 2 2 b c c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 c c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 . . f f f . 
        . f f . . f . . . f . . . . . . 
        `,img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b f . . 
        f c c b b 5 c c 9 2 c c c b f . 
        f b b b f c 5 2 2 b c c c b f . 
        f b b f f c c c c b f c c b b f 
        f b b f f c c c c b f c b b b f 
        f e 5 5 5 5 5 8 c b . f e e d f 
        f e 2 2 2 8 8 8 9 9 . . f f f . 
        . f f . . f . . . f . . . . . . 
        `],
    700,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . . . f d d d d f d d d f . . . 
        . . f b b 5 c c 9 2 c c f f . . 
        . f b b b c 5 2 2 b c f c f . . 
        f b b b f c c c c b f c b b f . 
        f e 5 5 5 5 5 c c b f f e e f . 
        f e 2 2 2 8 8 8 9 9 f . f f . . 
        . f f . . f f . . f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 d d d 3 d d 3 3 f . . 
        . f f 3 d d d d d 3 d d 3 f . . 
        . . f 3 d f d d d d f d 3 f . . 
        . f c c d d d d f d d d b f . . 
        f c c b b 5 c c 9 c c c b b f . 
        f b b b f c 5 2 2 f c c b b f . 
        f 5 5 f . c c c c b f e e d f . 
        f f f . . 8 8 8 9 9 f f f f . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 d f . . . 
        . . f b b c 3 3 c c c c f . . . 
        . f b b b c c c c b c f c f . . 
        f b b b f c c c c b f c b b f . 
        f b b f f c c c c b f f e e f . 
        f e d f . 8 8 8 9 9 f . f f . . 
        . f f . . f f . . f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . f f f . . . . . 
        . . . f f f f f 3 3 3 f . . . . 
        . . f e 3 3 3 3 3 3 3 3 f . . . 
        . f f 3 e 3 3 3 3 3 3 e f f . . 
        . f 3 3 3 3 e e 3 e e 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f c c 3 3 3 3 3 3 3 3 b f . . 
        f c c b b c c 3 3 3 c c b b f . 
        f b b b f c c c c f c c b b f . 
        f d d f . c c c c b f e e d f . 
        f f f . . 8 8 8 9 9 f f f f . . 
        . . . . . f . . f f . . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . f f f f 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . f f 3 3 3 3 f . . . . . . . . 
        f 3 3 3 3 3 e 3 f . . . . . . . 
        f 3 3 e e e 3 3 3 f . . . . . . 
        . f d d 3 3 3 3 3 f . f f . . . 
        . . f d 3 d 3 3 3 f . . . . . . 
        . f d d d d 3 f f . . . . . . . 
        . f f f f c c b b f . . . . . . 
        . f d f c c c b b b f f . . . . 
        . f c c c c c b b b b d f . . . 
        . . f f f c c c 5 5 5 5 f . . . 
        . . . . . c c c 8 2 2 2 f . . . 
        . . . . 9 9 f 9 8 8 8 f f . . . 
        . . . f . . . . . . f . . . . f 
        `,img`
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . f f 3 3 3 3 f . . . . . . . . 
        f 3 3 3 3 3 3 e f . . . . . . . 
        f 3 3 e e e e 3 3 f . f f f . . 
        f 3 d d d 3 3 3 3 f . . . . . . 
        . . f d d 3 d 3 3 f . . . . . . 
        . f d d d d d 3 f . . . . . . . 
        . . f f c b b f . . . . . . . . 
        . . f c b b c c f . . . . . . . 
        . . f c b b c c f . . . . . . . 
        . 5 5 5 5 5 c c f . . . . . . . 
        . . f 2 2 2 8 f f . . . . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . . f f 8 f f . . . . f f . f 
        `,img`
        . . . . . . . . . . . f f f . f 
        . . . . . f f f f . . . . . . . 
        . . . f f 3 3 3 3 f . . . . . . 
        . . f 3 3 3 3 3 3 3 f . . . . . 
        . . f 3 3 3 3 3 3 e 3 f . . . . 
        . . f 3 d e e e e 3 3 3 f . . . 
        . . f 3 d 3 3 3 3 3 3 3 f . . . 
        . . . . f d d 3 d 3 3 f . . f f 
        . . . f d d d d d 3 3 f . . . . 
        . . . . f 5 c 3 3 f f . . . . . 
        . . . . f c b b b c c f f . . . 
        f f f f b b b b c c c c c f . . 
        f 5 5 5 d b f c c c f c e e f . 
        f f 2 2 d f c 8 8 9 9 f d e f . 
        . f f f . 8 8 8 f f 9 9 f f . . 
        . . . . f . . . . . . f . . . f 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CARTEL3, function (sprite, otherSprite) {
    CARTEL3.sayText("BOSQUE:precaución zona no controlada", 500, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.UEBODEORO, function (sprite, otherSprite) {
    game.splash("¡¡10 puntos!!")
    sprites.destroy(otherSprite)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.carta, function (sprite, otherSprite) {
    timer.throttle("action", 500, function () {
        game.setDialogTextColor(4)
        game.showLongText("AYUDAAA, SOY LA PRINCESA ESTOY EN EL BOSQUEE ME HAN SECUESTRADOO!!", DialogLayout.Top)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BOSSS, function (sprite, otherSprite) {
    if (atackgodtier == 1) {
        statusbar2.value += -1
        music.play(music.createSoundEffect(
        WaveShape.Noise,
        5000,
        152,
        663,
        1117,
        500,
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile69`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (atackgodtier == 1) {
        sprites.destroy(otherSprite)
        music.play(music.createSoundEffect(
        WaveShape.Noise,
        5000,
        152,
        663,
        1117,
        500,
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    if (info.score() == 1) {
        music.play(music.createSoundEffect(WaveShape.Noise, 4031, 4833, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        tiles.setTileAt(tiles.getTileLocation(19, 4), assets.tile`myTile68`)
        tiles.setTileAt(tiles.getTileLocation(20, 4), assets.tile`myTile69`)
    }
})
let viduela: Sprite = null
let projectile: Sprite = null
let PARRYTEXT = 0
let statusbar2: StatusBarSprite = null
let bossbatlesong = 0
let information: Sprite = null
let SUPERCOFRE: Sprite = null
let COFRES: Sprite = null
let CARTA: Sprite = null
let rocuela: Sprite = null
let CASA12: Sprite = null
let CASA11: Sprite = null
let casa10: Sprite = null
let enemigo_uno_p2: Sprite = null
let enemigo2_p2: Sprite = null
let enemigo_dos: Sprite = null
let enemigo_unoo: Sprite = null
let casa9: Sprite = null
let casa_deu: Sprite = null
let casa_7: Sprite = null
let casa_8: Sprite = null
let casa_5: Sprite = null
let casa_4: Sprite = null
let casa_3: Sprite = null
let casa_2: Sprite = null
let casa_1: Sprite = null
let mySprite2: Sprite = null
let CARTEL3: Sprite = null
let CARTEL1: Sprite = null
let CASTILLO: Sprite = null
let llave: Sprite = null
let boss_vivo = 0
let cartel_2: Sprite = null
let PARRY = 0
let BOSS: Sprite = null
let forest = 0
let manolosworld = 0
let statusbar: StatusBarSprite = null
let atackgodtier = 0
let mySprite3: Sprite = null
let inicio = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel14`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f . . . . . 
    . . . f f f f f 3 3 3 f . . . . 
    . . f e 3 3 3 3 3 3 3 3 f . . . 
    . f f 3 e 3 3 3 3 3 3 e f f . . 
    . f 3 3 3 3 e e 3 e e 3 3 f . . 
    . f 3 3 3 d d d 3 d d 3 3 f . . 
    . f f 3 d d d d d 3 d d 3 f . . 
    . . f 3 d f d d d d f d 3 f . . 
    . f c c d d d d f d d d b b f . 
    f c c b b 5 c c 9 2 c c c b b f 
    f b b b f c 5 2 2 b c c c b b f 
    f b b f f c c c c b f c b b b f 
    f e 5 5 5 5 5 c c b . f e e d f 
    f e 2 2 2 8 8 8 9 9 . . f f f . 
    . f f . . f . . . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
inicio = 1
mySprite3 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e e f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 e f 
    f 1 f 1 f 1 1 f 1 1 1 f 1 1 e f 
    f 1 f 1 f 1 1 f 1 1 1 f 1 1 e f 
    f 1 f 1 f 1 1 f 1 1 1 f 1 1 e f 
    f 1 f 1 1 1 1 f 1 1 1 1 1 1 e f 
    f 1 f 1 f 1 1 1 1 1 1 f 1 1 e f 
    f 1 1 1 1 1 1 f 1 1 1 1 1 1 e f 
    f e e e e e e e e e e e e e e f 
    f e e 4 5 5 5 5 5 5 f e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.controles)
mySprite3.setPosition(136, 34)
ANIMATIONSPRITE1()
game.onUpdate(function () {
    if (forest == 1) {
        if (enemigo_dos.isHittingTile(CollisionDirection.Left)) {
            enemigo_dos.vx = 40
        }
        if (enemigo_dos.isHittingTile(CollisionDirection.Right)) {
            enemigo_dos.vx = -40
        }
        if (enemigo2_p2.isHittingTile(CollisionDirection.Left)) {
            enemigo2_p2.vx = 40
        }
        if (enemigo2_p2.isHittingTile(CollisionDirection.Right)) {
            enemigo2_p2.vx = -40
        }
    }
})
game.onUpdate(function () {
    if (manolosworld == 1) {
        if (PARRYTEXT == 0) {
            if (info.score() >= 25) {
                PARRYTEXT = 1
                PARRY = 1
                game.showLongText("HAS APRENDIDO NUEVA TECNICA seguro que alguien en el bosque sabra de que va preguntale si quieres saber.", DialogLayout.Top)
            }
        }
    }
    if (forest == 1) {
        if (PARRYTEXT == 0) {
            if (info.score() >= 25) {
                PARRYTEXT = 1
                PARRY = 1
                game.showLongText("Ya puedes ir a salvar a la PRINCESA", DialogLayout.Top)
            }
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (bossbatlesong == 1) {
        animation.runImageAnimation(
        BOSS,
        [img`
            ........................
            ........................
            ....ff..................
            ....f1f.................
            .ff.fbbf................
            .f1ffbbff.ffff..........
            .fbffbbf1f1111ff........
            ..fbbbbbbffffffbf.......
            ..fbbbbbc1111111f.......
            ..fbbbbbccf11fc11f1.....
            ...fbbbbfb11111111f.....
            ...ffffff111111111f.....
            ......fcf111111bbf......
            .......ccbdb1b1fcf......
            .......fffbfbfdff.......
            ........ffffffff........
            ........ffffffff........
            .........fffffff........
            ......f..ffffffb........
            ..........fffff..fff....
            .........f.ffff..f......
            ..........f.............
            ..........f.............
            ...........f............
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ....7.fd11111111df......
            ...7..fd11111111df......
            ...7..fd11111111df......
            ...7..fddd1111dddff.....
            ...67.fbdbfddfbdbfcf....
            ...667fcdcf11fcdcfbf....
            ....66fffbdb1bdffcf.....
            ....fcb1bcffffff........
            ....f1cdc1ffffff........
            ....fdcdcdfffff.f.f.....
            ....fdcdcdf.......f.....
            ....f1f1f1f.......f.....
            .....f.1.1....ff........
            .......f.f....f.........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd111111111f......
            ......fd11111111df......
            ......fd11111111df......
            ......fcdd1111ddcff.....
            .......fbcf11fcbfbbf....
            .......ffbdb1bdffff.....
            ........fcbfbfdf........
            ........ffffffff........
            ......ffffffffff........
            .....fcb1bcffff.........
            ......ffbffff...f.......
            .............f..f.......
            .........f...f..f.......
            .........f..f...........
            ............f...........
            ........................
            `],
        100,
        false
        )
        projectile = sprites.createProjectileFromSprite(img`
            . . . 8 8 8 8 8 . . . 
            . . . f f f f f . . . 
            . 8 f 1 1 1 1 b f 8 . 
            8 f d 1 1 1 1 1 d f . 
            8 f d d 1 1 1 d d f . 
            8 f f b f d f d f f 8 
            . . f c 1 c 1 c f 8 8 
            f 1 1 c c c f 1 1 c f 
            f b c 1 f f f b 1 c f 
            . 8 8 f f f f 8 8 8 . 
            `, BOSS, 50, 50)
        projectile.setKind(SpriteKind.enemyjiji)
        projectile.follow(mySprite, 120)
        timer.after(7000, function () {
            sprites.destroy(projectile)
        })
        if (boss_vivo == 0) {
            sprites.destroyAllSpritesOfKind(SpriteKind.enemyjiji)
        }
        for (let value9 of tiles.getTilesByType(assets.tile`myTile75`)) {
            characterAnimations.loopFrames(
            viduela,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 4 4 . 4 4 . . . . . . 
                . . . . 4 d 4 4 d d 4 . . . . . 
                . . . 4 d 4 4 4 d 4 4 4 . . . . 
                . . . 4 d d 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 4 . 4 4 4 . . . . . . 
                . . . . 4 4 4 d 4 4 . . . . . . 
                . . . . d 4 4 d 4 4 . . . . . . 
                . . . . 4 4 4 4 4 . . . . . . . 
                . . . . 4 4 4 4 4 . . . . . . . 
                . . . . . 4 4 4 4 . . . . . . . 
                . . . . . 4 4 4 . . . . . . . . 
                . . . . . . 4 4 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 4 . 4 . . . . . 
                . . . . . . 4 4 d 4 4 4 . . . . 
                . . . . . . 4 4 d 4 4 d . . . . 
                . . . . . . . 4 4 4 4 4 . . . . 
                . . . . . . . 4 4 4 4 4 . . . . 
                . . . . . . . 4 4 4 4 . . . . . 
                . . . . . . . . 4 4 4 . . . . . 
                . . . . . . . . 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            characterAnimations.rule(Predicate.NotMoving)
            )
            viduela = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 . . . . 4 4 . . . . 
                . . . 4 d d 4 . . 4 4 4 4 . . . 
                . . . d d d 4 4 4 d d 4 4 . . . 
                . . 4 d d 4 4 4 4 d 4 4 4 4 . . 
                . . 4 d d 4 4 4 4 d 4 4 4 4 . . 
                . . . 4 d d 4 4 4 4 4 4 4 . . . 
                . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.vida)
            tiles.placeOnTile(viduela, value9)
            tiles.setTileAt(value9, assets.tile`transparency16`)
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (forest == 1) {
        if (enemigo_dos.vx > 1) {
            enemigo_dos.vx = -40
        } else {
            enemigo_dos.vx = 40
        }
        if (enemigo2_p2.vx > 1) {
            enemigo2_p2.vx = -40
        } else {
            enemigo_dos.vx = 40
        }
    }
    if (manolosworld == 1) {
        if (enemigo_unoo.vy > 1) {
            enemigo_unoo.vy = -40
        } else {
            enemigo_unoo.vy = 40
        }
        if (enemigo_uno_p2.vy > 1) {
            enemigo_uno_p2.vy = -40
        } else {
            enemigo_uno_p2.vy = 40
        }
    }
})

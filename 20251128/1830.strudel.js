setcpm(30)
$ost: note("[c5 g4] e6 [c5 g4] c5".add("<0 3 -5 -4>"))
  .sound("square")
  .delay(0.5)
  .gain(0.3)
  ._pianoroll()

$bass: note("c2!4".add("<0 3 -5 -4>"))
  .sound("square")
  .fm(3.14)
  .gain(1.1)

$sd: sound("sd")
  .bank("bossdr110")
  .beat("4, 8, 10", 16)

$bd: sound("bd")
  .bank("bossdr110")
  .beat("0, 3, 7", 8)
  .duckorbit(1)
  .duckattack(0.1)
  .duckdepth(0.3)

$: sound("hh!16?").bank("bossdr110")

$: sound("cr!8?").bank("bossdr110")

$: note("g6".sub("<0 3 2 4>"))
  .sound("square")
  .fm(2.71828)
  .gain(0.2)

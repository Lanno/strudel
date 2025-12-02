setcpm(25)
$bd: sound("bd!4").beat("0, 3, 8, 11", 16)

$sd: sound("rim").beat("4, 10", 16)
$: sound("[- sd*2 - sd*2]*2").gain(0.2)

$: run(16)
  .scale("c:minor:pentatonic")
  .note()
  .pan(brand)
  .postgain(brandBy(0.7))

$: sound("hh!16?").gain(0.4)
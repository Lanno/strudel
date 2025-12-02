setcpm(30)

const DRUM_MACHINE = "linn9000"

const ducker = register('ducker', (p) => p
  .duckorbit(1)
  .duckdepth(0.4)
  .duckattack(0.1)
)

////////////////////////////////////////////////////////

const bd_I = sound("[bd@3 bd] bd bd bd")
  .bank(DRUM_MACHINE)
  .ducker()

const tom_I = sound("- mt*4? - lt*2?")
  .bank(DRUM_MACHINE)
  .gain(0.2)

const I = stack(
  bd_I,
  tom_I,
)

////////////////////////////////////////////////////////

const pad_A = note(
    "0".add(0)
    .add("<0 2 0 1 0 -2 1 -1>")
    .superimpose(x=>x.add("[2, 4]"))
  )
  .scale("g:minor")
  .sound("gm_pad_warm")
  .gain(0.4)

const melody_A = note(
  "<[~ 0] [-2 0] 2@2 ~@4>".add(7)
)
  .scale("g:minor")
  .sound("sin")
  .fm(.5)
  .fmh(2)

const vox_ost_A = note(
  "0*4? 0*4? 0*4? 0*4?".add(7)
)
  .scale("g:minor")
  .sound("gm_lead_6_voice")
  .pan(brand)
  .gain(0.4)

const bass_A = note("0(3,4)".sub(14).add("<0 -2 1 -3>"))
  .scale("g:minor")
  .sound("supersaw")

const bd_A = sound("[bd@3 bd] bd bd bd")
  .bank(DRUM_MACHINE)
  .ducker()

const tom_A = sound("- mt*4? - lt*2?")
  .bank(DRUM_MACHINE)
  .gain(0.2)

const sd_A = sound("[- - [- sd] sd]/2")
  .bank(DRUM_MACHINE)
  // .sometimes(ply(2))
  .gain(0.7)

const A = stack(
  melody_A,
  vox_ost_A,
  pad_A,
  bass_A,
  bd_A,
  tom_A,
  sd_A,
)

////////////////////////////////////////////////////////

const pad_B = note(
    "0".add(0)
    .add("<0 2 0 1 0 -2 1 -1>")
    .superimpose(x=>x.add("[2, 4]"))
  )
  .scale("g:minor")
  .sound("gm_pad_warm")
  .gain(0.4)

const melody_B = note(
  "<[~ 0] [-2 0] 2@2 ~@4>".add(7)
)
  .scale("g:minor")
  .sound("sin")
  .fm(.5)
  .fmh(2)

const melody_2_B = note(
  "[[8 7 6 ~] ~ [6 7 8 ~] [5 6 7 ~]]".add(7)
  .almostNever(x=>x.rev())
  .cat(run(16).sometimes(x=>x.rev()))
)
  .scale("g:minor")
  .sound("sin")
  .pan(brandBy(0.2))

const vox_ost_B = note(
  "0*4? 0*4? 0*4? 0*4?".add(7)
)
  .scale("g:minor")
  .sound("gm_lead_6_voice")
  .pan(brand)
  .gain(0.4)

const bass_B = note("0(3,4)".sub(14).add("<0 -2 1 -3>"))
  .scale("g:minor")
  .sound("supersaw")

const bd_B = sound("[bd@3 bd] bd*2 bd bd")
  .bank(DRUM_MACHINE)
  .ducker()

const tom_B = sound("- mt*4? - lt*2?")
  .bank(DRUM_MACHINE)
  .gain(0.2)

const sd_B = sound("[- - [- sd] sd]/2")
  .bank(DRUM_MACHINE)
  .sometimes(ply(2))
  .gain(0.7)

const B = stack(
  melody_B,
  melody_2_B,
  vox_ost_B,
  pad_B,
  bass_B,
  bd_B,
  tom_B,
  sd_B,
)

////////////////////////////////////////////////////////

const melody_C = note(
  "<[~ 0] [-2 0] 2@2 ~@4>".add(7)
)
  .scale("g:minor")
  .sound("sin")
  .fm(.5)
  .fmh(2)

const melody_2_C = note(
  "[[8 7 6 ~] ~ [6 7 8 ~] [5 6 7 ~]]".add(7)
  .almostNever(x=>x.rev())
  .cat(run(16).sometimes(x=>x.rev()))
)
  .scale("g:minor")
  .sound("sin")
  .pan(brandBy(0.2))

const vox_ost_C = note(
  "0*4? 0*4? 0*4? 0*4?".add(7)
)
  .scale("g:minor")
  .sound("gm_lead_6_voice")
  .pan(brand)
  .gain(0.4)

const bd_C = sound("[bd@3 bd] bd*2 bd bd")
  .bank(DRUM_MACHINE)
  .ducker()

const tom_C = sound("- mt*4? - lt*2?")
  .bank(DRUM_MACHINE)
  .gain(0.2)

const sd_C = sound("[- - [- sd] sd]/2")
  .bank(DRUM_MACHINE)
  .sometimes(ply(2))
  .gain(0.7)

const C = stack(
  melody_C,
  melody_2_C,
  vox_ost_C,
  bd_C,
  tom_C,
  sd_C,
)

////////////////////////////////////////////////////////

arrange(
  [2, I],
  [8, A],
  [8, B],
  [4, C],
)
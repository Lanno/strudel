setcpm(60)

// Instrument Definitions

const bass_instrument = (_note) => _note.sound("sin").fm(1).fmh(2).adsr(0.1, 0.7, 0.3, 0.5)
const ost_instrument = (_note) => _note.sound("sin").fm(1).fmh(1).gain(slider(0.5, 0, 1)).adsr(1.5, 0.5, 0.5, 2.0)
const bd_instrument = (_sound) => _sound.bank("linn9000").duckorbit(1).duckdepth(0.2).duckattack(0.2)
const sd_instrument = (_sound) => _sound.bank("linn9000")
const melody_instrument = (_note) => _note.sound("triangle").fm(1).fmh(2).gain(slider(0.5, 0, 1)).adsr(0.5, 0.5, 0.2, 0.2)
const cr_instrument = (_sound) => _sound.bank("linn9000").gain(slider(0.245, 0, 1))
const hh_instrument = (_sound) => _sound.bank("linn9000").gain(slider(0.245, 0, 1))

// Progression

const progression_A = register('progression_A', (_pattern) => _pattern.add("<0@2 2@2 -2@2 -4@2>"))
const progression_D = register('progression_D', (_pattern) => _pattern.add("<0@2 1@2 -3@2 -2@2>"))

// Section A Music

const bass_pattern_A = note("<0 0 0 0>".sub(7).progression_A()).scale("c:minor")
const ost_pattern_A = note("[0,2,4,6,8]!4".add(7).progression_A()).scale("c:minor").arp("<0 [0,2] 1 [2,4 3]>")

const A = stack(
  bass_instrument(bass_pattern_A),
  ost_instrument(ost_pattern_A),
)

// Section B Music

const bass_pattern_B = bass_pattern_A
const ost_pattern_B = ost_pattern_A
const bd_pattern_B = sound("<[bd ~ ~ bd] [~ bd] <~ [~ ~ bd bd]> ~>")
const sd_pattern_B = sound("<~ ~ ~ sd>")

const B = stack(
  bass_instrument(bass_pattern_B),
  ost_instrument(ost_pattern_B),
  bd_instrument(bd_pattern_B),
  sd_instrument(sd_pattern_B),
)

// Section C Music

const bass_pattern_C = bass_pattern_B
const ost_pattern_C = ost_pattern_B
const bd_pattern_C = bd_pattern_B
const sd_pattern_C = sd_pattern_B
const melody_pattern_C = note("<2 [3 2] 0@2>".add(7).progression_A()).scale("c:minor")
const cr_pattern_C = sound("<cr ~ cr ~>").sometimes(ply(2))

const C = stack(
  bass_instrument(bass_pattern_C),
  ost_instrument(ost_pattern_C),
  bd_instrument(bd_pattern_C),
  sd_instrument(sd_pattern_C),
  melody_instrument(melody_pattern_C),
  cr_instrument(cr_pattern_C),
)

// Section CD Music

const bass_pattern_CD = note("<0*2 1*2 3*2 1*2>".sub(7)).scale("c:minor")
const bd_pattern_CD = sound("<[bd ~ ~ bd] [~ bd] [bd ~ ~ bd] [~ bd]>")
const sd_pattern_CD = sound("<~ sd ~ sd>") 
const hh_pattern_CD = sound("[oh hh]".cat("hh hh hh".sometimes(ply(2))))

const CD = stack(
  bass_instrument(bass_pattern_CD),
  bd_instrument(bd_pattern_CD),
  sd_instrument(sd_pattern_CD),
  hh_instrument(hh_pattern_CD),
)

// Section D Music

const bass_pattern_D = note("<0*2 0*2 0*2 0*2>".sub(7).progression_D()).scale("eb:major")
const ost_pattern_D = note("[0,2,4,6,8]!4".add(7).progression_D()).scale("eb:major").arp("<[0,2 3] [3,5 4] [1,3] [2,~ 4]>")
const bd_pattern_D = sound("<[bd ~ ~ bd] [~ bd] [bd ~ ~ bd] [~ bd]>")
const sd_pattern_D = sound("<~ sd ~ sd>") 
const hh_pattern_D = sound("[oh hh]".cat("hh hh hh".sometimes(ply(2))))

const D = stack(
  bass_instrument(bass_pattern_D),
  ost_instrument(ost_pattern_D),
  bd_instrument(bd_pattern_D),
  sd_instrument(sd_pattern_D),
  hh_instrument(hh_pattern_D),
)

// Arrangement

arrange(
  [8, A],
  [16, B],
  [16, C],
  [4, CD],
  [16, D],
  [16, C],
  [16, B],
)
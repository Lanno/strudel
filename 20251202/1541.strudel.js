setcpm(75)

// Instruments
const melody_inst = (_note) => _note.sound("sin").scale("e:minor").fm(1).fm(1.9).adsr(0.5, 0.1, 0, 0.1).pan(rand.range(0.3, 0.7))
const bass_inst = (_note) => _note.sound("tri").scale("e:minor").fm(1).fmh(2.02).adsr(0, 0.1, 0, 0).duckorbit(1).duckdepth(0.3).duckattack(0.3)
const bd_inst = (_sound) => _sound.bank("casiosk1").room(0.1)
const sd_inst = (_sound) => _sound.bank("casiosk1").distort(1.5).room(0.15).gain(0.3)
const rd_inst = (_sound) => _sound.bank("casiosk1").distort(1).room(0.1).gain(0.1)
const tom_inst = (_sound) => _sound.bank("casiosk1").distort(1).room(0.3).gain(0.2)

// Progressions
const prog_A = register('prog_A', (_pattern) => _pattern.add("<0@2 1 2 -2 -4 -2 -3>"))

// Section A
const melody_A = note("<0@3 [-2 0] 2 [4 3] 2 [3 2]> <[2 5] [5 4] [4 6] [4 5]>".add(7).prog_A())
const bass_A = note("0!1".sub(7).prog_A())

const A = stack(
  melody_inst(melody_A),
  bass_inst(bass_A),
)

// Section B
const melody_B = melody_A
const bass_B = note("0!2".sub(7).prog_A())
const bd_B = sound("<bd bd bd bd bd bd> <bd*2 bd*2 bd*2 bd*2>")
const sd_B = sound("<~ [~ sd ~ ~] ~ [~ sd ~ sd]>".rarely(ply(2)))

const B = stack(
  melody_inst(melody_B),
  bass_inst(bass_B),
  bd_inst(bd_B),
  sd_inst(sd_B),
)

// Section C
const melody_C = note("<0@3 [-2 0]> <2 [4 3] 2 [3 2]> <[2 5] [5 4] [4 6] [4 5]>".add(7).prog_A())
const bass_C = bass_A
const bd_C = bd_B
const sd_C = sd_B
const rd_C = sound("<[rd rd*2]!4>")

const C = stack(
  melody_inst(melody_C),
  bass_inst(bass_C),
  bd_inst(bd_C),
  sd_inst(sd_C),
  rd_inst(rd_C),
)

// Section D
const bass_D = bass_A
const bd_D = bd_B
const sd_D = sd_B
const tom_D = sound("<[~ ht] [ht ~] [mt mt] [lt ~]>".often(ply(2)))

const D = stack(
  bass_inst(bass_D),
  bd_inst(bd_D),
  sd_inst(sd_D),
  tom_inst(tom_D),
)

// Arrangement
arrange(
  [8, A],
  [8, B],
  [8, C],
  [8, B],
  [8, D],
)

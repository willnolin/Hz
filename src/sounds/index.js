import kHZ1_6 from "./1_6kHZ.mp3"
import kHZ1_25 from "./1_25kHZ.mp3"
import HZ500 from "./500HZ.mp3"
import HZ160 from "./160HZ.mp3"
import HZ800 from "./800HZ.mp3"
import HZ440 from "./440HZ.mp3"
import HZ400 from "./400HZ.mp3"
import HZ250 from "./250HZ.mp3"
import HZ125 from "./125HZ.mp3"
import HZ100 from "./100HZ.mp3"
import HZ80 from "./80HZ.mp3"
import kHZ4 from "./4kHZ.mp3"
import kHZ3 from "./3kHZ.mp3"
import kHZ1 from "./1kHZ.mp3"
import kHZ2 from "./2kHZ.mp3"
import kHZ2_5 from "./2_5kHZ.mp3"


const mp3Array = [
  {
    file: HZ160,
    name: '160HZ',
    freq: 160,
    volume: 0.5
  },
  {
    file: kHZ1_25,
    name: '1.25kHZ',
    freq: 1250,
    volume: 0.3
  },
  {
    file: kHZ1_6,
    name: '1.6kHZ',
    freq: 1600,
    volume: 0.3
  },
  {
    file: HZ500,
    name: '500HZ',
    freq: 500,
    volume: 0.4
  },
  {
    file: HZ800,
    name: '800HZ',
    freq: 800,
    volume: 0.4
  },
  {
    file: HZ440,
    name: '440HZ',
    freq: 440,
    volume: 0.5
  },
  {
    file: kHZ1,
    name: '1kHZ',
    freq: 1000,
    volume: 0.4
  },
  {
    file: HZ400,
    name: '400HZ',
    freq: 400,
    volume: 0.5
  },
  {
    file: HZ250,
    name: '250HZ',
    freq: 250,
    volume: 0.5
  },
  {
    file: HZ125,
    name: '125HZ',
    freq: 125,
    volume: 0.5
  },
  {
    file: kHZ4,
    name: '4kHZ',
    freq: 4000,
    volume: 0.2
  },
  {
    file: kHZ3,
    name: '3kHZ',
    freq: 3000,
    volume: 0.2
  },
  {
    file: HZ100,
    name: '100HZ',
    freq: 100,
    volume: 0.5
  },
  {
    file: HZ80,
    name: '80HZ',
    freq: 80,
    volume: 0.5
  },
  {
    file: kHZ2,
    name: '2kHZ',
    freq: 2000,
    volume: 0.2
  },
  {
    file: kHZ2_5,
    name: '2.5kHZ',
    freq: 2500,
    volume: 0.2
  },
]

export {
  mp3Array
}
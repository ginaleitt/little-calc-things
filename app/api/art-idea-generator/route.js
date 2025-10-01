import { NextResponse } from 'next/server'
import chroma from 'chroma-js'


export async function POST(request) {
  try {
    const { theme, colorTheory } = await request.json()

    // Generate random base color
    const baseColor = chroma.random()

    // Generate color palette based on theory
    let colors = []
    
    switch(colorTheory) {
      case 'complementary':
        colors = getComplementary(baseColor.hex())
        break
      case 'analogous':
        colors = getAnalogous(baseColor.hex())
        break
      case 'triadic':
        colors = getTriadic(baseColor.hex())
        break
      case 'tetradic':
        colors = getTetradic(baseColor.hex())
        break
      case 'monochromatic':
        colors = getMonochromatic(baseColor.hex())
        break
      default:
        colors = [baseColor.hex()]
    }

    // Generate simple sentence
    const sentence = generateArtisticSentence()

    // Fetch Unsplash images
    const unsplashData = await fetchUnsplashImages(theme)

    return NextResponse.json({
      colors,
      sentence,
      images: unsplashData.images,
      attributions: unsplashData.attributions
    })

  } catch (error) {
    console.error('Error generating art:', error)
    return NextResponse.json(
      { error: 'Failed to generate art idea' },
      { status: 500 }
    )
  }
}

// New function to fetch Unsplash images
async function fetchUnsplashImages(theme) {
  try {
    // Generate a random page number (Unsplash has many pages of results)
    const randomPage = Math.floor(Math.random() * 10) + 1  // Pages 1-10
    
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${theme}&per_page=4&orientation=landscape&page=${randomPage}`,
      {
        headers: {
          'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
      }
    )

    if (!response.ok) {
      throw new Error('Unsplash API request failed')
    }

    const data = await response.json()
    
    // Extract image URLs and attribution data
    const images = data.results.map(photo => photo.urls.regular)
    
    // Create array of attribution objects with proper links
    const attributions = data.results.map(photo => ({
      photographerName: photo.user.name,
      photographerUrl: `${photo.user.links.html}?utm_source=art_idea_generator&utm_medium=referral`,
      unsplashUrl: `https://unsplash.com/?utm_source=art_idea_generator&utm_medium=referral`
    }))
    
    return {
      images,
      attributions
    }

  } catch (error) {
    console.error('Unsplash fetch error:', error)
    return {
      images: [],
      attributions: []
    }
  }
}

function generateArtisticSentence() {
  const templates = [
    (adj, subj, verb, obj, loc) => `A ${adj} ${subj} ${verb} ${obj} ${loc}`,
    (adj, subj, verb, obj, loc) => `The ${adj} ${subj} ${verb} ${obj} ${loc}`,
    (adj, subj, verb, obj, loc) => `Behold the ${adj} ${subj} that ${verb} ${obj} ${loc}`,
  ]

  const adjectives = [
    'ethereal', 'crystalline', 'ancient', 'luminous', 'forgotten', 'mystic', 'cosmic', 'radiant', 'shadowed', 'eternal',
    'spectral', 'gilded', 'obsidian', 'prismatic', 'haunted', 'celestial', 'arcane', 'shimmering', 'twilight', 'nebulous',
    'iridescent', 'phantom', 'angular','minimalist','chromatic', 'enigmatic', 'translucent', 'baroque', 'gossamer', 'amber', 'opalescent', 'vermillion','verdant','frozen','ashen','radiant','hallowed','fractal','monolithic','whispering','veiled','corroded', 'glacial','molten','holographic','mirrored','infinite','burnished','ornate','serrated','starlit','forgotten',
    'feral','hallowed','mechanized','clockwork','neon','rusted','vivid','dim','gleaming','obsessive',
    'ominous','resplendent','eldritch','lunar','solar','tidal','magnetic','holographic','synthetic','electric','smoky','gritty','ominous','bloodstained','tattered','desolate','dreary','macabre','eerie','claustrophobic','sunny','rosy','pastel','breezy','gentle','playful','rustic','warm','cheerful','blooming','imperial','tribal','baroque','medieval','ceremonial','nomadic','ornamental','sacred','royal','ancient','wobbly','goofy','silly','clumsy','cartoonish','slimy','chunky','bubbly','awkward','ridiculous','rubber','dancing'

  ]
  
  const subjects = [
    'sphinx', 'oracle', 'wanderer', 'architect', 'phoenix', 'entity', 'dreamer', 'sentinel', 'keeper', 'weaver',
    'nomad', 'guardian', 'prophet', 'scribe', 'herald', 'monk', 'shaman', 'artificer', 'chronicler', 'pilgrim',
    'seer', 'voyager', 'sage', 'artisan', 'mystic', 'collector', 'harbinger', 'curator', 'poet', 'dancer', 'cactus', 'cat','dog','owl','wolf','fox','deer','bear','lion','tiger','elephant','giraffe','whale','dolphin','eagle','falcon','butterfly','dragonfly','peacock','table','car','book','lamp','chair','house','bridge','castle','tower','ship','train','bicycle','camera','clock','guitar','piano','violin','drum','flower','tree','mountain','river','ocean','desert','forest','island','cave','cloud','star','moon','sun', 'planet', 'cyborg','alchemist','astronaut','mechanic','puppeteer','cartographer','astronomer','golem','djinn','giant', 'kraken','mermaid','centaur','griffin','unicorn','chimera','android','automaton','hologram','avatar', 'sculptor','engineer','inventor','trickster','mask','idol','relic','portal','mirror','labyrinth','satellite','rocket','comet','asteroid','volcano','pyramid','obelisk','market stall','lantern','bridgekeeper','detective','gangster','informant','vampire','witch','ghoul','specter','zombie','assassin','crow','farmer','child','baker','puppy','kitten','duckling','grandmother','gardener','shepherd','storybook hero','samurai','gladiator','chieftain','pharaoh','scribe','knight','queen','sailor','trader','musician','chicken','banana','penguin','clown','grandpa','goblin','toaster','llama','alien tourist','potato'

  ]
  
  const verbs = [
    'contemplates', 'devours', 'unveils', 'summons', 'transcends', 'reveals', 'awakens', 'guards', 'creates', 'transforms',
    'discovers', 'weaves', 'channels', 'manifests', 'illuminates', 'conjures', 'sculpts', 'breathes', 'whispers', 'invokes',
    'echoes', 'dreams', 'forges', 'unravels', 'births', 'awakens', 'embraces', 'defies', 'preserves', 'shatters','dances','sings','flies','runs','jumps','sleeps','thinks','writes','paints','builds','explores','travels','listens','speaks','teaches','learns','grows','flows','shines','glows','sparkles','twinkles','glimmers','flickers','radiates','pulses','vibrates','resonates','harmonizes','synchronizes','orbits','revolves','spins','rotates','circles','swirls','whirls','spirals', 'zooms','blazes','flares','erupts','explodes','bursts','ignites','kindles','glows','shimmers','gleams','dazzles','glitters','sparkles','fractures', 'consumes', 'emerges', 'cascades', 'reflects', 'bleeds', 'fractals', 'distorts', 'anchors', 'implodes','exudes', 'collapses', 'ascends', 'descends', 'levitates', 'dissolves', 'blends', 'fractures', 'radiates', 'echoes','seeds', 'sprouts', 'withers', 'erases', 'carves', 'etches', 'paints', 'sketches', 'etches', 'fragments','unfolds', 'climbs', 'dives', 'drifts', 'wanders', 'collides', 'drips', 'melts', 'fractures', 'chants','screams', 'sighs', 'echoes', 'chants', 'mutters', 'remembers', 'forgets', 'fractures', 'burns', 'rusts','glitches', 'renders', 'spawns', 'shards', 'splinters','lurks','stalks','haunts','bleeds','corrupts','betrays','vanishes','hides','decays','consumes','bakes','sings','tends','hugs','skips','plays','paints','doodles','stitches','daydreams','hunts','chants','sails','offers','trades','records','builds','forges','conquers','narrates','slips','burps','juggles','tickles','spills','snaps selfies','argues','belches','explodes','triples'

  ]
  
  const objects = [
    'secrets', 'wisdom', 'the void', 'lost arts', 'infinite patterns', 'hidden truths', 'ancient codes', 'forgotten dreams', 'cosmic mysteries', 'timeless visions',
    'stellar harmonies', 'primal forces', 'sacred geometries', 'ethereal melodies', 'quantum whispers', 'mythic fragments', 'celestial maps', 'forbidden knowledge', 'primordial echoes', 'astral pathways',
    'temporal paradoxes', 'crystallized memories', 'dimensional rifts', 'universal constants', 'archetypal symbols', 'metaphysical truths', 'emergent realities', 'transcendent forms', 'infinite recursions', 'sublime emanations', 'aura patterns', 'energy flows', 'light beams', 'shadow plays', 'color fields', 'texture layers', 'shape shifts', 'form changes', 'space bends', 'time warps', 'sound waves', 'vibration pulses', 'frequency shifts', 'harmony chords', 'rhythm beats', 'melody lines', 'tune phrases', 'note sequences', 'lyric words', 'story arcs', 'plot twists', 'character roles', 'theme motifs','fresh bread','wildflowers','patchwork quilts','teacups','storybook pages','dandelion seeds','painted eggs','scrolls','totems','drums','masks','crowns','armor','ships','jewels','swords','flags','rubber ducks','balloons','marshmallows','toilet paper rolls','karaoke machines','waffles','party hats'
  ]
  
  const locations = [
    'on a mountain peak', 'beneath the stars', 'in a crystal cave', 'across frozen wastes', 'within ancient ruins', 'beyond the horizon', 'through time itself', 'at the edge of reality', 'in the space between', 'where worlds collide',
    'among forgotten temples', 'below shattered moons', 'within prismatic depths', 'across eternal deserts', 'through veils of mist', 'at the center of labyrinths', 'beneath aurora skies', 'within mirrored halls', 'across obsidian plains', 'through gates of perception',
    'among constellation gardens', 'beneath flowing time', 'within recursive dreams', 'across probability waves', 'through crystalline storms', 'at infinity\'s threshold', 'beneath borrowed suns', 'within folded dimensions', 'across silent epochs', 'through vanishing points', 'in a forest', 'by a lake', 'on a beach', 'in a city', 'at a market', 'in a desert', 'on a rooftop', 'in a garden', 'at a festival', 'in a library', 'at a concert', 'in a museum', 'on a bridge', 'in a cave', 'at a temple', 'on an island', 'in a valley', 'at a waterfall', 'in the jungle', 'on a farm', 'on a cake', 'in a spaceship', 'on the moon', 'on another planet','under shattered skies','in the ruins of tomorrow','inside a forgotten archive','within the digital ether','beneath molten skies','on the back of a leviathan','at the heart of a nebula','inside a glass cathedral','between waking and dreaming','within fractal cities','at the edge of the multiverse','beneath endless roots','inside a hollow star','among singing stones','atop endless staircases','in the ruins of empires','through neon streets','inside an abandoned factory','at a burning horizon','within the eye of a storm','beneath tidal waves','in a collapsing cathedral','inside a digital labyrinth','among frozen statues','inside a giant clockwork heart','under drifting lanterns','in a desert of glass','through broken mirrors','inside a living tree','beyond collapsing dimensions',
    'in a sunny meadow','beside a babbling brook','at a village fair','in a cozy cottage','beneath cherry blossoms','on a battlefield','in a royal court','at a sacred temple','by an ancient harbor','within desert sands','at a birthday party','inside a laundromat','in a circus tent','on a rollercoaster','at a pancake festival'

  ]

  const template = templates[Math.floor(Math.random() * templates.length)]
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
  const subj = subjects[Math.floor(Math.random() * subjects.length)]
  const verb = verbs[Math.floor(Math.random() * verbs.length)]
  const obj = objects[Math.floor(Math.random() * objects.length)]
  const loc = locations[Math.floor(Math.random() * locations.length)]
  
  return template(adj, subj, verb, obj, loc)
}

// Color theory helper functions
function getComplementary(hexColor) {
  const base = chroma(hexColor)
  const hue = base.get('hsl.h')
  return [
    base.hex(),
    base.set('hsl.h', (hue + 180) % 360).hex()
  ]
}

function getAnalogous(hexColor) {
  const base = chroma(hexColor)
  const hue = base.get('hsl.h')
  return [
    base.set('hsl.h', (hue - 30 + 360) % 360).hex(),
    base.hex(),
    base.set('hsl.h', (hue + 30) % 360).hex()
  ]
}

function getTriadic(hexColor) {
  const base = chroma(hexColor)
  const hue = base.get('hsl.h')
  return [
    base.hex(),
    base.set('hsl.h', (hue + 120) % 360).hex(),
    base.set('hsl.h', (hue + 240) % 360).hex()
  ]
}

function getTetradic(hexColor) {
  const base = chroma(hexColor)
  const hue = base.get('hsl.h')
  return [
    base.hex(),
    base.set('hsl.h', (hue + 90) % 360).hex(),
    base.set('hsl.h', (hue + 180) % 360).hex(),
    base.set('hsl.h', (hue + 270) % 360).hex()
  ]
}

function getMonochromatic(hexColor) {
  const base = chroma(hexColor)
  const hue = base.get('hsl.h')
  const sat = base.get('hsl.s')
  return [
    chroma.hsl(hue, sat, 0.2).hex(),
    chroma.hsl(hue, sat, 0.4).hex(),
    base.hex(),
    chroma.hsl(hue, sat, 0.7).hex(),
    chroma.hsl(hue, sat, 0.9).hex()
  ]
}

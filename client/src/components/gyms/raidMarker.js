import { Icon } from 'leaflet'
import Utility from '../../services/Utility.js'

export default function (settings, availableForms, gym, ts) {

  const iconSize = 30
  const iconAnchorY = iconSize * .849
  let popupAnchorY = -8 - iconAnchorY
  let offsetY = iconSize + 25

  let iconUrl
  if (gym.raid_battle_timestamp <= ts && gym.raid_end_timestamp >= ts && gym.raid_level > 0) {
    if (gym.raid_pokemon_id !== 0 && gym.raid_pokemon_id !== null) {
      iconUrl = `${settings.iconStyle.path}/${Utility.getPokemonIcon(availableForms, gym.raid_pokemon_id, gym.raid_pokemon_form, gym.raid_pokemon_evolution, gym.raid_pokemon_gender, gym.raid_pokemon_costume)}.png`
    } else {
      iconUrl = `/img/unknown_egg/${gym.raid_level}.png`
    }
  } else if (gym.raid_end_timestamp >= ts && gym.raid_level > 0) {
    iconUrl = `/img/egg/${gym.raid_level}.png`
  }

  return new Icon({
    iconUrl,
    iconSize,
    iconAnchor: [iconSize / 2, offsetY],
    popupAnchor: [0, popupAnchorY - 21.5]
  })
}
export const currentSong = (state) => {
  console.log('currentIndex', state.currentIndex)
  return state.playlist[state.currentIndex] || {}
}

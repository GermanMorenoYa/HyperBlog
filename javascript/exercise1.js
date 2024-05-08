//List of game I play
function ListGamesIPlay (title, station, type) {
    this.title = title
    this.station = station
    this.type = type
    this.isFavorite = false

    //Description
    this.displayDescription = function () {
        console.log(
        `The game's title is ${this.title}, this is a 
${this.type} king of game, you can play it in
game stations like ${this.station}${this.isFavorite ? ' and is my favorite.' : '.'} `)
    }
    this.isMyFavoriteGame = function () {
        this.isFavorite = true
    }
}

const fifa = new ListGamesIPlay ('FIFA', 'PC', 'Sports')
const grimDawn = new ListGamesIPlay ('Grim Dawn', 'PC', 'RPG')
const justDance = new ListGamesIPlay ('Just Dance', 'Xbox360', 'Kinnet')

fifa.displayDescription()
grimDawn.displayDescription()
justDance.displayDescription()

grimDawn.isMyFavoriteGame()

fifa.displayDescription()
grimDawn.displayDescription()
justDance.displayDescription()

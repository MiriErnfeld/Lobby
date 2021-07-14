//check if it is dev server or prod server
const isDev = window.location.href.includes('dev.')

module.exports = {
    LOGIN_URL: 'https://accounts.codes/lobby/login',
    LOBBY_URL: 'https://lobby.dev.leader.codes',
    DEALS_URL: 'https://contacts.leader.codes',
    HUB_URL: "https://reacthub.leader.codes",
    PAPERS_URL: "https://papers.leader.codes",
    CONTACT_URL: "https://api.leader.codes",
    BOX_URL: "https://box.leader.codes",
    CALANDER_URL: "https://calendar.leader.codes",
    VLOGER_URL: "https://vloger.codes",
    QOUTE_URL: "https://quote.leader.codes",
    // LOGIN_URL: isDev?'https://dev.accounts.codes/lobby/login':'https://accounts.codes/lobby/login',
    // API_URL_BASE_CLIENT: 'https://papers.dev.leader.codes/api/',
    // API_URL_FILES:'https://files.codes/api/',
    // API_URL_PAY:'https://pay.leader.codes',
    JWT: isDev ? 'devJwt' : 'jwt',
}
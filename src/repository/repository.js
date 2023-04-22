import Api from "../data/api";

export default class DataRepository
{
    getDeck()
    {
        Api.getDeck();
        const deck = JSON.parse(localStorage.getItem('deck'));
        deck.forEach(item => {
            switch (item.value)
            {
                case 'JACK':
                    item.value = 11;
                    break;
                case 'QUEEN':
                    item.value = 12;
                    break;
                case 'KING':
                    item.value = 13;
                    break;
                case 'ACE':
                    item.value = 14;
                    break;
            }
        })
        return deck;
    }
}
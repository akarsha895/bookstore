document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('book');

    const books = {
        1: {
            title: 'Percy Jackson & the Olympians: The Lightning Thief',
            author: 'Rick Riordan',
            price: '$19.99',
            description: "'Percy Jackson & the Olympians: The Lightning Thief' is a young adult fantasy-adventure novel and the first book in the 'Percy Jackson & the Olympians' series. The story follows Percy Jackson, a twelve-year-old boy who discovers he is a demigod, the son of Poseidon, the Greek god of the sea. Percy learns of his true identity and embarks on a quest to prevent a war among the Greek gods. Alongside his friends, Annabeth Chase (daughter of Athena) and Grover Underwood (a satyr), Percy must retrieve Zeus's stolen lightning bolt, clear his name, and uncover a treacherous plot that threatens the entire world. The novel blends Greek mythology with modern-day adventures, humor, and themes of friendship, loyalty, and self-discovery.",
            image: 'https://m.media-amazon.com/images/I/91RQ5d-eIqL._AC_UF1000,1000_QL80_.jpg'
        },
        2: {
            title: 'A Thousand Splendid Suns',
            author: 'AuKhaled Hosseini',
            price: '$24.99',
            description: "'A Thousand Splendid Suns' is a novel by Khaled Hosseini, published in 2007. The story is set in Afghanistan and spans over three decades of Afghan history, from the Soviet invasion to the rise of the Taliban and the post-Taliban rebuilding period. The novel focuses on the lives of two women, Mariam and Laila, whose lives become intertwined through marriage to the same man, Rasheed. Despite the hardships and abuse they face, Mariam and Laila form a deep bond and find solace and strength in their friendship. The novel explores themes of love, sacrifice, suffering, and the resilience of the human spirit. Hosseini's narrative provides a poignant and vivid portrayal of the struggles and endurance of Afghan women.",
            image: 'https://m.media-amazon.com/images/I/81110saWQvL._AC_UF1000,1000_QL80_.jpg'
        },
        3: {
            title: 'Six of Crows',
            author: 'Author 3',
            price: '$15.99',
            description: "'Six of Crows' is a fantasy heist novel by Leigh Bardugo, published in 2015. Set in the same universe as Bardugo's 'Grisha Trilogy', but in a different location and with a new set of characters, the story follows a diverse group of outcasts and criminals who undertake a dangerous mission to pull off an impossible heist. Led by the cunning and charismatic Kaz Brekker, the crew includes a sharpshooter named Jesper, a spy known as Inej, a Grisha Heartrender named Nina, a convict named Matthias, and a wealthy runaway named Wylan. Set in the bustling city of Ketterdam, inspired by Amsterdam, the novel explores themes of friendship, loyalty, redemption, and the complexity of morality. With its intricate plot, rich world-building, and compelling characters, 'Six of Crows' has captivated readers with its blend of action, suspense, and emotional depth.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlIO-JoJecYyg8O7DksU-BSwmfOBs6LJjPQ&s'
        }
    };

    const book = books[bookId];
    if (book) {
        document.getElementById('book-title').innerText = book.title;
        document.getElementById('book-author').innerText = 'Author: ' + book.author;
        document.getElementById('book-price').innerText = book.price;
        document.getElementById('book-description').innerText = book.description;
        document.getElementById('book-image').src = book.image;
    }
});
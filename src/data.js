import astralThumbnail from "./images/astral_thumbnail.jpg";
import sunsonThumbnail from "./images/sunson_thumbnail.jpg";

export const localWorkshops = [
    {               
        _id: 1,
        title: 'Default modal item',
        date: '11-12.04.2020 11:00-15:00',
        address: 'Dresdener Str. 24, 10445 Dresden',
        info: 'For professional dancers',
        price: {
            priceLabel1: 'Early bird until 04.04.2020: two days €',
            priceLabel2: '/ one day: €',
            priceLabel3: 'Normal price: two days €',
            priceLabel4: '/ one day: €',
            price1: 80,
            price2: 50,
            price3: 100,
            price4: 60
        }
    },
    {
        _id: 2,
        title: 'Flow Acrobatics Hamburg',
        date: '11-12.05.2020 11:00-15:00',
        address: 'Hamburger Str. 54, 10345 Hamburg',
        info: 'For acrobats',
        price: {
            priceLabel1: 'Early bird until 04.05.2020: two days €',
            priceLabel2: '/ one day: €',
            priceLabel3: 'Normal price: two days €',
            priceLabel4: '/ one day: €',
            price1: 80,
            price2: 50,
            price3: 100,
            price4: 60
        }
    }
]

export const localVideos = [
    {
        id: 1,
        videoUrl: 'https://player.vimeo.com/video/368775262',
        background: astralThumbnail,
        description: 'ASTRAL is set in a fictional world where humankind, through its behavior, has made survival on planet Earth impossible. Climate change has progressed so drastically that no human being can survive on Earth in 10 years. Scientists travel to Mars to build up a new society. How do they react to suddenly being pulled out of their normal living environment? Humanity is forced to question past patterns of behavior and create new concepts to secure the long-term future of society on a new planet. How does the individual deal with severe changes on a psychological level? ASTRAL is an attempt to display the process of dealing with changes with and within the body. Direction and choreography: Kenan Dinkelmann. Performers: Nitzan Moshe, Miriam Kaya, Joshua Smith, Max Makowski. Supported by Derida Dance Centre, Sofia, Bulgaria'
    },
    {
        id: 2,
        videoUrl: 'https://player.vimeo.com/video/336667772',
        background: sunsonThumbnail,
        description: 'SUNSON description. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab maxime animi porro doloribus quod assumenda recusandae, reprehenderit sit voluptatibus sequi repudiandae soluta voluptatem consequuntur doloremque nulla ad distinctio earum alias modi ullam repellat? Optio quae laudantium aperiam atque consequatur aut?'
    }
]

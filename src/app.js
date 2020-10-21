const projects = [
    {
        title:'Down 2 Ride',
        image:'images/music/dwn-2-ride.png',
        type:'Single',
        link:'https://soundcloud.com/carrml_drop/down-2-ride'
    },
    {
        title: 'Quarantine Ting',
        image: 'images/music/quarantine-ting.png',
        type: 'Single',
        link: 'https://soundcloud.com/carrml_drop/quarantine-ting'
    },
    {
        title: 'CD2: Revenge of the Drop',
        image: 'images/music/cd2.png',
        type: 'Album',
        link: 'https://soundcloud.com/carrml_drop/sets/cd2-revenge-of-the-drop'
    },
    {
        title: 'Montreal Pppl Wear Ferragamo Belts',
        image: 'images/music/montreal-ppl.png',
        type: 'EP',
        link: 'https://soundcloud.com/carrml_drop/sets/montreal-niggas-wear-ferragamo-belts'
    },
    {
        title: 'Ferragamo Belts',
        image: 'images/music/ferragamo.png',
        type: 'Single',
        link: 'https://soundcloud.com/carrml_drop/ferragamo-belts?in=carrml_drop/sets/montreal-niggas-wear-ferragamo-belts'
    },
    {
        title: "I'm a Dub",
        image: 'images/music/im-a-dub.png',
        type: 'Single',
        link: 'https://soundcloud.com/carrml_drop/im-a-dub?in=carrml_drop/sets/montreal-niggas-wear-ferragamo-belts'
    },
    {
        title: 'My My My',
        image: 'images/music/my-my-my.png',
        type: 'Single',
        link: 'https://soundcloud.com/carrml_drop/my-my-my?in=carrml_drop/sets/montreal-niggas-wear-ferragamo-belts'
    },
    {
        title: 'Caramel Drop',
        image: 'images/music/cd.png',
        type: 'Album',
        link: 'https://soundcloud.com/carrml_drop/sets/caramel-drop'
    },
]

const videos = [
    {
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/i0NxpGvzD2g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7a92b3wpavQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/uqi3ZEXQOBU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/K5gC4SN8qrE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4W5W0_e8fs8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/aElayKwXw8E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oFBgF2-BzOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
]


new Vue({
    el: '#cd-music-content',
    data: {
        projects: projects,
    },
    methods: { 
        swapSpot: function(e){
            const oldFeat = this.projects[0]
            const newFeat = e
            const location = this.projects.indexOf(e);
            
            this.projects.splice(location, 1, oldFeat);
            this.projects.splice(0, 1, newFeat);

            /* document.querySelector('.cd-feat-music').scrollIntoView({ behavior: "smooth"}) */
            return this.projects
        }
    },
    computed: {
        featList: function () {
            return this.projects
        }
    }
})

var vm = new Vue({
    el: '#cd-video-content',
    data: {
        videos: videos,
        //position: pos
    },
    methods: {
        moveSlide: function (num) {
            let length = carousel.scrollWidth - carousel.clientWidth;
            let position = slides.length - 2;
            if (carousel.scrollLeft === length) {
                carousel.scrollTo(slides[position].offsetLeft, 0)
            } else {
                let leftValue = slides[0].clientWidth * num

                //Jquery scroll used for crossed browsers (safari)
                $(carousel).animate({
                    scrollLeft: `+=${leftValue}`
                }, 300, "swing"
                );

                //Vanilla JS scroll
                /* carousel.scrollLeft += slides[0].clientWidth * num */
            };
        }
    },
})

const slides = document.querySelectorAll('ul li');
const carousel = document.querySelector('ul')

carousel.addEventListener("scroll", showArrows);

function showArrows() {
    if (carousel.scrollLeft === 0) {
        document.querySelector('.arrow-l').style.display = 'none'
    } else {
        document.querySelector('.arrow-l').style.display = 'block'
    }
    if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth) {
        document.querySelector('.arrow-r').style.display = 'none'
    } else {
        document.querySelector('.arrow-r').style.display = 'block'
    }
    
}



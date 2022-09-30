import archer1 from './img/archer1.jpg';
import dancer1 from './img/dancer1.jpg';
import jack1 from './img/jack1.jpg';
import jack2 from './img/jack2.jpg';
import jack3 from './img/jack3.jpg';
import jack4 from './img/jack4.jpg';
import archer2 from './img/archer2.jpg';
import dancer2 from './img/dancer2.jpg';
import archer3 from './img/archer3.jpg';
import dancer3 from './img/dancer3.jpg';
import archer4 from './img/archer4.jpg';
import dancer4 from './img/dancer4.jpg';

export const MovieState = () =>{
    return [
        {
            title: "Pigeon Eye",
            mainImg: archer1,
            secondaryImg: [archer2, archer3, archer4],
            url: "/work/pigeon-eye",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, autem odio non minima" + 
            " mollitia inventore ut doloremque consequuntur est repellendus? Lorem ipsum dolor sit amet" +
            " consectetur adipisicing elit. Consequuntur dolorem ut corporis fuga. Unde accusantium asperiores" + 
            " molestias quod similique ea odit exercitationem, nam, numquam sunt maxime rem, corporis provident" + 
            " officiis?",
            awards: [
                {
                    title: "Spectacular CGI",
                    description: 
                    "a"
                },
                {
                    title: "Beautiful Designs",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam. Lorem ipsum dolor sit, amet" + 
                    "consectetur adipisicing elit. Consectetur, aliquid. Optio laudantium nobis aperiam! Quasi."
                },
                {
                    title: "Teens Choice award",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam. Lorem ipsum dolor sit amet."
                }
            ]
        },
        {
            title: "Street Ballet",
            mainImg: dancer1,
            secondaryImg: [dancer2, dancer3, dancer4],
            url: "/work/street-ballet",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, autem odio non minima" + 
            " mollitia inventore ut doloremque consequuntur est repellendus? Lorem ipsum dolor sit amet" +
            " consectetur adipisicing elit. Consequuntur dolorem ut corporis fuga. Unde accusantium asperiores" + 
            " molestias quod similique ea odit exercitationem, nam, numquam sunt maxime rem, corporis provident" + 
            " officiis?",
            awards: [
                {
                    title: "Beautiful Choreography",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam. Lorem ipsum dolor sit amet" + 
                    "consectetur adipisicing elit. Culpa voluptatem amet error aliquam aut inventore obcaecati sapiente," + 
                    " quod maxime dolorem."
                },
                {
                    title: "Mastermind Plot",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam." + 
                    " quod maxime dolorem."
                },
                {
                    title: "Great Character Development",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam."
                }
            ]
        },
        {
            title: "Jacky Spearow",
            mainImg: jack1,
            secondaryImg: [jack2, jack3, jack4],
            url: "/work/jacky-spearow",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, autem odio non minima" + 
            " mollitia inventore ut doloremque consequuntur est repellendus? Lorem ipsum dolor sit amet" +
            " consectetur adipisicing elit. Consequuntur dolorem ut corporis fuga. Unde accusantium asperiores" + 
            " molestias quod similique ea odit exercitationem, nam, numquam sunt maxime rem, corporis provident" + 
            " officiis?",
            awards: [
                {
                    title: "Stunning Performance",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam. Lorem ipsum dolor sit, amet" + 
                    " consectetur adipisicing elit. Repellat, quisquam vitae."
                },
                {
                    title: "Movie Of The Year",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam." + 
                    " quod maxime dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, rerum?"
                },
                {
                    title: "Blockbuster Phenomenon",
                    description: 
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam." + 
                    " quod maxime dolorem.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit!"
                }
            ]
        }
    ]
}
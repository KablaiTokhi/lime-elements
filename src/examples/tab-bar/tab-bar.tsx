import { Component, h } from '@stencil/core';
import { Tab } from '../../components/tab-bar/tab.types';

const tabs: Array<Tab> = [
    {
        name: 'Joker',
        icon: 'joker',
        selected: true,
        content: 'Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character. ',
        iconColor: 'var(--lime-green)',
    },
    {
        name: 'Parasite',
        icon: 'insect',
        content: 'Parasite (Korean: 기생충; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, and Jang Hye-jin and follows the members of a poor family who scheme to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.',
        iconColor: 'var(--lime-magenta)',
    },
    {
        name: 'Harriet',
        icon: 'administrator_female',
        content: 'Harriet is a 2019 American biographical film about abolitionist Harriet Tubman. Directed by Kasi Lemmons, who wrote the screenplay with Gregory Allen Howard, it stars Cynthia Erivo as Tubman, with Leslie Odom Jr., Joe Alwyn, and Janelle Monáe in supporting roles.',
        iconColor: 'var(--lime-orange)',
    },
    {
        name: 'Bombshell',
        icon: 'surprised',
        content: 'Bombshell is a 2019 American biographical drama film directed by Jay Roach and written by Charles Randolph. The film stars Charlize Theron, Nicole Kidman, and Margot Robbie, and is based upon the accounts of the women at Fox News who set out to expose CEO Roger Ailes for sexual harassment. ',
        iconColor: 'var(--lime-blue)',
    },
    {
        name: 'Judy',
        icon: 'female',
        content: 'Judy is a 2019 biographical drama film about American singer and actress Judy Garland. Directed by Rupert Goold, it is an adaptation of the Olivier- and Tony-nominated West End and Broadway play End of the Rainbow by Peter Quilter.',
        iconColor: 'var(--lime-deep-red)',
    },
    {
        name: 'Jojo Rabbit',
        icon: 'rabbit',
        content: 'Jojo Rabbit is a 2019 American comedy-drama film[3][8] written and directed by Taika Waititi, based on Christine Leunens\'s book Caging Skies.[9][10][11] Roman Griffin Davis portrays the title character, Johannes "Jojo" Betzler, a Hitler Youth member who finds out his mother (Scarlett Johansson) is hiding a Jewish girl (Thomasin McKenzie) in their attic. He must then question his beliefs, while dealing with the intervention of his imaginary friend, a fanciful version of Adolf Hitler (Waititi).',
        iconColor: 'var(--lime-yellow)',
    },
    {
        name: 'Little Women',
        icon: 'female',
        content: 'Little Women is a 2019 American coming-of-age period drama film written and directed by Greta Gerwig. It is the seventh film adaptation of the 1868 novel of the same name by Louisa May Alcott.',
        iconColor: 'var(--lime-deep-red)',
    },
]
@Component({
    tag: 'limel-example-tab-bar',
    shadow: true,
})
export class TabBarExample {

    public render() {
        return (
            <limel-tab-bar 
                tabs={tabs}
            >
            </limel-tab-bar>
        );
    }

}

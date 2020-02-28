import { Component, h, State } from '@stencil/core';
import { Tab } from '../../components/tab-bar/tab.types';
// import { Tab } from 'src/components/tab/tab.types';

const tabs: Array<Tab> = [
    {
        name: 'Beer',
        icon: 'beer',
        selected: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus nunc, vestibulum id quam quis, efficitur blandit lacus. Cras ut posuere ligula. Nam condimentum quam ac quam sagittis, quis interdum massa interdum. Sed eu enim id magna vestibulum molestie. Sed vitae odio posuere, porttitor est id, convallis nulla. Aenean ac augue consequat, gravida libero sed, blandit tortor. Suspendisse commodo arcu risus, in fermentum erat accumsan quis.'
    },

    {
        name: 'Tea',
        icon: 'tea',
        content: 'Ut a commodo justo, varius faucibus lorem. Vivamus aliquam arcu non pharetra feugiat. Sed at pretium lacus. Donec convallis venenatis blandit. Etiam sit amet congue nunc, eu congue est. Aliquam luctus tincidunt facilisis. Sed vel risus ut tortor pretium dignissim et vitae ligula. Cras nunc risus, mollis quis tellus sit amet, cursus imperdiet risus. Sed eget enim eu erat malesuada ultrices. Nam ut dui vitae velit elementum hendrerit. Mauris elementum neque quis feugiat pulvinar. Donec pretium arcu vitae elit lobortis vehicula.'
    },
    {
        name: 'Beer',
        icon: 'beer',
        selected: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus nunc, vestibulum id quam quis, efficitur blandit lacus. Cras ut posuere ligula. Nam condimentum quam ac quam sagittis, quis interdum massa interdum. Sed eu enim id magna vestibulum molestie. Sed vitae odio posuere, porttitor est id, convallis nulla. Aenean ac augue consequat, gravida libero sed, blandit tortor. Suspendisse commodo arcu risus, in fermentum erat accumsan quis.'
    },

    {
        name: 'Tea',
        icon: 'tea',
        content: 'Ut a commodo justo, varius faucibus lorem. Vivamus aliquam arcu non pharetra feugiat. Sed at pretium lacus. Donec convallis venenatis blandit. Etiam sit amet congue nunc, eu congue est. Aliquam luctus tincidunt facilisis. Sed vel risus ut tortor pretium dignissim et vitae ligula. Cras nunc risus, mollis quis tellus sit amet, cursus imperdiet risus. Sed eget enim eu erat malesuada ultrices. Nam ut dui vitae velit elementum hendrerit. Mauris elementum neque quis feugiat pulvinar. Donec pretium arcu vitae elit lobortis vehicula.'
    },
    {
        name: 'Beer',
        icon: 'beer',
        selected: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus nunc, vestibulum id quam quis, efficitur blandit lacus. Cras ut posuere ligula. Nam condimentum quam ac quam sagittis, quis interdum massa interdum. Sed eu enim id magna vestibulum molestie. Sed vitae odio posuere, porttitor est id, convallis nulla. Aenean ac augue consequat, gravida libero sed, blandit tortor. Suspendisse commodo arcu risus, in fermentum erat accumsan quis.'
    },

    {
        name: 'Tea',
        icon: 'tea',
        content: 'Ut a commodo justo, varius faucibus lorem. Vivamus aliquam arcu non pharetra feugiat. Sed at pretium lacus. Donec convallis venenatis blandit. Etiam sit amet congue nunc, eu congue est. Aliquam luctus tincidunt facilisis. Sed vel risus ut tortor pretium dignissim et vitae ligula. Cras nunc risus, mollis quis tellus sit amet, cursus imperdiet risus. Sed eget enim eu erat malesuada ultrices. Nam ut dui vitae velit elementum hendrerit. Mauris elementum neque quis feugiat pulvinar. Donec pretium arcu vitae elit lobortis vehicula.'
    },
    {
        name: 'Beer',
        icon: 'beer',
        selected: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus nunc, vestibulum id quam quis, efficitur blandit lacus. Cras ut posuere ligula. Nam condimentum quam ac quam sagittis, quis interdum massa interdum. Sed eu enim id magna vestibulum molestie. Sed vitae odio posuere, porttitor est id, convallis nulla. Aenean ac augue consequat, gravida libero sed, blandit tortor. Suspendisse commodo arcu risus, in fermentum erat accumsan quis.'
    },

    {
        name: 'Tea',
        icon: 'tea',
        content: 'Ut a commodo justo, varius faucibus lorem. Vivamus aliquam arcu non pharetra feugiat. Sed at pretium lacus. Donec convallis venenatis blandit. Etiam sit amet congue nunc, eu congue est. Aliquam luctus tincidunt facilisis. Sed vel risus ut tortor pretium dignissim et vitae ligula. Cras nunc risus, mollis quis tellus sit amet, cursus imperdiet risus. Sed eget enim eu erat malesuada ultrices. Nam ut dui vitae velit elementum hendrerit. Mauris elementum neque quis feugiat pulvinar. Donec pretium arcu vitae elit lobortis vehicula.'
    }
    
]
@Component({
    tag: 'limel-example-tab-bar',
    shadow: true,
})
export class TabBarExample {
    constructor() {
        this.tabOnChange = this.tabOnChange.bind(this);
    }

    public render() {
        return (
            <limel-tab-bar 
                tabs={tabs}
                onChange={this.tabOnChange}
            />
        );
    }

    private tabOnChange(event) {
        console.log('EVENT', event.detail);
    }

}

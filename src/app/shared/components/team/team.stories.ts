import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { TeamComponent } from './team.component';

export default {
  title: 'app/Team',
  component: TeamComponent,
  decorators: [
    moduleMetadata({
      declarations: [TeamComponent],
      imports: [
        CommonModule,
        MatCardModule
      ],
    }),
  ]
} as Meta

const Template: Story<TeamComponent> = (args: TeamComponent) => ({
  props:args,
});

export const Default = Template.bind({});
Default.args = {
  showContent: false,
  teamVenue : {
    team: {
      id: 1,
      name: 'Corinthians',
      country: 'Brasil',
      founded: 1960,
      national: false,
      logo: 'https://media.api-sports.io/football/teams/131.png'
    },
    venue: {
      id: 1,
      name: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111, Vila Carmosina, Itaquera',
      city: 'São Paulo, São Paulo',
      capacity: 49205,
      surface: 'string',
      image:'https://media.api-sports.io/football/venues/11531.png'
    }
  }
};
export const NoContent = Template.bind({});
NoContent.args = {}

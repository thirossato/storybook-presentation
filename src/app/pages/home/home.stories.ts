import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamModule } from 'src/app/shared/components/team/team.module';
import { TeamService } from 'src/app/shared/services/team.service';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs';
import { Default as TeamDefaultStory } from '../../shared/components/team/team.stories'

export default {
  title: 'App/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      declarations: [HomeComponent],
      imports: [
        CommonModule,
        MatCardModule,
        TeamModule,        
        RouterTestingModule
      ],
      providers: [
        {
          provide: TeamService, useValue: {
            listTeams: () => {
              return of();
            }
          }
        }
      ]
    }),
  ],
} as Meta;

export const Default: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});

export const OneItem: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});
OneItem.args = {
  teamVenues: [TeamDefaultStory.args.teamVenue]
}

export const FewItems: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});
FewItems.args = {
  teamVenues: [TeamDefaultStory.args.teamVenue,TeamDefaultStory.args.teamVenue,TeamDefaultStory.args.teamVenue,TeamDefaultStory.args.teamVenue]
}

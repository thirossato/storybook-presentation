import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { moduleMetadata, Story } from "@storybook/angular";
import { TeamStandingsComponent } from "./team-standings.component";

export default {
    title: 'app/TeamStandings',
    component: TeamStandingsComponent,
    decorators: [
        moduleMetadata({
            declarations: [TeamStandingsComponent],
            imports: [
                CommonModule,
                MatCardModule,
                MatIconModule
            ]
        })
    ]
}

const Template: Story<TeamStandingsComponent> = (args: TeamStandingsComponent) => ({
    props: args
})

export const Simple = Template.bind({});
Simple.args = {
    teamStandings: {
        rank: 1,
        points: 150,
        goalsDiff: 100,
        form: 'LDWWWR',
        all: {
            played: 50,
            win: 30,
            lose: 1,
            draw: 19,
            goals: {
                for: 150,
                against: 50
            }
        }
    }
}

export const Broken = Template.bind({});

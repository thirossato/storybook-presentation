import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { moduleMetadata, Story } from "@storybook/angular";
import { TeamRosterComponent } from "./team-roster.component";

export default {
    title: 'app/TeamRoster',
    component: TeamRosterComponent,
    decorators: [
        moduleMetadata({
            declarations: [TeamRosterComponent],
            imports: [
                CommonModule,
                MatCardModule,
                MatIconModule
            ]
        })
    ]
}

const Template: Story<TeamRosterComponent> = (args: TeamRosterComponent) => ({
    props: args
});

export const Simple = Template.bind({});
Simple.args = {
    player: {
        player: {
            id: 1,
            name: 'Allejo',
            firstname: 'Allejo',
            lastname: 'da Silva',
            age: 7,
            nationality: 'Brasil',
            height: '10px',
            weight: '5kb',
            injured: false,
            photo: 'https://img.ibxk.com.br/2014/7/programas/119693675.png'
        }
    }
}

export const Injured = Template.bind({});
Injured.args = {
    player: {
        player: {
            id: 1,
            name: 'Allejo',
            firstname: 'Allejo',
            lastname: 'da Silva',
            age: 7,
            nationality: 'Brasil',
            height: '10px',
            weight: '5kb',
            injured: true,
            photo: 'https://img.ibxk.com.br/2014/7/programas/119693675.png'
        }
    }
}
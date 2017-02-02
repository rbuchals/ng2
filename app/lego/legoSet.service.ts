import { LegoSet, Status } from './LegoSet';
import { Injectable } from '@angular/core';

const legoSets: LegoSet[] = [
    {
        id: 0,
        version: 0,
        externalId: '123',
        name: 'name1',
        status: Status[Status.New],
        comment: 'comment1',
    },
    {
        id: 1,
        version: 0,
        externalId: '456',
        name: 'name2',
        status: Status[Status.Used],
        comment: 'comment2',
    },
    {
        id: 2,
        version: 0,
        externalId: '789',
        name: 'name3',
        status: Status[Status.New],
        comment: 'comment3',
    },
    {
        id: 3,
        version: 0,
        externalId: 'abc',
        name: 'name4',
        status: Status[Status.Used],
        comment: 'comment4',
    },
    {
        id: 4,
        version: 0,
        externalId: 'efg',
        name: 'name4',
        status: Status[Status.Used],
        comment: 'comment4',
    },
    {
        id: 5,
        version: 0,
        externalId: 'xyz',
        name: 'name5',
        status: Status[Status.New],
        comment: 'comment5',
    }
];

@Injectable()
export class LegoSetService {

    private generateId(): number {
        if (legoSets.length === 0) {
            return 0;
        }
        let highestId: number = legoSets[legoSets.length - 1].id;
        return highestId + 1;
    }

    getLegoSets(): LegoSet[] {
        return legoSets;
    }

    getTop3Sets(): LegoSet[] {
        return legoSets.slice(0, 3);
    }

    findOne(id: number): LegoSet {
        return legoSets.find((item: LegoSet) => {
            if (item.id === id) {
                return item;
            }
        });
    }

    add(legoSet: LegoSet) {
        legoSet.id = this.generateId();
        legoSets.push(legoSet);
    }

    delete(index: number): void {
        legoSets.splice(index, 1);
    }
}
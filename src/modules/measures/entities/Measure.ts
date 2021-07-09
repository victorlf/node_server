import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('measures')
class Measure {
    @PrimaryColumn()
    id?: string;

    @Column()
    sensor: string;

    @Column()
    temperature: number;

    @Column()
    pressure: number;

    @Column()
    humidity: number;

    @Column()
    battery: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Measure };

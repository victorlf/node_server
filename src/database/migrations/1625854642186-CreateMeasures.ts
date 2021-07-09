import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMeasures1625854642186 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'measures',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'sensor',
                        type: 'varchar',
                    },
                    {
                        name: 'temperature',
                        type: 'float',
                    },
                    {
                        name: 'pressure',
                        type: 'float',
                    },
                    {
                        name: 'humidity',
                        type: 'float',
                    },
                    {
                        name: 'battery',
                        type: 'float',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('measures');
    }
}

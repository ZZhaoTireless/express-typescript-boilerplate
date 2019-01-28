import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddUserRelationToTaskTable1544815615193 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_user_task',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('task', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('task', this.tableForeignKey);
    }

}

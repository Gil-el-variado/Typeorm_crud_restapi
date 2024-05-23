import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity ()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    ap_paterno: string
    @Column()
    ap_materno: string
    @Column({
    default: true})
    activo: boolean
    @Column()
    fechaCreado: Date


    @Column()
    fechaActualizado: Date


}
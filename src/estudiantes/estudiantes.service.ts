import { Injectable } from '@nestjs/common';
import { Estudiante } from './models/Estudiantes';
import { CreateEstudianteDto } from './dto/CreateEstudiantesDto..dto';

@Injectable()
export class EstudiantesService {

    private Estudiantes : Estudiante[] = [];
    private idCounter : number = 1;

    createNew(es:CreateEstudianteDto):Estudiante{
        const newEst:Estudiante = {
            id : this.idCounter,
            nombre : es.nombre,
            edad : es.edad,
            carrera : es.carrera,
            correo : es.correo
        }
        this.Estudiantes.push(newEst);
        this.idCounter +=1;
        return newEst;
    }

    getAll():Estudiante[]{
        return this.Estudiantes;
    }

    getOne(id:number):Estudiante{
        return this.Estudiantes.find((Estudiante) => id==Estudiante.id)!;
    }

    modify(id:number, est:CreateEstudianteDto):Estudiante{
        const mEst:Estudiante = this.getOne(id);
        if(mEst){
            mEst.nombre = est.nombre;
            mEst.edad = est.edad;
            mEst.carrera = est.carrera;
            mEst.correo = est.correo;
        }
        return mEst;
    }

    deleteEst(id:number):void{
        this.Estudiantes = this.Estudiantes.filter((Estudiante) => Estudiante.id==id);
    }

}

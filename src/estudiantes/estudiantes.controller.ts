import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/CreateEstudiantesDto..dto';
import { Estudiante } from './models/Estudiantes';

@Controller('estudiantes')
export class EstudiantesController {

    constructor(private EstudianteService:EstudiantesService){

    }

    @Post()
    createNew(@Body() est:CreateEstudianteDto):Estudiante{
        return this.EstudianteService.createNew(est);
    }

    @Get()
    getAll():Estudiante[]{
        return this.EstudianteService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number):Estudiante{
        return this.EstudianteService.getOne(id);
    }

    @Put(':id')
    modify(@Param('id') id:number, @Body() est:CreateEstudianteDto):Estudiante{
        return this.EstudianteService.modify(id, est);
    }

    @Delete(':id')
    deleteEst(@Param('id') id:number):void{
        return this.EstudianteService.deleteEst(id);
    }

}

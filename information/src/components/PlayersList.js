import React from 'react';
import {
    TableContainer, 
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';



const PlayersList = ({laliga}) => {
    return (
        
         <div className="table">
        <TableContainer>
         <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">NOMBRE</TableCell>
                    <TableCell align="center">EQUIPO</TableCell>
                    <TableCell align="center">POSICION</TableCell>
                    <TableCell align="center">EDAD</TableCell>
                    <TableCell align="center">NACIONALIDAD</TableCell>
                    <TableCell align="center">VALOR (En MM de €) </TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {laliga.map(liga => (
                    <TableRow key={liga.id}>
                        <TableCell align="center">{liga.id}</TableCell>
                        <TableCell align="center">{liga.nombre}</TableCell>
                        <TableCell align="center">{liga.equipo}</TableCell>
                        <TableCell align="center">{liga.posicion}</TableCell>
                        <TableCell align="center">{liga.edad}</TableCell>
                        <TableCell align="center">{liga.nacionalidad}</TableCell>
                        <TableCell align="center">{liga.valor}</TableCell>
                    
                </TableRow>
                ))}
                
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}
export default PlayersList;
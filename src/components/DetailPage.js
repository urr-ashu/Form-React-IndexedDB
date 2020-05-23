import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {readAll, read, add} from '../indexedDB';
export default function DetailPage(props){

const [data, setData] = React.useState(
{ roll: localStorage.getItem("roll"), fname: localStorage.getItem("fname"),
  lname: localStorage.getItem("lname"), mno: localStorage.getItem("mno"), city: localStorage.getItem("city")	
});


	return(
			<div>
				<TableContainer>
			      <Table>
			        <TableHead>
			          <TableRow>
			            <TableCell>Name</TableCell>
			            <TableCell>Last Name</TableCell>
			            <TableCell>Roll Number</TableCell>
			            <TableCell>Mobile Numbert</TableCell>
			            <TableCell>City</TableCell>
			          </TableRow>
			        </TableHead>
			       <TableBody>			          
			            <TableRow >				            
			              <TableCell>{data.fname}</TableCell>
			              <TableCell>{data.lname}</TableCell>
			              <TableCell>{data.roll}</TableCell>
			              <TableCell>{data.mno}</TableCell>
			              <TableCell>{data.city}</TableCell>
			            </TableRow>
			        </TableBody>
			      </Table>
			    </TableContainer>
			</div>
		);
}
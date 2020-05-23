import React from 'react';
import {Typography, Button} from '@material-ui/core'; 
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Link } from "react-router-dom"; 
import {readAll, read, add} from '../indexedDB';
import '../App.css';
var arr;     
export default function MyForm(props){
 	

	const [tableRender, updateTableRender] = React.useState(false);

	const [formData, updateFormData] = React.useState([
		
		{fname : "", lname : "", roll : "", mno:"", city:""}
	]);

	function my(){
        	arr = readAll(updateTableRender, tableRender);
        }

	function handleInputChange(event){
		console.log(arr);
		const {name, value} = event.target;
		updateFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
	}

	function handleSubmit(event){
		event.preventDefault();
		if(formData.roll === undefined){
			alert("Please Enter a valid Roll Number");
		}
		else
       	add(formData);	
	}

	     
        function handleTableRowClick(roll){
        	read(roll);
        }
        
        

	return(		
			<div>
			<div className="App">
			<form>
			  <label>First name:</label><br/>
			  <input onChange={handleInputChange} type="text" name="fname"/><br/>

			  <label>Last name:</label><br/>
			  <input onChange={handleInputChange} type="text" name="lname"/><br/>

			  <label>Roll Number:</label><br/>
			  <input onChange={handleInputChange} type="text" name="roll"/><br/>

			  <label>Mobile Number:</label><br/>
			  <input onChange={handleInputChange} type="text" name="mno"/><br/>

			  <label>City:</label><br/>
			  <input onChange={handleInputChange} type="text" name="city"/><br/><br/>

			  <input style={{color: "orange"}} onClick={handleSubmit} type="submit" value="Submit"/>
			</form> 
			 </div>
			<br/>
			<Button onClick={my} color="secondary" variant="outlined">
				{tableRender ? "Hide Data" : "See data"}
			</Button>
			{
				(tableRender === true) &&
				<div>
				<TableContainer>
			      <Table>
			        <TableHead>
			          <TableRow>
			            <TableCell>Name</TableCell>
			            <TableCell>Roll Number</TableCell>
			          </TableRow>
			        </TableHead>
			       <TableBody>
			          {arr.map((row) => (
			            <TableRow key={row.roll}>				            
			              <TableCell onClick={()=> handleTableRowClick(row.roll)} >
			              <a href={"/details/"+row.roll} style={{color:"red", textDecoration : "none"}}>{row.fname}</a></TableCell>
			              <TableCell>{row.roll}</TableCell>
			            </TableRow>
			          ))}
			        </TableBody>
			      </Table>
			    </TableContainer>
			    </div>
			}
			</div>
		);
}
import axios from "axios";
import { useEffect, useState } from "react";

function AllStudents() {
	const [allStudent, setAllStudent] = useState(null);

	useEffect(async () => {
		const API_URL = process.env.REACT_APP_BASE_URL;
		try {
			const response = await axios.get(`${API_URL}/students`);
			const students = response.data;
			if (!students) {
				alert("Xablau! Não há estudantes cadastrados para o sorteio!");
			} else {
				setAllStudent(students);
			}
		} catch (error) {
			alert("Não foi possível realizar o sorteio!");
		}
	}, []);

	return allStudent
		? allStudent.map((elem, index) => (
				<div key={index}>
					<h1>{elem.name}</h1>
				</div>
		  ))
		: "Carregando...";
}

export default AllStudents;
